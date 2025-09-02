import { H1 } from '@/components/ui/h1';
import { P } from '@/components/ui/p';
import { Badge } from '@/components/ui/badge';
import { Rating, RatingButton } from '@/components/ui/kibo-ui/rating';
import { IProdutosData } from '@/app/layout';
import Image from 'next/image';
import { CarroselPaginaProduto } from './carroselPaginaProduto';
import InputFrete from './inputFrete';
import { Variants } from 'motion/react';
import BotaoAdicioarCarrinho from '@/components/ui/BotaoAdicionarCarrinho';
import DivAnimation from '@/components/ui/divAnimation';

interface Props {
  produto: IProdutosData;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const ContainerProduto = ({ produto }: Props) => {
  return (
    <DivAnimation
      variants={fadeUp}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
    >
      <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
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
        <div className='flex-1 space-y-3 sticky top-[5.5rem] self-start text-lg'>
          <H1>
            {produto?.nome} - {produto?.categoria}
          </H1>
          <div className='flex gap-1 flex-wrap'>
            {produto?.tags.map((tag) => (
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
            {produto?.preco.toLocaleString('pt-br', {
              style: 'currency',
              currency: produto.moeda,
            })}{' '}
            {produto?.moeda}
          </P>
          <div className='flex gap-1'>
            <Rating
              aria-hidden='true'
              defaultValue={Math.round(produto?.nota as number)}
              readOnly
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <RatingButton key={index} />
              ))}
            </Rating>
            <p>({produto?.avaliacoes} avaliações)</p>
          </div>
          <BotaoAdicioarCarrinho produto={produto} />
          <InputFrete />
          <p>{produto?.descricao}</p>
          <div>
            <h2>Características:</h2>
            <ul className='list-disc list-inside'>
              <li>Material: {produto?.caracteristicas.material}</li>
              <li>Peso: {produto?.caracteristicas.peso}</li>
              <li>Comprimento: {produto?.caracteristicas.comprimento}</li>
              <li>Espessura: {produto?.caracteristicas.espessura}</li>
              <li>Fecho: {produto?.caracteristicas.fecho}</li>
            </ul>
          </div>
        </div>
      </div>
    </DivAnimation>
  );
};

export default ContainerProduto;
