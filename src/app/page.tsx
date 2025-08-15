import BannerHome from '@/components/bannerHome';
import ListaCards from '@/components/listaCards';
import { Button } from '@/components/ui/button';
import colaresData from '@/data/colares.json';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const colares = colaresData.splice(0, 8);

export default function Home() {
  return (
    <main>
      <BannerHome />
      <section className='flex items-center flex-col w-full mb-6'>
        <ListaCards colares={colares} />
        <Button
          asChild
          effect={'expandIcon'}
          iconPlacement='right'
          icon={ArrowRight}
        >
          <Link href={'#'}>Ver mais</Link>
        </Button>
      </section>
    </main>
  );
}
