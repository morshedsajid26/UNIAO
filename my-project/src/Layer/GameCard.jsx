import React from 'react'

import card1 from '/card1.png'

const GameCard = () => {
  return (
    <div className='w-[393px] bg-gradient-to-t from-[#18C5E1] from-0% via-[#8666EF] via-47% to-[#FB01FF] to-100% p-[2px] rounded-[25px]'>
        <div className='bg-[#15181D] p-3 rounded-[25px]'>
            <div className="img ">
                <img src={card1} alt="" />
            </div>

            <div>
                <p className='font-OS text-[28px] text-white'>Sekiro Shadows Die...</p>
            </div>
        </div>
    </div>
  )
}

export default GameCard