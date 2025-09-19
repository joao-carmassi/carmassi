import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { IProdutosData } from '../app/layout';

type Props = {
  filtrados: IProdutosData[];
  categorias: string[];
  q: string;
  setCategoria: (tipo: string) => void;
  ordem: string;
  setOrdem: (ordem: string) => void;
};

const FiltroProdutos = ({
  filtrados,
  categorias,
  q,
  setCategoria,
  ordem,
  setOrdem,
}: Props) => {
  return (
    <div className='flex flex-col md:flex-row justify-between md:items-center gap-3 py-3'>
      <div className='flex items-center gap-3'>
        <p>Filtrar:</p>
        <Select value={q} onValueChange={setCategoria}>
          <SelectTrigger aria-label='Filtro tipo' className='w-[180px]'>
            <SelectValue placeholder='Categoria' />
          </SelectTrigger>
          <SelectContent>
            {categorias?.map((tipo) => (
              <SelectItem key={tipo} value={tipo}>
                {tipo}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={ordem} onValueChange={setOrdem}>
          <SelectTrigger aria-label='Filtro ordem' className='w-[180px]'>
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
  );
};

export default FiltroProdutos;
