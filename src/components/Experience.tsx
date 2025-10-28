import React from 'react'
import Mail from "../assets/mail.svg";
import Resume from "../assets/resume.svg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";

function Experience() {
  const iconSize = 35;
  return (
    <div className='bg-bg-exp text-fg-exp-blue relative z-30 p-20'>
      <p className='w-2/3'>
        Im a frontend developer passionate about crafting intuitive and immersive software experiences for all kinds of organizations. I focus on creating user interfaces that not only look great but also feel seamless and engaging, turning complex ideas into simple, meaningful digital interactions.
      </p>
      <div className='flex flex-row gap-2 mt-3 items-center'>
        <Mail className="cursor-pointer" height={iconSize} />
        <Resume className="cursor-pointer" height={iconSize} />
        <Linkedin className="cursor-pointer" height={iconSize} />
        <Github className="cursor-pointer" height={iconSize} />
      </div>
    </div>
  )
}

export default Experience
