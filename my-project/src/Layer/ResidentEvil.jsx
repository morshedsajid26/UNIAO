import React from 'react'
import path1 from '/path-1.png'
import path2 from '/path-2.png'
import path3 from '/path-3.png'
import path4 from '/path-4.png'
import line from '/line.png'
import { MdAddShoppingCart } from 'react-icons/md'
import { IoStarSharp } from 'react-icons/io5'
import Container from './Conatiner'

import resident from '/resident.png'

const ResidentEvil = () => {
  return (
    <div className='py-10'>
          <Container className='grid grid-cols-2 gap-10'>




    <div className="left  bg-gradient-to-r from-[#18C5E1] from-0% via-[#8666EF] via-47% to-[#FB01FF] to-100% p-[2px] grid-cols-1 rounded-[25px]">
        <div className='bg-[#1E2127] pt-[75px] pb-[50px] pl-[63px] rounded-[25px] relative '>


            <div className='icons flex items-center gap-4 md:gap-7 '>
            
                <img src={path1} alt="" />
                <img src={path2} alt="" />
                <img className='w-[1px] h-[29px]' src={line} alt="" />
                <img src={path3} alt="" />
                <img src={path4} alt="" />
            
            </div>
            <h3 className='font-Inter text-white md:text-[68px] text-[26px] mt-[17px]'>RE4 Remake DLC</h3>

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
            
             <div className=' gap-[3px] mt-[3px] flex'>
             <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
             <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
             <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
             <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
             <IoStarSharp className='w-[30px] h-[28.5px] bg-gradient-to-r from-[#00DBDE] from-1% to-[#FC00FF] to-100% bg-clip-text text-white' />
             </div>
            
            </div>

            <div className="discount w-[108px] h-[125px] bg-gradient-to-tr from-[#00DBDE]  from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100%  absolute top-0 right-[70px] flex justify-center text-center items-center ">
                <p className='text-[28px] font-OS text-white'>Save 25%</p></div>
        </div>
    </div>

    <div className="right grid-cols-1">
    <img src={resident} alt="" />
</div>
    
</Container>
    </div>
  )
}

export default ResidentEvil