import React from 'react'
import ExpIcons from './ExpIcons'
import ExpCard from './ExpCard'
import { expData } from '@/data/exp-data'

function Experience() {
  
  return (
    <div className='bg-bg-exp text-fg-exp-blue relative z-30 p-20 w-screen'>
      <p className='w-2/3 text-lg'>
        I&apos;m a frontend developer passionate about crafting intuitive and immersive software experiences for all kinds of organizations. I focus on creating user interfaces that not only look great but also feel seamless and engaging, turning complex ideas into simple, meaningful digital interactions.
      </p>
      <ExpIcons />
      {
        expData.map((exp, index) => (
          <ExpCard 
            key={index}
            startTime={exp.startTime}
            endTime={exp.endTime}
            role={exp.role}
            company={exp.company}
            description={exp.description}
            location={exp.location}
            image={exp.image}
          />
        ))
      }
    </div>
  )
}

export default Experience
