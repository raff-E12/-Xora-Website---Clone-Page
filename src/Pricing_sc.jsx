import React, {useEffect, useState} from 'react'
import clsx from 'clsx';
import { plans } from './assets';
import Button from './assets/Button';
import ScrollAnimation from 'react-animate-on-scroll';
//clsx : è una utility di react che permette la creazione di classi condizionali.

export default function Pricing() {
    const [isBox, setBox] = useState('');

    function MotionBox(type){
        setBox(type);
    }

  return (
<div className='pricing-sc flex justify-center items-center sm:mt-9  md:mt-0 flex-col gap-20 max-md:pt-10 max-sm:mt-6 sm:pt-10 lg:p-10'>
    <div className='flex justify-center items-center flex-col gap-[50px] relative'>
        <div className='flex justify-center items-center flex-col text-center p-[20px] max-sm:w-[80%] capitalize z-10'>
            <h3>Flexible pricing for teams of all sizes</h3>
        </div>
        <div className='flex justify-center items-center z-10'>
            <div className='flex justify-center items-center flex-row gap-6 btn-sc-price h-[100px] w-[400px]'>
                <button className={clsx('btn-price', isBox === 'Monthly' ? 'monthly' : '')} onClick={() => MotionBox('Monthly')}>
                    Monthly
                </button>
                <button className={clsx('btn-price', isBox === 'Annual' ? 'annual' : '')} onClick={() => MotionBox('Annual')}>
                    Annual
                </button>
                <div className={clsx('selection-pricing', isBox === 'Monthly' ? 'monthly' : 'annual')}></div>
            </div>
        </div>
       <div className='absolute top-[-20px] w-[900px] h-[500px] opacity-10'>
         <img src="public/images/bg-outlines-fill.png" alt="bg-out-fill" className='w-[100%]'/>
       </div>
      <div className='absolute top-[-26px] w-[900px] h-[500px]'>
         <img src="public/images/bg-outlines.svg" alt="bg-out"/>
      </div>
    </div>
    <ScrollAnimation animateIn='slideInDown' animateOnce="fadeOut" className='w-full'>
    <div className='flex items-center justify-center flex-col xl:gap-[400px] xl:flex-row 
    relative w-full sm:gap-10 max-sm:gap-[80px] md:p-5 sm:p-5 max-md:p-5'>
    {plans.map((box, index) => {
    return (
        <>
            {index === 1 ? (
                <div className='flex items-center justify-center flex-col gb-plans-in 2xl:w-[30%] xl:absolute 2xl:absolute z-10 
                xl:top-[-10px] max-sm:relative max-sm:top-0 lg:relative lg:top-0 xl:w-[36%] lg:w-[690px] 
                max-md:w-[80%] md:relative sm:w-[80%]' key={box.id}>
                    <div className='flex items-center justify-center w-[120px] absolute top-[-31px] img-icon-plan'>
                        <img src={box.logo} alt="logo" className='w-full'/>
                    </div>
                    <div className='flex items-center justify-center flex-col gap-8 pt-20'>
                        <small className='box-title-rounded'>{box.title}</small>
                        <div className='flex items-center justify-bottom flex-row gap-2'>
                            <h1>${isBox === 'Monthly' ? box.priceMonthly : box.priceYearly }</h1>
                            <p>{isBox === 'Monthly' ? '/MO' : '/AN' }</p>
                        </div>
                        <div className='flex items-start justify-center'>
                            <h3>{box.caption}</h3>
                        </div>
                        <div className='flex items-center justify-center'>
                            <ul className='flex flex-col items-start justify-center gap-4'>
                                {box.features.map((feature, idx) => (
                                    <li key={idx} className='flex flex-row items-center justify-center gap-4'>
                                        <div className='w-[40px] h-[40px]'>
                                            <img src={box.iconlist} alt="icon"/>    
                                        </div>    
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex items-center justify-center p-10 flex-col gap-7'>
                            <Button name={box.text} src={box.icon} css={box.id_CSS}/>
                            <p className='uppercase text-md text-offer'>-special offer-</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex items-center justify-center flex-col gb-plans-out 
                relative xl:w-[36%] 2xl:w-[29%] lg:w-[690px] max-md:w-[80%] sm:w-[80%]' key={box.id}>
                    <div className='flex items-center justify-center w-[120px] absolute top-[-30px] img-icon-plan'>
                        <img src={box.logo} alt="logo" className='w-full'/>
                    </div>
                    <div className='flex items-center justify-center flex-col gap-8 pt-20'>
                        <small className='box-title-rounded'>{box.title}</small>
                        <div className='flex items-center justify-bottom flex-row gap-2'>
                          <h1>${isBox === 'Monthly' ? box.priceMonthly : box.priceYearly }</h1>
                          <p>{isBox === 'Monthly' ? '/MO' : '/AN' }</p>
                        </div>
                        <div className='flex items-start justify-center text-center'>
                            <h3>{box.caption}</h3>
                        </div>
                        <div className='flex items-center justify-center'>
                            <ul className='flex flex-col items-start justify-center gap-4'>
                                {box.features.map((feature, idx) => (
                                    <li key={idx} className='flex flex-row items-center justify-center gap-4'>
                                        <div className='w-[40px] h-[40px]'>
                                            <img src={box.iconlist} alt="icon"/>    
                                        </div>    
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex items-center justify-center p-10'>
                            <Button name={box.text} src={box.icon} css={box.id_CSS}/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
})}
</div>
</ScrollAnimation>
</div>
  )
}
