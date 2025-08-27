import type { Metadata } from 'next';
import { produtosData } from '../layout';
import ContainerFiltraProdutos from '../../components/containerFiltraProdutos';

export const metadata: Metadata = {
  title: 'Produtos | Carmassi',
  description:
    'Explore nossa coleção completa de colares, brincos e acessórios exclusivos. Peças únicas e elegantes para todos os gostos.',
};

const tipo = [
  'todos',
  ...new Set(produtosData.map((produto) => produto.categoria)),
];

interface Props {
  searchParams: Promise<{
    q: string;
  }>;
}

const PageProdutos = async ({ searchParams }: Props) => {
  const { q } = (await searchParams) || '';

  return (
    <main className='min-h-screen'>
      <section className='p-6 md:p-12 mx-auto max-w-7xl'>
        <ContainerFiltraProdutos q={q} produtos={produtosData} tipos={tipo} />
      </section>
    </main>
  );
};

export default PageProdutos;
