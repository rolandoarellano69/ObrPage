import React from 'react'
import { Link } from 'react-router-dom'
import postPeek from '../../assets/images/3.jpg'



function BlogPost3() {
  return (
    <article>
      <div className='relative bg-primary top-0 w-full h-[6rem]'></div>
      <section className="flex flex-col justify-center items-center p-10 py-6 sm:py-12 mt-[4rem] text-gray-900 bg-white">
        <div className="mx-auto max-w-3xl text-center mb-[4rem]">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            ¿SABES CUANTO TE PRESTA INFONAVIT?
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            PODRÍAS ESTAR PERDIENDO LA OPORTUNIDAD DE COMPRAR TU CASA
          </p>
        </div>
        <img src={postPeek} alt="" className=" rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72" />



        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium">OBR GROUP</strong>

          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-secondary"></span>

          <p className="mt-0.5 opacity-50 sm:mt-0">Nuevo Post</p>
        </div>
        <div className='mt-[4rem] mx-auto max-w-3xl mb-[4rem]'>
          <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Conoce los beneficios de comprar con tu crédito Infonavit.

          </h3>

          <ul className="mt-4 ml-4 text-gray-500 list-disc list-inside">
            <li>Puedes utilizar el saldo de la subcuenta para pagar el enganche de tu casa.</li> <br />
            <li>Las aportaciones patronales reducen significativamente el plazo de crédito de tu vivienda.</li>     <br />
            <li>Pagos mensuales fijos durante el período acordado para liquidar el préstamo.</li>     <br />
            <li> El pago de la aportación patronal se abona directamente al capital de la deuda, en caso de tener una relación laboral.</li>
            <br />
            <li>Trámite fácil y rápido..</li>
          </ul>
          <Link to="/desarrollo" className="font-semibold mt-6 ml-4 max-w-lg hover:text-blue-700 text-primary">
            ¿Aún no encuentras la casa ideal?
          </Link>
          <Link to="/desarrollo" className="flex mt-4 ml-4 max-w-lg hover:text-blue-700 text-gray-700 text-xs">
            Explora aquí las opciones que tenemos para ti.
          </Link>

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

export default BlogPost3