import React from 'react'
import Container from '../Layer/Conatiner'

import bannerIcons from '/bannerIcons.png'
import { MdAddShoppingCart } from 'react-icons/md'
import { IoStarSharp } from 'react-icons/io5'

const Home = () => {
  return (
    <div>
      <Container className='bg-[url("/public/banner.png")] py-40 relative after:absolute after:content-[""] after:h-full after:w-full after:bg-black/10 after:top-0 after:left-0 '>

     <div className='pl-[69px] z-30'>
     <img src={bannerIcons} alt="" />

     <h3 className='font-Inter text-white text-[68px] mt-[17px]'>Death Stranding</h3>

     <div className='flex gap-5 items-start  mt-4'>
      <div >
        <p className='font-OS text-white/50 text-[18px]  '>From 
        <del className='text-[28px] ml-[9px] mr-4'>$70</del>
         to 
         <span className='text-[28px] text-[#E614FC] ml-[6px]'>$59,99 </span></p>
        <button className='flex  items-center gap-2 p-4 bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% rounded-xl mt-[26px] cursor-pointer'>
        <MdAddShoppingCart className='w-[33px] h-[29px] text-white ' />
        <p className='font-OS text-[24px] text-white'>Buy Now</p>
        </button>
      </div>

      <div className='flex gap-[3px]'>
      <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
      <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
      <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
      <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
      <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
      </div>

     </div>

     </div>


      </Container>
    </div>
  )
}

export default Home