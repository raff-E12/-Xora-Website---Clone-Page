import React from 'react'
import { testimonials } from '.'
import './testimonial.module.section.css'
import ScrollAnimation from 'react-animate-on-scroll'

export default function TestimonialBox() {
  return (
    <>
    {testimonials.map((test)=>{
        return(
           <ScrollAnimation animateIn='zoomIn' animateOut='zoomOut'>
             <section className='box-test' key={test.id}>
                        <div className='text-test'>
                            <h4>{test.comment}</h4>
                        </div>
                        <div className='test-sc'>
                        <div className='img-test'>
                          <img src={test.avatarUrl} alt="avatar" className='w-full'/>
                        </div>
                        <div className='test-role'>
                          <h5>{test.name}</h5>
                           <p>{test.role}</p>
                        </div>
                </div>
            </section>
           </ScrollAnimation>
                )
        })}
    </>
  )
}
