import CarroselHeroHome from '@/app/(homepage)/carroselHeroHome';
import { CarouselItem } from '@/components/ui/carousel';
import { Image } from 'lucide-react';

const ContainerBannerHome = () => {
  return (
    <section className=''>
      <CarroselHeroHome className='pb-4'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className='md:pl-8 md:basis-[80%]' key={index}>
            <div className='bg-muted w-full h-72 md:h-[30rem] grid place-items-center text-5xl font-bold'>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image />
            </div>
          </CarouselItem>
        ))}
      </CarroselHeroHome>
    </section>
  );
};

export default ContainerBannerHome;
