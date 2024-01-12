import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProjectCard from '../shared/ProjectCard'

import AureoPeek from '../../assets/images/ACCESO AUREO2 nochr.png'
import PlatinumPeek from '../../assets/images/ACCESO ENTRADA PLATINUM 4K sin altura.png'
import JadePeek from '../../assets/images/JADE 4K 4 CASAS.png'
import TorresPeek from '../../assets/images/el colorado 4k.png'
import LogoPlatinumPeek from '../../assets/images/logo platinum png-02.png'
import LogoAureoPeek from '../../assets/images/LOGO-01.png'
import LogoJadePeek from '../../assets/images/logo jade horizontal-09.png'
import LogoTorresPeek from '../../assets/images/logo con bandera_Mesa de trabajo 1.png'

import PlatinumMPeek from '../../assets/images/RESIDENCIALES-06.png'
import AureoMPeek from '../../assets/images/RESIDENCIALES-07.png'
import JadeMPeek from '../../assets/images/RESIDENCIALES-08.png'
import TorresMPeek from '../../assets/images/RESIDENCIALES-09.png'


function ProjectAbout() {
  const projects = [{
    imageM: AureoMPeek,
    title: 'Aureo Residencial',
    linkHref: 'https://residencialaureo.com/inicio'
  },
  {
    imageM:PlatinumMPeek,
    title: 'Platinum Residencial',
    linkHref: 'https://platinumresidencial.com/'
  },
  {
    imageM: JadeMPeek,
    title: 'Jade Residencial',
    linkHref: 'https://jaderesidencial.com.mx/'
  },
  {
    imageM: TorresMPeek,
    title: 'Torres del Colorado',
    linkHref: 'https://torresdelcolorado.com/'
  },
  ]
  return (
    <>
      <div className="relative mb-4 flex justify-center items-center border-2 gap-1 py-2 translate-y-[0rem] md:translate-y-[4rem] md:py-4 lg:py-8 mx-4 sm:mx-8 md:mx-16 lg:mx-[16rem] rounded-[3rem] bg-white text-xs sm:text-sm md:text-lg lg:text-3xl text-gray-900 z-20">
        Conoce nuestros <span className="text-gray-600 font-bold">proyectos</span>
      </div>

      {/*cards*/}
      <div className=" hidden lg:block relative overflow-hidden shadow-lg">
        <div className=" h-[20vh] md:h-[65vh]">
          <img src={AureoPeek} alt="Entrada de aureo residencial noche" className='bg-slate-300' />

          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src={LogoAureoPeek} alt="Entrada de aureo residencial noche" className='h-28' />
          </div>
        </div>
        <div className="p-8 flex justify-between bg-black bg-opacity-60 -translate-y-0">
          <div className="flex items-center justify-center p-8">
            <p className="mb-4 text-[20px] font-bold text-gray-200 ">
              Proyecto de 26 casas, en una ubicación privilegiada con alta plusvalía, <br />
              que conecta con los princiaples centros de negocios, plazas comerciales <br />
              y residenciales de la cuidad de Tijuana.
            </p>
          </div>
          <div className=" flex flex-col gap-y-2 items-center justify-center pr-10">
            {/* <p className="text-sm">Preventa desde</p> */}
            <span className="font-semibold text-[19px] text-gray-200">Haz clic para</span>
            <Link to="https://residencialaureo.com/inicio">
              <button className="bg-gray-100 font-bold text-gray-500 border-2 border-gray-600 rounded-3xl px-10 py-3 transition duration-300 ease-in-out">
                Conocer más
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*cards*/}
      <div className="  hidden lg:block relative overflow-hidden shadow-lg">
        <div className=" h-[40vh] md:h-[95vh] w-full">
          <img src={PlatinumPeek} alt="Entrada de aureo residencial noche" className='bg-slate-400' />
          <div className="absolute top-[5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src={LogoPlatinumPeek} alt="Entrada de aureo residencial noche" className='h-48' />
          </div>
        </div>
        <div className="p-8 flex justify-between bg-gray-700  -translate-y-0">
          <div className="flex items-center justify-center p-8">
            <p className="mb-4 text-[20px] font-bold text-gray-200 ">
              Exclusivo desarrllo de solo 18 casas ubicadas en un punto muy estratégico <br />
              de la cuidad, con el dinamismo y la activadad comercial que tu estuilo de vida <br />requier, invierte en una zona de alta plusvalía.
            </p>
          </div>
          <div className=" flex flex-col gap-y-2 items-center justify-center pr-10">
            {/* <p className="text-sm font-semibold text-gray-200">Preventa desde</p> */}
            <span className="font-semibold text-[19px] text-gray-200">Haz clic para</span>
            <Link to="https://platinumresidencial.com/">
              <button className="bg-gray-100 font-bold text-gray-500 border-2 border-gray-600 rounded-3xl px-10 py-3 transition duration-300 ease-in-out">
                Conocer más
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*cards*/}
      <div className=" hidden lg:block relative overflow-hidden shadow-lg">
        <div className=" h-[40vh] md:h-[80vh] w-full">
          <img src={JadePeek} alt="Entrada de aureo residencial noche" className='bg-blue-300' />
          <div className="absolute top-[4rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src={LogoJadePeek} alt="Entrada de aureo residencial noche" className='h-32' />
          </div>
        </div>
        <div className="p-8 flex justify-between bg-[#32657F] -translate-y-0">
          <div className="flex items-center justify-center p-8">
            <p className="mb-4 text-[20px] font-bold text-gray-200 ">
              Proyecto de únicamente 21 casas diseñadas con espacios cómodos <br /> y  modernos
              que te permitirán sentir la emocion de un nuevo hogar.
            </p>
          </div>
          <div className=" flex flex-col gap-y-2 items-center justify-center pr-10">
            {/* <p className="text-sm font-semibold text-gray-200">Preventa desde</p> */}
            <span className="font-bold text-[19px] text-gray-200">Haz clic para</span>
            <Link href="https://jaderesidencial.com.mx/">
              <button className="bg-gray-100 font-bold text-gray-500 border-2 border-gray-600 rounded-3xl px-10 py-3 transition duration-300 ease-in-out">
                Conocer más
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*cards*/}
      <div className="  hidden lg:block relative overflow-hidden shadow-lg">
        <div className=" h-[40vh] md:h-[90vh] w-full">
          <img src={TorresPeek} alt="Entrada de aureo residencial noche" className='bg-blue-300' />

          <div className="absolute top-[7rem] left-36 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img src={LogoTorresPeek} alt="Entrada de aureo residencial noche" className='h-60' />

          </div>
        </div>
        <div className="p-8 flex justify-between bg-[#432624] -translate-y-0">
          <div className="flex items-center justify-center p-8">
            <p className="mb-4 text-[20px] font-bold text-gray-200 ">
              Es un conjunto urbano de departamentos que destaca por su gran conectividad <br /> y cercanía a vialidades principales,<br />
              parques industriales y centros comerciales.
            </p>
          </div>
          <div className=" flex flex-col gap-y-2 items-center justify-center pr-10">
            {/* <p className="text-sm font-semibold text-gray-200">Preventa desde</p> */}
            <span className="font-semibold text-[19px] text-gray-200">Haz click para</span>
            <Link to="https://torresdelcolorado.com/">
              <button className="bg-gray-100 font-bold text-gray-500 border-2 border-gray-600 rounded-3xl px-10 py-3 transition duration-300 ease-in-out">
                Conocer más
              </button>
            </Link>
          </div>
        </div>
      </div>

      {projects.map((project) => (
        <section className='md:mt-0 p-2 md:p-0' key={project.title}>
          <div className='relative'>
            <ProjectCard {...project} />
          </div>
        </section>
      ))}

    </>
  )
}

export default ProjectAbout