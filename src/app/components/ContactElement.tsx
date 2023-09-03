import React from 'react'

export default function ContactElement({svg, text}:any) {
  return (
    <>
        <section className='flex gap-3 md:-ml-6'>
            {svg}
            <p>{text}</p>
        </section>
    </>
  )
}
