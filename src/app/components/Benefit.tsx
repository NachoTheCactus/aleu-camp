'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Benefit({ side, src, alt, title, text }:any) {

    useEffect(() => {
        const animm = () => {
            let animElements = document.getElementsByClassName("panglica");
            let opacElements = document.getElementsByClassName("panglica-opac")
            let windowHeight = window.innerHeight;
            for (let i = 0; i < animElements.length; i++) {//  loop through the sections
                let viewportOffset = animElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
                let top = viewportOffset.top;
                if(top < windowHeight){
                    if( side == "left"){
                        animElements[i].classList.remove("-translate-x-full")
                    } else{
                        animElements[i].classList.remove("translate-x-full")
                    }
                    setTimeout(()=> {
                        opacElements[i*2].classList.remove('opacity-0');
                        opacElements[i*2+1].classList.remove('opacity-0');
                        opacElements[i*2].classList.add('opacity-1');
                        opacElements[i*2+1].classList.add('opacity-1');
                    }, 600)
                }
            }
        }
        animm();
        window.addEventListener('scroll', animm);
    },[])

  return (
    <article>
            <div className={`flex panglica items-center py-4 ${side == "left" ? `-translate-x-full` : `translate-x-full justify-end` } transition-all duration-1000 ease-in-out`}>
                <div className={`gap-4 bg-[#F3CB62] flex items-center py-3 md:py-3 relative ${side == "left" ? "pr-[20vw] sm:pr-[30vw]" : "pl-[20vw] sm:pl-[30vw]"}`}>
                    <h3 className={`text-lg sm:text-xl md:text-3xl panglica-opac opacity-0 transition-all duration-1000 ease-out`}>{title}</h3>
                    <svg className={`fill-[#47C727] w-6 h-6 md:w-10 md:h-10 panglica-opac opacity-0 transition-all duration-1000 ease-out`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <div className={`absolute bg-[#F3CB62] h-[52px] md:h-[64px] pl-80 ${side == "left" ? "right-full" : "left-full"}`}></div>
                    <object className={`absolute h-[52px] md:h-[64px] ${side == "left" ? "-right-[35px] md:-right-[44px]" : "rotate-180 -left-[35px] md:-left-[44px]"}`} data="/polygon.svg" type="image/svg+xml"></object>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 py-10'>
                <p className={`text-sm sm:text-base md:text-lg md:max-w-[50%] anim ${side == "left" ? "order-2 md:order-1" : "order-2"}`}>{Array.isArray(text) ? <>{text[0]}<br/>{text[1]}</> : <>{text}</>}</p>
                <Image className={`anim animd lg:w-1/3 ${side == "left" ? "order-1 md:order-2" : "order-1"}`} width={400} height={400} src={src} alt={alt} />
            </div>
    </article>
  )
}
