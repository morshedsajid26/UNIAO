import React from 'react'


import Footer from '../Component/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header'
import SearchBar from '../Component/SearchBar'

const RootLayout = () => {
  return (
    <div className='bg-[#15181D] overflow-hidden'>
        <SearchBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout