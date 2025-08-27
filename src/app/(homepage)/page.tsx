import ContainerBannerHome from '@/app/(homepage)/containerBannerHome';
import ListaCards from '@/components/listaCards';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ContainerInfoInfiniteSliderHome from './containerInfoInfiniteSliderHome';
import ContainerInfoGridFotos from './containerInfoGridFotos';
import { produtosData } from '../layout';
import ContainerTeste from './containerTeste';

const produtos = produtosData.slice(0, 8);

export default function Home() {
  return (
    <main className='min-h-screen'>
      <ContainerBannerHome />
      <section className='flex items-center flex-col max-w-7xl mx-auto p-6 md:p-12 gap-6'>
        <ListaCards produtos={produtos} />
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
      <ContainerTeste />
    </main>
  );
}
