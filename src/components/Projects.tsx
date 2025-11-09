import React from 'react'
import { projData } from '@/data/projData'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className='flex flex-col relative z-30 pl-7 w-screen py-15' style={{ background: 'linear-gradient(to bottom, var(--background-projects), var(--background))' }}>
        <div className='flex justify-start w-full items-center'>
            <p className='text-8xl font-title-impact text-blue pr-7'>
                ⋆ Projects
            </p>
        </div>
        <div className='mt-10 flex gap-y-10 flex-wrap justify-between'>
            {
                projData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))
            }
        </div>
    </div>
  )
}

export default Projects
