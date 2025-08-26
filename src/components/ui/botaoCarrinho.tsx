import { ShoppingCart } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from './button';

const BotaoCarrinho = () => {
  return (
    <div className='relative'>
      <Button variant='outline' size='icon' className='rounded-full'>
        <ShoppingCart />
      </Button>
      <Badge className='absolute -top-1 -right-1 px-1.5 text-[10px] !rounded-full'>
        1
      </Badge>
    </div>
  );
};

export default BotaoCarrinho;
