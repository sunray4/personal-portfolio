import React from "react";
import Mail from "../assets/mail.svg";
import Resume from "../assets/resume.svg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import MailY from "../assets/mail-yellow.svg";
import InstaY from "../assets/insta-yellow.svg";
import LinkedinY from "../assets/linkedin-yellow.svg";
import GithubY from "../assets/github-yellow.svg";
import * as Tooltip from "@radix-ui/react-tooltip";
import { mailLink, instagramLink, githubLink, linkedinLink, resumeLink} from "../data/iconLinks";

function ExpIcons() {
  const iconSize = 35;
  return (
    <div className="flex flex-row gap-3 mt-3 items-center text-fg-exp-blue">
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild data-state="instant-open">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <Resume className="cursor-pointer" height={iconSize} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" style={{color: 'var(--color-fg-exp-blue)'}} side="bottom">
              Resume
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild data-state="instant-open">
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <Linkedin className="cursor-pointer" height={iconSize} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" style={{color: 'var(--color-fg-exp-blue)'}} side="bottom">
              LinkedIn Warrior
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild data-state="instant-open">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="cursor-pointer" height={iconSize} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" style={{color: 'var(--color-fg-exp-blue)'}} side="bottom">
              GitHub
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild data-state="instant-open">
            <a href={mailLink} target="_blank" rel="noopener noreferrer">
              <Mail className="cursor-pointer" height={iconSize} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" style={{color: 'var(--color-fg-exp-blue)'}} side="bottom">
              Email me
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}

function FooterIcons() {
  const iconSize = 35;
  return (
    <div className="flex flex-row gap-3 items-center">
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild data-state="instant-open">
            <a href={mailLink} target="_blank" rel="noopener noreferrer">
              <MailY className="cursor-pointer" height={iconSize} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" side="top">
              Email
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild data-state="instant-open">
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <LinkedinY className="cursor-pointer" height={iconSize} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" side="top">
              LinkedIn Warrior
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild data-state="instant-open">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <GithubY className="cursor-pointer" height={iconSize} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" side="top">
              GitHub
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Tooltip.Provider delayDuration={50}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild data-state="instant-open">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <InstaY className="cursor-pointer" height={iconSize} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" side="top">
              Instagram
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}

export { ExpIcons, FooterIcons};
