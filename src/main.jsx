import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.jsx'
import AuthProvider from './context/AutheProbider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
 <RouterProvider  router={router}>
 <React.StrictMode>
    <App />
  </React.StrictMode>
  </RouterProvider></AuthProvider>
)
