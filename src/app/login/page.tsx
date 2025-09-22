'use client';

import logaUsuario from '@/actions/login';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { H1 } from '@/components/ui/h1';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import { iApiResponse } from '@/interface/iApiResponse';
import { zodResolver } from '@hookform/resolvers/zod';
import { Variants } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import z from 'zod';
import { motion } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const schema = z.object({
  email: z.string(),
  senha: z.string(),
  remember: z.boolean(),
});

type userSchama = z.infer<typeof schema>;

const Login = () => {
  const [res, setRes] = useState<iApiResponse | null>(null);

  const router = useRouter();
  const auth = useAuth();

  const { register, handleSubmit, control } = useForm<userSchama>({
    resolver: zodResolver(schema),
    defaultValues: {
      remember: false,
    },
  });

  const handleLoginUser = async (form: userSchama) => {
    const data = {
      identifier: form.email as string,
      password: form.senha as string,
    };
    const res = await logaUsuario(data);
    setRes(res);
    if (res.status === 'success') {
      if (res.data) {
        auth.login(res.data, form.remember);
      }
      router.push('/');
    }
  };

  return (
    <motion.section
      variants={fadeUp}
      initial='hidden'
      animate='show'
      className='min-h-container mx-auto max-w-7xl p-6 md:p-12 flex items-center justify-center gap-3 flex-col'
    >
      <form
        className='w-full max-w-lg'
        onSubmit={handleSubmit(handleLoginUser)}
      >
        <Card className='shadow-lg border-border/50 rounded-none py-8'>
          <CardHeader className='text-center gap-4'>
            <CardDescription className='mx-auto'>
              <span className='block w-10 h-10 rounded-full bg-foreground' />
            </CardDescription>
            <CardTitle>
              <H1>Bem-vindo de volta</H1>
            </CardTitle>
          </CardHeader>
          <CardContent className='px-8 space-y-1.5'>
            <div className='grid gap-5'>
              <div className='grid w-full items-center gap-2'>
                <Label className='text-muted-foreground' htmlFor='email'>
                  Email
                </Label>
                <Input
                  required
                  className='shadow-none'
                  placeholder='email'
                  id='email'
                  type='email'
                  {...register('email')}
                />
              </div>
              <div className='grid w-full items-center gap-2'>
                <Label className='text-muted-foreground' htmlFor='senha'>
                  Senha
                </Label>
                <Input
                  required
                  className='shadow-none'
                  placeholder='senha'
                  id='senha'
                  {...register('senha')}
                />
              </div>
              <div className='flex items-center gap-1.5'>
                <Controller
                  name='remember'
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      className='shadow-none'
                      id='remember'
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label
                  className='text-muted-foreground text-sm'
                  htmlFor='remember'
                >
                  Manter-me conectado
                </Label>
              </div>
            </div>
            {res?.status === 'error' && (
              <p className='text-sm text-red-500'>
                {res?.errorMessage?.message}
              </p>
            )}
          </CardContent>
          <CardFooter className='px-8 grid gap-4'>
            <Button className='w-full' type='submit'>
              Logar
            </Button>
            <Link
              href={'#'}
              className='text-muted-foreground underline hover:text-primary mx-auto text-sm'
            >
              Esqueceu a senha?
            </Link>
            <p className='mx-auto text-muted-foreground text-sm'>
              {' '}
              Não possue uma conta?{' '}
              <Link href={'/register'} className='hover:text-primary underline'>
                Cadastre-se
              </Link>
            </p>
          </CardFooter>
        </Card>
      </form>
    </motion.section>
  );
};

export default Login;
