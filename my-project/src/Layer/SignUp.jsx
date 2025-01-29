import React from 'react'
import Container from '../Layer/Conatiner'

import email from '/email-1.png'

const SignUp = () => {
  return (
    <div className='py-20 md:py-[174px]'>
        <Container className=' bg-gradient-to-r from-[#18C5E1] from-0% via-[#8666EF] via-30% to-[#FB01FF] to-100% p-[2px] rounded-[25px] '>
            <div className='bg-[#1E2127] rounded-[25px] pt-[14.5px] pb-[19px] md:py-[51px] px-[21px] md:pl-[49px] :pr-[42px] flex flex-col md:flex-row items-center justify-between md:gap-0 gap-[16.8px]'>
                <div className="left flex items-center gap-[13px] md:gap-6">
                    <div className="icon">
                        <img className='w-[41.5px] h-[41.45] md:h-full md:w-full' src={email} alt="" />
                    </div>
                    <div className="text">
                        <p className='text-white font-pop md:font-medium text-[14px] md:text-[38px]'>Sign up For Newsletter</p>

                        <p className='text-white md:text-white/60 font-Inter text-[14px] md:text-[20px]'>Stay tuned! Receive News and Discounts 
                        <span className='md:inline hidden'> on your email</span></p>
                    </div>
                </div>


                <div className="right flex gap-[6px]  md:gap-2.5 ">
                    <input className='py-[6.3px] md:py-4 w-[200px] md:w-[565px]  pl-2.5 md:pl-[21px] text-[#000000] font-Inter text-[12px] md:text-[24px] rounded-[10px] outline-none' type="text" placeholder='your@email.com' />

                    <button className='px-[11.5px] pt-[5px] pb-[8px] md:py-4 md:px-[30px] text-white font-Inter text-[12px] md:text-[23px] bg-gradient-to-r from-[#18C5E1] from-1% via-[#8666EF] via-50% to-[#FB01FF] to-100% rounded-[10px]'>Subscribe</button>
                </div>

            </div>

        </Container>
    </div>
  )
}

export default SignUp