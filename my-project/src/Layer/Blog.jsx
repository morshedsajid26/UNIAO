import React from 'react'
import Container from './Container'

import blog1 from '/blog1.png'
import blog2 from '/blog2.png'
import { PiClockCountdownFill } from 'react-icons/pi'
import { IoMdEye } from 'react-icons/io'


let BlogCard =({src})=> {
  return (
    <div className='w-[327px] md:w-[817px] bg-[#1E2127] rounded-[30px] flex items-center gap-[35px] py-[14px] md:py-[27px] px-[10px] md:px-[24px]'>
      <div>
        <img className='w-[121px] h-[107px] md:w-full md:h-full' src={src} alt="" />
      </div>

      <div className='w-[160px] md:w-[330px]'>
              <p className='font-OS text-[14px] md:text-[30px] text-white'>Game Keys The Best 
              Websites for Affordable 
              Gaming Deals</p>

              <p className='font-OS text-[13px] md:text-[28px] text-[#E614FC] md:mt-9 md:mb-[21px] my-[9px] '>19 Sep, 23</p>

              <div className="icon flex gap-[22px] text-white/40">
             
              <div className='flex items-center gap-[7px] '>
              <PiClockCountdownFill className='w-[17px] h-[17px] md:w-[31px] md:h-[31px] ' />
              <p className='font-OS text-[13px] md:text-[20px]'>3 min read</p>
              </div>

              <div className='md:flex items-center gap-[7px] hidden  '>
              <IoMdEye className='w-[33px] h-[26px]'/>
              <p className='font-OS text-[20px]'>1230</p>
              </div>

              </div>
      </div>

    </div>




  )
}


const Blog = () => {
  return (
    <div className='pt-[168px]'>
        <Container>

        <div className='flex items-center justify-center gap-[43px] mb-[35px]'>
                <h1 className='text-[16px] md:text-[36px] font-OS text-white'>Blog Articles</h1>
                <div className='h-[1px] md:h-[2px] w-[66px] md:w-[1140px] bg-custom-gradient'
                ></div>



                

                <button className='border py-[7px] md:py-3 px-[10.5px] md:px-[18px] text-white font-OS text-[12px] md:text-[24px] rounded-[10px]'>
                        Browse All
                    </button>
            </div>


            <div className='flex flex-col md:flex-row md:justify-between mt-[42px] gap-[17px] md:gap-0'>
              <BlogCard
              src={blog1}/>
            

            <BlogCard
              src={blog2}/>
            </div>

        </Container>
    </div>
  )
}

export default Blog