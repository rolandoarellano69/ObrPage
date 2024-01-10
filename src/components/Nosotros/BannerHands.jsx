import React from 'react'
import HandPeek from '../../assets/images/manosEquipo.webp'
function BannerHands() {
  return (
    <div className="relative w-full h-40">
      <img src={HandPeek} alt='Imagen1' className='object-cover h-40 w-full' />
      <div className="absolute inset-0 bg-primary opacity-80 "></div>
    </div>

  
  )
}

export default BannerHands