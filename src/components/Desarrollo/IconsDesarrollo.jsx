import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
import jadeLogo from '../../assets/images/LOGO JADE.png'
import almeriaLogo from '../../assets/images/LOGO ALMERIA.png'



const iconsDev = [
  { src: aureoPeek, srcIcon: aureoLogo, alt: 'Aureo Residencial', hrefn: 'https://residencialaureo.com/inicio' },
  { src: platinumPeek, srcIcon: platinumLogo, alt: 'Platinum Residencial', hrefn: 'https://platinumresidencial.com/' },
  { src: torresPeek, srcIcon: torresLogo, alt: 'Torres Del Colorado', hrefn: 'https://torresdelcolorado.com/' },
  { src: cipresPeek, srcIcon: cipresLogo, alt: 'Cipres Del Bosque', hrefn: 'https://cipresdelbosque.com/' },
  { src: jadePeek, srcIcon: jadeLogo, alt: 'Jade Residencial', hrefn: 'https://jaderesidencial.com.mx/' },
  { src: almeriaPeek, srcIcon: almeriaLogo, alt: 'Almeria', hrefn: 'https://almeria.com.mx/' },
];
const variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0 }
};


function IconsDesarrollo() {
  return (
    <section>
     <section className="bg-white py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Desarrollos</h1>
        <p className="text-gray-600">Explora nuestros proyectos</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {iconsDev.map((iconDev, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link target="_blank" to={iconDev.hrefn} className="block">
              <div className="relative overflow-hidden">
                <img
                  src={iconDev.src}
                  alt={iconDev.alt}
                  className="w-full  object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                  <img
                    src={iconDev.srcIcon}
                    alt={iconDev.alt}
                    className=" h-40 object-cover"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
    </section>
  )
}

export default IconsDesarrollo