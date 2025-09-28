import { createContext } from 'react';
import type { User } from 'firebase/auth';

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<unknown>;
  login: (email: string, password: string) => Promise<unknown>;
  logOut: () => Promise<void>;
}

// createContext needs an initial value
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
