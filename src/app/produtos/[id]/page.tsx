import { H1 } from '@/components/ui/h1';
import ModeloImage from '@/components/ui/modeloImage';
import { unstable_ViewTransition as ViewTransition } from 'react';
import colaresData from '@/data/colares.json';
import slugify from 'slugify';
import { P } from '@/components/ui/p';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const colar = colaresData.find(
    (colar) => slugify(colar.nome, { strict: true, lower: true }) === id
  );

  return {
    title: `${colar?.nome} - Carmassi`,
    description: `Conheça o ${colar?.nome}.`,
  };
}

const Teste = async ({ params }: Props) => {
  const { id } = await params;
  const colar = colaresData.find(
    (colar) => slugify(colar.nome, { strict: true, lower: true }) === id
  );

  return (
    <main>
      <section className='mx-auto max-w-7xl p-6 md:p-12 flex flex-col gap-6'>
        <ViewTransition name={`titulo-${id}`}>
          <div>
            <H1>{colar?.nome}</H1>
            <P className='text-muted-foreground'>
              {' '}
              Por{' '}
              {colar?.preco.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}{' '}
              BRL
            </P>
          </div>
        </ViewTransition>
        <ViewTransition name={`imagem-${id}`}>
          <ModeloImage className='aspect-video' />
        </ViewTransition>
      </section>
    </main>
  );
};

export async function generateStaticParams() {
  return colaresData.map((colar) => ({
    id: slugify(colar.nome, { strict: true, lower: true }),
  }));
}

export default Teste;
