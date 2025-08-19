import ContainerBannerHome from '@/app/(homepage)/containerBannerHome';
import ListaCards from '@/components/listaCards';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ContainerInfoInfiniteSliderHome from './containerInfoInfiniteSliderHome';
import ContainerInfoGridFotos from './containerInfoGridFotos';
import { H2 } from '@/components/ui/h2';
import { colaresData } from '../layout';

const colares = colaresData.slice(0, 8);

export default function Home() {
  return (
    <main className='min-h-screen'>
      <ContainerBannerHome />
      <section className='flex items-center flex-col max-w-7xl mx-auto p-6 md:p-12 gap-6'>
        <ListaCards colares={colares} />
        <Button
          asChild
          effect={'expandIcon'}
          iconPlacement='right'
          icon={ArrowRight}
        >
          <Link href={'/produtos'}>Ver mais</Link>
        </Button>
      </section>
      <ContainerInfoInfiniteSliderHome />
      <ContainerInfoGridFotos />
      <section className='bg-foreground text-card '>
        <div className='max-w-7xl mx-auto p-6 md:p-12 text-center flex flex-col gap-6 items-center'>
          <H2>Lorem</H2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            soluta qui provident temporibus officia odit perferendis fugit
            ratione commodi in numquam eligendi id magni veniam aliquam, totam
            itaque voluptatem iste.
          </p>
          <Button className='w-fit ring-offset-foreground' effect={'ringHover'}>
            Lorem
          </Button>
        </div>
      </section>
    </main>
  );
}
