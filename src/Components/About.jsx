import React from 'react'
import pic from "../about.avif";
import pic1 from "../pics/sec.webp";

const About = () => {
  return (
    <div className='bg-green-800 w-full'>
      <div className='flex  w-[1200px] mx-auto'>
        <div className=' h-[300px] w-[560px] ml-10'>
          <h1 className='font-serif text-white text-6xl mt-24 w-[400px] ml-12'>ABOUT US</h1>
          <p className='text-white italic w-[400px] h-[300px] text-md py-4 ml-16'>At Nature Nest, we bring natural beauty into your home with eco-friendly, sustainable designs—creating green sanctuaries that blend lifestyle with nature.</p>
        </div>
        <div className='ml-16 h-[300px] w-[450px] bg-green-950 flex justify-center items-center'>
          <img className='h-[262px] w-[400px]' src={pic} alt="" />
        </div>
      </div>

      <div className='mx-auto flex w-[1200px]'>
        <div className=''>
          <img className='h-[380px] w-full ml-24 mt-12' src={pic1} alt="" />
        </div>

        <div className='w-[700px] py-20 px-10 '>
          <h1 className='font-serif text-4xl font-semibold italic ml-24 text-white '>Start of Our Journey</h1>
          <p className='w-[480px]  ml-32 italic mt-7 text-white'>Nature Nest began as a simple idea: to bring the calming beauty of the natural world into everyday spaces. Inspired by a love for plants and sustainable design, our journey started with a small selection of handpicked greenery and eco-friendly decor pieces. Over time, we grew into a community of nature enthusiasts dedicated to creating homes that reflect a deep respect for the environment. </p>
        </div>

      </div>
    </div>
  )
}

export default About
