'use client';

import { User } from 'lucide-react';
import BotaoCarrinho from '../ui/botaoCarrinho';
import { Button } from '../ui/button';
import DialogPesquisaProdutos from './dialogPesquisaProdutos';
import { Variants } from 'motion/react';
import { motion } from 'framer-motion';

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
        <Button
          aria-label='Botão abrir dados usuario'
          variant='outline'
          size='icon'
          className='rounded-full'
        >
          <User />
        </Button>
      </motion.span>
    </motion.div>
  );
};

export default BotoesNav;
