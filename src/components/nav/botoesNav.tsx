'use client';

import { LogOut, PackageCheck, User } from 'lucide-react';
import BotaoCarrinho from '../ui/botaoCarrinho';
import { Button } from '../ui/button';
import DialogPesquisaProdutos from './dialogPesquisaProdutos';
import { Variants } from 'motion/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.15,
    },
  },
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const BotoesNav = () => {
  const { user, logout } = useAuth();

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      className='flex items-center gap-3'
    >
      <motion.span variants={fadeDown}>
        <DialogPesquisaProdutos />
      </motion.span>
      <motion.span variants={fadeDown}>
        <BotaoCarrinho />
      </motion.span>
      <motion.span variants={fadeDown}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-label='Botão abrir dados usuario'
              variant={user === null ? 'outline' : 'default'}
              size='icon'
              className='rounded-full'
            >
              <User />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {user === null ? (
              <DropdownMenuItem asChild>
                <Link className='grup' href='/login'>
                  <User className='mr-2 h-4 w-4 group-hover:text-card' />
                  Login
                </Link>
              </DropdownMenuItem>
            ) : (
              <>
                <DropdownMenuLabel>{user.user?.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className='grup'>
                  <Link href='/perfil'>
                    <User className='mr-2 h-4 w-4 group-hover:text-card' />
                    Perfil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className='grup'>
                  <Link href={'/pedidos'}>
                    <PackageCheck className='mr-2 h-4 w-4 group-hover:text-card' />
                    Meus pedidos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className='grup !hover:bg-destructive !hover:text-destructive-foreground'
                  onClick={logout}
                >
                  <LogOut className='mr-2 h-4 w-4 group-hover:text-destructive-foreground' />
                  Logout
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.span>
    </motion.div>
  );
};

export default BotoesNav;
