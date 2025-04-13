import React from 'react'
import { company } from '.';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Company() {
  return (
     <>
    <div className='flex items-center justify-center w-full 2xl:p-8 
    2xl:gap-20 mb-20 xl:gap-11 xl:p-4 lg:gap-10 md:gap-10 max-sm:hidden max-md:gap-10'>
      {company.map(icons =>{
        return(
        <>
          <ScrollAnimation animateIn='slideInDown'>
          <div className='md:w-20 max-md:w-20 xl:w-auto 2xl:w-auto'>
             <img src={icons.url} alt={icons.title} className='w-full'/>
          </div>
          </ScrollAnimation>
        </>
            );
        })}
    </div>
     </>
  )
}
