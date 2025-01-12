import React from 'react'
import Conatiner from '../Layer/Conatiner'

import logo from '/logo.png'

import { IoSearch } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
    <div>
        <SearchBar/>
    </div>
  )
}

export default Navbar