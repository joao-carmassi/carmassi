import { H2 } from '@/components/ui/h2';

// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
// } from './sheet';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ScrollArea } from './scroll-area';
// import { Input } from './input';

const PaginaCarrinho = () => {
  // const [open, setOpen] = useState(true);
  // const [value, setValue] = useState(0);

  return (
    <main className='min-h-container'>
      <div>
        <H2>Carrinho 👍</H2>
      </div>
      {/* <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side='right'>
        <SheetHeader>
          <SheetTitle className='inline-flex items-center gap-1'>
            Seu Carrinho <ShoppingCart size={16} />
          </SheetTitle>
          <SheetDescription>
            Confira os produtos antes de finalizar
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className='overflow-y-auto'>
          <ul className='space-y-1.5 px-4'>
            {context?.cart.map((item) => (
              <li className='flex items-center p-1.5 gap-2' key={item.id}>
                <Image
                  width={260}
                  height={260}
                  src={`/placeholder.avif`}
                  alt={item.produto.nome}
                  className='h-16 w-16 object-cover object-center'
                />
                <div>
                  <Link
                    href={`/produtos/${item.produto.id}`}
                    onClick={() => setOpen(false)}
                    className='text-sm font-medium duration-150 hover:underline'
                  >
                    {item.produto.nome}
                  </Link>
                  <p className='text-sm text-muted-foreground'>
                    Por{' '}
                    {item.produto.preco.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: item.produto.moeda,
                    })}{' '}
                    {item.produto.moeda}
                  </p>
                </div>
                <div className='flex items-center gap-2 border rounded-lg p-1'>
                  <Button
                    size='icon'
                    variant='outline'
                    onClick={() => setValue((prev) => Math.max(0, prev - 1))}
                  >
                    <Minus size={16} />
                  </Button>

                  <Input
                    type='number'
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className='w-14 text-center'
                  />

                  <Button
                    size='icon'
                    variant='outline'
                    onClick={() => setValue((prev) => prev + 1)}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
        <SheetFooter className='border-t border-border'>
          {context?.cart && context.cart.length > 0 && (
            <div className='flex items-center justify-between text-lg'>
              <p>Total:</p>
              <p>
                {context?.cart
                  .reduce(
                    (acc, item) =>
                      acc + (item.produto.preco * item.quantidade || 0),
                    0
                  )
                  .toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}{' '}
                {context?.cart[0].produto.moeda}
              </p>
            </div>
          )}
          <Button effect={'expandIcon'} iconPlacement='right' icon={ArrowRight}>
            Finalizar Compra
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet> */}
    </main>
  );
};

export default PaginaCarrinho;
