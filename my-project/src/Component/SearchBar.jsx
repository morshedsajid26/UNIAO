import React from 'react'

import logo from '/logo.png'

import { IoSearch } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import Container from '../Layer/Conatiner';



const SearchBar = () => {
  return (
    <div>
        <Container className='border-b border-white/10 pt-[50px] pb-[36px] flex items-center justify-between'>
            <div className="logo w-[213.63px]">
                <img src={logo} alt="logo.png" />
            </div>

            <div className="searchBar w-[853.45px] relative">
                <input className='bg-[#1E2127] text-[#B2B8C2] font-OS text-[22px] outline-none w-full py-3 px-[23px] rounded-[10px]' type="text" placeholder='Search products, sellers, deals...' />
               
                <IoSearch className='w-[22.5px] h-[22.5px] text-[#B2B8C2] absolute top-1/2 -translate-y-1/2 right-4' />
                
            </div>

            <div className="icon w-[246.11px] flex justify-between items-center">
            <AiFillDollarCircle className='w-[37.11px] h-[37.11px] text-white' />
            <FaHeart className='w-[36.27px] h-[32.3px] text-white'/>
            <FaShoppingBag className='w-[33.56px] h-[38.95px] text-white' />           
            <FaCircleUser className='w-[37.06px] h-[37.06px] text-white' />

            </div>
        </Container>
    </div>
  )
}

export default SearchBar