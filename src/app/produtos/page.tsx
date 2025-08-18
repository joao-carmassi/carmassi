import ListaCards from '@/components/listaCards';
import colaresData from '@/data/colares.json';

const PageProdutos = () => {
  return (
    <main>
      <section className='p-6 md:p-12 mx-auto max-w-7xl'>
        <ListaCards colares={colaresData} />
      </section>
    </main>
  );
};

export default PageProdutos;
