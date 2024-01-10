import React from 'react'

function Video() {
  return (
    <div className='w-full '>
      <video className="w-full h-screen  hidden md:block object-cover object-top"
        src="/INTRO PAG WEB OBR h264.mp4"
        autoPlay
        loop
        muted
      >
      </video>
      <video
        autoPlay
        loop
        muted
        src='/INTRO PAG WEB  VERTICAL h264.mp4'
        className=' block md:hidden object-fill h-[93vh] '
      >
      </video>
    </div>
  )
}

export default Video