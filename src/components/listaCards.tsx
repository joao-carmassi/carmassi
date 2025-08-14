'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { IColaresData } from '@/types/iColaresData';
import ModeloImage from './ui/modeloImage';

type Props = {
  colares: IColaresData;
};

const ListaCards = ({ colares }: Props) => {
  return (
    <div className='px-6 md:px-12 mb-6  max-w-7xl mx-auto grid grid-cols-2  sm:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12'>
      {colares.map((colar, index) => (
        <Card
          className='group cursor-pointer duration-150 hover:scale-105 h-fit'
          key={index}
        >
          <CardHeader>
            <ModeloImage />
          </CardHeader>
          <CardContent className='flex flex-col gap-2'>
            <p className='group-hover:underline text-sm md:text-base'>
              {colar.nome}
            </p>
            <p className='text-xs'>
              De{' '}
              {colar.preco.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}{' '}
              BRL
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ListaCards;
