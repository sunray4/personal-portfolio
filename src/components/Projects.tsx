import React from 'react'
import { projData } from '@/data/projData'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className='flex flex-col relative z-30 pl-7 bg-bg-proj w-screen py-15'>
        <div className='flex justify-center w-full items-center'>
            <p className='text-6xl font-title-impact text-blue pr-7'>
                Projects
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
