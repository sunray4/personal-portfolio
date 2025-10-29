import React from "react";
import Mail from "../assets/mail.svg";
import Resume from "../assets/resume.svg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import * as Tooltip from "@radix-ui/react-tooltip";

function ExpIcons() {
  const iconSize = 35;
  return (
    <div className="flex flex-row gap-3 mt-3 items-center">
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild data-state="instant-open">
            <a href="https://drive.google.com/file/d/1GmUBOc2hIYmZ8aBxf5QfEf16hP2nxVK5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Resume className="cursor-pointer" height={iconSize} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" side="bottom">
              Resume
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild data-state="instant-open">
            <a href="https://www.linkedin.com/in/joanna-lau-286789292" target="_blank" rel="noopener noreferrer">
              <Linkedin className="cursor-pointer" height={iconSize} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" side="bottom">
              LinkedIn Warrior
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild data-state="instant-open">
            <a href="https://github.com/sunray4" target="_blank" rel="noopener noreferrer">
              <Github className="cursor-pointer" height={iconSize} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" side="bottom">
              GitHub
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild data-state="instant-open">
            <a href="mailto:joannalau04@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="cursor-pointer" height={iconSize} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" side="bottom">
              Email me
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}

export default ExpIcons;
