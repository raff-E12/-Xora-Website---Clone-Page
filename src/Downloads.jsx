import React from 'react'
import BtnPlatform from './assets/btnPlatform'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Downloads() {
  return (
    <section className='flex flex-col justify-center items-center 2xl:p-[40px] gap-4
    2xl:flex-row bg-color-down w-[100%]'>
            <div className='flex justify-center items-center flex-col'>
                <div className='flex-col flex items-center justify-center gap-5 p-10'>
                    <div className='w-[199px]'>
                       <img src="public/images/xora.svg" alt="logo-xora" className='w-full'/>
                    </div>
                    <h4 className='text-center'>Try it Now for free on IOS, Android, PC, Web - 
                        whatever your flavor, we've got you covered.</h4>
                </div>
                    <div className='w-full flex flex-row justify-center items-center p-2 gap-4 max-sm:w-[100%]'>
                        <BtnPlatform/>
                    </div>
            </div>
           <ScrollAnimation animateIn='slideInRight'>
           <div className='2xl:p-[40px] max-xl:p-[40px] max-md:p-[40px] max-sm:p-[40px] flex items-center justify-center lg:p-[130px]'>
             <div className='flex items-center justify-center screen-sc'>
                <img src="public/images/screen.jpg" alt="screen-xl" className='w-full rounded-[10px]'/>
             </div>
           </div>
           </ScrollAnimation>
    </section>
  )
}
