import React from 'react'
import Container from '../Layer/Container'
import star from '/star.png'
import trustpilot from '/trustpilot.png'
import secure from '/secure.png'
import { useNavigate } from 'react-router-dom'

import payment1 from '/payment1.png'
import payment2 from '/payment2.png'
import payment3 from '/payment3.png'
import payment4 from '/payment4.png'
import payment5 from '/payment5.png'
import payment6 from '/payment6.png'
import payment7 from '/payment7.png'
import payment8 from '/payment8.png'
import payment9 from '/payment9.png'
import payment10 from '/payment10.png'
import payment11 from '/payment11.png'

let Icon= ({src})=>{
  return(
    <img className='w-[32.97px] md:w-[41.84px] h-[22.46px] md:h-[28.5px]' src={src} alt="" />

  )
}

const Cart = () => {
  let nevigate= useNavigate()
  return (
    <div>
        <Container>
        <div className='flex items-center justify-between mb-[35px] mt-[50px]'>
                <h1 className='text-[14px] md:text-[36px] font-OS text-white'>My Cart</h1>
                <div className='h-[1px] md:h-[2px] w-[40px] md:w-[1112px] bg-custom-gradient'
                ></div>



                

                <button className='border py-[7px] md:py-3 px-[10.5px] md:px-[18px] text-white font-OS text-[12px] md:text-[24px] rounded-[10px]'>
                Continue Shopping
                    </button>
            </div>

            <div className='flex flex-col md:flex-row justify-between '>
          <div className="left w-[1095px]">
           c

          </div>
          <div className=" right w-[526px] mt-[63px] md:mt-0">
            <div className="up w-[327px] md:w-full rounded-[15px] px-5 md:px-8 pt-8 pb-[48px] bg-[#ffffff]/5 ">
            
            <table className='flex justify-between items-start text-white font-inter text-[26px] font-extralight'>
            <th>
              <tr>2 Items</tr>
              <tr>VAT</tr>
              <tr>Fees</tr>
              
            </th>
            <th>
              <tr>$99</tr>
              <tr>$2,81</tr>
              <tr>$0,81</tr>
            </th>

            </table>
            <div className="coupon borber border-t border-b border-white/20 py-8 mt-[34px]">
              <div className='flex justify-between'>
                <input className='bg-[#15181D] py-4 pl-6 w-[334px] rounded-[10px] text-[21px] font-Inter outline-none text-white ' type="text" placeholder='Coupon Code:' />

                <button className='border py-4 px-7 text-[20px] rounded-[10px] text-white font-Inter'>Apply</button>
              </div>

              <div className='flex justify-between mt-5'>
                <input className='bg-[#15181D] py-4 pl-6 w-[334px] rounded-[10px] text-[21px] font-Inter  outline-none text-white' type="text" placeholder='Coupon Code:' />

                <button className='border py-4 px-7 text-[20px] rounded-[10px] text-white font-Inter '>Apply</button>
              </div>

            </div>

            <p className='flex justify-between text-[26px] text-white font-Inter pt-8'>Total <span>$102,76</span></p>

            <button onClick={()=> nevigate ('/checkout/')} className='bg-gradient-to-l from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% w-full font-OS text-white text-[24px] rounded-[10px] mt-[34px] py-3'> Proceed to Checkout</button>

            <div className="icon grid grid-rows-2 grid-cols-6 w-[310px] ml-20 gap-y-2.5 gap-x-3 mt-8">
              <Icon src={payment5}/>
              <Icon src={payment2}/>
              <Icon src={payment3}/>
              <Icon src={payment4}/>
              <Icon src={payment1}/>
              <Icon src={payment6}/>
              <Icon src={payment7}/>
              <Icon src={payment8}/>
              <Icon src={payment9}/>
              <Icon src={payment10}/>
              <Icon src={payment11}/>
            </div>
            </div>


            <div className="down w-[327px] md:w-full bg-[#ffffff]/5 rounded-[15px] px-5 md:px-8 pt-8 pb-[48px] mb-[199px] mt-[48px] ">
              <div className='border-b w-[288px] md:w-[462px] border-white/15 flex flex-col items-center pb-[14px] md:pb-[35px]'>
              <div className="logo flex items-end gap-[6px] ">
                <img className='w-[26px] h-[24px] md:w-[41.84px] md:h-[40.13px]' src={star} alt="" />
                <img className='w-[89.86px] h-[19.5px] md:w-[144.53px] md:h-[31.52px]' src={trustpilot} alt="" />
              </div>
              
              
              
              <p className='font-Inter text-[11px] md:text-[20px] text-[#787A7D]'>TrustScore 5.0 | 457 Reviews</p>
              </div>

              <div className='flex flex-col items-center '>
              <div className='flex gap-[5px] md:gap-[9.5px] mt-[14px] md:mt-[40.4px] md:mb-[4.85px]'>
    <img className='w-[20.3px] h-[23.75px] md:w-[32.45px] md:h-[38.15px] ' src={secure} alt="" />

    <p className='font-pop text-[17px] md:text-[28px] text-white'>Safe & Secure</p>
   </div>

   <p className='font-Inter text-[11px] md:text-[20px] text-[#787A7D] '>100% Secure, 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
        </Container>
    </div>
  )
}

export default Cart