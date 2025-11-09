import React from 'react'
import { FooterIcons } from '@/components/IconList'

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
