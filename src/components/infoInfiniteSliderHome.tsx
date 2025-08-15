'use client';

import { H2 } from '@/components/ui/h2';
import { H3 } from '@/components/ui/h3';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import ModeloImage from '@/components/ui/modeloImage';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const InfoInfiniteSliderHome = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <section className='p-6 md:p-12 gap-6 md:gap-12 max-w-7xl mx-auto flex items-center flex-col md:flex-row-reverse'>
      <div className='flex-1 flex flex-col gap-6 items-start'>
        <H2>Revolutionizing Client Collaboration for Modern Services</H2>
        <H3 className='text-muted-foreground'>
          Elevate your service-based business with customizable client portals
          and advanced back-office management
        </H3>
        <Button effect={'ringHover'}>Lorem</Button>
      </div>
      <div className='flex-1 flex flex-col md:flex-row gap-3 overflow-hidden max-h-[37.5rem]'>
        <InfiniteSlider
          speed={50}
          className='w-full h-full'
          direction={isMobile ? 'horizontal' : 'vertical'}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <ModeloImage className='h-36 md:h-fit md:w-full' key={index} />
          ))}
        </InfiniteSlider>
        <InfiniteSlider
          speed={50}
          className='w-full h-full'
          direction={isMobile ? 'horizontal' : 'vertical'}
          reverse
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <ModeloImage className='h-36 md:h-fit md:w-full' key={index} />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default InfoInfiniteSliderHome;
