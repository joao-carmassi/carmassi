import { getToken } from '@/actions/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken();

  if (!token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

// Define quais rotas o middleware vai proteger
export const config = {
  matcher: ['/perfil', '/pedidos'],
};
