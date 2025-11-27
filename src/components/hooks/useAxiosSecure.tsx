import { useEffect, useRef } from "react";
import axios, { type AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = (): AxiosInstance => {
  const navigate = useNavigate();
  const { logOut } = useAuth() || {};
  
  // Use refs for stable references
  const logOutRef = useRef(logOut);
  const navigateRef = useRef(navigate);

  // Update refs when dependencies change
  useEffect(() => {
    logOutRef.current = logOut;
    navigateRef.current = navigate;
  }, [logOut, navigate]);

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error?.response?.status;
        console.log("status error in interceptors:", status);
        
        if (status === 401 || status === 403) {
          try {
            await logOutRef.current?.();
          } catch (logoutError) {
            console.error('Logout failed:', logoutError);
          } finally {
            navigateRef.current("/login");
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, []); // Empty dependencies since we use refs

  return axiosSecure;
};

export default useAxiosSecure;