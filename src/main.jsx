import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AnimationProvider from './context/animationProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimationProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AnimationProvider>
  </React.StrictMode>,
)
