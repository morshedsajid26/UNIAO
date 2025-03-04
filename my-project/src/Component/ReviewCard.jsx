import React from "react";
import icon from "/star.png";

const ReviewCard = ({ image, name, star, review, className , Class }) => {
  return (
    <div
      className={`p-[1px] w-[526px]  md:mx-5 bg-gradient-to-b from-[#00DBDE] from-1% to-[#FC00FF] to-100%  rounded-lg ${Class} `}
    >
      <div className={`py-4 md:py-11 px-[1.125rem] md:px-12 bg-[#15181D] rounded-lg flex flex-col gap-y-1.5 md:gap-y-6 ${className}`}>
        <div className="detail flex items-center gap-x-3">
          <div className="image border border-primary rounded-full">
            <img
              src={image}
              alt={name}
              className=" w-10 md:w-14 h-10 md:h-14 border border-primary-bg rounded-full object-cover"
            />
          </div>
          <div className="nameStar">
            <div className="name text-white font-semibold text-xs md:text-2xl">
              {name}
            </div>
            <div className="star flex items-center gap-1">
              {Array(star)
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt="Star"
                    className=" w-3 md:w-6 h-3 md:h-6"
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="reviewText">
          <p className="font-OS  md:text-[22px] text-white">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;