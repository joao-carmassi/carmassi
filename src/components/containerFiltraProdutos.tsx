'use client';

import ListaCards from '@/components/listaCards';
import { IProdutosData } from '../app/layout';
import { useMemo, useState } from 'react';
import FiltroProdutos from './filtroProdutos';

type Props = {
  produtos: IProdutosData[];
  tipos: string[];
  q?: string;
};

const ContainerFiltraProdutos = ({ produtos, tipos, q }: Props) => {
  const [filtrados, setFiltrados] = useState(produtos);
  const [categoria, setCategoria] = useState<string>(q || '');
  const [ordem, setOrdem] = useState<string>('');

  useMemo(() => {
    const filtered =
      categoria === 'todos' || !categoria
        ? produtos
        : produtos.filter((produto) => produto.categoria === categoria);
    setFiltrados(filtered);

    const sortMap = {
      'a-z': (a: IProdutosData, b: IProdutosData) =>
        a.nome.localeCompare(b.nome),
      'z-a': (a: IProdutosData, b: IProdutosData) =>
        b.nome.localeCompare(a.nome),
      menor: (a: IProdutosData, b: IProdutosData) => a.preco - b.preco,
      maior: (a: IProdutosData, b: IProdutosData) => b.preco - a.preco,
    };

    if (ordem && sortMap[ordem as keyof typeof sortMap]) {
      setFiltrados((prev) =>
        [...prev].sort(sortMap[ordem as keyof typeof sortMap])
      );
    }
  }, [ordem, produtos, categoria]);

  return (
    <>
      <FiltroProdutos
        filtrados={filtrados}
        ordem={ordem}
        setOrdem={setOrdem}
        q={categoria}
        setCategoria={setCategoria}
        categorias={['todos', ...tipos] as string[]}
      />
      <ListaCards produtos={filtrados} />
    </>
  );
};

export default ContainerFiltraProdutos;
