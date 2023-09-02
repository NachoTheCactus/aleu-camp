import React from 'react'
import FormularDisk from '../components/FormularDisk'
import FormularLine from '../components/FormularLine'

export default function Formular() {
  return (
    <section className='bg-[#E0E4E1]'>
        <section className='container mx-auto border-t-2 flex flex-col items-center border-t-black pb-32 text-main'>
            <h2 className='text-5xl text-center font-semibold pt-16 pb-2'>Formular de Înscriere</h2>
            <p className='pb-14'>(09 aug. 2024 - 15 aug. 2024)</p>
            <section className='flex justify-between items-center w-[50vw] pt-8'>
                <FormularDisk text="Date Părinte/Tutore"/>
                <FormularLine/>
                <FormularDisk text="Date Copil"/>
                <FormularLine/>
                <FormularDisk text="Condiții și Termeni de Plată"/>
                <FormularLine/>
                <FormularDisk text="Formular Trimis"/>
            </section>
            <form className='grid grid-cols-4 gap-4 w-[50vw] pt-12' action="">
                <input className='bg-white border border-main shadow-inner p-2 rounded col-span-2' name='nume' type="text" placeholder='Nume Părinte / Tutore'/>
                <input className='bg-white border border-main shadow-inner p-2 rounded col-span-2' name='nr_tel' type="text" placeholder='Număr de Telefon'/>
                <input className='bg-white border border-main shadow-inner p-2 rounded col-span-2' name='prenume' type="text" placeholder='Prenume Părinte / Tutore'/>
                <input className='bg-white border border-main shadow-inner p-2 rounded col-span-2' name='email' type="text" placeholder='emailparinte@mail.com'/>
                <textarea className='bg-white border border-main shadow-inner col-span-4 p-2 rounded' name="observatii" rows={5} placeholder='Observații'></textarea>
                <button className='py-2 px-8 bg-main text-white col-span-4' type='submit'>Trimite inscrierea</button>
            </form>
        </section>
    </section>
  )
}
