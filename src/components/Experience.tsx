import React from 'react'
import ExpIcons from './ExpIcons'
import ExpCard from './ExpCard'

function Experience() {
  
  return (
    <div className='bg-bg-exp text-fg-exp-blue relative z-30 p-20 w-screen'>
      <p className='w-2/3'>
        I&apos;m a frontend developer passionate about crafting intuitive and immersive software experiences for all kinds of organizations. I focus on creating user interfaces that not only look great but also feel seamless and engaging, turning complex ideas into simple, meaningful digital interactions.
      </p>
      <ExpIcons />
      <ExpCard startTime="Sept 2025" endTime="Present" role="Frontend Developer" company="Orbital" description="Developed user interfaces" location="Waterloo, ON">
        <div>hi</div>
      </ExpCard>
      <ExpCard startTime="Jan 2024" endTime="Apr 2024" role="Software Developer Intern" company="Thomson Reuters" description="Built internal tools" location="Toronto, ON">
        <div>hi</div>
      </ExpCard>
      <ExpCard startTime="May 2023" endTime="Aug 2023" role="Frontend Developer Intern" company="Nexus Mediaworks" description="Created marketing websites" location="Remote">
        <div>hi</div>
      </ExpCard>
    </div>
  )
}

export default Experience
