import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { P } from '../ui/p';
import BotoesNav from './botoesNav';

const Navbar = () => {
  return (
    <header className='bg-card w-full fixed top-0 z-40'>
      <nav className='h-16 bg-card border-b'>
        <div className='h-full flex items-center justify-between max-w-7xl mx-auto px-6 md:px-12'>
          <div className='flex items-center gap-8'>
            <Link href={'/'}>
              <P>Carmassi</P>
            </Link>

            <Button asChild variant={'link'} className='asChild'>
              <Link href={'/produtos'}>Produtos</Link>
            </Button>
          </div>

          <BotoesNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
