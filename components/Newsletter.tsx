import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Newsletter = () => {
  return (
    <div className='ml-[38rem] mb-28 justify-center' data-aos="zoom-out-right"
    data-aos-duration="15000">
    <div className="bg-gray-800 p-4 rounded-lg w-[48rem] mb-12 justify-center items-center h-[8rem]" id='newsletter'>
    <h2 className="text-xl font-semibold mb-2 text-white">Subscribe to Our Newsletter</h2>
    <div className="flex">
      <input
        type="email"
        className="w-full p-2 border rounded-l focus:outline-none"
        placeholder="Enter your email"
      />
      <button className="bg-purple-500 text-white p-2 rounded-r hover:bg-purple-600">
        Subscribe
      </button>
    </div>
  </div>
  </div>
  )
}

export default Newsletter