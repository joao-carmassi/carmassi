import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import TableProdutosCarrinho from './tableProdutosCarrinho';
import { H1 } from '@/components/ui/h1';
import Link from 'next/link';

export const metadata = {
  title: 'Carrinho | Carmassi',
  description: 'Carrinho de compras da Carmassi',
};

const PaginaCarrinho = () => {
  return (
    <main className='min-h-container'>
      <section className='p-6 md:p-12 max-w-7xl mx-auto'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={'/'}>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Carrinho</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <H1 className='py-3'>Carrinho:</H1>
        <TableProdutosCarrinho />
      </section>
    </main>
  );
};

export default PaginaCarrinho;
