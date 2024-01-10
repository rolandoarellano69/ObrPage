import React from 'react'
import { TbTargetArrow, TbEye } from 'react-icons/tb'
function MisionVision() {
  return (
    <div className=" flex justify-center items-center bg-white w-full h-auto md:h-50 p-0 md:p-0">
      {/* Background Image */}


      <section className="py-2 bg-white text-gray-50">
        <div className="flex flex-col items-center justify-center max-w-lg lg:max-w-full sm:p-0 lg:flex-row">
          <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-secondary ">
            <span className="text-3xl flex justify-center font-semibold items-center gap-2">Misión<TbTargetArrow className='text-[2rem]' /></span>

            <p className="font-light text-left mt-4">  Ser la Desarrolladora de Vivienda líder en la construcción de espacios habitacionales con los mayores estándares de calidad, soportada por la normatividad y requerimientos de convivencia social y legal para nuestros clientes, proveedores e inversionistas.</p>
            {/* <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 dark:border-gray-700">Sign up</button> */}
          </div>
          <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center  sm:p-8 lg:p-16 bg-primary text-gray-100">
            <span className="text-3xl justify-center items-center font-semibold flex gap-2">Visión <TbEye className='text-[2rem]' /></span>

            <p className="font-light text-left mt-4">Empresa socialmente responsable, líder en el sector inmobiliario con personal profesional y talentoso, para el desarrollo de vivienda con espíritu residencial, creando comunidades organizadas y sustentables, que maximice la calidad de vida de sus residentes.</p>
            {/* <button className="px-8 py-3 mt-6 -lg font-semibold rounded sm:mt-12 dark:bg-gray-800 dark:text-gray-50">Sign up</button> */}
          </div>
        </div>
      </section>

    </div>
  )
}

export default MisionVision