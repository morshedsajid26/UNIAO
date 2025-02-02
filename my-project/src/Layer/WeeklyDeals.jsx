import React from 'react'
import Container from './Container'

import card1 from '/card1.png'
import card2 from '/card2.png'
import card3 from '/card3.png'
import card4 from '/card4.png'

import line from '/line.png'
import icon1 from '/path-1.png'
import icon2 from '/path-2.png'
import icon3 from '/Li-3.png'
import icon4 from '/path-3.png'
import icon5 from '/path-4.png'
import { IoStarSharp } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'

let WeeklyGame = ({src}) => {
  return (
    <div className='w-[157px] md:w-[393px] rounded-[20px] md:rounded-[25px]'>
        <div className='bg-[#1E2127] p-[6px] md:px-3 md:py-[14px] rounded-[20px] md:rounded-[25px]'>
            <div className="img relative">
                <img className='w-[146px] h-[114px] md:w-full md:h-full' src={src} alt="" />

                <div className='absolute h-[22px] md:h-[54px] w-[44px] md:w-[86px] rounded-full bg-gradient-to-t from-[#FF0000] from-1% to-[#FFC700] to-100% top-1 left-1 md:top-3 md:left-3 flex items-center justify-center'> 
                    <p className='font-OS font-semibold text-[12px] md:text-[24px]'>-25%</p>
                    </div>
                <div className='hidden  absolute h-[54px] w-[54px] rounded-full bg-white/80 top-3 right-3 md:flex items-center justify-center'>
                <FaRegHeart className='w-[31.2px] h-[27.79px]' /></div>
            </div>

            
                <p className='font-OS  text-[14px] md:text-[28px] text-white mt-[5px] md:mt-[17px]'>Sekiro Shadows Die...</p>
            
            <div className='flex gap-[3px] md:gap-[31px] md:items-center mt-[5px] md:mt-4 mb-[8px] md:mb-[35px]'>
                <div className='flex gap-[2px] md:gap-2.5'>
                <p className='flex flex-col font-OS text-[#78797D] text-[10px] md:text-[18px]'>From 
                    <del>$70 to</del>
                </p>

                <p className='text-[14px] md:text-[28px] text-[#E614FC] font-OS'>$59,99</p>
                </div>

                <div className="starIcon flex gap-[1px] md:gap-[3px]">
                    <IoStarSharp className='w-[10.5px] md:w-[29px] h-[10.1px] md:h-7 text-[#16C7E1]'/>
                    <IoStarSharp className='w-[10.5px] md:w-[29px] h-[10.1px] md:h-7 text-[#16C7E1]'/>
                    <IoStarSharp className='w-[10.5px] md:w-[29px] h-[10.1px] md:h-7 text-[#16C7E1]'/>
                    <IoStarSharp className='w-[10.5px] md:w-[29px] h-[10.1px] md:h-7 text-[#16C7E1]'/>
                    <IoStarSharp className='w-[10.5px] md:w-[29px] h-[10.1px] md:h-7 text-[#16C7E1]'/>
                </div>
            </div>

            <div className="icon flex gap-[11px] md:gap-7 justify-center">
            <img className='md:w-[39px] w-[15.61px] h-[12.05px] md:h-[30px]' src={icon1} alt="" />
            <img className='md:w-[30px] w-3 h-3 md:h-[30px]' src={icon2} alt="" />
            <img className='md:h-[30px] md:w-[30px] h-3 w-3' src={icon3} alt="" />
            <img className='w-[1px] h-[11px] md:h-[29px]' src={line} alt="" />
            <img className='w-[13.5px] md:w-[33.5px] h-[13.5px] md:h-[33.5px]'  src={icon4} alt="" />
            <img className='w-[13.5px] md:w-[33.5px] h-[13.5px] md:h-[33.5px]' src={icon5} alt="" />
            </div>
        </div>
    </div>
  )
}

const WeeklyDeals = () => {
  return (
    <div className='md:w-[1763px] mx-auto bg-transparent md:bg-gradient-to-b from-[#18C5E1] from-0% via-[#8666EF] via-47% to-[#FB01FF] to-100% p-[2px] rounded-[25px]'>
        <div className='bg-[#15181D] rounded-[25px] py-[43px]'>
        <Container>

        <div className='flex items-center  gap-[43px] mb-[35px]'>
            <h1 className='text-[16px] md:text-[36px] font-OS text-white'>Weekly Deals</h1>
           

            <div className='h-[1px] md:h-[2px] w-[60px] md:hidden block bg-custom-gradient'
            ></div>
            

            <button className='border py-[7px] md:py-3 px-[10.5px] md:px-[18px] text-white font-OS text-[12px] md:text-[24px] rounded-[10px]'>
                    Browse All
                </button>

                <div className='h-[1px] md:block hidden md:h-[2px] w-[60px] md:w-[772px] bg-custom-gradient'
            ></div>

            <div className="time hidden  w-[358px] md:flex justify-between items-center">

                <div className='w-[63px] h-[58px] bg-gradient-to-tr from-[#00DBDE] from-0% via-[#7E6EEF] via-50% to-[#FC00FF] to-100% rounded-[10px] flex items-center justify-center '>

                    <p className='font-OS text-[24px] text-white'>6</p>

                </div>

                <span className='font-OS text-white/50 text-[40px] font-semibold'>:</span>


                <div className='w-[63px] h-[58px] bg-gradient-to-tr from-[#00DBDE] from-0% via-[#7E6EEF] via-50% to-[#FC00FF] to-100% rounded-[10px] flex items-center justify-center '>

                    <p className='font-OS text-[24px] text-white'>6</p>

                </div>

                <span className='font-OS text-white/50 text-[40px] font-semibold'>:</span>


                <div className='w-[63px] h-[58px] bg-gradient-to-tr from-[#00DBDE] from-0% via-[#7E6EEF] via-50% to-[#FC00FF] to-100% rounded-[10px] flex items-center justify-center '>

                    <p className='font-OS text-[24px] text-white'>6</p>

                </div>

                <span className='font-OS text-white/50 text-[40px] font-semibold'>:</span>


                <div className='w-[63px] h-[58px] bg-gradient-to-tr from-[#00DBDE] from-0% via-[#7E6EEF] via-50% to-[#FC00FF] to-100% rounded-[10px] flex items-center justify-center '>

                    <p className='font-OS text-[24px] text-white'>6</p>

                </div>

            </div>

        </div>


            <div className='grid grid-cols-2 md:grid-cols-4  gap-[29.5px]'>
                <WeeklyGame
                src={card1}/>

                <WeeklyGame
                src={card2}/>


                <WeeklyGame
                src={card3}/>


                <WeeklyGame
                src={card4}/>
            </div>
           
        </Container>

        </div>

    </div>
  )
}

export default WeeklyDeals