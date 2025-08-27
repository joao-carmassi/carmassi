'use client';

import ListaCards from '@/components/listaCards';
import { colaresData } from '../layout';

const PaginaPesquisa = () => {
  const colares = colaresData;

  return (
    <main>
      <section className='p-6 md:p-12 max-w-7xl mx-auto'>
        <ListaCards colares={colares} />
      </section>
    </main>
  );
};

export default PaginaPesquisa;
