'use client';

import { ShoppingCart } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from './button';
import { useContext } from 'react';
import { CartContext } from '@/context/carrinho';

const BotaoCarrinho = () => {
  const context = useContext(CartContext);

  return (
    <div className='relative'>
      <Button
        onClick={() => context?.limpaCarrinho()}
        variant='outline'
        size='icon'
        className='rounded-full'
        aria-label='Botão abrir pagina carrinho'
      >
        <ShoppingCart />
      </Button>
      <Badge className='absolute -top-1 -right-1 px-1.5 text-[10px] !rounded-full'>
        {context?.cart.length || 0}
      </Badge>
    </div>
  );
};

export default BotaoCarrinho;
