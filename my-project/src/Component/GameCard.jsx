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
    <div className='w-[157px] md:w-[393px] bg-gradient-to-t from-[#18C5E1] from-0% via-[#8666EF] via-47% to-[#FB01FF] to-100% p-[2px] rounded-[25px]'>
        <div className='bg-[#15181D] px-3 py-[14px] rounded-[25px]'>
            <div className="img ">
                <img className='w-[146px] h-[114px] md:w-full md:h-full' src={src} alt="" />
            </div>

            
                <p className='font-OS  text-[14px] md:text-[28px] text-white mt-[17px]'>Sekiro Shadows Die...</p>
            
            <div className='flex gap-[31px] items-center mt-4 mb-[35px]'>
                <div className='flex gap-2.5'>
                <p className='flex flex-col font-OS text-[#78797D] text-[10px] md:text-[18px]'>From 
                    <del>$70 to</del>
                </p>

                <p className='text-[14px] md:text-[28px] text-[#E614FC] font-OS'>$59,99</p>
                </div>

                <div className="starIcon flex gap-[3px]">
                    <IoStarSharp className='w-[10.5px] md:w-[29px] h-[10.1px] md:h-7 text-[#16C7E1]'/>
                    <IoStarSharp className='w-[10.5px] md:w-[29px] h-[10.1px] md:h-7 text-[#16C7E1]'/>
                    <IoStarSharp className='w-[10.5px] md:w-[29px] h-[10.1px] md:h-7 text-[#16C7E1]'/>
                    <IoStarSharp className='w-[10.5px] md:w-[29px] h-[10.1px] md:h-7 text-[#16C7E1]'/>
                    <IoStarSharp className='w-[10.5px] md:w-[29px] h-[10.1px] md:h-7 text-[#16C7E1]'/>
                </div>
            </div>

            <div className="icon flex gap-7 justify-center">
            <img className='md:w-full w-[15.61px] h-[12.05px] md:h-full' src={icon1} alt="" />
            <img className='md:w-full w-3 h-3 md:h-full' src={icon2} alt="" />
            <img className='md:h-[30px] md:w-[30px] h-3 w-3' src={icon3} alt="" />
            <img className='w-[1px] h-[11px] md:h-[29px]' src={line} alt="" />
            <img className='w-[13.5px] md:w-full h-[13.5px] md:h-full'  src={icon4} alt="" />
            <img className='w-[13.5px] md:w-full h-[13.5px] md:h-full' src={icon5} alt="" />
            </div>
        </div>
    </div>
  )
}

export default GameCard