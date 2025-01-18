import React from 'react'

import card1 from '/card1.png'
import line from '/line.png'
import icon1 from '/path-1.png'
import icon2 from '/path-2.png'
import icon3 from '/Li-3.png'
import icon4 from '/path-3.png'
import icon5 from '/path-4.png'
import { IoStarSharp } from 'react-icons/io5'

const GameCard = () => {
  return (
    <div className='w-[393px] bg-gradient-to-t from-[#18C5E1] from-0% via-[#8666EF] via-47% to-[#FB01FF] to-100% p-[2px] rounded-[25px]'>
        <div className='bg-[#15181D] px-3 py-[14px] rounded-[25px]'>
            <div className="img ">
                <img src={card1} alt="" />
            </div>

            
                <p className='font-OS text-[28px] text-white mt-[17px]'>Sekiro Shadows Die...</p>
            
            <div className='flex gap-[31px] items-center mt-4 mb-[35px]'>
                <div className='flex gap-2.5'>
                <p className='flex flex-col font-OS text-[#78797D]'>From 
                    <del>$70 to</del>
                </p>

                <p className='text-[28px] text-[#E614FC] font-OS'>$59,99</p>
                </div>

                <div className="starIcon flex gap-[3px]">
                    <IoStarSharp className='w-[29px] h-7 text-[#16C7E1]'/>
                    <IoStarSharp className='w-[29px] h-7 text-[#16C7E1]'/>
                    <IoStarSharp className='w-[29px] h-7 text-[#16C7E1]'/>
                    <IoStarSharp className='w-[29px] h-7 text-[#16C7E1]'/>
                    <IoStarSharp className='w-[29px] h-7 text-[#16C7E1]'/>
                </div>
            </div>

            <div className="icon flex gap-7 justify-center">
            <img  src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img className='h-[30px] w-[30px]' src={icon3} alt="" />
                <img className='w-[1px] h-[29px]' src={line} alt="" />
                <img  src={icon4} alt="" />
            <img src={icon5} alt="" />
            </div>
        </div>
    </div>
  )
}

export default GameCard