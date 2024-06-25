import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { ProductProvider } from './Context/ProductContext'


function AppLayout() {
  return (
    <ProductProvider>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ProductProvider>
  )
}

export default AppLayout