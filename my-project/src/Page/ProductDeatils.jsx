import React from 'react'
import Container from '../Layer/Container'

import productDetails from '/productDetails.png'
import { HiMiniInformationCircle } from 'react-icons/hi2'

const ProductDeatils = () => {
  return (
    <div className='py-[120px]' >
      <Container className='flex justify-between'>
      <div className="left w-[817px]">
        <div className="image">
          <img src={productDetails} alt="" />
        </div>

        <div className='border border-white/20 rounded-[10px] mt-[30px] flex items-center pl-4 py-3'>
        <HiMiniInformationCircle className='w-[30px] h-[30px] text-white ' />
          <p className='font-OS text-white text-[22px]   ml-4'>This is a Playstation Account Access (This is not code/key) 
            <span className='underline'>  Learn More</span></p>
        </div>

      </div>

      <div className="right w-[817px] bg-gradient-to-b from-[#18C5E1] from-0% via-[#8666EF] via-30% to-[#FB01FF] to-100% p-[2px] rounded-[25px] ">

        <div className='bg-[#1E2127] h-full rounded-[25px] py-7 px-[59px]'>d</div>


      </div>


      </Container>
    </div>
  )
}

export default ProductDeatils