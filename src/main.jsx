import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DataProvider from './provider/DataProvider.jsx'
import router from './router/Router.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>,
)
