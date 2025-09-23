'use client';

import { getToken, removeToken, setToken } from '@/actions/auth';
import getUser from '@/actions/baixaDadosUser';
import { iUser } from '@/interface/iUser';
import { useRouter } from 'next/navigation';
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
  login: (user: iUser, remember: boolean) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: 'loading',
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState<tLoading>('loading');
  const router = useRouter();

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

  const login = async (u: iUser, remember: boolean) => {
    if (u) {
      if (remember) await setToken(u.jwt);
      setUser(u);
      setLoading('authenticated');
    }
  };

  const logout = async () => {
    await removeToken();
    setUser(null);
    setLoading('unauthenticated');
    router.refresh();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
