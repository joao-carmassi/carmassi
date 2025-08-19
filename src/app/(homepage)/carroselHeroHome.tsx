'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { ClassNameValue } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  className?: ClassNameValue;
}

export default function CarroselHeroHome({ children, className }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className={className as string}>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{ loop: true }}
        setApi={setApi}
        className='w-full '
      >
        <CarouselContent>{children}</CarouselContent>
        <CarouselPrevious className='hidden md:flex top-[calc(100%+0.5rem)] translate-y-0 left-2 cursor-pointer' />
        <CarouselNext className='hidden md:flex top-[calc(100%+0.5rem)] translate-y-0 left-4 translate-x-full cursor-pointer' />
      </Carousel>
      <div className='mt-4 flex items-center justify-center md:justify-end gap-2 mx-4'>
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn('h-3.5 w-3.5 rounded-full border-2 cursor-pointer', {
              'border-primary bg-primary': current === index + 1,
            })}
          />
        ))}
      </div>
    </div>
  );
}
