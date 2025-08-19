import ContainerProduto from './containerProduto';
import ListaCards from '@/components/listaCards';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { colaresData } from '@/app/layout';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const colar = colaresData.find((colar) => colar.id === id);

  return {
    title: `${colar?.nome} - Carmassi`,
    description: `Conheça o ${colar?.descricao}.`,
  };
}

const PaginaCompraProduto = async ({ params }: Props) => {
  const { id } = await params;
  const colar = colaresData.find((colar) => colar.id === id);

  if (!colar) {
    return notFound();
  }

  return (
    <main className='min-h-screen'>
      <ContainerProduto colar={colar} />
      <section className='max-w-7xl mx-auto p-6 md:p-12 flex flex-col gap-6'>
        <ListaCards
          colares={colaresData
            .filter(
              (xColar) =>
                xColar.categoria === colar.categoria &&
                xColar.nome !== colar.nome
            )
            .splice(0, 4)}
        />
        <Button
          asChild
          effect={'expandIcon'}
          iconPlacement='right'
          icon={ArrowRight}
          className='w-fit'
        >
          <Link href={'/produtos'}>Ver mais</Link>
        </Button>
      </section>
    </main>
  );
};

export async function generateStaticParams() {
  return colaresData.map((colar) => ({
    id: colar.id,
  }));
}

export default PaginaCompraProduto;
