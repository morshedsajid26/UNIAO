import React from "react";



import star from "/star.png";
import review1 from "/review1.png";
import review2 from "/review2.png";
import review3 from "/review3.png";

import ReviewSlider from "../Component/ReviewSlider";
import Container from "./Container";





const Review = () => {
  let reviews = [
    {
      name: "username",
      image: review1,
      star: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the  printing and typesetting industry..",
      reviewRes:
        "Lorem Ipsum is simply dummy text of the printing and type.",
      
    },
    {
      name: "username",
      image: review2,
      star: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the  printing and typesetting industry..",
      reviewRes:
        "Lorem Ipsum is simply dummy text of the printing and type.",
      
    },
    {
      name: "username",
      image: review3,
      star: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the  printing and typesetting industry..",
      reviewRes:
        "Lorem Ipsum is simply dummy text of the printing and type.",
      
    },
    {
      name: "username",
      image: review1,
      star: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the  printing and typesetting industry..",
      reviewRes:
        "Lorem Ipsum is simply dummy text of the printing and type.",
      
    },
    {
      name: "username",
      image: review2,
      star: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the  printing and typesetting industry..",
      reviewRes:
        "Lorem Ipsum is simply dummy text of the printing and type.",
      
    },
    {
      name: "username",
      image: review3,
      star: 5,
      reviewText:
        "Lorem Ipsum is simply dummy text of the  printing and typesetting industry..",
      reviewRes:
        "Lorem Ipsum is simply dummy text of the printing and type.",
      
    },
  ];
  return (
    <div className="pt-[47px] pb-[91px] md:pt-[128px] md:pb-[144px]">
      <Container className="flex items-center  gap-x-16 relative ">
        <div className="left w-1/3 sm:w-1/4 lg:w-1/3 xl:w-1/6  flex flex-col items-center gap-y-2 lg:gap-y-6 ">
          <p className="flex flex-col justify-center items-center font-openSans font-bold text-white text-sm sm:text-2xl lg:text-4xl">
            Trustpilot <span>Reviews</span>
          </p>
          <div className="line bg-white/5 md:bg-custom-gradient w-[74px] md:w-[200px] h-[1px] md:h-[2px] ">
            
          </div>
          <div className="star flex items-center gap-x-1 lg:gap-x-1.5 text-base lg:text-5xl font-bold text-[#38AAE6]">
            <p>5.0</p>
            <img className=" h-5 lg:h-10 w-5 lg:w-10" src={star} alt="star" />
          </div>
        </div>
        <div className="right">
          <div className="slide absolute top-1/2 -translate-y-1/2 left-1/3 sm:left-1/4 lg:left-1/3 xl:left-1/4 w-[200%]">
            <ReviewSlider items={reviews} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;