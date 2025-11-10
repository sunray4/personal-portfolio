import React from 'react'
import { ProjDataInterface } from '@/data/projData'
import Image from 'next/image'

function ProjectCard({project: {title, description, link, tech, image}} : {project: ProjDataInterface}) {
  return (
    <div className='flex flex-col w-full md:w-1/2 pr-7 group md:max-h-[488px]'>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={image.src} alt={image.alt} width={800} height={400} className="object-contain rounded-md transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(199,199,199,0.5)]" />
        <div className='flex justify-between items-center mt-3 tracking-tight'>
          <p className='text-2xl font-title-bold text-fg-proj-title transition-all duration-300 group-hover:underline tracking-tighter'>{title}</p>
          <p className='text-fg-proj-highlight ml-4'>
            {
              tech.map((techItem, index) => (
                <React.Fragment key={index}>
                  {index != 0 && <span className='mr-[0.1rem]'> • </span>}
                  <span className='mr-[0.1rem]'>{techItem}</span>
                </React.Fragment>
              ))
            }
          </p>
        </div>
        <p className='text-fg-proj-text mt-1'>{description}</p>
      </a>
    </div>
  )
}

export default ProjectCard


function ProjectCardMobile({project: {title, description, link, tech, image}} : {project: ProjDataInterface}) {
  return (
    <div className='flex flex-col w-full md:w-1/2 pr-7 group md:max-h-[488px]'>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={image.src} alt={image.alt} width={800} height={400} className="object-contain rounded-md transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(199,199,199,0.5)]" />
        <div className='flex flex-col items-start mt-3 tracking-tight'>
          <p className='text-xl font-title-bold text-fg-proj-title transition-all duration-300 group-hover:underline tracking-tighter'>{title}</p>
          <p className='text-fg-proj-highlight text-xs'>
            {
              tech.map((techItem, index) => (
                <React.Fragment key={index}>
                  {index != 0 && <span className='mr-[0.1rem]'> • </span>}
                  <span className='mr-[0.1rem]'>{techItem}</span>
                </React.Fragment>
              ))
            }
          </p>
        </div>
        <p className='text-fg-proj-text mt-1 text-sm'>{description}</p>
      </a>
    </div>
  )
}

export { ProjectCardMobile }