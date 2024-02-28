import React from 'react'
import BlogCard from './BlogCard'
import BlogPeek1 from '../../assets/images/1.jpg'
import BlogPeek2 from '../../assets/images/2.jpg'
import BlogPeek3 from '../../assets/images/3.jpg'
import BlogPeek4 from '../../assets/images/agente-cliente-haciendo-trato.webp'



function Blog() {
  return (
    <section>
      <div className='relative bg-primary top-0 w-full h-[6rem]'></div>
      <section className='container mx-auto p-10 py-6 sm:py-12 mt-[1rem] text-gray-900'>
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4 flex ">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Nuestro Blog
              </span>
              <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-[40px] text-center">
                Nuestras últimas noticias
              </h1>
              <p className="text-base text-body-color dark:text-dark-6">
                Te compartimos las noticias más relevantes del sector inmobiliario y financiero.
              </p>
            </div>
          </div>
        </div>
        <div className='-mx-4 flex flex-wrap'>
          <BlogCard
            date="01 Enero 2024"
            CardTitle="EVITA EL INCREMENTO DE TU DEUDA EN INFONAVIT ESTE 2024"
            CardText="Cada inicio de año, todos los créditos denominados en Veces Salario Mínimo (VSM), registran un incremento ligado al aumento del salario mínimo."
            href="/blog/post-1"
            imagen={BlogPeek1} />

          <BlogCard date="23 Nov 2023"
            CardTitle="CON INFONAVIT YA PUEDES SOLICITAR MAS DE UN FINANCIAMIENTO CON CRÉDITOS SUBSECUENTES."
            CardText="El Instituto del Fondo Nacional de la Vivienda para los Trabajadores (Infonavit) informó mediante un comunicado que eliminó las restricciones que impedían a las personas solicitar mas de un financiamiento. 
          "
            imagen={BlogPeek2}
            href="/blog/post-2"
          />

          <BlogCard
            date="20 Dic 2023"
            CardTitle="¿SABES CUANTO TE PRESTA INFONAVIT?"
            CardText="Podrías estar perdiendo la oportunidad de comprar tu casa."
            imagen={BlogPeek3}
            href="/blog/post-3" />
            
            <BlogCard
            date="27 Feb 2024"
            CardTitle="INFONAVIT HA ELEVADO EL LÍMITE DE FINANCIAMIENTO HASTA 2.7 MILLONES/2024"
            CardText="El aumento aplica a todas las líneas de financiamiento que maneja el organismo."
            imagen={BlogPeek4}
            href="/blog/post-4" />
        </div>
      </section>
    </section>
  )
}

export default Blog