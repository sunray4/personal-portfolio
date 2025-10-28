import React from 'react'
import Mail from "../assets/mail.svg";
import Resume from "../assets/resume.svg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import * as Tooltip from '@radix-ui/react-tooltip';

function Experience() {
  const iconSize = 35;
  return (
    <div className='bg-bg-exp text-fg-exp-blue relative z-30 p-20'>
      <p className='w-2/3'>
        Im a frontend developer passionate about crafting intuitive and immersive software experiences for all kinds of organizations. I focus on creating user interfaces that not only look great but also feel seamless and engaging, turning complex ideas into simple, meaningful digital interactions.
      </p>
      <div className='flex flex-row gap-3 mt-3 items-center'>
        <Tooltip.Provider delayDuration={50}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild data-state="instant-open">
              <Resume className="cursor-pointer" height={iconSize} />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" side='bottom'>
                View my resume
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Tooltip.Provider delayDuration={50}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild data-state="instant-open">
              <Linkedin className="cursor-pointer" height={iconSize} />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" side='bottom'>
                LinkedIn Warrior
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Tooltip.Provider delayDuration={50}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild data-state="instant-open">
              <Github className="cursor-pointer" height={iconSize} />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" side='bottom'>
                GitHub
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Tooltip.Provider delayDuration={50}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild data-state="instant-open">
              <Mail className="cursor-pointer" height={iconSize} />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent" side='bottom'>
                Email me
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </div>
  )
}

export default Experience
