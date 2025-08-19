import { H1 } from '@/components/ui/h1';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { P } from '@/components/ui/p';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Rating, RatingButton } from '@/components/ui/kibo-ui/rating';
import { IColaresData } from '@/app/layout';
import ColagemImagensProdutos from './colagemImagensProdutos';

interface Props {
  colar: IColaresData;
}

const ContainerProduto = ({ colar }: Props) => {
  return (
    <section className='mx-auto max-w-7xl p-6 md:p-12 flex flex-col md:flex-row gap-6 md:gap-12'>
      <ColagemImagensProdutos colar={colar} />

      <div className='flex-1 flex flex-col gap-2 sticky top-6 self-start'>
        <ViewTransition name={`titulo-${colar.id}`}>
          <H1>
            {colar?.nome} - {colar?.categoria}
          </H1>
        </ViewTransition>
        <ViewTransition name={`tags-${colar.id}`}>
          <div className='flex gap-1 flex-wrap'>
            {colar?.tags.map((tag) => (
              <Badge
                variant={'outline'}
                className='border-primary text-primary font-semibold'
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </ViewTransition>
        <ViewTransition name={`valor-${colar.id}`}>
          <P className='text-muted-foreground'>
            Por{' '}
            {colar?.preco.toLocaleString('pt-br', {
              style: 'currency',
              currency: colar.moeda,
            })}{' '}
            {colar?.moeda}
          </P>
        </ViewTransition>
        <div className='flex gap-1'>
          <Rating defaultValue={Math.round(colar?.nota as number)} readOnly>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton key={index} />
            ))}
          </Rating>
          <p>({colar?.avaliacoes} avaliações)</p>
        </div>
        <Button iconPlacement='right' icon={ShoppingCart} effect={'expandIcon'}>
          Adicionar ao carrinho
        </Button>
        <p className='text-lg'>{colar?.descricao}</p>
        <div>
          <h2 className='text-lg'>Características:</h2>
          <ul className='list-disc list-inside text-lg'>
            <li>Material: {colar?.caracteristicas.material}</li>
            <li>Peso: {colar?.caracteristicas.peso}</li>
            <li>Comprimento: {colar?.caracteristicas.comprimento}</li>
            <li>Espessura: {colar?.caracteristicas.espessura}</li>
            <li>Fecho: {colar?.caracteristicas.fecho}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContainerProduto;
