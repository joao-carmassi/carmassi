import { Button } from '@/components/ui/button';
import { H2 } from '@/components/ui/h2';
import { P } from '@/components/ui/p';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Image from 'next/image';
import { Variants } from 'framer-motion';
import DivAnimation from '@/components/ui/divAnimation';

const imgAnimation: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const textAnimation: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const ContainerInfoInfiniteSliderHome = () => {
  return (
    <section className='p-6 md:p-12 gap-6 md:gap-12 max-w-7xl mx-auto flex items-center flex-col md:flex-row-reverse'>
      <DivAnimation
        variants={textAnimation}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 1 }}
        className='flex-1 flex flex-col gap-3 md:gap-6 items-start'
      >
        <H2>Revolutionizing Client Collaboration for Modern Services</H2>
        <P className='text-muted-foreground'>
          Elevate your service-based business with customizable client portals
          and advanced back-office management
        </P>
        <Button effect={'ringHover'}>Lorem</Button>
      </DivAnimation>
      <DivAnimation
        variants={imgAnimation}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className='flex-1 flex flex-col md:flex-row gap-3 overflow-hidden max-h-[37.5rem]'
      >
        <InfiniteSlider
          speedOnHover={15}
          speed={50}
          className='w-full h-full hidden md:block'
          direction='vertical'
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={index}
              width={278}
              height={278}
              src={`/placeholder.avif`}
              alt=''
              className='object-cover object-center aspect-square h-36 md:h-fit md:w-full'
            />
          ))}
        </InfiniteSlider>
        <InfiniteSlider
          speedOnHover={15}
          speed={50}
          className='w-full h-full hidden md:block'
          direction='vertical'
          reverse
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={index}
              width={278}
              height={278}
              src={`/placeholder.avif`}
              alt=''
              className='object-cover object-center aspect-square h-36 md:h-fit md:w-full'
            />
          ))}
        </InfiniteSlider>
        <InfiniteSlider
          speedOnHover={15}
          speed={30}
          className='w-full h-full md:hidden'
          direction='horizontal'
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={index}
              width={120}
              height={120}
              src={`/placeholder.avif`}
              alt=''
              className='object-cover object-center w-36 h-36'
            />
          ))}
        </InfiniteSlider>
        <InfiniteSlider
          speedOnHover={15}
          speed={30}
          className='w-full h-full md:hidden'
          direction='horizontal'
          reverse
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              key={index}
              width={120}
              height={120}
              src={`/placeholder.avif`}
              alt=''
              className='object-cover object-center w-36 h-36'
            />
          ))}
        </InfiniteSlider>
      </DivAnimation>
    </section>
  );
};

export default ContainerInfoInfiniteSliderHome;
