'use client';

import { getToken, removeToken, setToken } from '@/actions/auth';
import getUser from '@/actions/baixaDadosUser';
import logaUsuario from '@/actions/login';
import { iApiResponse } from '@/interface/iApiResponse';
import { iUser } from '@/interface/iUser';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

type tLoading = 'loading' | 'authenticated' | 'unauthenticated';

interface AuthContextProps {
  user: iUser | null;
  loading: tLoading;
  login: (
    identifier: string,
    password: string,
    remember: boolean
  ) => Promise<iApiResponse>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: 'loading',
  login: async () => ({ status: 'error', data: null, errorMessage: null }),
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState<tLoading>('loading');

  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (token) {
        const res = await getUser({ token });
        if (res.status === 'success' && res.data) {
          setUser(res.data);
          setLoading('authenticated');
        } else {
          setUser(null);
          setLoading('unauthenticated');
        }
      }
    })();
  }, []);

  const login = async (
    identifier: string,
    password: string,
    remember: boolean
  ) => {
    const res = await logaUsuario({ identifier, password });
    if (res.status === 'success') {
      if (remember) await setToken(res.data?.jwt as string);
      setUser(res.data);
      setLoading('authenticated');
    }
    return res;
  };

  const logout = async () => {
    await removeToken();
    setUser(null);
    setLoading('unauthenticated');
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
