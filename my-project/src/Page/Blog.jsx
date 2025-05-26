import React from 'react'
import Container from '../Layer/Container'
import { IoSearch, IoTimerSharp } from 'react-icons/io5'


import BlogBanner1 from '/BlogBanner1.png'
import BlogBanner2 from '/BlogBanner2.png'
import BlogBanner3 from '/BlogBanner3.png'
import BlogBanner4 from '/BlogBanner4.png'
import BlogBanner5 from '/BlogBanner5.png'
import ArticlePaginate from '../Component/ArticlePaginate'





const Blog = () => {
  return (
   
   <div className=''>
        <Container>
           
           <div>
                      <div className='flex items-center   pt-4 md:pt-[51px] pb-2.5 md:pb-[42px] '>
                                 <h3 className='text-white font-Inter text-[16px] md:text-[36px] mr-[34px]'>Blog Articles</h3>
           
                                 <div className='w-[756px]  justify-between hidden md:flex'>
                                   <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300 '>All</span>
                                   <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Gaming</span>
                                   <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Investment</span>
                                   <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Software</span>
                                   <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>News</span>
                                 </div>
           
                                 <div className="searchBar w-[186.85px] md:w-[350px] relative  md:ml-[320px] ">
                                                 <input className='bg-[#1E2127] text-[#B2B8C2] font-OS text-[12px] md:text-[22px] outline-none w-full py-[7.5px] md:py-3 px-[12.5px] md:px-[23px] rounded-[10px]' type="text" placeholder='Search blog article...' />
                                                
                                                 <IoSearch className='w-[22.5px] h-[22.5px] text-[#B2B8C2] absolute top-1/2 -translate-y-1/2 right-4' />
                                                 
                                 </div>
           
                                 
                         </div>
                         <div className='w-[327px]  justify-between md:hidden flex pb-7 '>
                                   <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300 '>All</span>
                                   <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Gaming</span>
                                   <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Investment</span>
                                   <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Software</span>
                                   <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>News</span>
                                 </div>
                      </div>

              <div className=' bg-[url("/public/BlogBanner.png")] h-[445px] md:h-full bg-cover bg-right md:bg-center bg-no-repeat w-[327px]  md:w-[1664px] relative after:absolute after:w-full after:h-full after:bg-black/20 after:top-0 after:left-0 after:rounded-[25px] after:-z-30 z-30 rounded-[25px]   '>

              <div className='pl-7 md:pl-[69px] pt-[270px]  md:pt-[242.8px]'>



             <div className='flex gap-[6px]  md:gap-[11px]'>
                                     <span className='py-1 px-[6px] md:px-2.5 bg-white font-OS text-[12px] md:text-[18px] rounded-[10px]'>Gaming</span>
             
                                     <span className='py-1 px-[6px] md:px-2.5 bg-white font-OS text-[12px] md:text-[18px] rounded-[10px]'>Stray</span>
                                   </div>
             
                                   <h3 className='font-Inter text-white w-[198px] md:w-auto text-[26px] md:text-[68px] mt-[9px] mb-[17px] md:mb-[22px]'>Top digital game releases</h3>
             
                                   <div className='flex items-center gap-3 md:gap-[22.5px]'>
                                     <p className='text-[13px] md:text-[24px] font-Inter text-[#E614FC]'>19 Sep, 23</p>
             
                                     <p className='text-white font-OS text-[14px] md:text-[20px] flex items-center gap-[5px] md:gap-[7px]'>
                                     <IoTimerSharp className='text-white/40 h-[17px] md:h-[31px] w-[17px] md:w-[31px]' />
                                   
                                     3 min read
                                     
                                     </p>
                                   </div>


             


              </div>
               
               
               <div className='flex justify-between md:justify-normal md:gap-[35px] items-end mt-[46px] md:pb-[79px] md:pl-[69px]'>
               <img className='w-[85px] md:w-auto h-[85px] md:h-auto border-2 md:border-4 border-white/30 rounded-[15px] md:rounded-[25px] p-1' src={BlogBanner1} alt="" />
               <img className='w-[62px] md:w-auto h-[62px] md:h-auto border-2 md:border-4 border-white/30 rounded-[15px] md:rounded-[25px] p-1' src={BlogBanner2} alt="" />
               <img className='w-[62px] md:w-auto h-[62px] md:h-auto border-4 border-white/30 rounded-[15px] md:rounded-[25px] p-1 hidden md:block' src={BlogBanner3} alt="" />
               <img className='w-[62px] md:w-auto h-[62px] md:h-auto border-2 md:border-4 border-white/30 rounded-[15px] md:rounded-[25px] p-1' src={BlogBanner4} alt="" />
               <img className='w-[62px] md:w-auto h-[62px] md:h-auto border-2 md:border-4 border-white/30 rounded-[15px] md:rounded-[25px] p-1' src={BlogBanner5} alt="" />
              </div>
                
              </div>

        </Container>

        <Container className='  pt-[202px] pb-20 md:pb-[196px]'>
        <div className='flex items-center justify-between mb-4 md:mb-[35px]'>
                <h1 className='text-[14px] md:text-[36px] font-OS text-white'>Latest articles</h1>
                <div className='h-[1px] md:h-[2px] w-[205px] md:w-[1324px] bg-custom-gradient'
                ></div>

                
            </div>

            <div>

              <ArticlePaginate
              itemsPerPage={9}
              />

            </div>
        </Container>
    </div>
  )
}

export default Blog