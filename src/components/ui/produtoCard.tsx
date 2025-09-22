'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { IProdutosData } from '@/app/layout';
import { Badge } from './badge';
import { motion, Variants } from 'framer-motion';
import { memo } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const ProdutoCard = ({ produto }: { produto: IProdutosData }) => {
  const precoFormatado = produto.preco.toLocaleString('pt-br', {
    style: 'currency',
    currency: produto.moeda,
  });

  const cardTags = produto.tags.slice(0, 3).map((tag, index) => (
    <Badge
      key={index}
      variant="outline"
      className="text-xs text-primary border-primary"
    >
      {tag}
    </Badge>
  ));

  return (
    <motion.div variants={fadeUp}>
      <Link href={`/produtos/${produto.id}`}>
        <Card className="group cursor-pointer duration-300 hover:scale-105 h-fit shadow-lg !py-0 gap-0 border-0 rounded-none">
          <CardHeader className="px-0">
            <CardDescription>
              <Image
                width={260}
                height={260}
                src={`/placeholder.avif`}
                alt={produto.nome}
                className="w-full object-cover object-center aspect-square"
              />
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 p-3">
            <div className="flex gap-1 flex-wrap">{cardTags}</div>
            <p className="group-hover:underline text-sm md:text-base">
              {produto.nome}
            </p>
            <p className="text-xs">
              Por {precoFormatado} {produto.moeda}
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default memo(ProdutoCard);
