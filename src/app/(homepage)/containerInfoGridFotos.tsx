import { H2 } from '@/components/ui/h2';
import { Button } from '@/components/ui/button';
import { P } from '@/components/ui/p';
import Image from 'next/image';
import { Variants } from 'framer-motion';
import DivAnimation from '@/components/ui/divAnimation';

const textAnimation: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const imgAnimation: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const ContainerInfoGridFotos = () => {
  return (
    <section className='flex items-center flex-col lg:flex-row max-w-7xl mx-auto p-6 md:p-12 gap-6 h-[40rem] md:h-[55rem] lg:h-[35rem]'>
      <DivAnimation
        variants={textAnimation}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 1 }}
        className='lg:flex-1 flex flex-col gap-3 md:gap-6 text-start items-start'
      >
        <H2>Welcome to Our Website</H2>
        <P className='text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
          doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur.
          Explicabo.
        </P>
        <Button effect={'ringHover'}>lorem</Button>
      </DivAnimation>
      <DivAnimation
        variants={imgAnimation}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className='flex-1 grid grid-cols-4 grid-rows-10 gap-4 h-full w-full'
      >
        <div className='relative row-span-3 col-start-2'>
          <Image
            src={`/placeholder.avif`}
            alt=''
            fill
            className='object-cover object-center'
          />
        </div>
        <div className='relative col-span-2 row-span-6 col-start-1 row-start-4'>
          <Image
            src={`/placeholder.avif`}
            alt=''
            fill
            className='object-cover object-center'
          />
        </div>
        <div className='relative col-span-2 row-span-6 col-start-3 row-start-2'>
          <Image
            src={`/placeholder.avif`}
            alt=''
            fill
            className='object-cover object-center'
          />
        </div>
        <div className='relative row-span-3 col-start-3 row-start-8'>
          <Image
            src={`/placeholder.avif`}
            alt=''
            fill
            className='object-cover object-center'
          />
        </div>
      </DivAnimation>
    </section>
  );
};

export default ContainerInfoGridFotos;
