import { produtosData } from '../layout';
import slugify from 'slugify';
import { Metadata } from 'next';
import FiltraProdutos from './filtraProdutos';

interface Props {
  searchParams: Promise<{
    q: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { q } = (await searchParams) || '';
  return {
    title: q ? `Buscar por "${q}" | Carmassi` : 'Pesquisar | Carmassi',
    description: q
      ? `Resultados de "${q}" em colares e joias.`
      : 'Pesquise produtos em nossa loja.',
  };
}

const PaginaPesquisa = async ({ searchParams }: Props) => {
  const { q } = await searchParams;
  const filtrados = produtosData.filter((produto) => {
    const nomeMatch = produto.nome
      .toLowerCase()
      .trim()
      .includes(q.toLowerCase().trim());
    const tagMatch = produto.tags.some((tag) =>
      slugify(tag, { strict: true, lower: true }).includes(
        slugify(q, { strict: true, lower: true })
      )
    );
    return nomeMatch || tagMatch;
  });

  const tipos = ['todos', ...new Set(filtrados.map((obj) => obj.categoria))];

  return (
    <main className='min-h-screen'>
      <section key={q} className='p-6 md:p-12 max-w-7xl mx-auto'>
        {filtrados.length > 0 ? (
          <FiltraProdutos tipos={tipos} produtos={filtrados} />
        ) : (
          <p>Nenhum resultado encontrado</p>
        )}
      </section>
    </main>
  );
};

export default PaginaPesquisa;
