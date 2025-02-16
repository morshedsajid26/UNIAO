import React from 'react'
import Container from './Container'

import ReviewCard from '../Component/ReviewCard'

import review3 from '/review3.png'

const ProductReview = () => {
  return (
    <div>
        <Container>
        <div className='flex items-center justify-center gap-[43px] mb-[35px]'>
                <h1 className='text-[14px] md:text-[36px] font-OS text-white'>Product Reviews</h1>
                <div className='h-[1px] md:h-[2px] w-[40px] md:w-[1112px] bg-custom-gradient'
                ></div>



                

                <button className='border py-[7px] md:py-3 px-[10.5px] md:px-[18px] text-white font-OS text-[12px] md:text-[24px] rounded-[10px]'>
                        Browse All
                    </button>
            </div>

            <div>
                <ReviewCard
                
                name='Sajid'
                image={review3}
                review='Lorem Ipsum is simply dummy text of the 
printing and typesetting industry.'


                />
            </div>
        </Container>
    </div>
  )
}

export default ProductReview