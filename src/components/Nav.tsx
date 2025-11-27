import React from 'react'

function Nav({ setVisible }: { setVisible: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className='fixed top-7 left-7 flex gap-x-4 p-4 py-2 z-80 rounded rounded-3xl text-black' style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
        <p>❤</p>
        <a
          href="#experience"
          className='hover:underline hover:underline-offset-4 transition-all'
          onClick={e => {
            setVisible(true);
            // Let the browser handle the anchor navigation after state update
          }}
        >
          Experience
        </a>
        <a
          href="#projects"
          className='hover:underline hover:underline-offset-4 transition-all'
          onClick={e => {
            setVisible(true);
          }}
        >
          Projects
        </a>
    </div>
  )
}

export default Nav
