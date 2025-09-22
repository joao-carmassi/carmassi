'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { H1 } from '@/components/ui/h1';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { iApiResponse } from '@/interface/iApiResponse';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import registraUsuario from '@/actions/registro';
import { motion, Variants } from 'framer-motion';

const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Nome de usuario deve ter pelo menos 3 caracteres' })
    .max(20, { message: 'Nome de usuario deve ter no máximo 20 caracteres' })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: 'Nome de usuario só pode ter letras, números e _',
    }),
  email: z.string().email({ message: 'Email inválido' }),
  password: z
    .string()
    .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

type userSchema = z.infer<typeof schema>;

const Register = () => {
  const [res, setRes] = useState<iApiResponse | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userSchema>({
    resolver: zodResolver(schema),
  });

  const handleRegisterUser = async (data: userSchema) => {
    const res = await registraUsuario(data);
    setRes(res);
    if (res.status === 'success') router.push('/login');
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
        onSubmit={handleSubmit(handleRegisterUser)}
      >
        <Card className='shadow-lg border-border/50 rounded-none py-8'>
          <CardHeader className='text-center gap-4'>
            <CardDescription className='mx-auto'>
              <span className='block w-10 h-10 rounded-full bg-foreground' />
            </CardDescription>
            <CardTitle>
              <H1>Cadastre-se</H1>
            </CardTitle>
          </CardHeader>
          <CardContent className='px-8 space-y-1.5'>
            <div className='grid gap-5 '>
              <div className='grid w-full items-center gap-2'>
                <Label className='text-muted-foreground' htmlFor='username'>
                  Nome de usuario
                </Label>
                <Input
                  required
                  className='shadow-none'
                  placeholder='nome de usuario'
                  id='username'
                  {...register('username')}
                />
                {errors.username && (
                  <span className='text-red-500 text-sm'>
                    {errors.username.message}
                  </span>
                )}
              </div>
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
                {errors.email && (
                  <span className='text-red-500 text-sm'>
                    {errors.username?.message}
                  </span>
                )}
              </div>
              <div className='grid w-full items-center gap-2'>
                <Label className='text-muted-foreground' htmlFor='password'>
                  Senha
                </Label>
                <Input
                  required
                  className='shadow-none'
                  placeholder='password'
                  id='password'
                  {...register('password')}
                />
                {errors.password && (
                  <span className='text-red-500 text-sm'>
                    {errors.password?.message}
                  </span>
                )}
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
              Registrar
            </Button>
            <p className='mx-auto text-muted-foreground text-sm'>
              {' '}
              Já possue uma conta?{' '}
              <Link href={'/login'} className='hover:text-primary underline'>
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </form>
    </motion.section>
  );
};

export default Register;
