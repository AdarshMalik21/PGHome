import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-10 py-20 gap-8">
      <div className="w-1/2 h-64 bg-white/30 flex items-center justify-center rounded-b-full">
      
      <div className='bg-blue-950 rounded-2xl p-10 hover:bg-blue-900 transition duration-300 cursor-pointer'>
          <h4 className='text-white/50 text-2xl'>Boys PG</h4>
      </div>
      
      </div>
      <div className="w-1/2 h-64 bg-white/30 flex items-center justify-center rounded-t-full">
      
      <div className='bg-pink-400 rounded-2xl p-10 hover:bg-pink-500 transition duration-300 cursor-pointer'>
          <h4 className='text-gray-950 text-2xl'>Girls PG</h4>
      </div>
      
      </div>
    </div>
    </>
  )
}

export default Hero
