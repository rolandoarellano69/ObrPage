import React from 'react'
import familiaPeek from '../../assets/images/familia3.jpg'
import familiaMobile from '../../assets/images/familiamobile2.jpg'
import IconsDesarrollo from './IconsDesarrollo'

function Desarrollo() {
  return (
    <section>
      <div className="relative flex items-center justify-start">
        <div className='hidden md:block h-[80vh'>
            <img src={familiaPeek} alt='Familia Feliz' className=' w-full'/>
  

        </div>
      </div>
      <div className='md:hidden block h-[20vh]'>
        <img src={familiaMobile} alt='Familia Feliz' className=''/>
        {/* <Image
          src="/familiamobile2.jpg"
          alt="Descripción de la imagen"
          fill
          quality={100}
          // style={{objectFit: 'cover' }}
          className='object-contain ' /> */}
      </div>
          <IconsDesarrollo />
    </section>
  )
}

export default Desarrollo