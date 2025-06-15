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

import cartPhoto1 from '/cartPhoto1.png'
import cartPhoto2 from '/cartPhoto2.png'
import icon1 from '/path-1.png'
import line from '/line.png'
import icon5 from '/path-4.png'

import { HiLightningBolt } from 'react-icons/hi'
import { FaRegHeart } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

let Icon= ({src})=>{
  return(
    <img className='w-[32.97px] md:w-[41.84px] h-[22.46px] md:h-[28.5px]' src={src} alt="" />

  )
}

let Product= ({src,title})=>{
  return(
    <div className='bg-gradient-to-l from-[#16191D] from-1% via-[#252628] via-50% to-[#252628] to-100% rounded-[25px] md:flex grid grid-cols-2 grid-rows-2 '>
      <div className="image mr-[45px]">
        <img className='w-[148px] h-[167px] md:w-auto md:h-auto' src={src} alt="src" />
      </div>

      <div className="info mr-[118px] flex justify-center flex-col">
        <div className='flex gap-[22px]'>
          <h3 className='font-Inter text-white text-[16px] md:text-[30px]'>{title}</h3>
        <div className='flex items-center gap-[21px]'>
        <img className='md:w-[39px] w-[15.61px] h-[12.05px] md:h-[30px]' src={icon1} alt="" />
         <img className='w-[1px] h-[11px] md:h-[29px]' src={line} alt="" />
         <img className='w-[13.5px] md:w-[33.5px] h-[13.5px] md:h-[33.5px]' src={icon5} alt="" />
        </div>
        </div>
        <div className='flex gap-[18px] mt-[19px]'>
          <button className='text-[#2BB6E4] text-[14px] md:text-[24px] p-[6px] md:py-[13px] md:px-[18px] border rounded-[10px] border-[#2BB6E4] font-OS'>
          Save 25%
          </button>
          <button className='text-[#E614FC] text-[14px] md:text-[24px] p-[6px] md:py-[13px] md:px-[18px] border rounded-[10px] border-[#E614FC] font-OS flex items-center gap-2'>
            <HiLightningBolt className='w-[20.73px] h-[29.61px]'/>
          Instant Delivery
          </button>
          </div>

        <div className='flex i gap-[14px] mt-7'>
          <button className='md:py-2.5 md:px-3 p-[5px] bg-gradient-to-tr from-[#18C5E1] from-1% via-[#8666EF] via-50% to-[#FB01FF] to-100% rounded-[10px] md:rounded-[15px] font-OS text-[14px] md:text-[24px] text-white'>
            PS5
            </button>
            <button className='md:py-2.5 md:px-3 p-[5px] bg-gradient-to-tr from-[#18C5E1] from-1% via-[#8666EF] via-50% to-[#FB01FF] to-100% rounded-[10px] md:rounded-[15px] font-OS text-[14px] md:text-[24px] text-white'>
            Key
            </button>
            <button className='md:py-2.5 md:px-3 p-[5px] bg-gradient-to-tr from-[#18C5E1] from-1% via-[#8666EF] via-50% to-[#FB01FF] to-100% rounded-[10px] md:rounded-[15px] font-OS text-[14px] md:text-[24px] text-white'>
            Deluxe edition
            </button>
            <button className='md:py-2.5 md:px-3 p-[5px] bg-gradient-to-tr from-[#18C5E1] from-1% via-[#8666EF] via-50% to-[#FB01FF] to-100% rounded-[10px] md:rounded-[15px] font-OS text-[14px] md:text-[24px] text-white'>
           UK
            </button>
        </div>
      </div>
      <div className="price mr-[63px] flex flex-col justify-center">
        <p className='text-[15px] md:text-[24px] font-OS text-[#78797D]'>Unit Price:</p>
        <del className='text-[15px] md:text-[24px] font-OS text-[#78797D]'>$59,99</del>
        <p className='font-Inter text-[16px] md:text-[26px] text-[#E614FC] mt-[6px]'>$35,99</p>
      </div>
      <div className="icon flex flex-col justify-between">
        <div className='px-5 py-[54px] border-2 border-white/10 0 rounded-[20px]  '>
          <FaRegHeart className='w-[26.50px] h-[26.22px] text-[#707070]' />
        </div>
        <div className='px-[27px] py-[59px] border-2 border-white/10 rounded-[20px]  0 '>
          <ImCross className='w-[16.75px] h-[16.75px] text-[#707070]' />
        </div>
      </div>

    </div>

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
          <div className="left w-[1095px] flex flex-col gap-[60px]">
            <Product
            src={cartPhoto1}
            title='The Last Of Us Part II'/>

            <Product
            src={cartPhoto2}
            title='Ghost Runner'/>
           

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
                <img className='w-[26px] h-[24px] md:w-[41.84px] md:h-[40.13px]' src={star} alt="star" />
                <img className='w-[89.86px] h-[19.5px] md:w-[144.53px] md:h-[31.52px]' src={trustpilot} alt="trustpilot" />
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