import React from 'react'
import Container from '../Layer/Container'
import { IoSearch, IoTimerSharp } from 'react-icons/io5'

// import BlogBanner from '/BlogBanner.png'

const Blog = () => {
  return (
   
   <div className=''>
        <Container>
           
           <div className='flex items-center  pt-[51px] pb-[42px] '>
                      <h3 className='text-white font-Inter text-4xl mr-[34px]'>Blog Articles</h3>

                      <div className='w-[756px] flex justify-between'>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300 '>All</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Gaming</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Investment</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Software</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>News</span>
                      </div>

                      <div className="searchBar w-[350px] relative  ml-[320px]">
                                      <input className='bg-[#1E2127] text-[#B2B8C2] font-OS text-[22px] outline-none w-full py-3 px-[23px] rounded-[10px]' type="text" placeholder='Search blog article...' />
                                     
                                      <IoSearch className='w-[22.5px] h-[22.5px] text-[#B2B8C2] absolute top-1/2 -translate-y-1/2 right-4' />
                                      
                                  </div>
              </div>

              <div className=' bg-[url("/public/BlogBanner.png")] bg-cover bg-center bg-no-repeat h-[730px] w-[1664px] relative after:absolute after:w-full after:h-full after:bg-black/20 after:top-0 after:left-0 after:rounded-[25px] after:-z-30 z-30 '>

              <div className='pl-[69px] pt-[242px]'>



              <div className='flex gap-[11px]'>
                <span className='py-1 px-2.5 bg-white font-OS text-[18px] rounded-[10px]'>Gaming</span>

                <span className='py-1 px-2.5 bg-white font-OS text-[18px] rounded-[10px]'>Stray</span>
              </div>

              <h3 className='font-Inter text-white text-[68px] mt-[9px] mb-[22px]'>Top digital game releases</h3>

              <div className='flex items-center gap-[22.5px]'>
                <p className='text-[24px] font-Inter text-[#E614FC]'>19 Sep, 23</p>

                <p className='text-white font-OS text-[20px] flex items-center gap-[7px]'>
                <IoTimerSharp className='text-white/40 h-[31px] w-[31px]' />
               
                3 min read
                
                </p>
              </div>


              </div>
              
                
              </div>

        </Container>
    </div>
  )
}

export default Blog