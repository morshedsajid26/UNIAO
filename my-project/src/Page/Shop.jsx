import React, { useState } from 'react'
import Container from '../Layer/Container'
import Paginate from '../Component/Paginate'
import Switch from '../Component/Switch'

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import CheckBox from '../Component/CheckBox'
import { HiLightningBolt } from 'react-icons/hi'
import { FaFilter } from 'react-icons/fa'

const Shop = () => {
  let [delivery,setDelivery] = useState(false);
  let [sort,setSort] = useState(false);
  let [price,setPrice] = useState(false);
  let [seller,setSeller] = useState(false);
  let [show,setShow]= useState(false);
  let [filter,setFilter]= useState(false);
  return (
    <div>
       <Container>
       <div className='mt-[19px] flex flex-row md:gap-6 gap-2'>
            <button className='md:py-[11px] py-[5px] px-[6.5px] md:px-[14px] border rounded-md md:rounded-xl hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% hover:border-transparent transition-all duration-500 text-white font-OS text-[14px] md:text-[24px] '>PlayStation Network</button>
            <button className='md:py-[11px] py-[5px] px-[6.5px] md:px-[14px] border rounded-md md:rounded-xl hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% hover:border-transparent transition-all duration-500 text-white font-OS text-[14px] md:text-[24px] '>PS5</button>
            <button className='md:py-[11px] py-[5px] px-[6.5px] md:px-[14px] border rounded-md md:rounded-xl hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% hover:border-transparent transition-all duration-500 text-white font-OS text-[14px] md:text-[24px] '>PS4</button>
            <button className='md:py-[11px] py-[5px] px-[6.5px] md:px-[14px] border rounded-md md:rounded-xl hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% hover:border-transparent transition-all duration-500 text-white font-OS text-[14px] md:text-[24px] '>PSVR</button>
        </div>


        <div className='flex items-center justify-between mt-[51px] md:hidden '>
                <h1 className='text-[16px] md:text-[36px] font-OS text-white'>Weekly Deals</h1>
                <div className='h-[1px] md:h-[2px] w-[66px] md:w-[1140px] bg-custom-gradient'
                ></div>



                

                <button onClick={()=> setFilter(!filter)} className='flex items-center gap-[3px] border py-[7px] md:py-3 px-[10.5px] md:px-[18px] text-white font-OS text-[12px] md:text-[24px] rounded-[10px]'>
                <FaFilter className='w-[13px] h-3' />Filter By
                    </button>
            </div>
            <div className={`left w-[327px] mt-5  flex md:hidden flex-col gap-5  ${filter?"visible h-auto opacity-100":"invisible h-0 opacity-0"}`} >


          <div className="deliver bg-gradient-to-b from-[#FC00FF] from-0% to-[#7E6EEF] to-100%  p-[2px] rounded-[20px]">
              <div className='bg-[#15181D] rounded-[20px] px-3 py-2'>
                <div className='up flex items-center justify-between'>
                  <p className='text-[18px] font-OS font-semibold text-[#FB01FF]'>Delivery</p>
                  {
                    delivery? <MdKeyboardArrowDown onClick={()=> setDelivery(!delivery)} className={`w-8 h-8 text-[#FB01FF] cursor-pointer`} />: 
                    <MdKeyboardArrowUp  onClick={()=> setDelivery(!delivery)} className={`w-8 h-8 text-[#FB01FF] cursor-pointer`} />
                  }
                </div>

               

                  <div className={`down flex flex-col gap-6  ${delivery? "visible opacity-100 h-auto mt-[27px] overflow-auto": "invisible opacity-0 h-0 mt-0 overflow-hidden"}`}>
                  
                  <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                  <HiLightningBolt className='w-[30px] h-[30px] text-white ' />
                    <p className='text-[18px] font-OS text-white'>Instant Delivery</p>

                  </div>
               
                      
                      <Switch/>
                  </div>


                  <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                  <HiLightningBolt className='w-[30px] h-[30px] text-white ' />
                    <p className='text-[18px] font-OS text-white'>Manually Delivery</p>

                  </div>
               
                      
                      <Switch/>
                  </div>
                      
                </div>


              </div>
            </div>
           
            <div className="sort-by bg-gradient-to-b from-[#FC00FF] from-0% to-[#7E6EEF] to-100%  p-[2px] rounded-[20px]">
              <div className='bg-[#15181D] rounded-[20px] px-3 py-2'>
                <div className='up flex items-center justify-between'>
                  <p className='text-[18px] font-OS font-semibold text-[#FB01FF]'>Sort by</p>
                  {
                    sort? <MdKeyboardArrowDown onClick={()=> setSort(!sort)} className={`w-8 h-8 text-[#FB01FF] cursor-pointer`} />: 
                    <MdKeyboardArrowUp  onClick={()=> setSort(!sort)} className={`w-8 h-8 text-[#FB01FF] cursor-pointer`} />
                  }
                </div>

                <div className={`down  flex flex-col gap-3 ${sort? "visible opacity-100 h-auto mt-[27px] overflow-auto": "invisible opacity-0 h-0 mt-0 overflow-hidden"}`}>

                 <CheckBox
                 id='recent'
                 htmlFor='recent'
                 name='sort'
                 labelText='Most Recent'
                 />
                  
                  
                <CheckBox
                 id='items'
                 htmlFor='items'
                 name='sort'
                 labelText='Features Items'
                 />

                <CheckBox
                 id='sellers'
                 htmlFor='sellers'
                 name='sort'
                 labelText='Best Sellers'
                 />



                <CheckBox
                 id='reviews'
                 htmlFor='reviews'
                 name='sort'
                 labelText='Best Reviews'
                 />



                <CheckBox
                 id='price'
                 htmlFor='price'
                 name='sort'
                 labelText='Lowest to highest price'
                 />





                </div>


              </div>
            </div>





            <div className="price bg-gradient-to-b from-[#FC00FF] from-0% to-[#7E6EEF] to-100%  p-[2px] rounded-[20px]">
              <div className='bg-[#15181D] rounded-[20px] px-3 py-2'>
                <div className='up flex items-center justify-between'>
                  <p className='text-[18px] font-OS font-semibold text-[#FB01FF]'>Price</p>
                  {
                    price? <MdKeyboardArrowDown onClick={()=> setPrice(!price)} className={`w-8 h-8 text-[#FB01FF] cursor-pointer`} />: 
                    <MdKeyboardArrowUp  onClick={()=> setPrice(!price)} className={`w-8 h-8 text-[#FB01FF] cursor-pointer`} />
                  }
                </div>

                <div className={`down  flex flex-col gap-3 ${price? "visible opacity-100 h-auto mt-[27px] overflow-auto": "invisible opacity-0 h-0 mt-0 overflow-hidden"}`}>

                 <CheckBox
                 id='10'
                 htmlFor='10'
                 name='price'
                 labelText='$10 to $25'
                 />
                  
                  
                <CheckBox
                 id='25'
                 htmlFor='25'
                 name='price'
                 labelText='$25 to $50'
                 />

                <CheckBox
                 id='50'
                 htmlFor='50'
                 name='price'
                 labelText='$50 to $100'
                 />



                <CheckBox
                 id='100'
                 htmlFor='100'
                 name='price'
                 labelText='$100 to $200'
                 />



                

                <div className='flex  items-center gap-2'>
              <input name='price' id='custom' type="radio" className='w-6 h-6 appearance-none relative bg-white rounded-full after:absolute after:content-[""] after:w-[15px] after:h-[15px] after:bg-[#E1E1E5] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full checked:after:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100%' />
              
              <label htmlFor='custom' className='font-OS text-white text-2xl'>From</label>
              <input type="text" placeholder='$0' className='outline-none pl-[11px] py-[3px] bg-[#1E2127] font-OS text-[22px] text-[#B2B8C2] w-[93px] h-[54px] rounded-[15px]' />

              <label htmlFor='custom' className='font-OS text-white text-2xl'>to</label>
              <input type="text" placeholder='$0' className='outline-none pl-[11px] py-[3px] bg-[#1E2127] font-OS text-[22px] text-[#B2B8C2] w-[93px] h-[54px] rounded-[15px]' />
              </div>





                </div>


              </div>
            </div>



            <div className="seller bg-gradient-to-b from-[#FC00FF] from-1% via-[#7E6EEF] via-47% to-[#00DBDE] to-100%  p-[2px] rounded-[20px]">
              <div className='bg-[#15181D] rounded-[20px] px-3 py-2'>
                <div className='up flex items-center justify-between'>
                  <p className='text-[18px] font-OS font-semibold text-[#FB01FF]'>Seller</p>
                  {
                    seller? <MdKeyboardArrowDown onClick={()=> setSeller(!seller)} className={`w-8 h-8 text-[#FB01FF] cursor-pointer`} />: 
                    <MdKeyboardArrowUp  onClick={()=> setSeller(!seller)} className={`w-8 h-8 text-[#FB01FF] cursor-pointer`} />
                  }
                </div>

                <div className={`down  flex flex-col gap-3 ${seller? "visible opacity-100 h-auto mt-[27px] overflow-auto": "invisible opacity-0 h-0 mt-0 overflow-hidden"}`}>

                 <CheckBox
                 id='one'
                 htmlFor='one'
                 name='seller'
                 labelText='Seller Name'
                 />
                  
                  
                <CheckBox
                 id='25'
                 htmlFor='25'
                 name='seller'
                 labelText='Seller Name'
                 />

                <CheckBox
                 id='50'
                 htmlFor='50'
                 name='seller'
                 labelText='Seller Name'
                 />



                <CheckBox
                 id='100'
                 htmlFor='100'
                 name='seller'
                 labelText='Seller Name'
                 />



                <CheckBox
                 id='price'
                 htmlFor='price'
                 name='seller'
                 labelText='Seller Name'
                 />

              <CheckBox
                 id='price'
                 htmlFor='price'
                 name='seller'
                 labelText='Seller Name'
                 />


                <CheckBox
                 id='price'
                 htmlFor='price'
                 name='seller'
                 labelText='Seller Name'
                 />


                <CheckBox
                 id='price'
                 htmlFor='price'
                 name='seller'
                 labelText='Seller Name'
                 />




<div className={`down  flex flex-col gap-3 ${show? "visible opacity-100 h-auto overflow-auto": "invisible opacity-0 h-0  overflow-hidden"}`}>

                 <CheckBox
                 id='one'
                 htmlFor='one'
                 name='seller'
                 labelText='Seller Name'
                 />
                  
                  
                <CheckBox
                 id='25'
                 htmlFor='25'
                 name='seller'
                 labelText='Seller Name'
                 />

                <CheckBox
                 id='50'
                 htmlFor='50'
                 name='seller'
                 labelText='Seller Name'
                 />



                <CheckBox
                 id='100'
                 htmlFor='100'
                 name='seller'
                 labelText='Seller Name'
                 />



           





                </div>




                {
                  show? <div className='cursor-pointer '>
                  <p onClick={()=> setShow(!show)}  className='text-[18px] font-OS font-semibold text-[#FB01FF] underline'>- See Less</p>
                </div>:<div className='cursor-pointer '>
                  <p onClick={()=> setShow(!show)}  className='text-[18px] font-OS font-semibold text-[#FB01FF] underline'>+ See All</p>
                </div>}
                </div>



                


              </div>
            </div>
          </div>
       </Container>

        <Container className='flex gap-[29.5px] mt-3 md:mt-20'>
          <div className="left w-[393px]  hidden md:flex md:flex-col gap-10" >


          <div className="deliver bg-gradient-to-b from-[#FC00FF] from-0% to-[#7E6EEF] to-100%  p-[2px] rounded-[30px]">
              <div className='bg-[#15181D] rounded-[30px] px-7 py-6'>
                <div className='up flex items-center justify-between'>
                  <p className='text-[24px] font-OS font-semibold text-[#FB01FF]'>Delivery</p>
                  {
                    delivery? <MdKeyboardArrowDown onClick={()=> setDelivery(!delivery)} className={`w-10 h-10 text-[#FB01FF] cursor-pointer`} />: 
                    <MdKeyboardArrowUp  onClick={()=> setDelivery(!delivery)} className={`w-10 h-10 text-[#FB01FF] cursor-pointer`} />
                  }
                </div>

                {/* <div className="down mt-[27px] flex flex-col gap-5">

                 <CheckBox
                 id='recent'
                 htmlFor='recent'
                 name='sort'
                 labelText='Most Recent'
                 />
                  
                  
                <CheckBox
                 id='items'
                 htmlFor='items'
                 name='sort'
                 labelText='Features Items'
                 />

                <CheckBox
                 id='sellers'
                 htmlFor='sellers'
                 name='sort'
                 labelText='Best Sellers'
                 />



                <CheckBox
                 id='reviews'
                 htmlFor='reviews'
                 name='sort'
                 labelText='Best Reviews'
                 />



                <CheckBox
                 id='price'
                 htmlFor='price'
                 name='sort'
                 labelText='Lowest to highest price'
                 />





                </div> */}

                  <div className={`down flex flex-col gap-6  ${delivery? "visible opacity-100 h-auto mt-[27px] overflow-auto": "invisible opacity-0 h-0 mt-0 overflow-hidden"}`}>
                  
                  <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                  <HiLightningBolt className='w-[30px] h-[30px] text-white ' />
                    <p className='text-[24px] font-OS text-white'>Instant Delivery</p>

                  </div>
               
                      
                      <Switch/>
                  </div>


                  <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                  <HiLightningBolt className='w-[30px] h-[30px] text-white ' />
                    <p className='text-[24px] font-OS text-white'>Manually Delivery</p>

                  </div>
               
                      
                      <Switch/>
                  </div>
                      
                </div>


              </div>
            </div>
           
            <div className="sort-by bg-gradient-to-b from-[#FC00FF] from-0% to-[#7E6EEF] to-100%  p-[2px] rounded-[30px]">
              <div className='bg-[#15181D] rounded-[30px] px-7 py-6'>
                <div className='up flex items-center justify-between'>
                  <p className='text-[24px] font-OS font-semibold text-[#FB01FF]'>Sort by</p>
                  {
                    sort? <MdKeyboardArrowDown onClick={()=> setSort(!sort)} className={`w-10 h-10 text-[#FB01FF] cursor-pointer`} />: 
                    <MdKeyboardArrowUp  onClick={()=> setSort(!sort)} className={`w-10 h-10 text-[#FB01FF] cursor-pointer`} />
                  }
                </div>

                <div className={`down  flex flex-col gap-5 ${sort? "visible opacity-100 h-auto mt-[27px] overflow-auto": "invisible opacity-0 h-0 mt-0 overflow-hidden"}`}>

                 <CheckBox
                 id='recent'
                 htmlFor='recent'
                 name='sort'
                 labelText='Most Recent'
                 />
                  
                  
                <CheckBox
                 id='items'
                 htmlFor='items'
                 name='sort'
                 labelText='Features Items'
                 />

                <CheckBox
                 id='sellers'
                 htmlFor='sellers'
                 name='sort'
                 labelText='Best Sellers'
                 />



                <CheckBox
                 id='reviews'
                 htmlFor='reviews'
                 name='sort'
                 labelText='Best Reviews'
                 />



                <CheckBox
                 id='price'
                 htmlFor='price'
                 name='sort'
                 labelText='Lowest to highest price'
                 />





                </div>


              </div>
            </div>





            <div className="price bg-gradient-to-b from-[#FC00FF] from-0% to-[#7E6EEF] to-100%  p-[2px] rounded-[30px]">
              <div className='bg-[#15181D] rounded-[30px] px-7 py-6'>
                <div className='up flex items-center justify-between'>
                  <p className='text-[24px] font-OS font-semibold text-[#FB01FF]'>Price</p>
                  {
                    price? <MdKeyboardArrowDown onClick={()=> setPrice(!price)} className={`w-10 h-10 text-[#FB01FF] cursor-pointer`} />: 
                    <MdKeyboardArrowUp  onClick={()=> setPrice(!price)} className={`w-10 h-10 text-[#FB01FF] cursor-pointer`} />
                  }
                </div>

                <div className={`down  flex flex-col gap-5 ${price? "visible opacity-100 h-auto mt-[27px] overflow-auto": "invisible opacity-0 h-0 mt-0 overflow-hidden"}`}>

                 <CheckBox
                 id='10'
                 htmlFor='10'
                 name='price'
                 labelText='$10 to $25'
                 />
                  
                  
                <CheckBox
                 id='25'
                 htmlFor='25'
                 name='price'
                 labelText='$25 to $50'
                 />

                <CheckBox
                 id='50'
                 htmlFor='50'
                 name='price'
                 labelText='$50 to $100'
                 />



                <CheckBox
                 id='100'
                 htmlFor='100'
                 name='price'
                 labelText='$100 to $200'
                 />



                

                <div className='flex  items-center gap-2'>
              <input name='price' id='custom' type="radio" className='w-6 h-6 appearance-none relative bg-white rounded-full after:absolute after:content-[""] after:w-[15px] after:h-[15px] after:bg-[#E1E1E5] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full checked:after:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100%' />
              
              <label htmlFor='custom' className='font-OS text-white text-2xl'>From</label>
              <input type="text" placeholder='$0' className='outline-none pl-[11px] py-[3px] bg-[#1E2127] font-OS text-[22px] text-[#B2B8C2] w-[93px] h-[54px] rounded-[15px]' />

              <label htmlFor='custom' className='font-OS text-white text-2xl'>to</label>
              <input type="text" placeholder='$0' className='outline-none pl-[11px] py-[3px] bg-[#1E2127] font-OS text-[22px] text-[#B2B8C2] w-[93px] h-[54px] rounded-[15px]' />
              </div>





                </div>


              </div>
            </div>



            <div className="seller bg-gradient-to-b from-[#FC00FF] from-1% via-[#7E6EEF] via-47% to-[#00DBDE] to-100%  p-[2px] rounded-[30px]">
              <div className='bg-[#15181D] rounded-[30px] px-7 py-6'>
                <div className='up flex items-center justify-between'>
                  <p className='text-[24px] font-OS font-semibold text-[#FB01FF]'>Seller</p>
                  {
                    seller? <MdKeyboardArrowDown onClick={()=> setSeller(!seller)} className={`w-10 h-10 text-[#FB01FF] cursor-pointer`} />: 
                    <MdKeyboardArrowUp  onClick={()=> setSeller(!seller)} className={`w-10 h-10 text-[#FB01FF] cursor-pointer`} />
                  }
                </div>

                <div className={`down  flex flex-col gap-5 ${seller? "visible opacity-100 h-auto mt-[27px] overflow-auto": "invisible opacity-0 h-0 mt-0 overflow-hidden"}`}>

                 <CheckBox
                 id='one'
                 htmlFor='one'
                 name='seller'
                 labelText='Seller Name'
                 />
                  
                  
                <CheckBox
                 id='25'
                 htmlFor='25'
                 name='seller'
                 labelText='Seller Name'
                 />

                <CheckBox
                 id='50'
                 htmlFor='50'
                 name='seller'
                 labelText='Seller Name'
                 />



                <CheckBox
                 id='100'
                 htmlFor='100'
                 name='seller'
                 labelText='Seller Name'
                 />



                <CheckBox
                 id='price'
                 htmlFor='price'
                 name='seller'
                 labelText='Seller Name'
                 />

              <CheckBox
                 id='price'
                 htmlFor='price'
                 name='seller'
                 labelText='Seller Name'
                 />


                <CheckBox
                 id='price'
                 htmlFor='price'
                 name='seller'
                 labelText='Seller Name'
                 />


                <CheckBox
                 id='price'
                 htmlFor='price'
                 name='seller'
                 labelText='Seller Name'
                 />




<div className={`down  flex flex-col gap-5 ${show? "visible opacity-100 h-auto overflow-auto": "invisible opacity-0 h-0  overflow-hidden"}`}>

                 <CheckBox
                 id='one'
                 htmlFor='one'
                 name='seller'
                 labelText='Seller Name'
                 />
                  
                  
                <CheckBox
                 id='25'
                 htmlFor='25'
                 name='seller'
                 labelText='Seller Name'
                 />

                <CheckBox
                 id='50'
                 htmlFor='50'
                 name='seller'
                 labelText='Seller Name'
                 />



                <CheckBox
                 id='100'
                 htmlFor='100'
                 name='seller'
                 labelText='Seller Name'
                 />



           





                </div>




                {
                  show? <div className='cursor-pointer mt-4'>
                  <p onClick={()=> setShow(!show)}  className='text-[24px] font-OS font-semibold text-[#FB01FF] underline'>- See Less</p>
                </div>:<div className='cursor-pointer mt-4'>
                  <p onClick={()=> setShow(!show)}  className='text-[24px] font-OS font-semibold text-[#FB01FF] underline'>+ See All</p>
                </div>}
                </div>



                


              </div>
            </div>
          </div>
         
         
          <div className="right w-[327px] md:w-[1240px]">
            <Paginate itemsPerPage={15}/>
          </div>
        </Container>
    </div>
  )
}

export default Shop