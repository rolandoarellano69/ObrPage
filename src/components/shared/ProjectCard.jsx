import { Link } from 'react-router-dom'
function ProjectCard({ imageM, title, linkHref }) {
  return (
    <article className="mt-[.5rem] overflow-hidden bg-transparent">
      {/* mobile */}
      <div className='relative flex lg:hidden h-[20rem] '>
        <img src={imageM} alt={`Visita de ${title}`} />
      </div>
      <div className='relative flex flex-col justify-center items-center mt-4 lg:hidden'>
        {/* <h3 className='text-lg text-gray-600 mb-2'>{title}</h3> */}
        <Link target="_blank" to={linkHref}>
          <button className='bg-secondary text-gray-200 px-[8rem] py-1 rounded-3xl text-sm'>Conoce más</button>
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard