import React from 'react'
import { FooterIcons } from '@/components/IconList'
import MailY from "../assets/mail-yellow.svg";
import InstaY from "../assets/insta-yellow.svg";
import LinkedinY from "../assets/linkedin-yellow.svg";
import GithubY from "../assets/github-yellow.svg";
import { mailLink, instagramLink, githubLink, linkedinLink} from "../data/iconLinks";

function Footer() {
  return (
    <footer className='flex items-center justify-between px-7 pb-10 pt-4 bg-bg-default relative z-30 text-yellow '>
      <FooterIcons />
      <p className='font-semibold text-lg'>⋆｡˚made with ❤︎ by <span className='font-normal'>曦</span> © 2025˚｡⋆</p>
      <p className=''>Last Updated: 9th Nov 2025</p>
    </footer>
  )
}

export default Footer

function FooterMobile() {
  const iconSize = 30;
  return (
    <footer className='flex flex-col items-center justify-between px-7 pb-10 pt-4 gap-y-1 bg-bg-default relative text-yellow '>
      <div className="flex justify-start gap-x-1 mt-2">
        <a href={mailLink} target="_blank" rel="noopener noreferrer">
          <MailY className="cursor-pointer" height={iconSize} />
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <LinkedinY className="cursor-pointer" height={iconSize} />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <GithubY className="cursor-pointer" height={iconSize} />
        </a>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <InstaY className="cursor-pointer" height={iconSize} />
        </a>
      </div>
      <p className='font-semibold text-sm'>⋆｡˚made with ❤︎ by <span className='font-normal'>曦</span> © 2025˚｡⋆</p>
      <p className='text-xs'>Last Updated: 9th Nov 2025</p>
    </footer>
  )
}

export { FooterMobile }
