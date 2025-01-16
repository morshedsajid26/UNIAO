import React from 'react'
import Container from '../Layer/Conatiner'

import star from '/star.png'
import trustpilot from '/trustpilot.png'


const Footer = () => {
  return (
    <div className=' max-w-[1862px] mx-auto  bg-[#1E2127] g-gradient-to-l from-[#18C5E1] from-0% via-[#8666EF] via-30% to-[#FB01FF] to-100% bg-clip-border border-transparent  '>
        <Container className=' px-[100px]'>

           <div className="top grid grid-cols-12 justify-between gap-10">
            <div className="child col-span-3 bg-slate-500">
              <h3 className='text-[28px] text-[#FFFFFF] font-medium '>Trustful</h3>

              <div className="logo flex items-end gap-[6px] ">
                <img className='w-[61.24px] h-[58.73px]' src={star} alt="" />
                <img className='w-[188.74px] h-[41.16px]' src={trustpilot} alt="" />
              </div>

              <div className="rating"></div>
            </div>


            <div className="child col-span-2 bg-slate-500">
              <ul>
                <p className='text-white font-pop'>Company</p>

                <li>Home</li>
                <li>Our Story</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="child col-span-2 bg-slate-500">1</div>
            <div className="child col-span-3 bg-slate-500">1</div>
            <div className="child col-span-2 bg-slate-500">1</div>
           </div>

        </Container>
    </div>
  )
}

export default Footer