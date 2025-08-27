import { H1 } from '@/components/ui/h1';
import { P } from '@/components/ui/p';
import { Badge } from '@/components/ui/badge';
import { Rating, RatingButton } from '@/components/ui/kibo-ui/rating';
import { IProdutosData } from '@/app/layout';
import Image from 'next/image';
import { CarroselPaginaProduto } from './carroselPaginaProduto';
import InputFrete from './inputFrete';
import SectionAnimation from '@/components/ui/sectionAnimation';
import { Variants } from 'motion/react';
import BotaoAdicioarCarrinho from '@/components/ui/BotaoAdicionarCarrinho';

interface Props {
  produtos: IProdutosData;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const ContainerProduto = ({ produtos }: Props) => {
  return (
    <SectionAnimation
      variants={fadeUp}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='mx-auto max-w-7xl p-6 md:p-12 flex flex-col md:flex-row gap-6 md:gap-12'
    >
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
      <div className='flex-1 flex flex-col gap-2 sticky top-[5.5rem] self-start text-lg'>
        <H1>
          {produtos?.nome} - {produtos?.categoria}
        </H1>
        <div className='flex gap-1 flex-wrap'>
          {produtos?.tags.map((tag) => (
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
          {produtos?.preco.toLocaleString('pt-br', {
            style: 'currency',
            currency: produtos.moeda,
          })}{' '}
          {produtos?.moeda}
        </P>
        <div className='flex gap-1'>
          <Rating defaultValue={Math.round(produtos?.nota as number)} readOnly>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton key={index} />
            ))}
          </Rating>
          <p>({produtos?.avaliacoes} avaliações)</p>
        </div>
        <BotaoAdicioarCarrinho produto={produtos} />
        <InputFrete />
        <p>{produtos?.descricao}</p>
        <div>
          <h2>Características:</h2>
          <ul className='list-disc list-inside '>
            <li>Material: {produtos?.caracteristicas.material}</li>
            <li>Peso: {produtos?.caracteristicas.peso}</li>
            <li>Comprimento: {produtos?.caracteristicas.comprimento}</li>
            <li>Espessura: {produtos?.caracteristicas.espessura}</li>
            <li>Fecho: {produtos?.caracteristicas.fecho}</li>
          </ul>
        </div>
      </div>
    </SectionAnimation>
  );
};

export default ContainerProduto;
