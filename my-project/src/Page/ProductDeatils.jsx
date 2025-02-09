import React from 'react'
import Container from '../Layer/Container'

import productDetails from '/productDetails.png'
import star from '/star.png'

import { HiMiniInformationCircle } from 'react-icons/hi2'
import { BiSolidError } from 'react-icons/bi'
import { IoShareSocialSharp } from 'react-icons/io5'

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
      <div className='bg-[#1E2127] h-full rounded-[25px] py-7 px-[59px]'>


        <div className="top w-full flex items-center justify-center pb-5 border-b border-white/20">
        <BiSolidError className='w-[30px] h-7 text-white' />
        <p className='font-OS text-white text-[23px] ml-2.5'>Can not be activated in Sweden</p>

        </div>


        <div className='flex items-center mt-[34px] '>
          <div className="icon w-[200px] rounded-full bg-[#15181D] flex items-center justify-center gap-1 py-[12.5px]">
            <img className='w-[29.4px] h-7' src={star} alt="" />
            <img className='w-[29.4px] h-7' src={star} alt="" />
            <img className='w-[29.4px] h-7' src={star} alt="" />
            <img className='w-[29.4px] h-7' src={star} alt="" />
            <img className='w-[29.4px] h-7' src={star} alt="" />
          </div>
          <div className="review ml-[19px] mr-[233px]">
            <p className='font-Inter text-[23px] text-[#787A7D]'>5.0 (457 Reviews)</p>
          </div>
          <div className="icon w-[54px] h-[54px] rounded-full bg-[#15181D] flex items-center justify-center ">
          <IoShareSocialSharp className='w-[27.66px] h-[29.09px] text-white' />
          </div>
        </div>

        <h1 className='font-OS text-[58px] text-white mt-[5px]'>The Last Of Us Part II</h1>




        </div>
      </div>


      </Container>
    </div>
  )
}

export default ProductDeatils