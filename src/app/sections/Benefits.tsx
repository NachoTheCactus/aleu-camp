import React from 'react'
import Benefit from '../components/Benefit'

export default function Benefits() {
  return (
    <section id='benefits' className='bg-white w-full mt-[100px] overflow-hidden'>
        <section className='container mx-auto p-4 md:p-8 text-black font-semibold border-t-2 border-t-black'>
            <h2 className='text-5xl text-center py-8'>Beneficiile noastre</h2>
            <Benefit side="left" src='/beneficiu_cazare.png' alt="Imagine beneficiu cazare" title="Cazare inclusa" text="Suntem încântați să vă anunțăm că cazarea în cadrul taberei noastre de vară este gratuită pe tot parcursul taberei!"/>
            <Benefit side="right" src='/beneficiu_transport.png' alt="Imagine beneficiu transport" title="Transport gratuit" text={["Transportul către tabăra de vară și înapoi acasă este complet gratuit!", "Ne-am dorit să facem experiența voastră cât mai convenabilă și  așa că am inclus transportul în pachetul nostru."]}/>
            <Benefit side="left" src='/beneficiu_mancare.png' alt="Imagine beneficiu mancare" title="3 mese pe zi" text={["Mâncarea este asigurată pentru toți participanții, cu 3 mese pe zi.", "Va asiguram că fiecare copil va avea parte de nutriție de calitate în timpul șederii lor."]}/>
        </section>
    </section>
  )
}
