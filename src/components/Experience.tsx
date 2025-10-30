import React from 'react'
import { ExpIcons } from './IconList'
import ExpCard from './ExpCard'
import { expData } from '@/data/expData'

function Experience() {
  
  return (
    <div className='bg-bg-exp text-fg-exp-blue relative z-30 p-20 w-screen pt-0 text-fg-exp-blue'>
      <p className='w-2/3 text-lg'>
        I&apos;m a frontend developer passionate about crafting intuitive and immersive software experiences for all kinds of organizations. I focus on creating user interfaces that not only look great but also feel seamless and engaging, turning complex ideas into simple, meaningful digital interactions.
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
