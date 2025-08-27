'use client';

import ListaCards from '@/components/listaCards';
import { IProdutosData } from '../app/layout';
import { useEffect, useState } from 'react';
import FiltroProdutos from './filtroProdutos';

type Props = {
  produtos: IProdutosData[];
  tipos: string[];
  q?: string;
};

const ContainerFiltraProdutos = ({ produtos, tipos, q }: Props) => {
  const [filtrados, setFiltrados] = useState(produtos);
  const [tipo, setTipo] = useState<string>(q || '');
  const [ordem, setOrdem] = useState<string>('');

  useEffect(() => {
    if (tipo === 'todos') {
      setFiltrados(produtos);
    } else if (tipo !== '') {
      setFiltrados(produtos.filter((produto) => produto.categoria === tipo));
    } else {
      setFiltrados(produtos);
    }

    if (ordem === 'a-z') {
      setFiltrados((prev) =>
        [...prev].sort((a, b) => a.nome.localeCompare(b.nome))
      );
    } else if (ordem === 'z-a') {
      setFiltrados((prev) =>
        [...prev].sort((a, b) => b.nome.localeCompare(a.nome))
      );
    } else if (ordem === 'menor') {
      setFiltrados((prev) => [...prev].sort((a, b) => a.preco - b.preco));
    } else if (ordem === 'maior') {
      setFiltrados((prev) => [...prev].sort((a, b) => b.preco - a.preco));
    }
  }, [tipo, produtos, ordem]);

  return (
    <>
      <FiltroProdutos
        filtrados={filtrados}
        ordem={ordem}
        setOrdem={setOrdem}
        tipo={tipo}
        setTipo={setTipo}
        tipos={tipos as string[]}
      />
      <ListaCards produtos={filtrados} />
    </>
  );
};

export default ContainerFiltraProdutos;
