import React from 'react'
import Container from './Container'

import card1 from '/card1.png'
import card2 from '/card2.png'
import card3 from '/card3.png'
import card4 from '/card4.png'
import GameCard from '../Component/GameCard'
const YouMayLike = () => {
  return (
    <div className='pt-[192px]'>
        <Container>
        <div className='flex items-center justify-between mb-[35px]'>
                <h1 className='text-[14px] md:text-[36px] font-OS text-white'>You May Also Like</h1>
                <div className='h-[1px] md:h-[2px] w-[40px] md:w-[1112px] bg-custom-gradient'
                ></div>



                

                <button className='border py-[7px] md:py-3 px-[10.5px] md:px-[18px] text-white font-OS text-[12px] md:text-[24px] rounded-[10px]'>
                        Browse All
                    </button>
            </div>


            <div className=' grid grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-[47px]'>
            

                <GameCard
                src={card1}/>

                <GameCard
                src={card2}/>
               <GameCard
                src={card3}/>

                <GameCard
                src={card4}/>
            </div>
        </Container>
    </div>
  )
}

export default YouMayLike