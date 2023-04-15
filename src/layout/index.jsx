import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout