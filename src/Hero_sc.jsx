import React, {useState} from 'react'
import Button from './assets/Button'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

function Herosc(){
  return (
    <section className='hero-sc w-full md:pt-[79px] max-sm:pt-[70px] max-md:pt-[78px] 
    xl:pt-[80px] xl:pl-[20px] xl:pr-[340px] sm:pl-[0px] 
    sm:pr-[0px] relative flex max-lg:justify-center'>
        <div className='flex items-center justify-center container'>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
            <div className='flex items-start justify-center gap-[10px] flex-col p-10 capitalize txt-hero'>
                <p className='text-p-hero w-full max-lg:justify-center flex'>Video Editing.</p>
                <h1 className='text-hero-center w-full max-lg:justify-center flex max-lg:text-center'>Amazingly<br/>simple</h1>
                <h5 className='xl:w-[60%] lg:w-[40%] max-lg:w-[40%] 
                sm:w-full max-sm:w-[100%] w-full max-lg:text-center'>We designed XORA AI Video Editor to be an easy to use, quick to
                learn, and surprisingly powerful.</h5>
               <div className='pt-7 w-full max-lg:justify-center flex'>
               <Button name="Try it Now" src="public/images/zap.svg" css="btn-1"/>
               </div>
            </div>
            </ScrollAnimation>
          <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
          <div className='flex w-[60%] h-[60%] justify-center items-center absolute 
            right-[-32px] top-[140px] max-lg:w-[50%] max-lg:right-[-10px] xl:w-[60%]
            max-sm:hidden max-md:hidden 2xl:w-[60%] md:hidden 2xl:visible 
            xl:flex 2xl:flex lg:flex'>
              <img src="public/images/hero.png" alt="hero-img"/>
            </div>
          </ScrollAnimation>
        </div>
    </section>
  )
}

export default Herosc
