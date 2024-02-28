import React from 'react'
import { Link } from 'react-router-dom'
import post4Peek from '../../assets/images/agente-cliente-haciendo-trato.webp'

function BlogPost2() {
  return (
    <article>
      <div className='relative bg-primary top-0 w-full h-[6rem]'></div>

      <section className='flex flex-col justify-center items-center p-10 py-6 sm:py-12 mt-[4rem] text-gray-900 bg-white'>
        <div className="mx-auto max-w-3xl text-center mb-[4rem]">
          <h1 className=" text-pretty uppercase text-3xl font-bold text-gray-900 sm:text-4xl">
            INFONAVIT HA ELEVADO EL LÍMITE DE FINANCIAMIENTO HASTA 2.7 MILLONES/2024
          </h1>

          <p className="mt-4 text-gray-500 sm:text-xl text-pretty">
            El aumento aplica a todas las líneas de financiamiento que maneja el organismo.
          </p>
          <p className="mt-4 text-gray-500 sm:text-xl text-pretty">
            Infonavit busca garantizar que los beneficiarios puedan acceder a una vivienda adecuada de acuerdo con sus necesidades y posibilidades económicas.
          </p>
        </div>

        <img src={post4Peek} alt="agente inmobiliario" className=" rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72" />

        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium">OBR GROUP</strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-secondary"></span>

          <p className="mt-0.5 opacity-50 sm:mt-0">Nuevo Post</p>
        </div>

        <div className='mt-[4rem] mx-auto max-w-3xl mb-[4rem] '>
          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            ¿Aún no cuentas con tu precalificación?
          </h3>
          <p className="mt-4 text-gray-500 sm:text-xl text-pretty">
            Para solicitar un financiamiento deberás ingresar a Mi Cuenta Infonavit y crear tu usuario. Aquí podrás enterarte si cumples con los requisitos de puntuación necesarios y el monto de crédito al que podrías acceder.
          </p>

          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Los pasos que se deben realizar para abrir una cuenta son los siguientes:
          </h3>
          <Link to="https://micuenta.infonavit.org.mx/" className="flex mt-4 ml-4 max-w-lg hover:text-blue-700 text-gray-900 text-md">
            Ingresa al portal https://micuenta.infonavit.org.mx/           </Link>

            <ul className="mt-4 ml-4 text-gray-500 list-disc list-inside">
            <li>Financiamientos considerados.</li> <br />
            <li>Compra de vivienda nueva o existente. </li>     <br />
            <li>Adquisición de terreno.</li>     <br />
            <li> Construcción.</li>
            <br />
            <li>Mejora, ampliación o reparación de vivienda.</li><br />
            <li> Pago de un crédito hipotecario bancario.</li>
          </ul>
        </div>
        <Link
          className="group flex items-center justify-between gap-4 rounded-lg border border-secondary bg-secondary px-3 py-[.5rem] transition-colors hover:bg-transparent focus:outline-none focus:ring"
          to="/blog"
        >
          <span
            className="font-medium text-white transition-colors group-hover:text-secondary group-active:text-secondary"
          >
            Blog
          </span>

          <span
            className="shrink-0 rounded-full border border-current bg-white p-1 text-secondary group-active:text-secondary"
          >
            <svg
              className="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </Link>
      </section>
    </article>
  )
}

export default BlogPost2