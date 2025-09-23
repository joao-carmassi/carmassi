import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { H3 } from '@/components/ui/h3';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

const schemaName = z.object({
  pass: z.string(),
  username: z
    .string()
    .min(3, { message: 'Nome de usuario deve ter pelo menos 3 caracteres' })
    .max(20, { message: 'Nome de usuario deve ter no máximo 20 caracteres' })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: 'Nome de usuario só pode ter letras, números e _',
    }),
});

type tName = z.infer<typeof schemaName>;

const schemaPass = z.object({
  oldPass: z.string(),
  newPass: z
    .string()
    .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
});

type tPass = z.infer<typeof schemaPass>;

const CardEmail = () => {
  const { user } = useAuth();

  return (
    <Card className='py-4 gap-1.5 border-border/50 shadow-none'>
      <CardHeader className='px-5'>
        <CardTitle>
          <H3 className='text-muted-foreground'>Email</H3>
        </CardTitle>
        <CardDescription>Email da conta</CardDescription>
      </CardHeader>
      <CardContent className='px-5'>
        <p className='bg-background py-1.5 px-3'>{user?.user.email}</p>
      </CardContent>
    </Card>
  );
};

const CardName = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tName>({
    resolver: zodResolver(schemaName),
  });

  const handleName = (data: tName) => {
    console.log(data);
  };

  return (
    <Card className='py-4 gap-1.5 border-border/50 shadow-none'>
      <CardHeader className='px-5'>
        <CardTitle>
          <H3 className='text-muted-foreground'>Nome</H3>
        </CardTitle>
        <CardDescription>Nome de usuario</CardDescription>
      </CardHeader>
      <CardContent className='px-5'>
        <p className='bg-background py-1.5 px-3'>{user?.user.username}</p>
      </CardContent>
      <CardFooter className='px-5 flex justify-end'>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={'ghost'} size={'sm'}>
              Editar
            </Button>
          </DialogTrigger>
          <DialogContent className='gap-6'>
            <DialogHeader>
              <DialogTitle>Alterar nome</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleName)} className='space-y-3'>
              <div className='grid gap-5'>
                <div className='grid w-full items-center gap-2'>
                  <Label className='text-muted-foreground' htmlFor='pass'>
                    Senha
                  </Label>
                  <Input
                    required
                    className='shadow-none'
                    placeholder='senha'
                    id='pass'
                    {...register('pass')}
                  />
                  {errors.pass && (
                    <span className='text-red-500 text-sm'>
                      {errors.pass?.message}
                    </span>
                  )}
                </div>
                <div className='grid w-full items-center gap-2'>
                  <Label className='text-muted-foreground' htmlFor='username'>
                    Novo nome
                  </Label>
                  <Input
                    required
                    className='shadow-none'
                    placeholder='novo nome'
                    id='username'
                    {...register('username')}
                  />
                  {errors.username && (
                    <span className='text-red-500 text-sm'>
                      {errors.username?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className='flex justify-end'>
                <Button>Salvar</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

const CardPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tPass>({
    resolver: zodResolver(schemaPass),
  });

  const handlePass = (data: tPass) => {
    console.log(data);
  };

  return (
    <Card className='py-4 gap-1.5 border-border/50 shadow-none'>
      <CardHeader className='px-5'>
        <CardTitle>
          <H3 className='text-muted-foreground'>Senha</H3>
        </CardTitle>
        <CardDescription>Senha atual</CardDescription>
      </CardHeader>
      <CardContent className='px-5'>
        <p className='bg-background py-1.5 px-3'>********</p>
      </CardContent>
      <CardFooter className='px-5 flex justify-end'>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={'ghost'} size={'sm'}>
              Editar
            </Button>
          </DialogTrigger>
          <DialogContent className='gap-6'>
            <DialogHeader>
              <DialogTitle>Alterar senha</DialogTitle>
            </DialogHeader>
            <form className='space-y-3' onSubmit={handleSubmit(handlePass)}>
              <div className='grid gap-5'>
                <div className='grid w-full items-center gap-2'>
                  <Label className='text-muted-foreground' htmlFor='oldPass'>
                    Senha atual
                  </Label>
                  <Input
                    required
                    className='shadow-none'
                    placeholder='senha atual'
                    id='oldPass'
                    {...register('oldPass')}
                  />
                  {errors.oldPass && (
                    <span className='text-red-500 text-sm'>
                      {errors.oldPass?.message}
                    </span>
                  )}
                </div>
                <div className='grid w-full items-center gap-2'>
                  <Label className='text-muted-foreground' htmlFor='newPass'>
                    Nova senha
                  </Label>
                  <Input
                    required
                    className='shadow-none'
                    placeholder='nova senha'
                    id='newPass'
                    {...register('newPass')}
                  />
                  {errors.newPass && (
                    <span className='text-red-500 text-sm'>
                      {errors.newPass?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className='flex justify-end'>
                <Button>Salvar</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

const Cards = {
  CardEmail,
  CardName,
  CardPassword,
};

export default Cards;
