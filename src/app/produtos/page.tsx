import type { Metadata } from 'next';
import { categoriasProtudos, produtosData } from '../layout';
import ContainerFiltraProdutos from '../../components/containerFiltraProdutos';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { H1 } from '@/components/ui/h1';

export const metadata: Metadata = {
  title: 'Produtos | Carmassi',
  description:
    'Explore nossa coleção completa de colares, brincos e acessórios exclusivos. Peças únicas e elegantes para todos os gostos.',
};

interface Props {
  searchParams: Promise<{
    q: string;
  }>;
}

const PageProdutos = async ({ searchParams }: Props) => {
  const { q } = (await searchParams) || '';

  return (
    <main className='min-h-container'>
      <section className='p-6 md:p-12 mx-auto max-w-7xl'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Produtos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <H1 className='hidden mt-3'>Todos os Produtos</H1>
        <ContainerFiltraProdutos
          key={q}
          q={q}
          produtos={produtosData}
          tipos={categoriasProtudos}
        />
      </section>
    </main>
  );
};

export default PageProdutos;
