import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutOne from './layout/LayoutOne.jsx'
import Homepage from './pages/homepage/Homepage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutOne/>,
    children:[
      {
        path: '/',
        element: <Homepage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)