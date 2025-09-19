import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import jsonProdutos from '@/data/produtos.json';
import CartProvider from '@/context/carrinho';
import Footer from '@/components/footer';
import Navbar from '@/components/nav';
import slugifyPathern from '@/utils/slugifyPathern';

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
  id: slugifyPathern(item.nome),
  ...item,
}));
export type IProdutosData = (typeof produtosData)[0];
export const categoriasProtudos = [
  ...new Set(produtosData.map((produto) => produto.categoria)),
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${raleway.variable} font-raleway tracking-widest`}>
        <CartProvider produtos={produtosData}>
          <Navbar categorias={categoriasProtudos} />
          <div className='h-16' />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

/* TODO:
  !- Registrar marca
  - CMS
*/
