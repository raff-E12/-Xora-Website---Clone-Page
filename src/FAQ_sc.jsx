import React, { useState } from 'react'
import clsx from 'clsx'
import { faq } from './assets'
import BtnPlusFaq from './assets/BtnPlus_Faq'
import ScrollAnimation from 'react-animate-on-scroll';

export default function FAQsc() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    //console.log(activeIndex, index);
    //vera: null falso:index secondo la console del browser.
  };

  return (
    <section className='flex items-center justify-center relative flex-col mt-9 w-full'>
      <div className='flex items-center justify-center relative flex-col p-10 gap-10 overflow-hidden'>
        <div className='flex items-center justify-center flex-col text-center'>
          <div className='p-7 gap-5 flex flex-col'>
            <h2 className='p-1'>Curiosity didn't kill the cat, it gave it answers.</h2>
            <p className='p-1'>You've got questions, we've got answers.</p>
          </div>
        </div>
        <div className='absolute top-0 w-[900px] h-[500px] p-2'>
          <img src="public/images/bg-outlines.svg" alt="bg-out"/>
        </div>
      </div>
      <div className='bg-grid relative max-lg:flex max-lg:flex-col max-lg:p-4 max-lg:items-center max-lg:justify-center'>
      <div className='faq-logo-sc absolute top-[-12px] left-[47.60%] max-lg:relative max-lg:-top-0 max-lg:left-0'>
          <img src="public/images/faq-logo.svg" alt="logo-faq" className='w-full'/>
        </div>
        <ol className='lg:flex lg:items-center lg:justify-center faq-grid'>
          {faq.map((list,idx) => (
           <ScrollAnimation animateIn='flipInX' animateOut="flipOutX">
             <li key={list.id} className='flex flex-col'>
              <div className='flex flex-row items-center justify-start gap-20 p-7'>
                <h5 className='w-[80%]'>{list.question}</h5>
                <BtnPlusFaq isClick={activeIndex === idx} onClick={() => handleToggle(idx)} />
              </div>
              <div className={clsx('overflow-hidden h-0 transition-all text-center', activeIndex === idx && 'h-[120px] p-3')}>
                <p>{list.answer}</p>
              </div>
            </li>
           </ScrollAnimation>
          ))}
        </ol>
      </div>
    </section>
  )
}
