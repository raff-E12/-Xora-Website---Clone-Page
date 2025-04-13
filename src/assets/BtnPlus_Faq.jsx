import React from 'react'
import './button.module.faq.css'
import clsx from 'clsx';

export default function BtnPlusFaq({isClick, onClick}) {
  return (
   <>
    <button className='btn-faq' onClick={onClick}>
        <div className={clsx('line-btn', isClick ? 'active' : 'show')} id='line-1'></div>
        <div className='line-btn'></div>
    </button>
   </>
  )
}
