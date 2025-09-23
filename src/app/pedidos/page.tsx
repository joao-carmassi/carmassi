'use client';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { H1 } from '@/components/ui/h1';
import { Spinner } from '@/components/ui/kibo-ui/spinner';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const Perfil = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading === 'unauthenticated') router.push('/');

  return (
    <section className='min-h-container mx-auto max-w-7xl p-6 md:p-12 space-y-3 md:space-y-6'>
      <div className='space-y-3'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Pedidos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <H1>Pedidos:</H1>
      </div>
      {loading === 'loading' ? (
        <div className='min-h-96 flex items-center justify-center'>
          <Spinner className='text-primary' variant='ellipsis' />
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Perfil;
