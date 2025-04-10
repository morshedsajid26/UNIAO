import React from 'react'
import Container from '../Layer/Container'
import { IoSearch } from 'react-icons/io5'

const Blog = () => {
  return (
   
   <div className=''>
        <Container>
           
           <div className='flex items-center  pt-[51px] pb-[42px] '>
                      <h3 className='text-white font-Inter text-4xl mr-[34px]'>Blog Articles</h3>

                      <div className='w-[756px] flex justify-between'>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px]'>All</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px]'>Gaming</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px]'>Investment</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px]'>Software</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px]'>News</span>
                      </div>

                      <div className="searchBar w-[350px] relative  ml-[320px]">
                                      <input className='bg-[#1E2127] text-[#B2B8C2] font-OS text-[22px] outline-none w-full py-3 px-[23px] rounded-[10px]' type="text" placeholder='Search blog article...' />
                                     
                                      <IoSearch className='w-[22.5px] h-[22.5px] text-[#B2B8C2] absolute top-1/2 -translate-y-1/2 right-4' />
                                      
                                  </div>
              </div>

        </Container>
    </div>
  )
}

export default Blog