import React from 'react'
import Container from './Container'

import GameMedia1 from '/GameMedia1.png'
import GameMedia2 from '/GameMedia2.png'
import GameMedia3 from '/GameMedia3.png'
import GameMedia4 from '/GameMedia4.png'
import video from '/video.png'

const GameMedia = () => {
  return (
    <div>
        <Container className='pb-20 md:pb-[192px]'>
        <div className='flex items-center  justify-between mb-2 md:mb-[35px]'>
                <h1 className='text-[16px] md:text-[36px] font-OS text-white'>Game Media</h1>
                <div className='h-[1px] md:h-[2px] w-[209px] md:w-[1312px] bg-custom-gradient'
                ></div>
            
            </div>


        <div className='w-[327px] md:w-full  grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-3 md:gap-[29px]'>
            <div className="child w-[158px] md:w-[394px] relative ">
              <img src={GameMedia1} alt="" />
              <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  opacity-0 hover:opacity-100 transition-all duration-300 '>
                <img className='w-[35px] h-[35px] md:w-auto md:h-auto' src={video} alt="" />
              </div>
            </div>
            <div className="child w-[158px] md:w-[394px] relative ">
            <img src={GameMedia2} alt="" />
            <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  opacity-0 hover:opacity-100 transition-all duration-300 '>
                <img className='w-[35px] h-[35px] md:w-auto md:h-auto' src={video} alt="" />
              </div>
            </div>
            <div className="child w-[158px] md:w-[394px] relative ">
            <img src={GameMedia3} alt="" />
            <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  opacity-0 hover:opacity-100 transition-all duration-300 '>
                <img className='w-[35px] h-[35px] md:w-auto md:h-auto' src={video} alt="" />
              </div>
            </div>
         <div className="child w-[158px] md:w-[394px] relative">
         <img src={GameMedia4} alt="" />
         <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  opacity-0 hover:opacity-100 transition-all duration-300 '>
                <img className='w-[35px] h-[35px] md:w-auto md:h-auto' src={video} alt="" />
              </div>
         </div>


        </div>
        </Container>
    </div>
  )
}

export default GameMedia