'use client';

import { IProdutosData } from '@/app/layout';
import { motion, Variants } from 'framer-motion';
import ProdutoCard from './ui/produtoCard';

type Props = {
  produtos: IProdutosData[];
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
};

const ListaCards = ({ produtos }: Props) => {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      className='grid w-full grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12'
    >
      {produtos.map((produto) => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </motion.div>
  );
};

export default ListaCards;
