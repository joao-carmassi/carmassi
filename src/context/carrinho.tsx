'use client';

import { IColaresData } from '@/app/layout';
import { createContext, useEffect, useState } from 'react';

interface contextTypes {
  cart: IColaresData[];
  adicionaCarrinho: (cart: IColaresData) => void;
  limpaCarrinho: () => void;
}

export const CartContext = createContext<contextTypes | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IColaresData[]>([]);

  useEffect(() => {
    const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(localStorageCart);
  }, []);

  const adicionaCarrinho = (colar: IColaresData) => {
    if (cart.find((item) => item.id === colar.id)) {
      // return;
      console.log(cart);
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, colar]));
      setCart([...cart, colar]);
    }
  };

  const limpaCarrinho = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, adicionaCarrinho, limpaCarrinho }}>
      <>{children}</>
    </CartContext.Provider>
  );
};

export default CartProvider;
