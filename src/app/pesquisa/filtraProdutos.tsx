import ListaCards from '@/components/listaCards';
import { IProdutosData } from '../layout';

type Props = {
  produtos: IProdutosData[];
};

const FiltraProdutos = ({ produtos }: Props) => {
  const filtrados = produtos;

  return (
    <div>
      <ListaCards produtos={filtrados} />
    </div>
  );
};

export default FiltraProdutos;
