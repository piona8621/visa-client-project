import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from './provider/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Router}/>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
