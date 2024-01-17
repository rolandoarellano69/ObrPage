import React from 'react'
import familiaPeek from '../../assets/images/familia3.jpg'
import familiaMobile from '../../assets/images/familiamobile2.jpg'
import IconsDesarrollo from './IconsDesarrollo'

function Desarrollo() {
  return (
    <section>
        <div className='hidden md:block h-auto'>
            <img src={familiaPeek} alt='Familia Feliz' className=' w-full'/>
        </div>
      <div className='md:hidden block h-[60vh]'>
        <img src={familiaMobile} alt='Familia Feliz' className='h-auto w-auto'/>
      </div>
          <IconsDesarrollo />
    </section>
  )
}

export default Desarrollo