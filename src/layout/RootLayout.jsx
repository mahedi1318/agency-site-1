import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar part/Navbar'
import Footer from '../components/Footer part/Footer'

const RootLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default RootLayout
