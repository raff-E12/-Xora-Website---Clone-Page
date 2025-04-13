import React, {useState, useEffect} from "react";
import clsx from 'clsx'

export default function Navbar(){
    const [isOpen, SetIsOpen] = useState(false);
    const [ScrollY, SetScrollY] = useState(0);

    function handleScroll(){
        SetScrollY(window.scrollY);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll); 
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, []);

    return(
        <>
         <header className={clsx('w-full header-sc', isOpen ? 'show' : 'unshow', ScrollY > 100 ? 'hd-scroll' : '')} id="header">
            <div className='flex h-14 items-center max-lg:px-5 lg:hidden p-10 justify-center'>
                <a href="" className='img-sc-box'>
                    <img src="public/images/xora.svg" alt="logo"  draggable="false"/>
                </a>
                <button className="btn-box"  onClick={() => SetIsOpen((value => !value))} id="img-hero">
                    <img  src={`public/images/${isOpen ? 'close':'magic'}.svg`} alt=" logo"  draggable="false"/>
                </button>
            </div>
            <div className='w-full flex items-center justify-center p-3 md:hidden sm:hidden lg:block max-sm:hidden'>
                <nav className="flex items-center justify-center gap-20">
                    <ul className="list-nav">
                        <li className="cursor-pointer"><a href="#"><p>Features</p></a></li>
                        <li className="p-1 rounded-full circle"></li>
                        <li className="cursor-pointer"><a href="#"><p>Pricing</p></a></li>
                    </ul>
                    <a href="#" className={clsx('img-sc-box', ScrollY > 100 ? 'hd-scroll' : '')}>
                    <img src="public/images/xora.svg" alt="logo" className="w-13 cursor-pointer"  draggable="false"/>
                    </a>
                    <ul className="list-nav">
                        <li className="cursor-pointer"><a href="#"><p>FAQ</p></a></li>
                        <li className="p-1 rounded-full circle"></li>
                        <li className="cursor-pointer"><a href="#"><p>Download</p></a></li>
                    </ul>
                </nav>
            </div>
            <div className={clsx("nav-bar-aside lg:hidden max-lg:hidden xl:hidden 2xl:hidden ", isOpen ? "right-0" : "right-[-1920px]")}>
                <div className="flex m-10 items-center justify-center p-3">
                <ul className="list-nav-aside max-lg:gap-[29px] max-sm:gap-[31px]">
                        <li><a href="#"><h3 className="max-lg:text-5xl max-sm:text-4xl">Features</h3></a></li>
                        <li><a href="#"><h3 className="max-lg:text-5xl max-sm:text-4xl">Pricing</h3></a></li>
                        <li><a href="#"><h3 className="max-lg:text-5xl max-sm:text-4xl">Download</h3></a></li>
                        <li><a href="#"><h3 className="max-lg:text-5xl max-sm:text-4xl">FAQ</h3></a></li>
                    </ul>
                </div>
                <div className="box-img-nav">
                <img src="public/images/bg-outlines.svg" alt="log-fikk" className="absolute" />
                <img src="public/images/bg-outlines-fill.png" alt="bg-out"  className="w-[100%] h-[100%] opacity-20" draggable="false"/>
                </div>
            </div>
        </header>
        </>
    )
}