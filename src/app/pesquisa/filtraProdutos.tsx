'use client';

import ListaCards from '@/components/listaCards';
import { IProdutosData } from '../layout';
import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  produtos: IProdutosData[];
  tipos?: string[];
};

const FiltraProdutos = ({ produtos, tipos }: Props) => {
  const [filtrados, setFiltrados] = useState(produtos);
  const [tipo, setTipo] = useState<string>('');
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
      <div className='flex flex-col md:flex-row justify-between md:items-center gap-3 py-3'>
        <div className='flex items-center gap-3'>
          <p>Filtrar:</p>
          <Select value={tipo} onValueChange={setTipo}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Tipo' />
            </SelectTrigger>
            <SelectContent>
              {tipos?.map((tipo) => (
                <SelectItem key={tipo} value={tipo}>
                  {tipo}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={ordem} onValueChange={setOrdem}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Ordem' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='a-z'>Alfabetica A-z</SelectItem>
              <SelectItem value='z-a'>Alfabetica Z-a</SelectItem>
              <SelectItem value='menor'>Preço crescente</SelectItem>
              <SelectItem value='maior'>Preço decrescente</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <p className='self-end'>
          {filtrados.length} resultado{filtrados.length > 1 && 's'}
        </p>
      </div>
      <ListaCards produtos={filtrados} />
    </>
  );
};

export default FiltraProdutos;
