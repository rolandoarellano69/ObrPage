import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


const Contacto = () => {
  const iframeStyle = {
    height: '85vh',
    width: '80%',
    border: 'none',
  };
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 0.5 } }
  };
  return (
    <>
      <div className="bg-primary w-full h-[6rem]"></div>
      <section className="bg-white py-8">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8">
          <h1 className="text-2xl font-bold text-center mb-8">Contáctanos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div >
              <h2 className="text-lg font-semibold mb-2">Información de Contacto</h2>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-secondary" />
                  Correo electrónico: <span className=' font-medium text-secondary px-2'>atencionaclientes@obrgroup.com.mx</span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-secondary" />Teléfono: 
                  <span className=' font-medium text-secondary px-2'>+52 664 338 52 10</span>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-secondary" />
                  Dirección:<span className=' font-medium text-secondary px-2'>
                  Plaza Carrousel, Blvd. Gustavo Díaz Ordaz 15602-Loc LA 22, Gas y Anexas, 22115 Tijuana, B.C.  </span> 
                </li>
              </ul>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.09964691671!2d-116.96327279585806!3d32.496765730287386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9397e65f49e0d%3A0x282eb74e873766!2sObr%20Group%20Oficinas!5e0!3m2!1ses!2smx!4v1705022281674!5m2!1ses!2smx"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <motion.iframe
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              aria-label='Form OBR'
              src='https://forms.zohopublic.com/obrgroup/form/FormOBR/formperma/h5W4BVvU_PTm6KUWmBvVstuKP133oP3GXrSVkzLYrZo'
              style={iframeStyle}
            ></motion.iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto