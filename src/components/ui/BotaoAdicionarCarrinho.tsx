'use client';

import { ShoppingCart } from 'lucide-react';
import { Button } from './button';
import { useContext } from 'react';
import { CartContext } from '@/context/carrinho';
import { IProdutosData } from '@/app/layout';

interface Props {
  produto: IProdutosData;
}

const BotaoAdicioarCarrinho = ({ produto }: Props) => {
  const context = useContext(CartContext);

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
