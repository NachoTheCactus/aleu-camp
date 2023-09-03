import React from 'react'
import ContactElement from '../components/ContactElement'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-main text-white font-semibold'>
      <section className='container mx-auto p-4 md:p-8 flex flex-col items-center anim'>
        <section className='flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-fit'>
          <object className='h-24 w-24 pt-2 md:mt-12 bg-white rounded-full' data="/ALEU.svg" type="image/svg+xml"></object>
          <p className='max-w-sm md:pt-12'>Aleu Summer Camp este un concept de tabere pline de distracții pentru copii cu vârste cuprinse între 7 și 14 ani. Cazarea se va face la Cabana Aleu</p>
          <section className='flex flex-col md:ml-8'>
            <h2 id='contact' className='text-3xl text col-start-2 mb-4'>Contact</h2>
            <ContactElement svg={<svg className='w-4 h-4 fill-white flex-shrink-0' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>} text="07** *** ***"/>
            <ContactElement svg={<svg className='w-4 h-4 fill-white flex-shrink-0' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>} text="aleu.camp@gmail.com"/>
            <ContactElement svg={<svg className='w-4 h-4 fill-white flex-shrink-0' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>} text="Aleu Summer Camp"/>
            <ContactElement svg={<svg className='w-4 h-4 fill-white flex-shrink-0' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>} text="Aleu Summer Camp"/>
          </section>
          <section className='flex flex-col'>
            <h2 className='text-3xl col-start-2 mb-4'>Meniu</h2>
            <Link href="/#beneficii">Beneficii</Link>
            <Link href="/#activitati">Activitati</Link>
            <Link href="/#formular">Inscriere</Link>
          </section>
        </section>
        <hr className='w-full my-4 flex-shrink-0 border-b' />
        <p className='text-sm'>© Aleu Summer Camp, All rights reserved</p>
      </section>
    </footer>
  )
}
