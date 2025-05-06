import React from 'react'
import Container from './Container'

import ReviewCard from '../Component/ReviewCard'

import review3 from '/review3.png'
import Slider from 'react-slick'

const ProductReview = () => {

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      
    ],
  };
  return (
    <div>
        <Container>
        <div className='flex items-center justify-between mb-[41px]'>
                <h1 className='text-[14px] md:text-[36px] font-OS text-white'>Product Reviews</h1>
                <div className='h-[1px] md:h-[2px] w-[40px] md:w-[1112px] bg-custom-gradient'
                ></div>



                

                <button className='border py-[7px] md:py-3 px-[10.5px] md:px-[18px] text-white font-OS text-[12px] md:text-[24px] rounded-[10px]'>
                        Browse All
                    </button>
            </div>

            <Slider {...settings}>
                <ReviewCard  
                name='Sajid'
                image={review3}
                review='Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry.'
                star={4}
                />


                <ReviewCard  
                name='Sajid'
                image={review3}
                review='Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry.'
                star={3}
                />


                <ReviewCard  
                name='Sajid'
                image={review3}
                review='Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry.'
                star={5}
                />

                <ReviewCard  
                name='Sajid'
                image={review3}
                review='Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry.'
                star={3}
                />

</Slider>
        </Container>
    </div>
  )
}

export default ProductReview