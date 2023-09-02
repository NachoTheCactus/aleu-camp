import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav className='bg-white'>
        <section className='flex justify-between items-center container mx-auto px-4 md:px-8'>
            <object className='h-32 pt-2 -ml-6' data="/ALEU.svg" type="image/svg+xml"></object>
            <section className='flex items-center gap-4 md:gap-8 font-semibold md:text-lg'>
                <Link className='text-black' href="#">Beneficii</Link>
                <Link className='text-black' href="#">Activitati</Link>
                <Link className='text-black' href="#">Contact</Link>
                <Link className='text-white px-8 py-2 bg-main rounded' href="#">Inscrie-te!</Link>
            </section>
        </section>
    </nav>
  )
}
