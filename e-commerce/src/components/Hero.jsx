import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col  sm:flex-row  border border-gray-400 ">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
        <div className="text-[#414141]">
          <div className="items-center gap-2 flex">
            <p className=" w-8  md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md-text-base">OUR BEST SELLERS</p>
          </div>
          <h1 className="  prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold md:text-base text-sm ">SHOP NOW</p>
            <p className="w-8  md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <img
        className="w-full sm:w-1/2"
        src={assets.hero_img}
        width="600"
        height="400"
        loading="eager"
        alt="Latest fashion hero banner"
      />
    </div>
  );
};

export default Hero;
