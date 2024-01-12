import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'



function BlogCard({ imagen, date, CardTitle, CardDescription, href }) {

  const variants = {
    offscreen: {
      y: 0, // Empieza 50px más abajo
      opacity: 0 // Empieza totalmente transparente
    },
    onscreen: {
      y: 0, // Termina en la posición original
      opacity: 1, // Termina totalmente opaco
      transition: {
        type: "spring", // Tipo de transición (opcional)
        bounce: 0.4, // Cantidad de rebote (opcional)
        duration: 0.8 // Duración de la animación en segundos
      }
    }
  };
  return (
    <motion.div
      className='w-full px-4 md:w-1/2 lg:w-1/3'
      variants={variants} // Asigna las variantes
      initial="offscreen" // Estado inicial
      whileInView="onscreen" // Estado cuando el componente está en la vista
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -10, // Mueve la tarjeta hacia arriba ligeramente
        boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)" // Incrementa la sombra para dar un efecto de elevación
      }}
      transition={{ type: "spring", stiffness: 100 }}
    >


      <div className='mb-10 w-full'>
        <div className='mb-8 overflow-hidden rounded'>
          <Link to={href}>
            <img className='object-cover' src={imagen} alt={`Blog post: ${CardTitle}`} />
          </Link>
        </div>
        <div >
          {date && (
            <span className='mb-5 inline-block rounded bg-secondary px-4 py-1 text-center text-xs font-semibold leading-loose text-white'>{date}</span>
          )}
          <h3>
            <Link to={href} className='mb-4 inline-block text-xl font-semibold text-gray-900 hover:text-secondary  sm:text-2xl lg:text-xl xl:text-2xl'>{CardTitle}</Link>
          </h3>
          <p className='text-base'>
            {CardDescription}
          </p>
        </div>
      </div>

    </motion.div>
  )
}

export default BlogCard