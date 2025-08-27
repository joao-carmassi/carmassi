import ListaCards from '@/components/listaCards';
import type { Metadata } from 'next';
import { produtosData } from '../layout';

export const metadata: Metadata = {
  title: 'Produtos | Carmassi',
  description:
    'Explore nossa coleção completa de colares, brincos e acessórios exclusivos. Peças únicas e elegantes para todos os gostos.',
};

const PageProdutos = () => {
  return (
    <main className='min-h-screen'>
      <section className='p-6 md:p-12 mx-auto max-w-7xl'>
        <ListaCards produtos={produtosData} />
      </section>
    </main>
  );
};

export default PageProdutos;
