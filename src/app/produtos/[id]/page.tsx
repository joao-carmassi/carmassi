import ContainerProduto from './containerProduto';
import ListaCards from '@/components/listaCards';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { produtosData } from '@/app/layout';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const produtos = produtosData.find((produto) => produto.id === id);

  return {
    title: `${produtos?.nome} | Carmassi`,
    description: `Conheça o ${produtos?.descricao}.`,
  };
}

const PaginaCompraProduto = async ({ params }: Props) => {
  const { id } = await params;
  const produto = produtosData.find((produto) => produto.id === id);

  if (!produto) {
    return notFound();
  }

  return (
    <main className='min-h-screen'>
      <ContainerProduto produtos={produto} />
      <section className='max-w-7xl mx-auto p-6 md:p-12 flex flex-col gap-6'>
        <ListaCards
          produtos={produtosData
            .filter(
              (xProduto) =>
                xProduto.categoria === produto.categoria &&
                xProduto.nome !== produto.nome
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
  return produtosData.map((produto) => ({
    id: produto.id,
  }));
}

export default PaginaCompraProduto;
