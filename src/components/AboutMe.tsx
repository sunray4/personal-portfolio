'use client';

import React, { useEffect, useRef } from "react";
import HeroTextSvg from '@/assets/hero-text.svg'
// import SunSVG from '@/assets/sun.svg'
// import SunPathSVG from '@/assets/sun-path.svg'
import gsap from 'gsap'
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { ReactLenis } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// NOTE: hero text is currently absolutely positioned, 
// create a new svg that allows it to be correctly positioned with just flex justify-center items-center w-full h-full by importing with padding included

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
      },
      scale: 1.5,
      keyframes: [
        { scale: 4, duration: 0.5 },
        { scale: 1.2, duration: 0.5 },
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
        <svg width="1257px" height="1040px" viewBox="0 0 1257 1040" className="absolute top-12 right-12 overflow-visible mix-blend-difference" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <image id="sun-svg" href="/sun.svg" width="100" height="100" />
                <path id="sun-path-svg" d="M1256,1 C937.381352,58.9333558 676.402891,172.388108 473.064619,341.364258 C269.726346,510.340407 112.226305,742.885655 0.564495153,1039" stroke="transparent"></path>
            </g>
        </svg>
        <HeroTextSvg id="hero-text-svg" className='absolute z-10 top-0 left-2 translate-y-1/10 max-w-full max-h-full object-contain text-black mix-blend-difference' />
      </div>
    </div>
  )
}

export default AboutMe
