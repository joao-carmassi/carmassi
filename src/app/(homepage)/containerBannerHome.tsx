import CarroselHeroHome from '@/app/(homepage)/carroselHeroHome';
import { CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

const ContainerBannerHome = () => {
  return (
    <section className=''>
      <CarroselHeroHome className='pb-4'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            className='md:pl-8 md:basis-[80%] h-72 md:h-[30rem]'
            key={index}
          >
            <Image
              width={1920}
              height={1200}
              src={`/placeholder.avif`}
              alt=''
              className='w-full h-full object-cover object-center'
            />
          </CarouselItem>
        ))}
      </CarroselHeroHome>
    </section>
  );
};

export default ContainerBannerHome;
