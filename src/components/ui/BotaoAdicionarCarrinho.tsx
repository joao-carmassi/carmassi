'use client';

import { ShoppingCart } from 'lucide-react';
import { Button } from './button';
import { useCart } from '@/context/carrinho';
import { IProdutosData } from '@/app/layout';

interface Props {
  produto: IProdutosData;
}

const BotaoAdicioarCarrinho = ({ produto }: Props) => {
  const context = useCart();

  return (
    <Button
      onClick={() => context?.adicionaCarrinho(produto)}
      iconPlacement='right'
      icon={ShoppingCart}
      effect={'expandIcon'}
      className='w-full'
    >
      Adicionar ao carrinho
    </Button>
  );
};

export default BotaoAdicioarCarrinho;
