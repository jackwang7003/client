import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import PretectedRoute from './components/ProtectedRoute'

import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import Product from './components/Product'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Logout from './components/Logout'
import Admin from './components/Admin'
import AdminProducts from './components/AdminProducts'
import AdminUsers from './components/AdminUsers'
import CartCheckout from './components/CartCheckout'




const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products/:id', element: <Products /> },
      { path: '/Product/:id', element: <Product /> },
      { path: '/Login', element: <Login /> },
      { path: '/Register', element: <Register /> },
      { path: '/Cart', element: <Cart /> },
      { path: '/Logout', element: <Logout />},
      { element: <PretectedRoute />,
        children: [
          { path: '/Admin', element: <Admin /> },
          { path: '/Admin/Products', element: <AdminProducts />},
          { path: '/Admin/Users', element: <AdminUsers />},
          { path: '/Checkout', element: <CartCheckout />},
        ],},
     

            
    ],
  },
]);

const App = () => {
  
  
      
  return (
   
    <div class="App">
        <RouterProvider router={router} />
      
    </div>
   
  )
}

export default App
