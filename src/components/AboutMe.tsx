import React from 'react'
import HeroTextSvg from '@/assets/hero-text.svg'

function AboutMe() {
  console.log(HeroTextSvg)
  return (
    <div className='h-[100vh]'>
      <HeroTextSvg width="fill" height="fill" />
    </div>
  )
}

export default AboutMe
