import React from 'react'
import Container from '../Layer/Conatiner'

import star from '/star.png'
import trustpilot from '/trustpilot.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
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

import secure from '/secure.png'

import FooterLogo from '/FooterLogo.png'
import { IoStarSharp } from 'react-icons/io5'

const Footer = () => {
  return (
   <div className='py-5'>
     <div className=' max-w-[356px] md:max-w-[1862px] mx-auto   bg-gradient-to-r from-[#18C5E1] from-0% via-[#8666EF] via-30% to-[#FB01FF] to-100% p-[2px] rounded-[25px]  '>
       <div className='bg-[#1E2127] rounded-[25px]'>
       <Container className='pl-[27px] md:pl-0 pt-10 md:pt-[148px] pb-6'>

<div className="top grid grid-cols-2 md:grid-cols-12 justify-between gap-10">
 <div className="child col-span-3 flex md:inline md:gap-0 gap-7">


<div>
<h3 className='text-[16px] md:text-[28px]  text-[#FFFFFF] font-medium font-pop '>Trustful</h3>

<div className="logo flex items-end gap-[6px] mt-[.9px] md:mt-[27px] ">
  <img className='w-7 h-[27px] md:w-[61.24px] md:h-[58.73px]' src={star} alt="" />
  <img className='w-[86.86px] h-[18.94px] md:w-[188.74px] md:h-[41.16px]' src={trustpilot} alt="" />
</div>

<div className="rating flex gap-1 mt-[6.46px] md:mt-[9px] mb-[4.69px] md:mb-[15.5px]">
<div className='w-[22.18px] h-[22.18px] md:h-12 md:w-12  flex items-center justify-center bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100%'>
<IoStarSharp className='w-[15.48px] h-[14.55px] md:w-[33.63px] md:h-[31.62px] text-white'/>
</div>
<div className='w-[22.18px] h-[22.18px] md:h-12 md:w-12  flex items-center justify-center bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100%'>
<IoStarSharp className='w-[15.48px] h-[14.55px] md:w-[33.63px] md:h-[31.62px] text-white'/>
</div>
<div className='w-[22.18px] h-[22.18px] md:h-12 md:w-12  flex items-center justify-center bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100%'>
<IoStarSharp className='w-[15.48px] h-[14.55px] md:w-[33.63px] md:h-[31.62px] text-white'/>
</div>
<div className='w-[22.18px] h-[22.18px] md:h-12 md:w-12  flex items-center justify-center bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100%'>
<IoStarSharp className='w-[15.48px] h-[14.55px] md:w-[33.63px] md:h-[31.62px] text-white'/>
</div>
<div className='w-[22.18px] h-[22.18px] md:h-12 md:w-12  flex items-center justify-center bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100%'>
<IoStarSharp className='w-[15.48px] h-[14.55px] md:w-[33.63px] md:h-[31.62px] text-white'/>
</div>
</div>

<p className='font-Inter text-[10px] md:text-[20px] text-[#787A7D]'>TrustScore 5.0 | 457 Reviews</p>
</div>

   <div>
   <div className='flex gap-[5px] md:gap-[9.5px] md:mt-[40.4px] md:mb-[4.85px]'>
    <img className='w-[15.8px] h-[18.5px] md:w-[32.45px] md:h-[38.15px] ' src={secure} alt="" />

    <p className='font-pop text-[13px] md:text-[28px] text-white'>Safe & Secure</p>
   </div>

   <p className='font-Inter text-[10px] md:text-[20px] text-[#787A7D] border-b-2 border-[#4A4A4A] w-[131px] md:w-[256px] pb-2.5 md:pb-[15px]'>100% Secure, 24/7 Support</p>


   <p className='text-[#E414FB] font-Inter text-[25px] mt-4 md:block hidden'>100% Money Back</p>

   <div className='block md:hidden mt-[7px]'>
    <p className='text-[11px] font-Inter uppercase text-[#E414FB] mb-[2px]'>NO PAYMENT FEES,</p>
    <p className='text-[11px] font-Inter uppercase text-[#11CDE1]'>NO HIDDEN FEES</p>
   </div>
   </div>
 </div>


 <div className="child col-span-2 flex gap-[82px]">
  
     <div>
     <p className='text-white font-pop text-[16px] md:text-[24px] font-medium'>Company</p>

<ul className=' flex flex-col gap-[17px] md:gap-[50px] mt-[6px] md:mt-[30px]'>
<li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>Home</li>
<li className='text-white/60 font-Inter text-[14px] md:text-[24px]'>Our Story</li>
<li className='text-white/60 font-Inter text-[14px] md:text-[24px]'>Blog</li>
<li className='text-white/60 font-Inter text-[14px] md:text-[24px]'>Contact Us</li>
</ul>
     </div>

   <div className='block md:hidden'>
   <p className='text-white font-pop text-[16px] md:text-[24px] font-medium'>Orders</p>
     
     <ul className=' flex flex-col gap-[17px] md:gap-[50px] mt-[6px] md:mt-[30px]'>
     <li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>My Orders</li>
     <li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>Refund Policy</li>
     <li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>Cancelations</li>
     <li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>Help Center</li>
   </ul>
   </div>
 </div>
 <div className="child col-span-2 md:block hidden ">
 
     <p className='text-white font-pop text-[16px] md:text-[24px] font-medium'>Orders</p>
     
     <ul className=' flex flex-col gap-[17px] md:gap-[50px] mt-[6px] md:mt-[30px]'>
     <li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>My Orders</li>
     <li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>Refund Policy</li>
     <li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>Cancelations</li>
     <li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>Help Center</li>
   </ul>
 </div>
 <div className="child col-span-3">
 
     <p className='text-white font-pop text-[16px] md:text-[24px] font-medium'>Resources</p>
     <ul className=' flex flex-col gap-[17px] md:gap-[50px] mt-[6px] md:mt-[30px]'>
     <li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>Why do Customers Love Us</li>
     <li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>Redeem Argentina and Turkey</li>
     <li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>How to Sell?</li>
     <li className='text-white/60 font-Inter text-[14px] md:text-[24px] '>How Become affliate?</li>
   </ul>
 </div>
 <div className="child col-span-2">
 <p className='text-white font-pop text-[16px] md:text-[24px] font-medium mb-[5px] md:mb-[29px]'>Follow Us</p>

 <ul className='flex  gap-[6px] md:gap-2'>
   <li className='w-[30px] h-[30px] md:w-[49px] md:h-[49px] rounded-full bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100% flex items-center justify-center text-white '><FaXTwitter /></li>
   <li className='w-[30px] h-[30px] md:w-[49px] md:h-[49px] rounded-full bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100% flex items-center justify-center  text-white'><FaInstagram /></li>
   <li className='w-[30px] h-[30px] md:w-[49px] md:h-[49px] rounded-full bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100% flex items-center justify-center  text-white'><FaFacebookF /></li>
   <li className='w-[30px] h-[30px] md:w-[49px] md:h-[49px] rounded-full bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100% flex items-center justify-center  text-white'><FaLinkedinIn /></li>
 </ul>
 </div>
</div>

<div className="middle grid md:grid-cols-12 grid-cols-6 grid-rows-2 md:grid-rows-1 w-[298.67px] md:w-[884.82px] gap-2.5 md:gap-[18px]  mx-auto my-[53px] md:mt-[144px] md:mb-[119px]">
 <img className='grid-cols-1' src={payment1} alt="" />
 <img className='grid-cols-1' src={payment2} alt="" />
 <img className='grid-cols-1' src={payment3} alt="" />
 <img className='grid-cols-1' src={payment4} alt="" />
 <img className='grid-cols-1' src={payment5} alt="" />
 <img className='grid-cols-1' src={payment6} alt="" />
 <img className='grid-cols-1' src={payment7} alt="" />
 <img className='grid-cols-1' src={payment8} alt="" />
 <img className='grid-cols-1' src={payment9} alt="" />
 <img className='grid-cols-1' src={payment10} alt="" />
 <img className='grid-cols-1' src={payment11} alt="" />
</div>

<div className='bottom flex flex-col md:flex-row justify-between md:items-center'>

<img className='block md:hidden w-[34.83px] h-[25.62px] md:w-[52.1px] md:h-[38.46px]' src={FooterLogo} alt="" />

 <p className='text-[14px] md:text-[22px] text-white font-Inter mt-[8.8px] md:mt-0'>Vbrae © Copyright 2023</p>

 <img className='hidden md:block' src={FooterLogo} alt="" />

 <p className='flex mt-[6px] md:mt-0 gap-[13px] md:gap-2 text-[14px] md:text-[22px] text-white font-Inter'>
 Privacy Policy
   <span>|</span>
   Terms of Service
 </p>

</div>

</Container>
       </div>
    </div>
   </div>
  )
}

export default Footer