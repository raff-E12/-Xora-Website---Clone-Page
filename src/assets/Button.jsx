import React, {useState} from 'react'
import './button.module.hero.css'

export default function Button(props) {
  return (
    <button className='btn' id={props.css}>
    <div className='marker-side'></div>
    <div className='w-[35px] h-[35px]'>
    <img src={props.src} alt="zap-lg" className='w-full'/>
    </div>
    <a href='#' className='link-btn uppercase font-black'>{props.name}</a>
    </button>
  )
}

