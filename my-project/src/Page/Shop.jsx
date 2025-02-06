import React from 'react'
import Container from '../Layer/Container'
import Paginate from '../Component/Paginate'

const Shop = () => {
  return (
    <div>
        <Container className='mt-[19px] flex flex-row md:gap-6 gap-2'>
            <button className='md:py-[11px] py-[5px] px-[6.5px] md:px-[14px] border rounded-md md:rounded-xl hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% hover:border-transparent transition-all duration-500 text-white font-OS text-[14px] md:text-[24px] '>PlayStation Network</button>
            <button className='md:py-[11px] py-[5px] px-[6.5px] md:px-[14px] border rounded-md md:rounded-xl hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% hover:border-transparent transition-all duration-500 text-white font-OS text-[14px] md:text-[24px] '>PS5</button>
            <button className='md:py-[11px] py-[5px] px-[6.5px] md:px-[14px] border rounded-md md:rounded-xl hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% hover:border-transparent transition-all duration-500 text-white font-OS text-[14px] md:text-[24px] '>PS4</button>
            <button className='md:py-[11px] py-[5px] px-[6.5px] md:px-[14px] border rounded-md md:rounded-xl hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% hover:border-transparent transition-all duration-500 text-white font-OS text-[14px] md:text-[24px] '>PSVR</button>
        </Container>

        <Container className='flex gap-[29.5px] mt-20'>
          <div className="left w-[393px] bg-slate-500 hidden md:block">1</div>
         
         
          <div className="right w-[327px] md:w-[1240px]   ">
            <Paginate itemsPerPage={15}/>
          </div>
        </Container>
    </div>
  )
}

export default Shop