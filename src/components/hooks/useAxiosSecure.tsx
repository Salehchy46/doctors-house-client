import { useEffect, useMemo } from "react";
import axios, { type AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export interface AuthContextType {
  user: unknown; // replace 'any' with your User type
  loading: boolean;
  logOut: () => void;
  // ... other properties and methods
}

const axiosSecure: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = (): AxiosInstance => {
  const navigate = useNavigate();
  const { logOut } = useAuth() || {};

  // Use `useMemo` so axiosSecure is not recreated on every render
  const instance = useMemo(() => axiosSecure, []);

  useEffect(() => {
    // Add request interceptor
    const requestInterceptor = instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add response interceptor
    const responseInterceptor = instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error?.response?.status;
        console.log("status error in interceptors:", status);
        if (status === 401 || status === 403) {
          await logOut?.().catch(error => {
            console.error('Logout failed:', error);
            // Handle logout failure gracefully
          });
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptors when component unmounts
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [instance, logOut, navigate]);

  return instance;
};

export default useAxiosSecure;
