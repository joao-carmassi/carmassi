'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import ModeloImage from './ui/modeloImage';

const ITEMS = new Array(4).fill(null).map((_, index) => index + 1);

export function CarroselPaginaProduto() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setIndex(api.selectedScrollSnap());

    api.on('select', () => {
      setIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className='relative w-full'>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {ITEMS.map((item) => (
            <CarouselItem key={item} className='pb-4'>
              <ModeloImage className='aspect-square' />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className='flex w-full justify-center space-x-3'>
        {ITEMS.map((item, i) => (
          <button
            key={item}
            type='button'
            aria-label={`Go to slide ${item}`}
            onClick={() => api?.scrollTo(i)}
            className={`aspect-square w-full border border-zinc-200 dark:border-zinc-800 ${
              index === i ? 'bg-zinc-200 dark:bg-zinc-800' : ''
            }`}
          >
            <ModeloImage className='aspect-square' />
          </button>
        ))}
      </div>
    </div>
  );
}
