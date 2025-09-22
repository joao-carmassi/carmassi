'use client';

import { v4 as uuidv4 } from 'uuid';
import { createContext, useContext, useEffect, useState } from 'react';
import { IProdutosData } from '@/app/layout';

export interface ICarrinho {
  id: string;
  quantidade: number;
  produto: IProdutosData;
}

export interface cartContextTypes {
  cart: ICarrinho[];
  adicionaCarrinho: (cart: IProdutosData) => void;
  removeDoCarrinho: (id: string) => void;
  alteraQuantidade: (id: string, quantidade: number) => void;
  limpaCarrinho: () => void;
}

const CartContext = createContext<cartContextTypes | null>(null);

interface Props {
  children: React.ReactNode;
  produtos: IProdutosData[];
}

export const CartProvider = ({ children, produtos }: Props) => {
  const [cart, setCart] = useState<ICarrinho[]>([]);

  useEffect(() => {
    const localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartWithProducts = localStorageCart.filter((item: ICarrinho) => {
      return produtos.find((produto) => produto.id === item.produto.id);
    });
    localStorage.setItem('cart', JSON.stringify(cartWithProducts));
    setCart(cartWithProducts);
  }, [produtos]);

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

  const removeDoCarrinho = (id: string) => {
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
        removeDoCarrinho,
        alteraQuantidade,
        limpaCarrinho,
      }}
    >
      <>{children}</>
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
