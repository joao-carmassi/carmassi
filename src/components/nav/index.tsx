import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import BotoesNav from './botoesNav';
import Link from 'next/link';

interface Props {
  categorias: string[];
}

export default function Navbar({ categorias }: Props) {
  const navigationLinks = [
    { href: '/', label: 'Home' },
    {
      label: 'Produtos',
      submenu: true,
      items: [
        { label: 'Todos', href: '/produtos' },
        ...categorias.map((categoria) => ({
          label: categoria,
          href: `/produtos?q=${categoria}`,
        })),
      ],
    },
    {
      label: 'Coleções',
      href: '/colecoes',
    },
  ];
  return (
    <header className='bg-card w-full fixed top-0 z-40 shadow-sm'>
      <div className='flex h-16 items-center justify-between gap-4 max-w-7xl mx-auto px-6 md:px-12'>
        {/* Left side */}
        <div className='flex items-center gap-2'>
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className='group size-8 md:hidden'
                variant='ghost'
                size='icon'
              >
                <svg
                  className='pointer-events-none'
                  width={16}
                  height={16}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 12L20 12'
                    className='origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]'
                  />
                  <path
                    d='M4 12H20'
                    className='origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45'
                  />
                  <path
                    d='M4 12H20'
                    className='origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]'
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align='start' className='w-64 p-1 md:hidden'>
              <NavigationMenu className='max-w-none *:w-full'>
                <NavigationMenuList className='flex-col items-start gap-0 md:gap-2'>
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className='w-full'>
                      {link.submenu ? (
                        <>
                          <div className='text-primary px-2 py-1.5 text-xs font-semibold'>
                            {link.label}
                          </div>
                          <ul>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  asChild
                                  className='py-1.5 hover:text-card'
                                >
                                  <Link href={item.href}>{item.label}</Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavigationMenuLink
                          asChild
                          className='py-1.5 hover:text-card'
                        >
                          <Link href={link.href as string}>{link.label}</Link>
                        </NavigationMenuLink>
                      )}
                      {/* Add separator between different types of items */}
                      {index < navigationLinks.length - 1 &&
                        // Show separator if:
                        // 1. One is submenu and one is simple link OR
                        // 2. Both are submenus but with different types
                        ((!link.submenu &&
                          navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            !navigationLinks[index + 1].submenu) ||
                          (link.submenu &&
                            navigationLinks[index + 1].submenu)) && (
                          <div
                            role='separator'
                            aria-orientation='horizontal'
                            className='bg-border -mx-1 my-1 h-px w-full'
                          />
                        )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className='flex items-center gap-6'>
            <Link href='/' className='text-primary hover:text-primary/90'>
              <Logo />
            </Link>
            {/* Navigation menu */}
            <NavigationMenu viewport={false} className='max-md:hidden'>
              <NavigationMenuList className='gap-2'>
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className='text-muted-foreground hover:text-card bg-transparent px-2 py-1.5 font-medium *:[svg]:-me-0.5 *:[svg]:size-3.5'>
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className='data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16! z-50 p-1'>
                          <ul className={cn('min-w-48')}>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink
                                  asChild
                                  className='py-1.5 hover:text-card'
                                >
                                  <Link href={item.href}>{item.label}</Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        asChild
                        className='text-muted-foreground hover:text-card py-1.5 font-medium'
                      >
                        <Link href={link.href as string}>{link.label}</Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className='flex items-center gap-2'>
          <BotoesNav />
        </div>
      </div>
    </header>
  );
}
