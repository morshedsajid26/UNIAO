import React from 'react'
import Container from './Container'

import blog1 from '/blog1.png'
import blog2 from '/blog2.png'
import { PiClockCountdownFill } from 'react-icons/pi'
import { IoMdEye } from 'react-icons/io'
import Slider from 'react-slick'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'


let BlogCard =({src})=> {
  return (
    <div className='w-[327px] md:w-[817px] bg-[#1E2127] rounded-[30px] flex items-center gap-[35px] py-[14px] md:py-[27px] px-[10px] md:px-[24px]'>
      <div>
        <img className='w-[121px] h-[107px] md:w-full md:h-full' src={src} alt="" />
      </div>

      <div className='w-[160px] md:w-[330px]'>
              <p className='font-OS text-[14px] md:text-[30px] text-white'>Game Keys The Best 
              Websites for Affordable 
              Gaming Deals</p>

              <p className='font-OS text-[13px] md:text-[28px] text-[#E614FC] md:mt-9 md:mb-[21px] my-[9px] '>19 Sep, 23</p>

              <div className="icon flex gap-[22px] text-white/40">
             
              <div className='flex items-center gap-[7px] '>
              <PiClockCountdownFill className='w-[17px] h-[17px] md:w-[31px] md:h-[31px] ' />
              <p className='font-OS text-[13px] md:text-[20px]'>3 min read</p>
              </div>

              <div className='md:flex items-center gap-[7px] hidden  '>
              <IoMdEye className='w-[33px] h-[26px]'/>
              <p className='font-OS text-[20px]'>1230</p>
              </div>

              </div>
      </div>

    </div>




  )
}

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div
            className='w-[52px] h-[52px] border-2 rounded-full flex items-center justify-center absolute top-1/2 translate-x-1/2  -translate-y-10   -right-10 '
            onClick={onClick}
          >
            <FaLongArrowAltRight className= 'text-white   ' />
          </div>
        );
      }
    
      function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
          <div
            className='w-[52px] h-[52px] border rounded-full flex items-center justify-center absolute top-1/2 -translate-x-1/2  -translate-y-10 -left-10 z-30 '
            onClick={onClick}
          >
            <FaLongArrowAltLeft className=' text-white'    />
          </div>
        );
      }



const Blog = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // responsive: [
    //   { breakpoint: 1280, settings: { slidesToShow: 3 } }, // Laptops
    //   { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablets
    //   { breakpoint: 640, settings: { slidesToShow: 1 } }   // Mobile Phones
    // ]
  };



  return (
    <div className='pt-[168px]'>
        <Container>

        <div className='flex items-center justify-center gap-[43px] mb-[35px]'>
                <h1 className='text-[16px] md:text-[36px] font-OS text-white'>Blog Articles</h1>
                <div className='h-[1px] md:h-[2px] w-[66px] md:w-[1140px] bg-custom-gradient'
                ></div>



                

                <button className='border py-[7px] md:py-3 px-[10.5px] md:px-[18px] text-white font-OS text-[12px] md:text-[24px] rounded-[10px]'>
                        Browse All
                    </button>
            </div>


            <div className='relative'>
            <Slider {...settings}>
              <BlogCard
              src={blog1}/>
            

            <BlogCard
              src={blog2}/>


            <BlogCard
              src={blog1}/>
            

            <BlogCard
              src={blog2}/>
           </Slider>
           </div>

        </Container>
    </div>
  )
}

export default Blog