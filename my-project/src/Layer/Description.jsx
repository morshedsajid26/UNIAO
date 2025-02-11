import React from 'react'
import Container from './Container'

import star from '/star.png'
import { MdAddShoppingCart } from 'react-icons/md'

let OfferCard = () => {
    return (
      <div className=' flex items-center justify-between'>
        <input type="text" placeholder='Sellername ' className='outline-none w-[219px] pl-5 py-[14px] font-OS text-[23px] text-black rounded-[10px]' />

        <div className='flex items-center gap-[3px] py-[15px] px-4 bg-[#15181D] rounded-[10px]'>
            <img className='h-7 w-[29.44px]' src={star} alt="" />
            <p className='font-OS text-[23px] text-white'>100% of 281 ratings</p>
        </div>

        <p className='py-[15px] px-[19px] bg-[#15181D] rounded-[10px] font-OS text-[23px] text-white '>$59,99</p>

        <div className="px-6 py-[15px] bg-gradient-to-br from-[#00DBDE] from-1% via-50% via-[#7E6EEF] to-[#FC00FF] to-100% rounded-[10px] ">
        <MdAddShoppingCart className='h-[29.76px] w-[33.03px] text-white '/>
            
            </div> 
 
      </div>
    )
  }

const Description = () => {
  return (
    <div className='py-[176px]'>
        <Container className='flex justify-between'>
            <div className="left w-[817px]">
                <h3 className='font-OS text-[30px] text-white'>Description</h3>
                <p  className='font-Inter text-[22px] text-white/50 mt-[19px] mb-[14px]'>Five years after their perilous journey across post-pandemic America, Ellie 
                and Joel settle in Jackson, Wyoming. Life in a thriving community of </p>

                <p className='font-Inter text-[24px] text-[#E614FC] underline pb-10 border-b border-white/20'>Read more</p>

                <div className="flex gap-4 flex-col mt-[41px]">

                <div className='flex items-center gap-[14px]'>
                    <p className='font-OS text-[24px] text-white'>
                    Release Date:
                    </p>

                    <div>
                        <button className='py-[13px] px-[19px] bg-[#1E2127] rounded-[10px] font-OS text-[24px] text-white'>2018-07-30</button>
                    </div>
                </div>

                <div className='flex items-center gap-[90px]'>
                    <p className='font-OS text-[24px] text-white'>
                    Genre:
                    </p>

                    <div className='flex gap-[14px]'>
                        <button className='py-[13px] px-[19px] bg-[#1E2127] rounded-[10px] font-OS text-[24px] text-white'>Survivor</button>
                        <button className='py-[13px] px-[19px] bg-[#1E2127] rounded-[10px] font-OS text-[24px] text-white'>Horror</button>
                        <button className='py-[13px] px-[19px] bg-[#1E2127] rounded-[10px] font-OS text-[24px] text-white'>Adventure</button>
                        
                    </div>
                </div>


                <div className='flex items-center gap-[51px]'>
                    <p className='font-OS text-[24px] text-white'>
                    Language:
                    </p>

                    <div className='flex gap-[14px]'>
                        <button className='py-[13px] px-[19px] bg-[#1E2127] rounded-[10px] font-OS text-[24px] text-white'>English</button>
                        <button className='py-[13px] px-[19px] bg-[#1E2127] rounded-[10px] font-OS text-[24px] text-white'>Spanish</button>
                        <button className='py-[13px] px-[19px] bg-[#1E2127] rounded-[10px] font-OS text-[24px] text-white'>Russian</button>
                        <button className='py-[13px] px-[19px] bg-[#1E2127] rounded-[10px] font-OS text-[24px] text-white'>Japanese</button>
                    </div>
                </div>


                <div className='flex items-center gap-[30px]'>
                    <p className='font-OS text-[24px] text-white'>
                    Playable on:
                    </p>

                    <div className='flex gap-[14px]'>
                        <button className='py-[13px] px-[19px] bg-[#1E2127] rounded-[10px] font-OS text-[24px] text-white'>PS5</button>
                        <button className='py-[13px] px-[19px] bg-[#1E2127] rounded-[10px] font-OS text-[24px] text-white'>PS4</button>
                        <button className='py-[13px] px-[19px] bg-[#1E2127] rounded-[10px] font-OS text-[24px] text-white'>PS3</button>
                    </div>
                </div>

                </div>
            </div>


            <div className="right w-[817px] bg-[#1E2127] rounded-[20px] px-[42px] pt-[31px] pb-[44px]">
                <h3 className='font-OS text-[30px] text-white'>Offers from other sellers</h3>

                <div className='flex flex-col gap-[22px] mt-[31px]'>
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Description