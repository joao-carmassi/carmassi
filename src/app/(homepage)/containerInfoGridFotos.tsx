import ModeloImage from '@/components/ui/modeloImage';
import { H2 } from '@/components/ui/h2';
import { Button } from '@/components/ui/button';
import { P } from '@/components/ui/p';

const ContainerInfoGridFotos = () => {
  return (
    <section className='flex items-center flex-col lg:flex-row max-w-7xl mx-auto p-6 md:p-12 gap-6 h-[40rem] md:h-[55rem] lg:h-[35rem]'>
      <div className='lg:flex-1 flex flex-col gap-6 text-start items-start'>
        <H2>Welcome to Our Website</H2>
        <P className='text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
          doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur.
          Explicabo.
        </P>
        <Button effect={'ringHover'}>lorem</Button>
      </div>
      <div className='flex-1 grid grid-cols-4 grid-rows-10 gap-4 h-full w-full'>
        <ModeloImage className='row-span-3 col-start-2' />
        <ModeloImage className='col-span-2 row-span-6 col-start-1 row-start-4' />
        <ModeloImage className='col-span-2 row-span-6 col-start-3 row-start-2' />
        <ModeloImage className='row-span-3 col-start-3 row-start-8' />
      </div>
    </section>
  );
};

export default ContainerInfoGridFotos;
