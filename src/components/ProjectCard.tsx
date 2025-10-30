import React from 'react'
import { ProjDataInterface } from '@/data/projData'
import Image from 'next/image'

function ProjectCard({project: {title, description, link, tech, image}} : {project: ProjDataInterface}) {
  return (
    <div className='flex flex-col w-full md:w-1/2 text-lg pr-7 group md:max-h-[488px]'>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={image.src} alt={image.alt} width={800} height={400} className="object-contain rounded-md transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(199,199,199,0.5)]" />
        <div className='flex justify-between items-center mt-4 tracking-tight'>
          <p className='text-3xl font-title-bold text-yellow transition-all duration-300 group-hover:underline tracking-tighter'>{title}</p>
          <p className='text-blue text-base ml-4'>
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
        <p className='text-fg-proj-pink mt-2'>{description}</p>
      </a>
    </div>
  )
}

export default ProjectCard
