'use client';

import { getToken, removeToken, setToken } from '@/actions/auth';
import getUser from '@/actions/baixaDadosUser';
import { iUser } from '@/interface/iUser';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface AuthContextProps {
  user: iUser | null;
  login: (user: iUser, remember: boolean) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<iUser | null>(null);

  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (token) {
        const res = await getUser({ token });
        console.log(res);
        if (res.status === 'success' && res.data) {
          setUser(res.data);
        } else {
          setUser(null);
        }
      }
    })();
  }, []);

  const login = async (u: iUser, remember: boolean) => {
    if (u) {
      if (remember) await setToken(u.jwt);
      setUser(u);
    }
  };

  const logout = async () => {
    await removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
