import React from 'react'


import Footer from '../Component/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header'

const RootLayout = () => {
  return (
    <div className='bg-[#15181D] overflow-hidden'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout