'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useCart } from '@/context/carrinho';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const TableProdutosCarrinho = () => {
  const context = useCart();

  if (!context) return null;

  return (
    <>
      {context.cart.length > 0 ? (
        <>
          <Table>
            <TableHeader className='bg-transparent'>
              <TableRow className='hover:bg-transparent'>
                <TableHead className='w-2/3 md:w-auto'>Produto</TableHead>
                <TableHead className='hidden md:table-cell'>Valor</TableHead>
                <TableHead className='hidden md:table-cell'>
                  Quantidade
                </TableHead>
                <TableHead className='w-1/3 text-right md:w-auto'>
                  Total
                </TableHead>
              </TableRow>
            </TableHeader>
            <tbody aria-hidden='true' className='table-row h-2'></tbody>
            <motion.tbody
              variants={container}
              initial='hidden'
              animate='show'
              className='[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg'
            >
              {context.cart.map((item) => (
                <motion.tr
                  variants={fadeUp}
                  key={item.id}
                  className='odd:bg-muted/50 odd:hover:bg-muted/50 border-none hover:bg-transparent'
                >
                  <TableCell className='py-2.5 font-medium flex gap-3 items-center'>
                    <Image
                      width={56}
                      height={56}
                      src={`/placeholder.avif`}
                      alt={item.produto.nome}
                      className='w-14 h-14 object-cover object-center'
                    />{' '}
                    <div className='flex-1'>
                      <Link
                        className='hover:underline'
                        href={`/produtos/${item.produto.id}`}
                      >
                        {item.produto.nome}
                        <span className='hidden md:block text-sm text-muted-foreground'>
                          {item.produto.categoria}
                        </span>
                      </Link>
                      <div className='md:hidden mt-2'>
                        <Select
                          onValueChange={(e: string) => {
                            if (e === 'remover')
                              return context.removeDoCarrinho(item.id);
                            context.alteraQuantidade(item.id, parseInt(e));
                          }}
                          value={item.quantidade.toString()}
                        >
                          <SelectTrigger
                            aria-label={`Trocar quantidade ${item.produto.nome}`}
                            className='shadow-none'
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='remover'>remover</SelectItem>
                            <SelectItem value='1'>1</SelectItem>
                            <SelectItem value='2'>2</SelectItem>
                            <SelectItem value='3'>3</SelectItem>
                            <SelectItem value='4'>4</SelectItem>
                            <SelectItem value='5'>5</SelectItem>
                            <SelectItem value='6'>6</SelectItem>
                            <SelectItem value='7'>7</SelectItem>
                            <SelectItem value='8'>8</SelectItem>
                            <SelectItem value='9'>9</SelectItem>
                            <SelectItem value='10'>10</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className='py-2.5 hidden md:table-cell'>
                    {item.produto.preco.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: item.produto.moeda,
                    })}
                  </TableCell>
                  <TableCell className='py-2.5 hidden md:table-cell'>
                    <Select
                      onValueChange={(e: string) => {
                        if (e === 'remover')
                          return context.removeDoCarrinho(item.id);
                        context.alteraQuantidade(item.id, parseInt(e));
                      }}
                      value={item.quantidade.toString()}
                    >
                      <SelectTrigger
                        aria-label={`Trocar quantidade ${item.produto.nome}`}
                        className='shadow-none'
                      >
                        <SelectValue placeholder='Quantidade' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='remover'>remover</SelectItem>
                        <SelectItem value='1'>1</SelectItem>
                        <SelectItem value='2'>2</SelectItem>
                        <SelectItem value='3'>3</SelectItem>
                        <SelectItem value='4'>4</SelectItem>
                        <SelectItem value='5'>5</SelectItem>
                        <SelectItem value='6'>6</SelectItem>
                        <SelectItem value='7'>7</SelectItem>
                        <SelectItem value='8'>8</SelectItem>
                        <SelectItem value='9'>9</SelectItem>
                        <SelectItem value='10'>10</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className='py-2.5 text-right'>
                    {(item.produto.preco * item.quantidade).toLocaleString(
                      'pt-br',
                      {
                        style: 'currency',
                        currency: item.produto.moeda,
                      }
                    )}
                  </TableCell>
                </motion.tr>
              ))}
            </motion.tbody>
            <tbody aria-hidden='true' className='table-row h-2'></tbody>
            <TableFooter className='bg-transparent'>
              <TableRow className='hover:bg-transparent'>
                <TableCell className='md:hidden'>Total</TableCell>
                <TableCell colSpan={3} className='hidden md:table-cell'>
                  Total
                </TableCell>
                <TableCell className='text-right'>
                  {context?.cart
                    .reduce(
                      (acc, item) =>
                        acc + (item.produto.preco * item.quantidade || 0),
                      0
                    )
                    .toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}{' '}
                  {context.cart[0] && context.cart[0].produto.moeda}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <div className='flex justify-end gap-3'>
            <Button
              asChild
              variant={'outline'}
              className='w-full flex-1 md:flex-none md:w-auto'
            >
              <Link href={'/produtos'}>Ver mais produtos</Link>
            </Button>
            <Button
              effect={'shineHover'}
              className='w-full flex-1 md:flex-none md:w-auto'
            >
              Finalizar Compra
            </Button>
          </div>
        </>
      ) : (
        <div className='text-center space-y-1.5 md:space-y-3'>
          <p>Seu carrinho está vazio.</p>
          <p>Adicione alguns produtos para continuar com a compra!</p>
          <Button
            effect={'expandIcon'}
            icon={ArrowRight}
            iconPlacement='right'
            asChild
            className='w-full md:w-fit'
          >
            <Link href={'/produtos'}>Ver mais produtos</Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default TableProdutosCarrinho;
