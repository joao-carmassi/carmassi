import ContainerProduto from './containerProduto';
import ListaCards from '@/components/listaCards';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { produtosData } from '@/app/layout';
import { notFound } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

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
    description: `Conheça o ${produtos?.descricao}. ${produtos?.tags.join(
      ', '
    )}`,
  };
}

const PaginaCompraProduto = async ({ params }: Props) => {
  const { id } = await params;
  const produto = produtosData.find((produto) => produto.id === id);

  if (!produto) {
    return notFound();
  }

  const similares = produtosData
    .filter(
      (xProduto) =>
        xProduto.categoria === produto.categoria &&
        xProduto.nome !== produto.nome
    )
    .splice(0, 4);

  return (
    <main className='min-h-container'>
      <section className='mx-auto max-w-7xl p-6 md:p-12'>
        <Breadcrumb className='pb-3'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={'/'}>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='/produtos'>Produtos</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{produto.nome}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <ContainerProduto produto={produto} />
      </section>
      {similares.length > 0 && (
        <section className='max-w-7xl mx-auto p-6 md:p-12 flex flex-col gap-6'>
          <ListaCards produtos={similares} />
          <Button
            asChild
            effect={'expandIcon'}
            iconPlacement='right'
            icon={ArrowRight}
            className='w-fit'
          >
            <Link href={`/produtos?q=${produto.categoria}`}>Ver mais</Link>
          </Button>
        </section>
      )}
    </main>
  );
};

export async function generateStaticParams() {
  return produtosData.map((produto) => ({
    id: produto.id,
  }));
}

export default PaginaCompraProduto;
