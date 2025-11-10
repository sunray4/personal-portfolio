import React from "react";
import { expData } from "@/data/expData";
import { ExpCardMobile } from "./ExpCard";
import Mail from "../assets/mail.svg";
import Resume from "../assets/resume.svg";
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";

function ExpMobile() {
  const iconSize = 30;
  return (
    <div>
      <div
        className="relative p-5 w-screen text-fg-exp-blue"
        style={{
          background:
            "linear-gradient(to bottom, var(--background-exp), var(--background-projects))",
        }}
      >

        <p className="text-6xl font-title-impact text-blue pr-7 mb-6">
            Experience
        </p>
        <p className="font-medium">
          I&apos;m a software developer passionate about crafting intuitive and
          immersive software experiences. I focus on creating user interfaces
          that not only look great but also feel seamless and engaging, turning
          complex workflows into simple, meaningful digital interactions.
        </p>
        <div className="flex justify-start gap-x-1 mt-2">
            <a href="https://drive.google.com/drive/folders/1DeSDYbqFTuED5JGDVe5SY5Pb87DIBocF?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Resume className="cursor-pointer" height={iconSize} />
            </a>
            <a href="https://www.linkedin.com/in/joannalau4" target="_blank" rel="noopener noreferrer">
              <Linkedin className="cursor-pointer" height={iconSize} />
            </a>
            <a href="https://github.com/sunray4" target="_blank" rel="noopener noreferrer">
              <Github className="cursor-pointer" height={iconSize} />
            </a>
            <a href="mailto:joannalau04@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="cursor-pointer" height={iconSize} />
            </a>
        </div>
        {expData.map((exp, index) => (
          <ExpCardMobile key={index} exp={exp} />
        ))}
      </div>
    </div>
  );
}

export default ExpMobile;
