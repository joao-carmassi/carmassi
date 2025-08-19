import { Button } from '@/components/ui/button';
import { H2 } from '@/components/ui/h2';
import { P } from '@/components/ui/p';
import InfiniteSliderScreenVerifier from './infiniteSliderScreenVerifier';

const ContainerInfoInfiniteSliderHome = () => {
  return (
    <section className='p-6 md:p-12 gap-6 md:gap-12 max-w-7xl mx-auto flex items-center flex-col md:flex-row-reverse'>
      <div className='flex-1 flex flex-col gap-6 items-start'>
        <H2>Revolutionizing Client Collaboration for Modern Services</H2>
        <P className='text-muted-foreground'>
          Elevate your service-based business with customizable client portals
          and advanced back-office management
        </P>
        <Button effect={'ringHover'}>Lorem</Button>
      </div>
      <div className='flex-1 flex flex-col md:flex-row gap-3 overflow-hidden max-h-[37.5rem]'>
        <InfiniteSliderScreenVerifier />
      </div>
    </section>
  );
};

export default ContainerInfoInfiniteSliderHome;
