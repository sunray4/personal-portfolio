"use client";

import React from "react";
import Image from "next/image";

function AboutMeMobile() {
  return (
    <div className="flex flex-col justify-center items-center p-4 pt-10 pb-0 bg-bg-aboutme">
      <Image
        id="pfp"
        src="/photoframe.webp"
        alt="Profile Photo"
        width={500}
        height={500}
        className=""
      />

      <div id="bio" className="flex flex-col gap-y-4 p-5 text-fg-aboutme-text">
        <p>
          Hey!! My name is Joanna and I&apos;m a{" "}
          <span className="text-fg-aboutme-highlight">CS</span> student at the{" "}
          <span className="text-fg-aboutme-highlight">
            University of Waterloo
          </span>
          .
        </p>
        <p>
          I love going to{" "}
          <span className="text-fg-aboutme-highlight">hackathons</span>, and
          I&apos;m an active contributor to{" "}
          <span className="text-fg-aboutme-highlight">
            open source software
          </span>
          .
        </p>
        <p>
          In my spare time, I love to go cycling, read and cook comfort meals.
        </p>
        <p>Thanks for checking out my website!!</p>
      </div>
      <div
        className="relative p-7 w-screen mt-5"
        style={{
          background:
            "linear-gradient(to bottom, var(--background-aboutme), #4a2f20, var(--background-exp))",
        }}>
      </div>
    </div>
  );
}

export default AboutMeMobile;
