import React, { useContext } from 'react';
import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '@/context/AuthContext/AuthContext';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation();
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('AuthContext not found. Make sure AuthProvider wraps your app.');
  }

  const { user, loading } = auth;

  if (loading) {
    return (
      <span className="loading loading-spinner loading-xl mx-auto flex justify-center my-[209px]"></span>
    );
  }

  if (user) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
