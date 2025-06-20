import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <div className="w-12 h-12 m-auto mb-5">
          <img
            src={assets.exchange_icon}
            width="48"
            height="48"
            className="w-full h-full"
            alt="Exchange icon"
          />
        </div>
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-500">We offer a hassle-free exchange policy</p>
      </div>
      <div>
        <div className="w-12 h-12 m-auto mb-5">
          <img
            src={assets.quality_icon}
            width="48"
            height="48"
            className="w-full h-full"
            alt="Return policy icon"
          />
        </div>
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-500">We offer a 7-day free return policy</p>
      </div>
      <div>
        <div className="w-12 h-12 m-auto mb-5">
          <img
            src={assets.support_img}
            width="48"
            height="48"
            className="w-full h-full"
            alt="Customer support icon"
          />
        </div>
        <p className="font-semibold">Best Customer support</p>
        <p className="text-gray-500">We provide 24/7 Customer Support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
