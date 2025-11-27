import React from 'react'
import { ExpIcons } from './IconList'
import ExpCard from './ExpCard'
import { expData } from '@/data/expData'

function Experience() {
  
  return (
    <div id="experience" className='relative z-30 p-20 w-screen text-fg-exp-blue' style={{ background: 'linear-gradient(to bottom, var(--background-exp), var(--background-projects))' }}>
      <p className='w-2/3 text-lg font-medium'>
        I&apos;m a software developer passionate about crafting intuitive and immersive software experiences. I focus on creating user interfaces that not only look great but also feel seamless and engaging, turning complex workflows into simple, meaningful digital interactions.
      </p>
      <ExpIcons />
      {
        expData.map((exp, index) => (
          <ExpCard 
            key={index}
            exp={exp}
          />
        ))
      }
    </div>
  )
}

export default Experience
