'use client';

import { v4 as uuidv4 } from 'uuid';
import { createContext, useEffect, useState } from 'react';
import { IProdutosData } from '@/app/layout';

interface ICarrinho {
  id: string;
  produto: IProdutosData;
}

interface contextTypes {
  cart: ICarrinho[];
  adicionaCarrinho: (cart: IProdutosData) => void;
  limpaCarrinho: () => void;
}

export const CartContext = createContext<contextTypes | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ICarrinho[]>([]);

  useEffect(() => {
    const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(localStorageCart);
  }, []);

  const adicionaCarrinho = (xProduto: IProdutosData) => {
    if (cart.find((item) => item.produto.id === xProduto.id)) {
      console.log(cart);
    } else {
      const produto: ICarrinho = { produto: xProduto, id: uuidv4() };
      localStorage.setItem('cart', JSON.stringify([...cart, produto]));
      setCart([...cart, produto]);
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
