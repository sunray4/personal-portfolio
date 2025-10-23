'use client';

import React, { useEffect, useRef } from "react";
import HeroTextSvg from '@/assets/hero-img.svg'
// import SunSVG from '@/assets/sun.svg'
// import SunPathSVG from '@/assets/sun-path.svg'
import gsap from 'gsap'
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { ReactLenis } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function AboutMe() {
  const lenisRef = useRef<any>(null)
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    // GSAP scroll animation for the sun
    gsap.to("#sun-svg", {
      motionPath: {
        path: "#sun-path-svg",
        align: "#sun-path-svg",
        alignOrigin: [0.5, 0.5],
        start: 1,
        end: 0,
      },
      scale: 1.5,
      keyframes: [
        { scale: 7, duration: 0.5 },
        { scale: 1, duration: 0.5 },
      ],
      scrollTrigger: {
        trigger: "#aboutme",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => gsap.ticker.remove(update);
  }, []);

  
  return (
    <div id="aboutme" className="relative h-[300vh]">
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* <SunSVG id="sun-svg" className='absolute z-20 top-2 right-2' /> */}
        <svg width="1257px" height="1040px" viewBox="0 0 1257 1040" className="absolute top-12 right-12 overflow-visible" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <image id="sun-svg" href="/sun-red.svg" width="100" height="100" />
                <path id="sun-path-svg" d="M1256,1 C937.381352,58.9333558 676.402891,172.388108 473.064619,341.364258 C269.726346,510.340407 112.226305,742.885655 0.564495153,1039" stroke="transparent"></path>
            </g>
        </svg>
        <div className="flex justify-center items-center ">
          <HeroTextSvg id="hero-text-svg" className='max-w-full max-h-screen w-auto h-auto object-contain z-10'/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
