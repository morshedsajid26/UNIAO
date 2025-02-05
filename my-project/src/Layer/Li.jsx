import React from 'react'
import { NavLink } from 'react-router-dom'

const Li = ({className,src,imageClass,href}) => {
  return (
    <li className='group' >
        <NavLink className={`w-[58px] h-[58px] md:w-20 md:h-20 flex justify-center hover: items-center relative after:absolute after:content-[""] after:w-full after:h-full after:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% after:top-0 after:left-0 z-10 after:-z-10 after:opacity-0 hover:after:opacity-100 after:duration-300  after:cursor-pointer !transition-all after:border   after:rounded-[10px] border md:border-0 rounded-[10px]  ${className} `} to={href}
        
        // end
        // style={({ isActive }) => ({
        //   background: isActive ? "#262626" : "#767676",
          
          
          
          
          
        // })} 
        >
            <img className={imageClass} src={src} alt="" />
        </NavLink>
    </li>
  )
}

export default Li