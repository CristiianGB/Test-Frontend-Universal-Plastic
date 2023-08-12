import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import { ContextProvider} from './store/Context';
import { RouterProvider } from'react-router-dom'
import router from './router/routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </ContextProvider>
  </React.StrictMode>
)
