'use client'

import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import PrevArrow from '../components/slick/PrevArrow';
import NextArrow from '../components/slick/NextArrow';
import Activity from '../components/Activity';
import FsLightbox from "fslightbox-react";

export default function Activities() {

    const [lightboxController, setLightboxController] = useState({
      toggler: false,
      slide: 1
    });

    function openLightboxOnSlide(number: any) {
      setLightboxController({
        toggler: !lightboxController.toggler,
        slide: number
      });
    }

    const settings = {
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 3,
        fade: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        arrows: true,
        customPaging: () => (
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
        ),
        dotsClass: "pt-8 !flex justify-center gap-2 slick-dots cursor-pointer",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              cssEase: 'linear',
              slidesToShow: 1,
              fade: true
            }
          },
        ]
        };

  return (
    <section id='activitati' className='bg-white'>
      <section className='container mx-auto border-t-2 flex flex-col items-center border-t-black pb-8 md:pb-32'>
        <h2 className='titlu text-center text-black font-semibold py-8 md:py-16'>Activitățile noastre</h2>
        <Slider {...settings} className='w-full xl:w-[80%] md:px-12 anim'>
          <button onClick={() => openLightboxOnSlide(1)}>
            <Activity src="/activitate_foc_de_tabara.png" alt="Imagine activitate foc de tabara" text="Foc de tabără"/>
          </button>
          <button onClick={() => openLightboxOnSlide(2)}>
            <Activity src="/activitate_drumetie.png" alt="Imagine activitate drumetie" text="Drumeție"/>
          </button>
          <button onClick={() => openLightboxOnSlide(3)}>
            <Activity src="/activitate_inot.png" alt="Imagine activitate inot" text="Înot"/>
          </button>
          <button onClick={() => openLightboxOnSlide(4)}>
            <Activity src="/activitate_foc_de_tabara.png" alt="Imagine activitate foc de tabara" text="Foc de tabără"/>
          </button>
        </Slider>
      </section>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={['/activitate_foc_de_tabara.png', '/activitate_drumetie.png', '/activitate_inot.png', '/activitate_foc_de_tabara.png'] }
        slide={lightboxController.slide}
      />
    </section>
  )
}
