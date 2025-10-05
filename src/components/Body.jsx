import React from 'react'
import Navbar from './NavBar'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Body() {
  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default Body
