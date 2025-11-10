import React from 'react'
import { ProjectCardMobile } from './ProjectCard'
import { projData } from '@/data/projData'

function ProjectMobile() {
  return (
    <div>
      <div className='flex flex-col relative z-30 pl-7 w-screen py-15' style={{ background: 'linear-gradient(to bottom, var(--background-projects), var(--background))' }}>
        <div className='flex justify-start w-full items-center'>
            <p className='text-8xl font-title-impact text-blue pr-7'>
                Projects
            </p>
        </div>
        <div className='mt-10 flex gap-y-10 flex-wrap justify-between'>
            {
                projData.map((project, index) => (
                    <ProjectCardMobile key={index} project={project} />
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default ProjectMobile
