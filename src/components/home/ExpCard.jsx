import { motion } from 'framer-motion'
import Peek1 from '../../assets/images/elementos web-05.png'
import Peek2 from '../../assets/images/elementos web-06.png'
import Peek3 from '../../assets/images/elementos web-07.png'

function ExpCard() {
  const variants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className='bg-white pt-16 pb-16 pl-10 pr-16'>
      <div className=" flex flex-col lg:flex-row text-gray-800 justify-between items-center ">
        <motion.div whileHover={{ scale: 1.1 }} className='flex flex-col items-center justify-center text-center mt-8 lg:mt-0 lg:ml-8'>
          <img src={Peek1} alt="Valores OBR GROUP" className='h-36' />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className='flex flex-col items-center justify-center text-center mt-8 lg:mt-0 lg:ml-8'>
          <img src={Peek2} alt="Valores OBR GROUP" className='h-36' />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className='flex flex-col items-center justify-center text-center mt-8 lg:mt-0 lg:ml-8'>
          <img src={Peek3} alt="Valores OBR GROUP" className='h-36' />
        </motion.div>
      </div>
    </div>
  )
}
export default ExpCard