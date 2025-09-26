import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { app } from '@/firebase/firebase.config';

interface AuthProviderProps {
  children: ReactNode;
}

const auth = getAuth(app);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
    })
    
    return() => {
        unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
