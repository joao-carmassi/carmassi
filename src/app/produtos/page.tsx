import ListaCards from '@/components/listaCards';
import { colaresData } from '../layout';

const PageProdutos = () => {
  return (
    <main className='min-h-screen'>
      <section className='p-6 md:p-12 mx-auto max-w-7xl'>
        <ListaCards colares={colaresData} />
      </section>
    </main>
  );
};

export default PageProdutos;
