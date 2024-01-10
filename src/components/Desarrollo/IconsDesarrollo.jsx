import { motion } from 'framer-motion'
import aureoPeek from '../../assets/images/ACCESO AUREO 4K_Mesa de trabajo 1.jpg'
import platinumPeek from '../../assets/images/PLATINUM_Mesa de trabajo 1.jpg'
import torresPeek from '../../assets/images/TORREES_Mesa de trabajo 1.jpg'
import cipresPeek from '../../assets/images/CIPRES_Mesa de trabajo 1.jpg'
import jadePeek from '../../assets/images/JADE_Mesa de trabajo 1.jpg'
import almeriaPeek from '../../assets/images/ALMERIA_Mesa de trabajo 1.jpg'
//logos
import aureoLogo from '../../assets/images/LOGO AUREO.png'
import platinumLogo from '../../assets/images/LOGO PLATINUM.png'
import torresLogo from '../../assets/images/LOGO TORRES.png'
import cipresLogo from '../../assets/images/LOGO CIPRES.png'
import jadeLogo from '../../assets/images/logo Jade blanco-02.png'
import almeriaLogo from '../../assets/images/LOGO ALMERIA.png'



const iconsDev = [
  { src: aureoPeek, srcIcon: aureoLogo , alt: 'Aureo Residencial', description: 'Loma Dorada', Precio: '$5,450,541 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://residencialaureo.com/inicio' },
  { src: platinumPeek, srcIcon: platinumLogo, alt: 'Platinum Residencial', description: 'Loma Dorada', Precio: '$5,397,600 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://platinumresidencial.com/' },
  { src: torresPeek, srcIcon: torresLogo, alt: 'Torres Del Colorado', description: 'Hacienda del Colorado', Precio: '$1,477,351 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://torresdelcolorado.com/' },
  { src: cipresPeek, srcIcon: cipresLogo, alt: 'Cipres Del Bosque', description: 'Paseo Del Bosque', Precio: '$4,200,000', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://cipresdelbosque.com/' },
  { src: jadePeek, srcIcon: jadeLogo, alt: 'Jade Residencial', description: 'La Gloria', Precio: '$2,348,431 MXN', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://jaderesidencial.com.mx/' },
  { src: almeriaPeek, srcIcon: almeriaLogo, alt: 'Almeria', description: 'Barcelona', Precio: '$6,200,000', Parking: '2', Bathrooms: '2', Bedrooms: '2', hrefn: 'https://almeria.com.mx/' },
];
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
}


function IconsDesarrollo() {
  return (
    <section>
      <div className="relative mb-4 flex justify-center items-center b order-2 gap-1 py-2 translate-y-[30rem] md:translate-y-[4rem] lg:translate-y-[3rem] md:py-4 lg:py-8 mx-4 sm:mx-8 md:mx-16 lg:mx-[16rem] font-bold rounded-[3rem] bg-white text-xs sm:text-sm md:text-lg lg:text-3xl text-gray-500 z-20"> Desarrollos</div>
      <div className='bg-white text-black p-8 lg:p-8 translate-y-[30rem] lg:translate-y-[4rem]'>
        <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {iconsDev.map((iconDev, index) => (
            <motion.div
              key={index}
              variants={variants} // Asigna las variantes
              initial="offscreen" // Estado inicial
              whileInView="onscreen" // Estado cuando el componente está en la vista
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -10, // Mueve la tarjeta hacia arriba ligeramente
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)" // Incrementa la sombra para dar un efecto de elevación
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className='rounded-[6rem]'>

              <a href={iconDev.hrefn} className="relative rounded-[6rem]">
                <div className='group rounded-[6rem]'>

                  <div className='absolute inset-0 flex items-center justify-center shadow-lg shadow-indigo-200 opacity-0 rounded-[6rem] bg-black/75 group-hover:opacity-100'>
                    <img src={iconDev.srcIcon} alt={iconDev.alt} />
                    {/* <Image
                      alt={iconDev.alt}
                      src={iconDev.srcIcon}
                      width={300}
                      height={0}
                      className='rounded-[6rem]' /> */}
                  </div>
                  <img />
                  <img src={iconDev.src} alt={iconDev.alt} className='rounded-[6rem]' />
                  {/* <Image
                    alt={iconDev.alt}
                    src={iconDev.src}
                    width={900}
                    height={600}
                    className=" rounded-[6rem] object-cover " // Añade tus clases de Tailwind aquí
                  /> */}
                </div>
              </a>
            </motion.div>
          ))}
        </main>
      </div>

    </section>
  )
}

export default IconsDesarrollo