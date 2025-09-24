'use client';

import { H1 } from '@/components/ui/h1';

import { Spinner } from '@/components/ui/kibo-ui/spinner';
import { useAuth } from '@/context/AuthContext';
import Cards from './cards';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Perfil = () => {
  const { loading } = useAuth();
  const router = useRouter();

  if (loading === 'unauthenticated') router.push('/');

  return (
    <section className='min-h-container mx-auto max-w-7xl p-6 md:p-12 space-y-3 md:space-y-6'>
      <div className='space-y-3'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={'/'}>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Perfil</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <H1>Perfil:</H1>
      </div>
      {loading === 'loading' ? (
        <div className='min-h-96 flex items-center justify-center'>
          <Spinner className='text-primary' variant='ellipsis' />
        </div>
      ) : (
        <div className='grid gap-6'>
          <Cards.CardEmail />
          <Cards.CardName />
          <Cards.CardPassword />
        </div>
      )}
    </section>
  );
};

export default Perfil;
