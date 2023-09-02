'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Benefit({ side, src, alt, title, text }:any) {

    const [translateL, setTranslateL] = useState("-translate-x-full");
    const [translateR, setTranslateR] = useState("translate-x-full");
    const [textOpacity, setTextOpacity] = useState("opacity-0")

    useEffect(() => {
        setTranslateL("translate-x-0");
        setTranslateR("translate-x-0");
        setTimeout(()=> {
            setTextOpacity("opacity-1")
        }, 500)
    },[])

  return (
    <article>
            <div className={`flex items-center py-4 ${side == "left" ? `${translateL}` : `${translateR} justify-end` } transition-all duration-500 ease-out`}>
                <div className={`gap-4 bg-[#F3CB62] flex items-center py-4 relative ${side == "left" ? "pr-[30vw]" : "pl-[30vw]"}`}>
                    <h3 className={`text-3xl ${textOpacity} transition-all duration-500`}>{title}</h3>
                    <svg className={`fill-[#47C727] w-10 h-10 ${textOpacity}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <div className={`absolute bg-[#F3CB62] h-[72px] pl-80 ${side == "left" ? "right-full" : "left-full"}`}></div>
                    <object className={`absolute h-[72px] ${side == "left" ? "-right-[50px]" : "rotate-180 -left-[50px]"}`} data="/polygon.svg" type="image/svg+xml"></object>
                </div>  
            </div>
            <div className='flex items-center justify-between gap-8 py-10'>
                <p className={`text-lg max-w-[50%] ${side == "left" ? "" : "order-2"}`}>{Array.isArray(text) ? <>{text[0]}<br/>{text[1]}</> : <>{text}</>}</p>
                <Image className={`${side == "left" ? "" : "order-1"}`} width={400} height={400} src={src} alt={alt} />
            </div>
    </article>
  )
}
