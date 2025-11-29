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
  
  const logOutRef = useRef(logOut);
  const navigateRef = useRef(navigate);

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
          console.log("AxiosSecure: Token attached to request");
        } else {
          console.log("AxiosSecure: No token found");
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        // DON'T automatically handle 401/403 here
        // Let the component handle it
        console.log("AxiosSecure: Response error", error.response?.status);
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, []); 

  return axiosSecure;
};

export default useAxiosSecure;