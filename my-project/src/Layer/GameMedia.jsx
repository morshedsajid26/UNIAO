import React from 'react'
import Container from './Container'

import GameMedia1 from '/GameMedia1.png'
import GameMedia2 from '/GameMedia2.png'
import GameMedia3 from '/GameMedia3.png'
import GameMedia4 from '/GameMedia4.png'

const GameMedia = () => {
  return (
    <div>
        <Container className='pb-[192px]'>
        <div className='flex items-center  justify-between mb-[35px]'>
                <h1 className='text-[14px] md:text-[36px] font-OS text-white'>Game Media</h1>
                <div className='h-[1px] md:h-[2px] w-[40px] md:w-[1312px] bg-custom-gradient'
                ></div>



                

                
            </div>


        <div className='w-full grid grid-rows-1 grid-cols-4 gap-[29px]'>
            <div className="child w-[394px] ">
              <img src={GameMedia1} alt="" />
            </div>
            <div className="child w-[394px] ">
            <img src={GameMedia2} alt="" />
            </div>
            <div className="child w-[394px] ">
            <img src={GameMedia3} alt="" />
            </div>
         <div className="child w-[394px] ">
         <img src={GameMedia4} alt="" />
         </div>


        </div>
        </Container>
    </div>
  )
}

export default GameMedia