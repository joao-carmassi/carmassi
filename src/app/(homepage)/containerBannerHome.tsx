import CarroselHeroHome from '@/app/(homepage)/carroselHeroHome';
import { CarouselItem } from '@/components/ui/carousel';
import DivAnimation from '@/components/ui/divAnimation';
import { Variants } from 'motion/react';
import Image from 'next/image';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const ContainerBannerHome = () => {
  return (
    <DivAnimation
      viewport={{ once: true }}
      variants={fadeUp}
      initial='hidden'
      whileInView='show'
    >
      <CarroselHeroHome className='pb-4'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className='md:pl-8 md:basis-[80%]'>
            <Image
              width={1920}
              height={1200}
              src={`/placeholder.avif`}
              alt=''
              className='aspect-[21/9] w-full h-full object-cover object-center hidden md:block'
            />
            <Image
              width={1920}
              height={1200}
              src={`/placeholder.avif`}
              alt=''
              className='aspect-[16/9] w-full h-full object-cover object-center md:hidden'
            />
          </CarouselItem>
        ))}
      </CarroselHeroHome>
    </DivAnimation>
  );
};

export default ContainerBannerHome;
