import React from 'react'
import Container from '../Layer/Container'
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
import star from '/star.png'
import trustpilot from '/trustpilot.png'
import secure from '/secure.png'
import { FaLock } from 'react-icons/fa'

let Icon= ({src})=>{
  return(
    <img className='w-[44px] md:w-[79.05px] h-[30px] md:h-[53.85px]' src={src} alt="" />

  )
}

let InputBox= ({placeholder})=>{
  return(
    <div className=" relative">
      <input className="outline-none w-[327px] md:w-[526px] px-3 md:px-[23px] py-2.5 md:py-5 bg-[#FFFFFF]/5 font-Inter text-white text-[14px] md:text-[24px] rounded-[10px] " type="text" placeholder={placeholder} />
    {/* <div className="icon absolute top-1/2 -translate-y-1/2 right-0 w-1/2  ">
    <FaLock className='' />
    </div> */}
    </div>

  )
}

const CheckOut = () => {

  return (
    <div>
        <Container>
        <div className='flex items-center justify-between mb-[35px] mt-[50px]'>
                <h1 className='text-[14px] md:text-[36px] font-OS text-white'>Checkout</h1>
                <div className='h-[1px] md:h-[2px] w-[40px] md:w-[1112px] bg-custom-gradient'
                ></div>


                

                <button className='border py-[7px] md:py-3 px-[10.5px] md:px-[18px] text-white font-OS text-[12px] md:text-[24px] rounded-[10px]'>
                Continue Shopping
                    </button>
            </div>

        
        <div className='flex flex-col md:flex-row justify-between'>
          <div className="left w-[1095px]">
            <div className="icon grid grid-rows-2 grid-cols-6  md:grid-cols-11 gap-y-2.5 md:gap-0">
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
            <div className="info flex flex-col md:flex-row justify-between mt-[43px]">

              <div className="left flex flex-col gap-4 md:gap-[25px]">
                <InputBox placeholder='Card Name:'/>

              <InputBox placeholder='Card number:'/>

              <InputBox placeholder='Security code:'/>
              </div>
              <div className="right flex flex-col gap-4 md:gap-[25px] mt-4 md:mt-0">
                <InputBox placeholder='Month:'/>
                <InputBox placeholder='Year:'/>
                <button className='w-[327px] md:w-[526px] py-2.5 md:py-5  rounded-[10px] text-white text-[12px] md:text-[24px] font-OS bg-gradient-to-tl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100%'> Pay Now</button>
              </div>


            </div>

          </div>
          <div className=" right w-[526px]">
            <div className="up"></div>
            <div className="down border border-white/15 rounded-[15px] px-8 pt-8 pb-[48px] mb-[199px] ">
              <div className='border-b w-[462px] border-white/15 flex flex-col items-center pb-[35px]'>
              <div className="logo flex items-end gap-[6px] ">
                <img className='w-7 h-[27px] md:w-[41.84px] md:h-[40.13px]' src={star} alt="" />
                <img className='w-[86.86px] h-[18.94px] md:w-[144.53px] md:h-[31.52px]' src={trustpilot} alt="" />
              </div>
              
              
              
              <p className='font-Inter text-[10px] md:text-[20px] text-[#787A7D]'>TrustScore 5.0 | 457 Reviews</p>
              </div>

              <div className='flex flex-col items-center '>
              <div className='flex gap-[5px] md:gap-[9.5px] md:mt-[40.4px] md:mb-[4.85px]'>
    <img className='w-[15.8px] h-[18.5px] md:w-[32.45px] md:h-[38.15px] ' src={secure} alt="" />

    <p className='font-pop text-[13px] md:text-[28px] text-white'>Safe & Secure</p>
   </div>

   <p className='font-Inter text-[10px] md:text-[20px] text-[#787A7D] '>100% Secure, 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>


           
        </Container>
    </div>
  )
}

export default CheckOut