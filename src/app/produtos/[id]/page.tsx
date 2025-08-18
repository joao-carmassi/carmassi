import { H1 } from '@/components/ui/h1';
import ModeloImage from '@/components/ui/modeloImage';
import { unstable_ViewTransition as ViewTransition } from 'react';
import colaresData from '@/data/colares.json';
import slugify from 'slugify';
import { P } from '@/components/ui/p';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
    <main className='min-h-screen'>
      <section className='mx-auto max-w-7xl p-6 md:p-12 flex gap-6 md:gap-12'>
        <div className='flex-1 grid grid-cols-2 gap-3'>
          <ViewTransition name={`imagem-${id}`}>
            <ModeloImage className='aspect-[9/12] col-span-2' />
          </ViewTransition>
          {Array.from({ length: 5 }).map((_, index) => (
            <ModeloImage key={index} className='aspect-square' />
          ))}
        </div>
        <div className='flex-1 flex flex-col gap-2 sticky top-6 self-start'>
          <ViewTransition name={`titulo-${id}`}>
            <H1>
              {colar?.nome} - {colar?.categoria}
            </H1>
          </ViewTransition>
          <div className='flex gap-1 flex-wrap'>
            {colar?.tags.map((tag) => (
              <Badge
                variant={'outline'}
                className='border-primary text-primary'
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <P className='text-muted-foreground'>
            {' '}
            Por{' '}
            {colar?.preco.toLocaleString('pt-br', {
              style: 'currency',
              currency: colar.moeda,
            })}{' '}
            {colar?.moeda}
          </P>
          <Button
            iconPlacement='right'
            icon={ShoppingCart}
            effect={'expandIcon'}
          >
            Adicionar ao carrinho
          </Button>
          <p>{colar?.descricao}</p>
          <div>
            <h2>Características:</h2>
            <ul className='list-disc list-inside'>
              <li>Material: {colar?.caracteristicas.material}</li>
              <li>Peso: {colar?.caracteristicas.peso}</li>
              <li>Comprimento: {colar?.caracteristicas.comprimento}</li>
              <li>Espessura: {colar?.caracteristicas.espessura}</li>
              <li>Fecho: {colar?.caracteristicas.fecho}</li>
            </ul>
          </div>
        </div>
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
