import React from 'react'
import { Link } from 'react-router-dom'
import postPeek from '../../assets/images/1.jpg'

function BlogPost1() {
  return (
    <article>
      <div className='relative bg-primary top-0 w-full h-[6rem]'></div>
      <section className='flex flex-col justify-center items-center p-10 py-6 sm:py-12 mt-[4rem] text-gray-900 bg-white'>
        <div className="mx-auto max-w-3xl text-center mb-[4rem]">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            EVITA EL INCREMENTO DE TU DEUDA EN INFONAVIT ESTE 2024
          </h2>
          <p className="mt-4 text-gray-500 sm:text-xl">
            Cada inicio de año, todos los créditos denominados en Veces Salario Mínimo (VSM), registran un incremento ligado al aumento del salario mínimo.
          </p>
        </div>
        <img src={postPeek} alt="" className=" rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72" />
        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium">OBR GROUP</strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-secondary"></span>

          <p className="mt-0.5 opacity-50 sm:mt-0">Nuevo Post</p>
        </div>
        <div className='mt-[4rem] mx-auto max-w-3xl mb-[4rem]'>
        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          Conoce los beneficios de convertir tu crédito de VSM a pesos
        </h3>

        <ul className="mt-4 ml-4 text-gray-500 list-disc list-inside">
          <li>Mensualidades y saldos fijos durante todo el plazo del crédito, sin incrementos anuales.</li> <br />
          <li>Certidumbre para que las y los trabajadores puedan planear su economía familiar.</li>     <br />
          <li>Tasa de interés fija de 1.0% a 10.45%, dependiendo tu nivel de ingreso.</li>     <br />
          <li> El pago de la aportación patronal se abona directamente al capital de la deuda, en caso de tener una relación laboral.</li>
          <br />
          <li>La mensualidad no cambia si el pago se realiza a través del patrón o directamente en
            ventanilla bancaria.</li>
        </ul>

        <h3 className="mt-8 text-lg font-bold text-gray-900 sm:text-xl">
          Sigue los siguientes pasos y realiza el tramite:

        </h3>
        <ul className="mt-4 ml-4 text-gray-500 list-disc list-inside">
          <li>Entra a Mi Cuenta Infonavit micuenta.infonavit.org.mx
          </li> <br />
          <li>Elige la pestaña Mi Crédito y luego Responsabilidad Compartida.</li> <br />
          <li>Ingresa el estado y el código postal de la vivienda.</li>     <br />
          <li>Revisa y compara las distintas opciones de conversión que ofrece el programa.</li> <br />
          <li>Confirma el trámite y guarda la Carta de Bienvenida y la Carta Modificatoria de Condiciones Financieras, con el monto de la nueva mensualidad.</li>
        </ul>
        <p className="mt-4 ml-4 max-w-lg text-gray-700">
          Realiza el cambio antes de terminar el año y evita aumentos.
        </p>
        <p className="mt-4  ml-4 max-w-lg text-gray-700 text-xs">
          Infonavit, (2023, 12 octubre). Cambio de crédito VSM a pesos.
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

export default BlogPost1