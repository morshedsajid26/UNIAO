import React from 'react'

import Container from './Conatiner'
import GameCard from '../Component/GameCard'


import card1 from '/card1.png'
import card2 from '/card2.png'
import card3 from '/card3.png'
import card4 from '/card4.png'
import Slider from 'react-slick'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const ComingSoon = () => {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div
            className=''
            onClick={onClick}
          >
            <FaLongArrowAltRight className='' />
          </div>
        );
      }
    
      function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
          <div
            className=''
            onClick={onClick}
          >
            <FaLongArrowAltLeft className='' />
          </div>
        );
      }




    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          { breakpoint: 1280, settings: { slidesToShow: 3 } }, // Laptops
          { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablets
          { breakpoint: 640, settings: { slidesToShow: 1 } }   // Mobile Phones
        ]
      };
  return (
    <div>
    <Container>
        <div className='flex items-center justify-center gap-[43px] mb-[35px]'>
            <h1 className='text-[16px] md:text-[36px] font-OS text-white'>Coming Soon</h1>
            <div className='h-[1px] md:h-[2px] w-[66px] md:w-[1140px] bg-custom-gradient'
            ></div>



            

            <button className='border py-[7px] md:py-3 px-[10.5px] md:px-[18px] text-white font-OS text-[12px] md:text-[24px] rounded-[10px]'>
                    Browse All
                </button>
        </div>

        <Slider {...settings}>
        <div className=' !flex !gap-[47px]'>
            <GameCard
            src={card1}/>

            <GameCard
            src={card2}/>
            <GameCard
            src={card3}/>

            <GameCard
            src={card4}/>

           
        </div>

        </Slider>
    </Container>
</div>
  )
}

export default ComingSoon