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

let Icon= ({src})=>{
  return(
    <img className='w-[79.05px] h-[53.85px]' src={src} alt="" />

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

        
        <div>
          <div className="left w-[1095px]">
            <div className="icon grid grid-cols-11">
              <Icon src={payment1}/>
              <Icon src={payment2}/>
              <Icon src={payment3}/>
              <Icon src={payment4}/>
              <Icon src={payment5}/>
              <Icon src={payment6}/>
              <Icon src={payment7}/>
              <Icon src={payment8}/>
              <Icon src={payment9}/>
              <Icon src={payment10}/>
              <Icon src={payment11}/>

            </div>

          </div>
          <div className="right w-[526px]"></div>
        </div>


           
        </Container>
    </div>
  )
}

export default CheckOut