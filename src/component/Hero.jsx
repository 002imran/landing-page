import React from "react";

const Hero = () => {
  return(
    <div className="text-white">
        <div className="max-w-[800px] mt-80 w-full h-screen mx-auto text-center flex flex-col ">

            <p className="text-[#00df9a] font-bold p-2">
               GROWING WITH DATA ANALYTICS
            </p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                Grow with data
            </h1>
            <div className="flex justify-center items-center">
                <p className="md:text-5xl sm:text-4xl text-xl font-bold">
                  Fast, flexible finacing for
                </p>
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500 py-2">
              Monitor your data analytics to increase for BTB, BTC, SASS platforms
            </p>
        </div>

    </div>
  )
};
export default Hero;
