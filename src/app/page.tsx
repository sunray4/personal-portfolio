'use client';

import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import { ReactLenis, type LenisRef } from 'lenis/react'
import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const lenisRef = useRef<LenisRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, { scope: containerRef, dependencies: [] });

  return (
    <div ref={containerRef}>
      <ReactLenis 
        root 
        options={{ autoRaf: false }} 
        ref={lenisRef}>  
        <AboutMe />
        <Experience />
      </ReactLenis>    
    </div>
  );
}
