'use server';

import { cookies } from 'next/headers';

const TOKEN_KEY = 'auth-token';

export async function setToken(token: string) {
  (await cookies()).set({
    name: TOKEN_KEY,
    value: token,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  });
}

export async function getToken(): Promise<string | null> {
  const cookie = (await cookies()).get(TOKEN_KEY);
  return cookie?.value || null;
}

export async function removeToken() {
  (await cookies()).delete(TOKEN_KEY);
}
