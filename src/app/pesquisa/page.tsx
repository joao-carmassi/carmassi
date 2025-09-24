import { categoriasProtudos, produtosData } from '../layout';
import { Metadata } from 'next';
import ContainerFiltraProdutos from '../../components/containerFiltraProdutos';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import CampoBuscaPesquisa from './campoBuscaPesquisa';
import { H1 } from '@/components/ui/h1';
import slugifyPathern from '@/utils/slugifyPathern';
import Link from 'next/link';

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
    const nomeMatch = slugifyPathern(produto.nome).includes(slugifyPathern(q));

    const tagMatch = produto.tags.some((tag) =>
      slugifyPathern(tag).includes(slugifyPathern(q))
    );

    return nomeMatch || tagMatch;
  });

  return (
    <main className='min-h-container'>
      <section className='p-6 md:p-12 max-w-7xl mx-auto'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={'/'}>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Pesquisa</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <H1 className='hidden mt-3'>Pesquisar Produtos</H1>
        <span key={q}>
          <CampoBuscaPesquisa q={q} />
        </span>
        {filtrados.length > 0 ? (
          <ContainerFiltraProdutos
            tipos={categoriasProtudos}
            produtos={filtrados}
          />
        ) : (
          <div className='mt-6 spacey-1.5 md:space-y-3'>
            <H1>Nenhum resultado encontrado</H1>
            <p className='text-muted-foreground'>
              Tente buscar por outros termos ou navegue por nossas categorias.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default PaginaPesquisa;
