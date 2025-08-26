import { H1 } from '@/components/ui/h1';
import { P } from '@/components/ui/p';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Rating, RatingButton } from '@/components/ui/kibo-ui/rating';
import { IColaresData } from '@/app/layout';
import Image from 'next/image';
import { CarroselPaginaProduto } from './carroselPaginaProduto';
import InputFrete from './inputFrete';

interface Props {
  colar: IColaresData;
}

const ContainerProduto = ({ colar }: Props) => {
  return (
    <section className='mx-auto max-w-7xl p-6 md:p-12 flex flex-col md:flex-row gap-6 md:gap-12'>
      <div className='flex-1 hidden md:grid grid-cols-2 gap-3'>
        <Image
          height={750}
          width={550}
          src={`/placeholder.avif`}
          alt=''
          className='w-full object-cover object-center aspect-[9/12] col-span-2'
        />
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            width={278}
            height={278}
            src={`/placeholder.avif`}
            alt=''
            className='w-full object-cover object-center aspect-square'
          />
        ))}
      </div>
      <div className='w-full md:hidden'>
        <CarroselPaginaProduto />
      </div>
      <div className='flex-1 flex flex-col gap-2 sticky top-6 self-start text-lg'>
        <H1>
          {colar?.nome} - {colar?.categoria}
        </H1>
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
        <P className='text-muted-foreground'>
          Por{' '}
          {colar?.preco.toLocaleString('pt-br', {
            style: 'currency',
            currency: colar.moeda,
          })}{' '}
          {colar?.moeda}
        </P>
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
        <InputFrete />
        <p>{colar?.descricao}</p>
        <div>
          <h2>Características:</h2>
          <ul className='list-disc list-inside '>
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
