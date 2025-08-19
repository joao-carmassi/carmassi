'use client';

import ModeloImage from '@/components/ui/modeloImage';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { useEffect, useState } from 'react';
import { CarroselPaginaProduto } from './carroselPaginaProduto';
import { IColaresData } from '@/app/layout';

interface Props {
  colar: IColaresData;
}

const ColagemImagensProdutos = ({ colar }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <>
      {!isMobile ? (
        <div className='flex-1 grid grid-cols-2 gap-3'>
          <ViewTransition name={`imagem-${colar.id}`}>
            <ModeloImage className='aspect-[9/12] col-span-2' />
          </ViewTransition>
          {Array.from({ length: 5 }).map((_, index) => (
            <ModeloImage key={index} className='aspect-square' />
          ))}
        </div>
      ) : (
        <div className='w-full'>
          <CarroselPaginaProduto />
        </div>
      )}
    </>
  );
};

export default ColagemImagensProdutos;
