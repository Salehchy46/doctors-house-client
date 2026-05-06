import { useEffect, useState, useMemo, type ReactNode } from 'react';
import AuthContext, { type AuthContextType } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
<<<<<<< HEAD
=======
  sendPasswordResetEmail,
  signInWithCredential,
>>>>>>> bb1aec5da84e32cbaf904937d6ddc176aee0eb93
  signOut,
  type User,
} from 'firebase/auth';
import { app } from '@/firebase/firebase.config';

interface AuthProviderProps {
  children: ReactNode;
}

const auth = getAuth(app);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));
  };

  const login = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

<<<<<<< HEAD
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  // @ts-expect-error - Type mismatch but works at runtime
  const authInfo: AuthContextType = useMemo(
    () => ({ user, loading, createUser, login, logOut }),
    [user, loading]
  );
=======
  const forgetPass = (email: string) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  }

  const authInfo = { user, loading, createUser, login, logOut, forgetPass };
>>>>>>> bb1aec5da84e32cbaf904937d6ddc176aee0eb93

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;