import React from 'react'

import card1 from '/card1.png'
import line from '/line.png'
import icon1 from '/path-1.png'
import icon2 from '/path-2.png'
import icon3 from '/Li-3.png'
import icon4 from '/path-3.png'
import icon5 from '/path-4.png'
import { IoStarSharp } from 'react-icons/io5'

const GameCard = ({src}) => {
  return (
    <div className='w-[157px] md:w-[393px] bg-gradient-to-t from-[#18C5E1] from-0% via-[#8666EF] via-47% to-[#FB01FF] to-100% p-[2px] rounded-[20px] md:rounded-[25px]'>
        <div className='bg-[#15181D] p-[6px] md:px-3 md:py-[14px] rounded-[20px] md:rounded-[25px]'>
            <div className="img ">
                <img className='w-[146px] h-[114px] md:w-full md:h-full' src={src} alt="" />
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

export default GameCard