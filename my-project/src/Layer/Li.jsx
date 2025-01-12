import React from 'react'
import { NavLink } from 'react-router-dom'

const Li = ({className,src}) => {
  return (
    <li className={`${className}`}>
        <NavLink>
            <img src={src} alt="" />
        </NavLink>
    </li>
  )
}

export default Li