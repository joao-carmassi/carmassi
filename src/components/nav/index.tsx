import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { P } from '../ui/p';
import BotaoCarrinho from '../ui/botaoCarrinho';

const Navbar = () => {
  return (
    <div className='bg-card'>
      <nav className='h-16 bg-card border-b'>
        <div className='h-full flex items-center justify-between max-w-7xl mx-auto px-6 md:px-12'>
          <div className='flex items-center gap-8'>
            <Link href={'/'}>
              <P>Carmassi</P>
            </Link>

            {/* Desktop Menu */}
            <Button variant={'outline'} className='asChild'>
              <Link href={'/produtos'}>Produtos</Link>
            </Button>
          </div>

          <div className='flex items-center gap-3'>
            <BotaoCarrinho />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
