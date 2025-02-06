import React from 'react'
import Container from '../Layer/Container'
import Paginate from '../Component/Paginate'

const Shop = () => {
  return (
    <div>
        <Container className='mt-[19px] flex flex-row gap-6'>
            <button className='py-[11px] px-[14px] border rounded-xl hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% hover:border-transparent transition-all duration-500 text-white font-OS text-[24px] '>PlayStation Network</button>
            <button className='py-[11px] px-[14px] border rounded-xl hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% hover:border-transparent transition-all duration-500 text-white font-OS text-[24px] '>PS5</button>
            <button className='py-[11px] px-[14px] border rounded-xl hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% hover:border-transparent transition-all duration-500 text-white font-OS text-[24px] '>PS4</button>
            <button className='py-[11px] px-[14px] border rounded-xl hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% hover:border-transparent transition-all duration-500 text-white font-OS text-[24px] '>PSVR</button>
        </Container>

        <Container className='flex gap-[29.5px] mt-20'>
          <div className="left w-[393px] bg-slate-500">1</div>
         
         
          <div className="right w-[1240px]   ">
            <Paginate itemsPerPage={15}/>
          </div>
        </Container>
    </div>
  )
}

export default Shop