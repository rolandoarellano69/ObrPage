import React from 'react'
import { CiShare1 } from "react-icons/ci";
import { Link } from 'react-router-dom'
import postPeek from '../../assets/images/2.jpg'

function BlogPost2() {
  return (
    <article>
      <div className='relative bg-primary top-0 w-full h-[6rem]'></div>

      <section className='flex flex-col justify-center items-center p-10 py-6 sm:py-12 mt-[4rem] text-gray-900 bg-white'>
        <div className="mx-auto max-w-3xl text-center mb-[4rem]">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            CON INFONAVIT YA PUEDES SOLICITAR MAS DE UN FINANCIAMIENTO CON CREDITOS SUBSECUENTES.
          </h1>

          <p className="mt-4 text-gray-500 sm:text-xl">
            El Instituto del Fondo Nacional de la Vivienda para los Trabajadores (Infonavit) informó mediante un comunicado que eliminó las restricciones que impedían a las personas solicitar mas de un financiamiento.
          </p>
        </div>

        <img src={postPeek} alt="" className=" rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72" />

        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium">OBR GROUP</strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-secondary"></span>

          <p className="mt-0.5 opacity-50 sm:mt-0">Nuevo Post</p>
        </div>

        <div className='mt-[4rem] mx-auto max-w-3xl mb-[4rem] '>
          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Aplica para cualquier tipo de crédito.
          </h3>

          <ul className="mt-4 ml-4 text-gray-500 list-disc list-inside">
            <li>Financiamientos considerados.</li> <br />
            <li>Compra de vivienda nueva o existente. </li>     <br />
            <li>Adquisición de terreno.</li>     <br />
            <li> Construcción.</li>
            <br />
            <li>Mejora, ampliación o reparación de vivienda.</li><br />
            <li> Pago de un crédito hipotecario bancario.</li>
          </ul>

          <h3 className="mt-8 text-lg font-bold text-gray-900 sm:text-xl">
            ¿Cuáles son los requisitos?
          </h3>
          <ul className="mt-4 ml-4 text-gray-500 list-disc list-inside">
            <li>Haber liquidado el crédito anterior (sin importar que no se haya liberado la garantía).
            </li> <br />
            <li>No haber tenido penalizaciones durante la vigencia del financiamiento previo</li> <br />
            <li>Tener saldo en la Subcuenta de Vivienda, cuyo monto mínimo dependerá del tipo de crédito subsecuente que se quiera contratar.</li>     <br />
            <li>No esperes mas e invierte nuevamente en tu patrimonio, ingresa al portal de Infonavit y solicita tu precalificación.   <Link className="hover:text-blue-500 text-gray-900" to='https://micuenta.infonavit.org.mx/'> https://micuenta.infonavit.org.mx <CiShare1 className='flex' /></Link> </li> <br />

          </ul>
          
          <p className="mt-4  ml-4 max-w-lg text-gray-700 text-xs">
            Infonavit, (2023, 12 octubre). Solicita con Infonavit crédito subsecuente.

          </p>
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