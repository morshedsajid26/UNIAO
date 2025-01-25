import React from 'react'

const GiftCard = ({imageClass,image,heading,price,children}) => {
  return (
    <div className='w-[327px] md:w-[524px] h-[88px] md:h-[148px] bg-[#1E2127] rounded-[20px] flex items-center  px-2.5 '>

        <div className={`w-[72px] md:w-[128px] h-[72px]  md:h-[128px]  rounded-[20px] flex items-center justify-center ${imageClass}`}>
            <img  src={image} alt="" />
        </div>

        <div className="text ml-[26px]">
            <h3 className='text-[16px] md:text-[28px] text-white font-OS'>{heading}</h3>

           
                <p className='font-OS text-[16px] md:text-[28px] text-[#E614FC]'>{price}</p>
            
        </div>

        {children}

    </div>
  )
}

export default GiftCard