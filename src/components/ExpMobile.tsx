import React from "react";
import { ExpIcons } from "./IconList";
import { expData } from "@/data/expData";
import { ExpCardMobile } from "./ExpCard";

function ExpMobile() {
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
        <ExpIcons />
        {expData.map((exp, index) => (
          <ExpCardMobile key={index} exp={exp} />
        ))}
      </div>
    </div>
  );
}

export default ExpMobile;
