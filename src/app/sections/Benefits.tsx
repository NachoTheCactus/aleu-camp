import React from 'react'
import Benefit from '../components/Benefit'
import img1 from "../../../assets/img/beneficiu_cazare.png"
import img2 from "../../../assets/img/beneficiu_transport.png"
import img3 from "../../../assets/img/beneficiu_mancare.png"

export default function Benefits() {
  return (
    <section id='beneficii' className='bg-white w-full mt-[52px] min-[416px]:mt-[56px] md:mt-[100px] overflow-hidden'>
        <section className='container mx-auto p-4 md:p-8 text-black font-semibold border-t-2 border-t-black'>
            <h2 className='titlu text-center py-8 anim'>Beneficiile noastre</h2>
            <Benefit side="left" src={img1} alt="Imagine beneficiu cazare" title="Cazare inclusă" text="Suntem încântați să vă anunțăm că cazarea în cadrul taberei noastre de vară este gratuită pe tot parcursul taberei!"/>
            <Benefit side="right" src={img2} alt="Imagine beneficiu transport" title="Transport gratuit" text={["Transportul către tabăra de vară și înapoi acasă este complet gratuit!", "Ne-am dorit să facem experiența voastră cât mai convenabilă, așa că am inclus transportul în pachetul nostru."]}/>
            <Benefit side="left" src={img3} alt="Imagine beneficiu mancare" title="Trei mese pe zi" text={["Mâncarea este asigurată pentru toți participanții, cu 3 mese pe zi.", "Vă asiguram că fiecare copil va avea parte de nutriție de calitate în timpul șederii lor."]}/>
        </section>
    </section>
  )
}
