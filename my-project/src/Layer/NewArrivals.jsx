import React from 'react'
import Container from './Conatiner'
import GameCard from '../Component/GameCard'


import card1 from '/card1.png'
import card2 from '/card2.png'
import card3 from '/card3.png'
import card4 from '/card4.png'

const NewArrivals = () => {
  return (
    <div>
        <Container>
            <div className='flex items-center justify-center gap-[43px] mb-[35px]'>
                <h1 className='text-[36px] font-OS text-white'>New Arrivals</h1>
                <div className='h-[2px] w-[1140px] bg-custom-gradient'
                ></div>

                <button className='font-OS text-white text-[24px] py-4 px-[18px] border rounded-[10px] cursor-pointer '>
                    Browse All
                </button>
            </div>

            <div className=' grid grid-cols-4 grid-rows-2 gap-[47px]'>
                <GameCard
                src={card1}/>

                <GameCard
                src={card2}/>
                <GameCard
                src={card3}/>

                <GameCard
                src={card4}/>

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

export default NewArrivals