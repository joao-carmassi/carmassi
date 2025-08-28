'use client';

import { v4 as uuidv4 } from 'uuid';
import { createContext, useEffect, useState } from 'react';
import { IProdutosData } from '@/app/layout';

interface ICarrinho {
  id: string;
  quantidade: number;
  produto: IProdutosData;
}

interface contextTypes {
  cart: ICarrinho[];
  adicionaCarrinho: (cart: IProdutosData) => void;
  removeCarrinho: (id: string) => void;
  alteraQuantidade: (id: string, quantidade: number) => void;
  limpaCarrinho: () => void;
}

export const CartContext = createContext<contextTypes | null>(null);

interface Props {
  children: React.ReactNode;
}

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<ICarrinho[]>([]);

  useEffect(() => {
    const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(localStorageCart);
  }, []);

  const adicionaCarrinho = (xProduto: IProdutosData) => {
    if (cart.find((item) => item.produto.id === xProduto.id)) {
      return;
    } else {
      const produto: ICarrinho = {
        produto: xProduto,
        quantidade: 1,
        id: uuidv4(),
      };
      localStorage.setItem('cart', JSON.stringify([...cart, produto]));
      setCart([...cart, produto]);
    }
  };

  const removeCarrinho = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const alteraQuantidade = (id: string, quantidade: number) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantidade };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  const limpaCarrinho = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        adicionaCarrinho,
        removeCarrinho,
        alteraQuantidade,
        limpaCarrinho,
      }}
    >
      <>{children}</>
    </CartContext.Provider>
  );
};

export default CartProvider;
