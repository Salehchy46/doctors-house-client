import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "next-themes";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';
import AuthProvider from './context/AuthContext/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
