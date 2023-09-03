'use client'

import Image from 'next/image'
import React from 'react'

export default function Activity({src, alt, text, i}:any) {

  return (
    <article key={i} className='flex items-center flex-col sm:mx-4'>
        <Image src={src} alt={alt} width={400} height={400}/>
        <p className='pt-4 text-lg font-semibold text-black'>{text}</p>
    </article>
  )
}
