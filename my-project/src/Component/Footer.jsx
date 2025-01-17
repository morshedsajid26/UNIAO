import React from 'react'
import Container from '../Layer/Conatiner'

import star from '/star.png'
import trustpilot from '/trustpilot.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import sponsor from '/sponsor.png'

import FooterLogo from '/FooterLogo.png'

const Footer = () => {
  return (
   <div className='py-5'>
     <div className=' max-w-[1862px] mx-auto   bg-gradient-to-r from-[#18C5E1] from-0% via-[#8666EF] via-30% to-[#FB01FF] to-100% p-[2px] rounded-[25px]  '>
       <div className='bg-[#1E2127] rounded-[25px]'>
       <Container className=' pt-[148px] pb-6'>

<div className="top grid grid-cols-12 justify-between gap-10">
 <div className="child col-span-3 bg-slate-500">
   <h3 className='text-[28px] text-[#FFFFFF] font-medium font-pop '>Trustful</h3>

   <div className="logo flex items-end gap-[6px] ">
     <img className='w-[61.24px] h-[58.73px]' src={star} alt="" />
     <img className='w-[188.74px] h-[41.16px]' src={trustpilot} alt="" />
   </div>

   <div className="rating"></div>


   <p className='text-[#E414FB] font-Inter text-[25px]'>100% Money Back</p>
 </div>


 <div className="child col-span-2">
  
     <p className='text-white font-pop text-[24px] font-medium'>Company</p>

     <ul className=' flex flex-col gap-[50px] mt-[30px]'>
     <li className='text-white/60 font-Inter text-[24px] '>Home</li>
     <li className='text-white/60 font-Inter text-[24px] '>Our Story</li>
     <li className='text-white/60 font-Inter text-[24px] '>Blog</li>
     <li className='text-white/60 font-Inter text-[24px] '>Contact Us</li>
   </ul>
 </div>
 <div className="child col-span-2">
 
     <p className='text-white font-pop text-[24px] font-medium'>Orders</p>
     
     <ul className=' flex flex-col gap-[50px] mt-[30px]'>
     <li className='text-white/60 font-Inter text-[24px] '>My Orders</li>
     <li className='text-white/60 font-Inter text-[24px] '>Refund Policy</li>
     <li className='text-white/60 font-Inter text-[24px] '>Cancelations</li>
     <li className='text-white/60 font-Inter text-[24px] '>Help Center</li>
   </ul>
 </div>
 <div className="child col-span-3">
 
     <p className='text-white font-pop text-[24px] font-medium'>Resources</p>
     <ul className=' flex flex-col gap-[50px] mt-[30px]'>
     <li className='text-white/60 font-Inter text-[24px] '>Why do Customers Love Us</li>
     <li className='text-white/60 font-Inter text-[24px] '>Redeem Argentina and Turkey</li>
     <li className='text-white/60 font-Inter text-[24px] '>How to Sell?</li>
     <li className='text-white/60 font-Inter text-[24px] '>How Become affliate?</li>
   </ul>
 </div>
 <div className="child col-span-2">
 <p className='text-white font-pop text-[24px] font-medium'>Follow Us</p>

 <ul className='flex  gap-2'>
   <li className='w-[49px] h-[49px] rounded-full bg-gradient-to-l from-[#00DBDE] from-1% to-[#FC00FF] to-100% flex items-center justify-center  '><FaXTwitter /></li>
   <li className='w-[49px] h-[49px] rounded-full bg-gradient-to-l from-[#00DBDE] from-1% to-[#FC00FF] to-100% flex items-center justify-center  '><FaInstagram /></li>
   <li className='w-[49px] h-[49px] rounded-full bg-gradient-to-l from-[#00DBDE] from-1% to-[#FC00FF] to-100% flex items-center justify-center  '><FaFacebookF /></li>
   <li className='w-[49px] h-[49px] rounded-full bg-gradient-to-l from-[#00DBDE] from-1% to-[#FC00FF] to-100% flex items-center justify-center  '><FaLinkedinIn /></li>
 </ul>
 </div>
</div>

<div className="middle flex justify-center mt-[144px] mb-[119px]">
 <img src={sponsor} alt="" />
</div>

<div className='bottom flex justify-between items-center'>

 <p className='text-[22px] text-white font-Inter'>Vbrae © Copyright 2023</p>

 <img src={FooterLogo} alt="" />

 <p className='flex gap-2 text-[22px] text-white font-Inter'>
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