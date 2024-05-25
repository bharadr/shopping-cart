import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShopContents } from './components/Shop'
import { HomeContents } from './components/Home'
import { ErrorElem } from './components/ErrorElem'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomeContents /> },
      { path: "shop", element: <ShopContents /> },
    ],
    errorElement: <ErrorElem />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
