import React from 'react'
import Container from '../Layer/Container'

import productDetails from '/productDetails.png'
import star from '/star.png'
import cart from '/cart.png'

import { HiMiniInformationCircle } from 'react-icons/hi2'
import { BiSolidError } from 'react-icons/bi'
import { IoShareSocialSharp } from 'react-icons/io5'
import { HiLightningBolt } from 'react-icons/hi'
import { MdAddShoppingCart } from 'react-icons/md'

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

        <div className="button flex flex-col gap-[18px] mt-[25px] border-b pb-[50px] border-white/20">
          <div className="one flex gap-[14px]">
            <button className='py-2.5 px-3 bg-gradient-to-r from-[#18C5E1] from-0% via-[#8666EF] via-30% to-[#FB01FF] to-100% rounded-[15px] font-OS text-[24px] text-white'>
            PS5
            </button>

            <button className='py-2.5 px-3 border border-white/30 rounded-[15px] font-OS text-[24px] text-white'>
            PS4
            </button>

            <button className='py-2.5 px-3 border border-white/30 rounded-[15px] font-OS text-[24px] text-white'>
            PS3
            </button>
          </div>

          <div className="two flex gap-[14px]">
            <button className='py-2.5 px-3 bg-gradient-to-r from-[#18C5E1] from-0% via-[#8666EF] via-30% to-[#FB01FF] to-100% rounded-[15px] font-OS text-[24px] text-white'>
            Key
            </button>

            <button className='py-2.5 px-3 border border-white/30 rounded-[15px] font-OS text-[24px] text-white'>
            Account
            </button>

          </div>


          <div className="three flex gap-[14px]">
            <button className='py-2.5 px-3 bg-gradient-to-r from-[#18C5E1] from-0% via-[#8666EF] via-30% to-[#FB01FF] to-100% rounded-[15px] font-OS text-[24px] text-white'>
           UK
            </button>

            <button className='py-2.5 px-3 border border-white/30 rounded-[15px] font-OS text-[24px] text-white'>
            EU
            </button>

          </div>


          <div className="four flex gap-[14px]">
            <button className='py-2.5 px-3 bg-gradient-to-r from-[#18C5E1] from-0% via-[#8666EF] via-30% to-[#FB01FF] to-100% rounded-[15px] font-OS text-[24px] text-white'>
            Deluxe
            </button>

            <button className='py-2.5 px-3 border border-white/30 rounded-[15px] font-OS text-[24px] text-white'>
            Complete
            </button>

            <button className='py-2.5 px-3 border border-white/30 rounded-[15px] font-OS text-[24px] text-white'>
            Ultimate
            </button>
          </div>

        </div>

        <div className="button flex gap-5 mt-[42px]">
          <button className='text-[#2BB6E4] text-[24px] py-[13px] px-[18px] border rounded-[10px] border-[#2BB6E4] font-OS'>
          Save 25%
          </button>

          <button className='text-[#E614FC] text-[24px] py-[13px] px-[18px] border rounded-[10px] border-[#E614FC] font-OS flex items-center gap-2'>
            <HiLightningBolt className='w-[20.73px] h-[29.61px]'/>
          Instant Delivery
          </button>


          <button className='text-white text-[24px] py-[13px] px-[18px] border rounded-[10px]  font-OS'>
          Ask Question
          </button>
        </div>

        <div className='w-full bg-white rounded-[10px] py-[15px] pl-[23px] flex items-center mt-[25px]'>
          <img src={cart} alt="" />
          <p className='text-[24px] text-black font-Inter ml-3' >Sold By 
            <span className='text-[#E614FC]'>BigBoyGames</span>
            </p>

            <div className='w-[2px] h-[29px] bg-black mx-5'></div>

            <p className='text-[24px] text-black font-Inter'>100% of 281 ratings 
              <span className='font-bold'> superb!</span></p>
        </div>

        <p className='font-Inter text-[24px] text-white flex justify-center mt-[18px] pb-[29px] border-b border-white/20'>6 More Offers Available Starting From $55.99</p>

        <div className='flex items-center gap-[18px] mt-[31px] border-b border-white/20 pb-10'>

        <div className='flex items-center gap-[2px] md:gap-2.5'>
                <p className='flex flex-col font-OS text-[#78797D] text-[10px] md:text-[20px]'>From 
                    <del>$70 to</del>
                </p>

                <p className='text-[14px] md:text-[32px] text-[#E614FC] font-OS'>$59,99</p>
                </div>

          <button className='bg-gradient-to-br from-[#FF0000] from-1% via-[#FF6300] via-50% to-[#FFC700] to-100% font-OS text-[24px] py-3 px-[22px] rounded-[10px]'>Grab 15% OFF</button> 

           <button className='flex  items-center gap-2 md:py-3 md:px-[22px] py-[5px] px-2 bg-gradient-to-br from-[#00DBDE] from-1% via-50% via-[#7E6EEF] to-[#FC00FF] to-100% rounded-[10px]  cursor-pointer font-OS md:text-[24px] text-[14px] text-white'>
                         <MdAddShoppingCart className='md:w-[33px] md:h-[29px] w-[17px] h-[15px] text-white ' />
                         Buy Now
           </button>

              

        </div>

        <div className='flex items-center justify-center gap-4 mt-6'>
        <HiMiniInformationCircle className='w-[30.22px] h-[30.22px] text-white ' />
        <p className='font-OS text-[22px] text-white'>How to activate</p>
        </div>




        </div>
      </div>


      </Container>
    </div>
  )
}

export default ProductDeatils