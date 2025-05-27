import React from 'react'

import logo from '/logo.png'

import menu from '/MenuBar.png'
import Badge from '@mui/material/Badge';

import { IoSearch } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import Container from '../Layer/Container';
import { useNavigate } from 'react-router-dom'



const SearchBar = () => {
  let nevigate= useNavigate()
  return (
    <div>
        <Container className='border-b border-white/10 pt-[50px] pb-[18.5px] md:pb-[36px] flex items-center justify-between'>
            <div className="logo md:w-[213.63px] flex gap-[14px] items-center">
              <img className='block md:hidden' src={menu} alt="" />
                <a href="/">
                <img className='w-[121.16px] md:w-full' src={logo} alt="logo.png" />
                </a>
            </div>

            <div className="searchBar w-[853.45px] relative md:block hidden">
                <input className='bg-[#1E2127] text-[#B2B8C2] font-OS text-[22px] outline-none w-full py-3 px-[23px] rounded-[10px]' type="text" placeholder='Search products, sellers, deals...' />
               
                <IoSearch className='w-[22.5px] h-[22.5px] text-[#B2B8C2] absolute top-1/2 -translate-y-1/2 right-4' />
                
            </div>

            <div className="icon  md:w-[246.11px] flex gap-[14px] md:gap-[34px] items-center ">
            <AiFillDollarCircle className='w-[24.3px] md:w-[37.11px] h-[24.3px] md:h-[37.11px] text-white' />
            <FaHeart className='w-[23.98px] md:w-[36.27px] h-[23.36px] md:h-[32.3px] text-white'/>


            <div className='relative'>
            <Badge badgeContent={2} color="primary">
            <FaShoppingBag onClick={()=> nevigate ('/checkout/')} className='w-[22.19px] md:w-[33.56px] h-[25.76px] md:h-[38.95px] text-white  cursor-pointer ' /> 
            </Badge>

            
            {/* <div className='w-[17px] md:w-7 h-[17px] md:h-7 rounded-full bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% flex items-center justify-center text-white font-OS font-bold text-[11px] md:text-[19px] absolute -top-[9px] -right-[14px] '>2

            </div> */}


            </div>          
            <FaCircleUser className='w-[24.51px] md:w-[37.06px] h-[24.5px] md:h-[37.06px] text-white' />


            </div>
        </Container>
    </div>
  )
}

export default SearchBar