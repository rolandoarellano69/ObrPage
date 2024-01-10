import React from 'react'
import Video from '../shared/Video'
import CardAbout from '../home/CardAbout'
import ExpCard from '../home/ExpCard'
import ProjectAbout from '../home/ProjectAbout'

const Home = () => {
  return (
    <section>
      <Video />
      <CardAbout />
      <ExpCard />
      <ProjectAbout />
    </section>
  )
}

export default Home