import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Product from './components/Product'
import ProductList from './components/ProductsList'
import ContactUS from './components/ContactUS'

export default function App() {
  const routerObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"home",
          element:<Home/>
        },
        {
          path:"productsList",
          element:<ProductList/>
        },
        {
          path:"contact",
          element:<ContactUS/>
        },
        {
          path:"product",
          element:<Product/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routerObj}/>
  )
}
