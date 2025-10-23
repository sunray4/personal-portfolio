'use client';

import React, { useEffect, useRef } from "react";
import HeroTextSvg from '@/assets/hero-text.svg'
import SunSVG from '@/assets/sun.svg'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const lenisRef = useRef<any>(null)
  // let tweebeen: gsap.core.Tween = gsap.to("#sun-svg", {})
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.registerPlugin(ScrollTrigger);

    // GSAP scroll animation for the sun
    gsap.to("#sun-svg", {
      x: "-60vw",
      y: "100vh",
      ease: "none",
      scrollTrigger: {
        trigger: "#aboutme-section",
        start: "top top",
        end: "bottom bottom",
        pinnedContainer: "#hero-text-svg",
        scrub: true,
      },
    });

    return () => gsap.ticker.remove(update);
  }, []);

  
  return (
    <div id="aboutme" className="relative h-[300vh]">
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <div className="sticky top-0 h-screen overflow-hidden">
        <SunSVG id="sun-svg" className='absolute top-2 right-2 z-20' />
        <HeroTextSvg id="hero-text-svg" className='absolute z-10 top-0 left-0 translate-y-1/10 max-w-full max-h-full object-contain' />
      </div>
    </div>
  )
}

export default AboutMe
