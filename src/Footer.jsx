import React from 'react'
import { social_Icon } from './assets'
import './footer.module.section.css'

export default function Footer() {
  return (
    <section className='footer-sc flex items-center justify-center 
      2xl:flex-row gap-10 p-10 mt-7 xl:flex-row lg:flex-row max-md:flex-col max-sm:flex-col max-lg:flex-row md:flex-row '>
        <a href="#" className='capitalize w-full text-center 2xl:text-1xl xl:text-1xl lg:text-lg sm:text-1xl max-sm:text-1xl'>Copyright by Raffy_Ef12</a>
        <div className='flex p-3 items-center justify-center 2xl:flex-row max-sm:flex-col max-md:flex-col gap-3 w-full'>
        <a href='#' className='capitalize text-center 2xl:text-1xl xl:text-1xl lg:text-lg sm:text-1xl max-sm:text-1xl'>Privacy Policy</a>
        <a href='#' className='capitalize text-center 2xl:text-1xl xl:text-1xl lg:text-lg sm:text-1xl max-sm:text-1xl'>Term of Use</a>
        </div>
        <div className='flex items-center justify-center flex-row gap-5 w-full'>
            {social_Icon.map((icons)=>{
               return(
             <button title={icons.title} key={icons.id} className='btn-social'>
                <a href={icons.url}><img src={icons.icon} alt={icons.title}/></a>
              </button>
               );
            })}
        </div>
    </section>
  )
}
