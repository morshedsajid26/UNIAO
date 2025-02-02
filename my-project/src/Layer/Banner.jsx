import React from 'react'

import Container from '../Layer/Container'


import { MdAddShoppingCart } from 'react-icons/md'
import { IoStarSharp } from 'react-icons/io5'

import game1 from '/game1.png'
import game2 from '/game2.png'
import game3 from '/game3.png'
import game4 from '/game4.png'
import game5 from '/game5.png'


import path1 from '/path-1.png'
import path2 from '/path-2.png'
import path3 from '/path-3.png'
import path4 from '/path-4.png'
import line from '/line.png'


const Banner = () => {
  return (
    <div className='pb-4'>

<Container className='bg-[url("/public/banner.png")] h-[445px] md:w-full bg-cover bg-center  w-[327px] md:h-[730px] after:rounded-[25px]  bg-no-repeat pb-[42px] md:pb-[87px]  pt-[103px] relative after:absolute after:content-[""] after:h-full  after:w-full  after:bg-black/10 after:top-0 after:left-0 after:-z-30 md:block flex items-end rounded-[25px] '>

<div className='pl-[27px] md:pl-[69px]   z-30'>


<div className='icons flex items-center gap-4 md:gap-7 '>

    <img src={path1} alt="" />
    <img src={path2} alt="" />
    <img className='w-[1px] h-[29px]' src={line} alt="" />
    <img src={path3} alt="" />
    <img src={path4} alt="" />

</div>

<h3 className='font-Inter text-white md:text-[68px] text-[26px] mt-[17px]'>Death Stranding</h3>

<div className='flex gap-5 items-start  mt-4'>
 <div >
   <p className='font-OS text-white/50 text-[13px] md:text-[18px]  '>From 
   <del className='text-[21px] md:text-[28px] ml-[9px] mr-4'>$70</del>
    to 
    <span className='text-[21px] md:text-[28px] text-[#E614FC] ml-[6px]'>$59,99 </span></p>
   <button className='flex  items-center gap-2 md:p-4 py-[5px] px-2 bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% rounded-xl mt-[26px] cursor-pointer'>
   <MdAddShoppingCart className='md:w-[33px] md:h-[29px] w-[17px] h-[15px] text-white ' />
   <p className='font-OS md:text-[24px] text-[14px] text-white'>Buy Now</p>
   </button>
 </div>

 <div className='hidden gap-[3px] md:flex'>
 <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
 <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
 <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
 <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
 <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
 </div>

</div>


<div className='hidden md:flex gap-[35px] items-end mt-[103px]'>
 <img className='border-4 border-white/30 rounded-[25px] p-1' src={game1} alt="" />
 <img className='border-4 border-white/30 rounded-[25px] p-1' src={game2} alt="" />
 <img className='border-4 border-white/30 rounded-[25px] p-1' src={game3} alt="" />
 <img className='border-4 border-white/30 rounded-[25px] p-1' src={game4} alt="" />
 <img className='border-4 border-white/30 rounded-[25px] p-1' src={game5} alt="" />
</div>

</div>


 </Container>
    </div>
  )
}

export default Banner