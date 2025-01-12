import React from 'react'

const Conatiner = ({children,className}) => {
  return (
    <div className={` max-w-[1664px] mx-auto ${className}`}>{children}</div>
  )
}

export default Conatiner