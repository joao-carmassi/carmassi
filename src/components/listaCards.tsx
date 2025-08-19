import { unstable_ViewTransition as ViewTransition } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import ModeloImage from './ui/modeloImage';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { IColaresData } from '@/app/layout';

type Props = {
  colares: IColaresData[];
};

const ListaCards = ({ colares }: Props) => {
  return (
    <div className='grid w-full grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-12'>
      {colares.map((colar, index) => (
        <Link key={index} href={`/produtos/${colar.id}`}>
          <Card className='group cursor-pointer duration-300 hover:scale-105 h-fit'>
            <CardHeader>
              <CardDescription>
                <ViewTransition name={`imagem-${colar.id}`}>
                  <ModeloImage className='aspect-square' />
                </ViewTransition>
              </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-2'>
              <ViewTransition name={`tags-${colar.id}`}>
                <div className='flex gap-1 flex-wrap'>
                  {colar.tags.slice(0, 3).map((tag) => (
                    <Badge
                      variant={'outline'}
                      className='border-primary text-primary font-semibold'
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </ViewTransition>
              <ViewTransition name={`titulo-${colar.id}`}>
                <p className='group-hover:underline text-sm md:text-base'>
                  {colar.nome}
                </p>
              </ViewTransition>
              <p className='text-xs'>
                Por{' '}
                {colar.preco.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: colar.moeda,
                })}{' '}
                {colar.moeda}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ListaCards;
