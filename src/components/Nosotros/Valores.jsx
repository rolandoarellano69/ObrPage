import React from 'react'
import PASION from '../../assets/images/PASION.png'
import RESPONSABILIDAD from '../../assets/images/RESPONSABILIDAD.png'
import HONESTIDAD from '../../assets/images/HONESTIDAD.png'
import CONFIABILIDAD from '../../assets/images/CONFIABILIDAD.png'
import SERVICIO from '../../assets/images/SERVICIO.png'
import COMPROMISO from '../../assets/images/COMPROMISO.png'


const iconsValores = [
  { src: RESPONSABILIDAD, alt: 'Responsabilidad', name: 'Responsabilidad' },
  { src: HONESTIDAD, alt: 'Honestidad', name: 'Honestidad' },
  { src: CONFIABILIDAD, alt: 'Confiabilidad', name: 'Confiabilidad' },
  { src: SERVICIO, alt: 'Servicio', name: 'Servicio' },
  { src: COMPROMISO, alt: 'Compromiso', name: 'Compromiso' },
  { src: PASION, alt: 'Pasión', name: 'Pasión' },
]

function Valores() {
  return (
    < >
      <div className="relative mb-4 flex justify-center items-center border-2 gap-1 py-2 translate-y-[2rem] md:translate-y-[4rem] lg:-translate-y-[2rem] md:py-4 lg:py-8 mx-4 sm:mx-8 md:mx-16 lg:mx-[16rem] font-bold rounded-[3rem] bg-white text-xs sm:text-sm md:text-lg lg:text-3xl text-gray-500 z-20"> Valores </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-10  '>
        {iconsValores.map((valor, index) => (
          <div key={index} className='flex flex-col justify-center items-center'>
            <img src={valor.src} alt={valor.alt} className='w-20 h-20' />
            {/* <Image
        src={valor.src}
        alt={valor.alt}
        width={200}
        height={200}
        quality={100} 
        className='rounded-full' /> */}
            <p className='text-center font-bold mb-2 text-secondary'>{valor.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Valores