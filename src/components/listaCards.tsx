import { Card, CardContent, CardHeader } from '@/components/ui/card';
import colares from '@/data/colares.json';
import { Image } from 'lucide-react';

const ListaCards = () => {
  return (
    <section className='px-6 md:px-12 mb-6 md:mb-12 max-w-7xl mx-auto grid grid-cols-2  sm:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12'>
      {colares.map((colar, index) => (
        <Card
          className='group cursor-pointer duration-150 hover:scale-105 h-fit'
          key={index}
        >
          <CardHeader>
            <div className='bg-gray-800 text-white w-full aspect-square grid place-items-center'>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image className='group-hover:opacity-0 duration-150' />
            </div>
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
    </section>
  );
};

export default ListaCards;
