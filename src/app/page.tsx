'use client';

import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import { ReactLenis, type LenisRef } from 'lenis/react'
import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const lenisRef = useRef<LenisRef>(null);
  
  useGSAP(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, { scope: lenisRef });

  return (
    <div>
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
