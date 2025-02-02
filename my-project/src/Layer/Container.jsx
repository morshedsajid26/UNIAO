import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={` max-w-[327px] md:max-w-[1664px] mx-auto ${className}`}>{children}</div>
  )
}

export default Container