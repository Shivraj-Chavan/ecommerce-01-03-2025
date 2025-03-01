import React from 'react'
import Navbar from './header/Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function MainLaout() {
  return (
    <div>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </div>
  )
}
