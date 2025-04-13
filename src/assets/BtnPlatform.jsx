import React from 'react'
import './button.module.apps.css'
import { logos } from '.'
import ScrollAnimation from 'react-animate-on-scroll';

export default function BtnPlatform() {
  return (
    <>
    {logos.map((log)=>{
        return(
            <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
              <button key={log.id} className='btn-apps flex justify-center items-center relative'>
             <a href="#" className='flex justify-center items-center'><i className={log.class}></i></a>
              <div className='absolute p-2 flex justify-center items-center'>
                  <img src="public/images/lines.svg" alt="lines" className='w-full'/>
              </div>
              <div className='arrow-btn'></div>
            </button>
            </ScrollAnimation>
        );
    })}
    </>
  )
}
