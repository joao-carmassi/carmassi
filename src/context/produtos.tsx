'use client';

import { IColaresData } from '@/app/layout';
import { createContext, useState } from 'react';

interface contextTypes {
  products: IColaresData[];
}

export const ProductsContext = createContext<contextTypes | null>(null);

interface Props {
  children: React.ReactNode;
  colares: IColaresData[];
}

const ProductsProvider = ({ children, colares }: Props) => {
  const [products] = useState<IColaresData[]>(colares);

  return (
    <ProductsContext.Provider value={{ products }}>
      <>{children}</>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
