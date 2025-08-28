'use client';

import { ShoppingCart } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from './button';
import { useContext } from 'react';
import { CartContext } from '@/context/carrinho';
import Link from 'next/link';

const BotaoCarrinho = () => {
  const context = useContext(CartContext);

  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className='rounded-full relative'
    >
      <Link aria-label='Link pagina carrinho' href={'/carrinho'}>
        <>
          <ShoppingCart />
          <Badge className='absolute -top-1 -right-1 px-1.5 text-[10px] !rounded-full'>
            {context?.cart.length || 0}
          </Badge>
        </>
      </Link>
    </Button>
  );
};

export default BotaoCarrinho;
