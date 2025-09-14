import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "next-themes";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
