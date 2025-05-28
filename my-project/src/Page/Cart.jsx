import React from 'react'
import Container from '../Layer/Container'
import star from '/star.png'
import trustpilot from '/trustpilot.png'
import secure from '/secure.png'
import { useNavigate } from 'react-router-dom'

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
                <input className='bg-[#15181D] py-4 pl-6 w-[334px] rounded-[10px] text-[21px] font-Inter ' type="text" placeholder='Coupon Code:' />

                <button className='border py-4 px-7 text-[20px] rounded-[10px] text-white font-Inter'>Apply</button>
              </div>

              <div className='flex justify-between mt-5'>
                <input className='bg-[#15181D] py-4 pl-6 w-[334px] rounded-[10px] text-[21px] font-Inter ' type="text" placeholder='Coupon Code:' />

                <button className='border py-4 px-7 text-[20px] rounded-[10px] text-white font-Inter '>Apply</button>
              </div>

            </div>

            <button onClick={()=> nevigate ('/checkout/')} className='bg-gradient-to-tl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% w-full font-OS text-white text-[24px] rounded-[10px] mt-[34px] py-3'> Proceed to Checkout</button>
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