import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import jsonProdutos from '@/data/produtos.json';
import slugify from 'slugify';
import CartProvider from '@/context/carrinho';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Carmassi | Joias e Acessórios Exclusivos',
  description:
    'Descubra a coleção exclusiva de colares, brincos e acessórios da Carmassi. Peças únicas e elegantes para todas as ocasiões.',
};

export const produtosData = jsonProdutos.map((item) => ({
  id: slugify(item.nome, { strict: true, lower: true }),
  ...item,
}));
export type IProdutosData = (typeof produtosData)[0];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${raleway.variable} font-raleway tracking-widest`}>
        <CartProvider>
          <Navbar />
          <div className='h-16' />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

/* TODO: 
  ! Colocar H1, H2 e H3 pelas paginas
  ! Pesquisa relogio e n aparece
*/
