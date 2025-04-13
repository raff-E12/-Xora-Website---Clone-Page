import React from 'react'
import { features, details } from './index'
import Button from './Button'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Features() {
  return (
   <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
    <div className='w-full flex items-center justify-center'>
     <div className='box-cont-ft xl:w-[80%] 2xl:w-[90%] lg:w-[94%]'>
      <div className='flex items-center justify-center flex-col gap-[50px] sc-list
      xl:flex-col xl:gap-0 xl:p-0 lg:flex-col lg:gap-0 max-lg:gap-[10px] lg:p-0'>
       <div className='flex items-center justify-center flex-col xl:flex-row 
       xl:gap-0 xl:p-0 lg:flex-row lg:gap-0 lg:p-0 p-6 gap-[50px]'>
       {features.map((list)=>{
          return(
            <div key={list.id} className='flex items-start justify-center flex-col gap-[30px] 
            box-nov p-[30px] overflow-hidden xl:h-[500px] xl:justify-start 
            lg:h-[510px] lg:justify-start'>
              <div className='w-[100px] h-[104px] flex justify-center items-center flex-col p-[2px] img-box-ft relative'>
                <img src={list.icon} alt="log" className='w-full h-full z-10'/>
              </div>
              <div className='ft-box-txt flex justify-center items-start flex-col gap-3'>
                <p>{list.caption}</p>
                <h4>{list.title}</h4>
                <h6>{list.text}</h6>
              </div>
              <div className='btn-ft flex justify-start items-center -p-[10px]'>
                <Button src={list.button.icon} name={list.button.title} css={list.button.id_CSS}></Button>
              </div>
            </div>
          )
        })}
       </div>
        <div className='flex items-center justify-center max-md:flex-col bg-details 
        w-full gap-[80px] p-6 lg:p-6 max-md:gap-6 sm:p-1 max-sm:w-[90%]'>
          {details.map((list) => {
            return(
              <div key={list.id} className='list-datils flex justify-center items-center 
              flex-col gap-3 p-[10px]'> 
                <div className='w-[80px] h-[80px] p-1'>
                  <img src={list.icon} alt="log-icon" className='w-full'/>
                </div>
                <div className='w-full lg:text-center md:text-center'>
                  <p>{list.title}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
   </div>
   </ScrollAnimation>
  )
}
