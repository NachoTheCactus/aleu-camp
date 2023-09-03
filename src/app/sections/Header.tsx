import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-header bg-cover h-[400px] md:h-[calc(100vh-228px)]">
        <section className='container h-full flex flex-col justify-center mx-auto p-4 md:p-8'>
            <h1 className='animated-delayed text-2xl sm:text-3xl md:text-5xl font-semibold pb-8 text-white'>Aleu Summer Camp</h1>
            <p className='animated text-lg sm:text-2xl md:text-3xl font-semibold text-white'>Tabără de vară pentru copii</p>
            <p className='animated text-lg sm:text-2xl md:text-3xl font-semibold pb-8 text-white'>Locul ideal pentru distracție și învățare!</p>
            <Link className='animated text-base sm:text-lg md:text-2xl font-semibold text-black px-8 py-2 bg-white rounded w-fit hover:bg-main hover:text-white transition-all duration-200' href={'#'}>Înscrie-te acum!</Link>
        </section>
        <section className='w-full bg-white'>
            <section className='text-black text-3xl font-semibold container mx-auto flex gap-1 min-[416px]:gap-4 md:gap-8 lg:gap-12 p-4 md:p-8'>
                <section className='animated flex items-center gap-[2px] min-[340px]:gap-1 min-[416px]:gap-2 sm:gap-2 md:gap-4'>
                    <svg className='md:mb-1 w-4 h-4 md:w-8 md:h-8' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    <p className='text-sm min-[416px]:text-base md:text-2xl lg:text-3xl'>Cabana Aleu</p>
                </section>
                <section className='animated flex items-center gap-[2px] min-[416px]:gap-2 sm:gap-2 md:gap-4'>
                    <svg className=' w-4 h-4 md:w-8 md:h-8' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM96 75V64H288V75c0 19-5.6 37.4-16 53H112c-10.3-15.6-16-34-16-53zm16 309c3.5-5.3 7.6-10.3 12.1-14.9L192 301.3l67.9 67.9c4.6 4.6 8.6 9.6 12.1 14.9H112z"/></svg>
                    <p className='text-sm min-[416px]:text-base md:text-2xl lg:text-3xl'>O săptămana</p>
                </section>
                <section className='animated flex items-center gap-[2px] min-[416px]:gap-2 sm:gap-2 md:gap-4'>
                    <svg className=' w-4 h-4 md:w-8 md:h-8' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"/></svg>
                    <p className='text-sm min-[416px]:text-base md:text-2xl lg:text-3xl w-fit'>1900 RON</p>
                </section>
            </section>
        </section>
    </header>
  )
}
