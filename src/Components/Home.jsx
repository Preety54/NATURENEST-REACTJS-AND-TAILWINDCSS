import React from 'react'
import bg1 from "../pics/background.avif"
import bg from "../bg3.webp"

const Home = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row h-full">
        <div className="relative w-full sm:w-[60%] md:w-[60%]">
          <img
            className="h-[300px] sm:h-[673px] md:h-[673px] w-full object-cover"
            src={bg1}
            alt=""
          />
        </div>

        <div className="absolute mt-52 flex items-center justify-center md:justify-start">
          <p className="bg-white bg-opacity-70 text-center px-4 py-4 max-w-2xl mx-4  sm:ml-24 md:ml-44 text-gray-700 font-semibold text-sm md:text-lg italic w-[550px] ">
            <span className='text-2xl font-semibold '>Nature Nest</span> is a sustainable design brand focused on bringing the calming beauty of nature into your home. We specialize in eco-friendly decor and a curated selection of indoor plants. Each piece is chosen to transform your space into a green sanctuary. Embrace tranquility and nature with every element we offer.
          </p>
        </div>

        <div className="w-full sm:w-[40%] md:w-[40%]">
          <img
            className="h-[300px] sm:h-[673px] md:h-[673px] w-full object-cover"
            src={bg}
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Home;



