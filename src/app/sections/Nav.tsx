import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav className='bg-white'>
        <section id='navbar-desktop' className='flex justify-between items-center container mx-auto px-4 md:px-8 border-b-black'>
            <object className='h-32 pt-2 -ml-6' data="/ALEU.svg" type="image/svg+xml"></object>
            <section className='hidden md:flex items-center gap-4 md:gap-8 font-semibold md:text-lg'>
                <Link className='text-black' href="/#beneficii">Beneficii</Link>
                <Link className='text-black' href="/#activitati">Activități</Link>
                <Link className='text-black' href="/#contact">Contact</Link>
                <Link className='text-white px-8 py-2 bg-main rounded' href="/#formular">Înscrie-te!</Link>
            </section>
            <div data-target="#navbar-mobile"  data-display-type="flex" className='toggle-element-button flex flex-col md:hidden gap-1.5 cursor-pointer px-4 py-2'>
                <div className='bg-black w-6 h-[2px]'></div>
                <div className='bg-black w-6 h-[2px]'></div>
                <div className='bg-black w-6 h-[2px]'></div>
            </div>
            
        </section>
        <section id='navbar-mobile' className='hidden '>
          <section className='container mx-auto flex flex-col animated-h lg:hidden bg-white text-xl text-black gap-1 font-bold p-4 pb-8'>
            <Link className='text-black hover:translate-x-1 hover:text-main tansition-all duration-300' href="/#beneficii">Beneficii</Link>
            <Link className='text-black hover:translate-x-1 hover:text-main tansition-all duration-300' href="/#activitati">Activități</Link>
            <Link className='text-black hover:translate-x-1 hover:text-main tansition-all duration-300' href="/#contact">Contact</Link>
            <Link className='text-white px-8 py-2 mt-4 w-fit hover:bg-black bg-main rounded tansition-all duration-200' href="/#formular">Înscrie-te!</Link>
          </section>
        </section>
    </nav>
  )
}
