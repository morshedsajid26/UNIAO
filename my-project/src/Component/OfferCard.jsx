import React from 'react'



const OfferCard = ({image,heading,save,price,to,from}) => {
  return (
    <div className='w-[327px] md:w-[524px] h-[88px] md:h-[148px] bg-[#1E2127] rounded-[20px] flex items-center  px-2 md:px-2.5 '>

        <div className="image">
            <img className='w-[72px] md:w-full  md:h-full h-[72px]' src={image} alt="" />
        </div>

        <div className="text ml-[26px]">
            <h3 className='text-[16px] md:text-[28px] text-white font-OS'>{heading}</h3>

            <div className='flex gap-2.5 mt-[11px] mr-[49px]'>
                <p className='flex flex-col font-OS text-[#78797D] text-[12px] md:text-[18px]'>{from} <span>{to}</span></p>
                <p className='font-OS text-[16px] md:text-[28px] text-[#E614FC]'>{price}</p>
            </div>
        </div>

        <div className='mt-10'>
            <p className='px-[6px] md:px-[11px] py-[5px] md:py-2.5 border font-OS text-[11px] md:text-[24px] text-[#28B8E3] border-[#2BB6E4] rounded-[10px]'>{save}</p>
        </div>

    </div>
  )
}

export default OfferCard