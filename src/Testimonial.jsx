import React from 'react'
import TestimonialBox from './assets/TestimonialBox'

export default function Testimonial() {
  return (
    <>
    <div className='flex items-center w-full justify-center flex-col p-10 
    gap-7 2xl:flex-row bg-color-test 2xl:gap-1 xl:flex-row bg-color-test xl:gap-1'>
       <div className='items-center justify-center flex-col flex p-10 2xl:w-[100%] xl:w-[100%]'>
        <p className='text-p-hero w-full text-center 2xl:text-left xl:text-left'>Wall of Love</p>
        <h2 className='capitalize text-center w-full 2xl:text-left xl:text-left'>Words from our fans</h2>
       </div>
      <div className='flex justify-center items-center gap-6 flex-col 2xl:grid 2xl:grid-cols-2 
      2xl:gap-7 2xl:p-4 2xl:rounded-xl xl:grid xl:grid-cols-2 
      xl:gap-7 xl:p-4 xl:rounded-xl lg:grid-cols-2 lg:grid
      max-md:flex max-md:flex-col sm:flex sm:flex-col max-sm:flex max-sm:flex-col'>
      <TestimonialBox />
      </div>
    </div>
    </>
  )
}
