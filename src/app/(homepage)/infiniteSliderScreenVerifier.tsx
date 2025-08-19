'use client';

import { InfiniteSlider } from '@/components/ui/infinite-slider';
import ModeloImage from '@/components/ui/modeloImage';
import { useEffect, useState } from 'react';

const InfiniteSliderScreenVerifier = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <>
      <InfiniteSlider
        speedOnHover={15}
        speed={50}
        className='w-full h-full'
        direction={isMobile ? 'horizontal' : 'vertical'}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <ModeloImage
            className='aspect-square h-36 md:h-fit md:w-full'
            key={index}
          />
        ))}
      </InfiniteSlider>
      <InfiniteSlider
        speedOnHover={15}
        speed={50}
        className='w-full h-full'
        direction={isMobile ? 'horizontal' : 'vertical'}
        reverse
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <ModeloImage
            className='aspect-square h-36 md:h-fit md:w-full'
            key={index}
          />
        ))}
      </InfiniteSlider>
    </>
  );
};

export default InfiniteSliderScreenVerifier;
