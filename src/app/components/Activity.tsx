'use client'

import Image from 'next/image'
import React from 'react'

export default function Activity({src, alt, text, i}:any) {

  return (
    <article key={i} className='flex items-center flex-col'>
        <Image src={src} alt={alt} width={300} height={300}/>
        <p className='text-lg font-semibold text-black'>{text}</p>
    </article>
  )
}
