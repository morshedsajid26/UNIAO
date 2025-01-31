import React from 'react'

import Container from './Conatiner'



import card1 from '/card1.png'
import card2 from '/card2.png'
import card3 from '/card3.png'
import card4 from '/card4.png'
import Slider from 'react-slick'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'



import icon1 from '/path-1.png'
import icon2 from '/path-2.png'
import icon3 from '/Li-3.png'

let ComingGame = ({src}) => {
  return (
    <div className='w-[157px] md:w-[393px] bg-gradient-to-t from-[#18C5E1] from-0% via-[#8666EF] via-47% to-[#FB01FF] to-100% p-[2px] rounded-[20px] md:rounded-[25px]'>
        <div className='bg-[#15181D] p-[6px] md:px-3 md:py-[14px] rounded-[20px] md:rounded-[25px]'>
            <div className="img ">
                <img className='w-[146px] h-[114px] md:w-full md:h-full' src={src} alt="" />
            </div>

            
                <p className='font-OS  text-[14px] md:text-[28px] text-white mt-[5px] md:mt-[17px]'>Sekiro Shadows Die...</p>
            
            <div className='flex gap-[3px] md:gap-[31px] md:items-center mt-[5px] md:mt-4 mb-[8px] md:mb-[35px]'>
                <div className='flex gap-[2px] md:gap-2.5'>
               

                <p className='text-[14px] md:text-[28px] text-[#E614FC] font-OS'>Release date 2024</p>
                </div>

                
            </div>

            <div className="icon flex gap-[11px] md:gap-7 justify-center">
            <img className='md:w-[39px] w-[15.61px] h-[12.05px] md:h-[30px]' src={icon1} alt="" />
            <img className='md:w-[30px] w-3 h-3 md:h-[30px]' src={icon2} alt="" />
            <img className='md:h-[30px] md:w-[30px] h-3 w-3' src={icon3} alt="" />
            </div>
        </div>
    </div>
  )
}

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

        {/* <Slider {...settings}> */}
        <div className=' !flex !gap-[47px]'>
            <ComingGame
            src={card1}/>

            <ComingGame
            src={card2}/>
            <ComingGame
            src={card3}/>

            <ComingGame
            src={card4}/>

           
        </div>

        {/* </Slider> */}
    </Container>
</div>
  )
}

export default ComingSoon