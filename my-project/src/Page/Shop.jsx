import React from 'react'
import Container from '../Layer/Container'
import Paginate from '../Component/Paginate'

import { MdKeyboardArrowDown } from 'react-icons/md'
import CheckBox from '../Component/CheckBox'

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
          <div className="left w-[393px] bg-slate-500 hidden md:block">
           
            <div className="sort-by bg-gradient-to-b from-[#FC00FF] from-0% to-[#7E6EEF] to-100%  p-[2px] rounded-[30px]">
              <div className='bg-[#15181D] rounded-[30px] px-7'>
                <div className='up flex items-center justify-between'>
                  <p className='text-[24px] font-OS font-semibold text-[#FB01FF]'>Sort by</p>
                  <MdKeyboardArrowDown className='w-10 h-10 text-[#FB01FF] ' />
                </div>

                <div className="down">

                 <CheckBox
                 id='recent'
                 htmlFor='recent'
                 name='recent'
                 labelText='Most Recent'
                 />
                  
                  
                <CheckBox
                 id='items'
                 htmlFor='items'
                 labelText='Features Items'
                 />

                <CheckBox
                 id='sellers'
                 htmlFor='sellers'
                 labelText='Best Sellers'
                 />



                <CheckBox
                 id='reviews'
                 htmlFor='reviews'
                 labelText='Best Reviews'
                 />



                <CheckBox
                 id='price'
                 htmlFor='price'
                 labelText='Lowest to highest price'
                 />





                </div>


              </div>
            </div>
          </div>
         
         
          <div className="right w-[327px] md:w-[1240px]   ">
            <Paginate itemsPerPage={15}/>
          </div>
        </Container>
    </div>
  )
}

export default Shop