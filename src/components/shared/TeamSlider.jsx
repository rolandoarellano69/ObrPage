import React from 'react'
import asesor1 from '../../assets/images/VERÓNICA-VELÁZQUEZ_Mesa-de-trabajo-1.webp'
import asesor2 from '../../assets/images/FEDERICO-ARMENTA_Mesa-de-trabajo-1.webp'
import asesor3 from '../../assets/images/MARÍA-ELENA-MONTAÑO_Mesa-de-trabajo-1.webp'
import asesor4 from '../../assets/images/NESTOR-CORTÉS.webp'
import asesor6 from '../../assets/images/CESAR-JIMÉNEZ_Mesa-de-trabajo-1.webp'


const picsTeam = [
  { src: asesor1, alt: 'Verónica Velázquez', name: 'Verónica Velázquez', job: 'Coordinadora de Brokers' },
  { src: asesor2, alt: 'Federico Armenta', name: 'Federico Armenta', job: 'Asesor de Ventas' },
  { src: asesor3, alt: 'María Elena Montaño', name: 'María Elena Montaño', job: 'Asesora de Ventas' },
  { src: asesor4, alt: 'Nestor Cortés', name: 'Nestor Cortés', job: 'Asesor de Ventas' },
  { src: asesor6, alt: 'Cesar Jiménez', name: 'Cesar Jiménez', job: 'Asesor de Ventas' },
];

function TeamSlider() {
  return (
    <div className='md:m-4 p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4 p-4'>
        {picsTeam.map((picTeam, index) => (
          <div key={index} className='flex flex-col items-center'>
            <img src={picTeam.src} alt={picTeam.alt} className='rounded-full shadow-lg h-40 w-40' />
            <div className='mt-3 text-black'>
              <p className='font-semibold text-center'>{picTeam.name}</p>
              <p className='font-light text-center text-gray-500'>{picTeam.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamSlider