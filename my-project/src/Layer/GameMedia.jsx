import React from 'react'
import Container from './Container'

const GameMedia = () => {
  return (
    <div>
        <Container>
        <div className='flex items-center  justify-between mb-[35px]'>
                <h1 className='text-[14px] md:text-[36px] font-OS text-white'>Game Media</h1>
                <div className='h-[1px] md:h-[2px] w-[40px] md:w-[1112px] bg-custom-gradient'
                ></div>



                

                <button className='border py-[7px] md:py-3 px-[10.5px] md:px-[18px] text-white font-OS text-[12px] md:text-[24px] rounded-[10px]'>
                        Browse All
                    </button>
            </div>
        </Container>
    </div>
  )
}

export default GameMedia