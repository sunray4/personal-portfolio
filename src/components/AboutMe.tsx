'use client';

import React, { useEffect, useRef } from "react";
import Mountains from "../assets/mountains.svg";
import gsap from 'gsap'
import { ScrollTrigger, MotionPathPlugin, SplitText } from "gsap/all";
import { ReactLenis } from 'lenis/react'
import { getContrastColor } from "./contrastColor";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, SplitText);

function AboutMe() {
  const sunScale = 0.5; // final size of sun svg
  const lenisRef = useRef<any>(null)
  const [nameColor, setNameColor] = React.useState<string>("#fafafa");
  const [sunMargin, setSunMargin] = React.useState<number>(0); // margin to offset sun travel path position

  const getRemMargin = () => {
    const sunElement = document.getElementById("sun-svg") as unknown as SVGGElement;
    if (!sunElement) {
      console.log("Sun element not found");
      return 0;
    }
    const sunBBox = sunElement.getBBox();
    const sunHeightSvg = sunBBox.height * sunScale;
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const sunRadiusRem = sunHeightSvg / rootFontSize / 2;
    return sunRadiusRem * 0.85;
  };
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    // Make sun instantly visible when scrollTrigger becomes active
    gsap.set("#sun-svg", { autoAlpha: 1 });

    // set sun travel path margin
    setSunMargin(getRemMargin());

    // Calculate the maximum safe endpoint for the sun based on viewport
    const calculateSafeEndpoint = () => {
      const sunElement = document.getElementById("sun-svg") as unknown as SVGGElement;
      if (!sunElement) return 0;
      
      const sunBBox = sunElement.getBBox();

      const sunRadius = Math.max(sunBBox.width * sunScale, sunBBox.height * sunScale) / 2;

      console.log("sun radius:", sunRadius);
      console.log("sun width:", sunBBox.width * sunScale);
      console.log("sun height:", sunBBox.height * sunScale);

      const pathElement = document.getElementById("sun-travel-path-svg") as unknown as SVGGElement;
      if (!pathElement) return 0;
      
      const pathLength = (pathElement as SVGPathElement).getTotalLength();
      
      // Binary search to find the maximum safe endpoint
      let low = 0;
      let high = 1;
      let safeEnd = 0;
      
      for (let i = 0; i < 20; i++) {
        const mid = (low + high) / 2;
        const point = (pathElement as SVGPathElement).getPointAtLength(pathLength * (1 - mid));

        const margin = sunRadius * 1.1; // 10% margin for safety
        const isInBounds =
          point.x - margin >= 0 &&
          point.x + margin <= window.innerWidth &&
          point.y - margin >= -sunRadius &&
          point.y + margin <= window.innerHeight;
        
        if (isInBounds) {
          safeEnd = mid;
          high = mid;
        } else {
          low = mid;
        }
      }
      console.log("calculated safe end:", safeEnd);
      return safeEnd;
    };
      
      // animation for sun along motion path and scaling
      gsap.to("#sun-svg", {
        motionPath: {
          path: "#sun-travel-path-svg",
          align: "#sun-travel-path-svg",
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 1 - calculateSafeEndpoint(),
        },
        keyframes: [
          { scale: 0.5, duration: 0, ease: "power2.out" },
          { scale: 1, duration: 0.5, ease: "power2.inOut" },
          { scale: sunScale, duration: 0.5, ease: "power2.in" },
        ],
        scrollTrigger: {
          trigger: "#aboutme",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

    // animation for sun color change
    gsap.to(".sun-svg-path", {
      fill: "var(--yellow)",
      scrollTrigger: {
        trigger: "#aboutme",
        start: "20% top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // animation for sun shadow color change
    gsap.fromTo(
      ".sun-flood",
      { attr: { "flood-color": "#E95757" } },
      {
        attr: { "flood-color": "#BAA433" },
        scrollTrigger: {
          trigger: "#aboutme",
          start: "20% top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    // animation for background color change
    gsap.to("#aboutme", {
      backgroundColor: "var(--blue)",
      scrollTrigger: {
        trigger: "#aboutme",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      onUpdate: function () {
        const currentColor = getComputedStyle(this.targets()[0]).backgroundColor;
        setNameColor(getContrastColor(currentColor));
      },
    });

    // animation for name reveal
    SplitText.create("#name", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        gsap.from(self.lines, {
          duration: 3,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "expo.out",
        });
      }
    });

    // animation for text color change
    // gsap.to("#name", {
    //   color: "var(--background)",
    //   scrollTrigger: {
    //     trigger: "#aboutme",
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: true,
    //   },
    // });

    return () => gsap.ticker.remove(update);
  }, []);

  
  return (
    <div id="aboutme" className="relative h-[300vh]">
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <div className="sticky top-0 h-screen w-screen overflow-hidden ">
        <svg className="absolute inset-0 overflow-visible" style={{ top: `${sunMargin}rem` }} preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            {/* filter for sun shadow */}
            <defs>
              <filter id="sun-shadow" x="-200" y="-200" width="3000" height="3000" filterUnits="userSpaceOnUse">
                {/* far, soft shadow layer */}
                <feGaussianBlur in="SourceAlpha" stdDeviation="60" result="blur1" />
                <feOffset in="blur1" dx="0" dy="10" result="off1" />
                <feFlood className="sun-flood" floodColor="#BAA433" floodOpacity="0.85" result="flood1" />
                <feComposite in="flood1" in2="off1" operator="in" result="shadow1" />

                {/* nearer, subtler shadow layer */}
                <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur2" />
                <feFlood className="sun-flood" floodColor="#BAA433" floodOpacity="0.45" result="flood2" />
                <feOffset in="blur1" dx="0" dy="0" result="off1" />
                <feComposite in="flood2" in2="off2" operator="in" result="shadow2" />

                <feMerge>
                  <feMergeNode in="shadow1" />
                  <feMergeNode in="shadow2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <path d="M0,0 L1440,0 L1440,900 L0,900 L0,0 Z" id="path-1"></path>
            </defs>
            {/* svg of the sun itself */}
            <g id="sun-svg" transform="translate(420, 90)" filter="url(#sun-shadow)" style={{ opacity: 0 }}>
                <path className="sun-svg-path" d="M271.665788,454.907737 C264.620691,454.209549 257.820289,453.032823 251.079053,451.542549 C240.275853,449.154353 229.813117,445.810175 219.692571,441.534194 C206.162454,435.817667 193.583999,428.621389 181.975547,419.930963 C175.704028,415.235992 169.77055,410.189912 164.232024,404.739826 C153.547448,394.225897 144.450946,382.611301 136.966746,369.878589 C129.565192,357.286609 124.041681,343.998438 120.30112,330.057034 C118.481381,323.27468 117.175031,316.39872 116.293341,309.447659 C115.255883,301.268657 114.807182,293.065397 115.07676,284.837058 C115.337323,276.883319 116.151871,268.976432 117.58427,261.124359 C119.87854,248.547619 123.682177,236.394407 128.946571,224.64082 C133.056608,215.46448 138.030543,206.721216 143.837972,198.395749 C149.92729,189.666198 156.809226,181.539428 164.512801,174.015282 C176.810666,162.003909 190.689212,151.944008 206.178572,143.837094 C220.654276,136.260716 235.95659,130.712123 252.099115,127.221108 C258.680901,125.797728 265.324121,124.713396 272.043166,124.02185 C277.915845,123.417406 283.796509,123.069487 289.704688,123.010633 C297.031436,122.937655 304.327945,123.23836 311.617841,123.974215 C325.795195,125.405274 339.559711,128.467781 352.941276,133.051862 C365.524161,137.362341 377.413099,143.001431 388.633795,149.879788 C400.290474,157.025389 410.926448,165.332056 420.488267,174.837516 C435.10774,189.370804 446.635687,205.822297 455.003397,224.230084 C460.653633,236.65991 464.568461,249.559687 466.874076,262.890152 C467.812468,268.315707 468.576708,273.773226 468.732227,279.276953 C468.890532,284.878942 469.092593,290.488227 468.953421,296.087223 C468.756892,303.991861 467.751825,311.837869 466.233202,319.617893 C464.219783,329.932851 461.211653,339.983382 457.163143,349.759607 C450.159536,366.671701 440.488782,382.09798 428.13591,396.040245 C414.772355,411.123201 399.08006,423.61999 381.045507,433.498449 C364.329386,442.654737 346.497372,449.072073 327.521265,452.665595 C320.059421,454.078637 312.553405,455.175743 304.947461,455.533073 C299.735579,455.777957 294.514755,456.030783 289.300003,456 C283.460932,455.959106 277.619283,455.670245 271.665788,454.907737 Z" fill="#FF6B6B" fillRule="nonzero"></path>
                <path className="sun-svg-path" d="M22.1451893,284.696277 C23.7187415,282.393467 26.0762631,281.193065 28.3704732,279.921265 C46.9119879,269.642844 65.4546268,259.366229 83.997716,249.090359 C86.4863816,247.711244 88.9710545,246.325378 91.4724439,244.967223 C95.7881824,242.623964 100.488394,244.89237 102.065695,247.99743 C102.770892,249.38571 103.064615,250.812418 102.780318,252.356136 C101.868006,257.309803 100.884395,262.254756 100.132393,267.230776 C99.5564965,271.041546 99.2263787,274.889408 98.8994714,278.729362 C98.3258639,285.467125 98.3694784,292.22157 98.6161892,298.968852 C98.8451682,305.231098 99.4249901,311.474464 100.478782,317.664683 C101.188878,321.835962 102.030284,325.987379 102.830685,330.144605 C103.413189,333.170043 102.507154,335.708737 99.8878781,337.516797 C97.2203161,339.358142 94.3122165,339.478057 91.4345777,337.915361 C87.0692174,335.544821 82.743277,333.109124 78.3998484,330.702296 C66.7864708,324.267087 55.1715242,317.834428 43.5596175,311.396863 C37.9486557,308.286171 32.4084497,305.054485 26.7184151,302.079859 C19.7550176,298.439501 18.1580048,290.354397 22.1451893,284.696277 Z" fill="#FF6B6B" fillRule="nonzero"></path>
                <path className="sun-svg-path" d="M434.10403,166.168505 C426.805246,158.669182 419.040105,151.82068 410.619153,145.686453 C406.465624,142.660855 402.149664,139.833743 397.827041,137.030472 C393.859142,134.45723 392.818827,130.055884 395.451863,126.361049 C396.564818,124.799272 398.178804,123.970334 400.004332,123.510886 C415.954656,119.496568 431.911478,115.506111 447.865833,111.50651 C455.789332,109.520174 463.718467,107.554294 471.631602,105.530653 C475.729972,104.482574 479.509074,104.932632 482.980467,107.368375 C486.70836,109.984109 489.033933,115.001044 487.543549,120.310169 C485.020582,129.297617 482.608796,138.313808 480.153698,147.318764 C476.350369,161.268749 472.513887,175.210548 468.764688,189.173928 C467.099821,195.374439 460.301534,196.201207 456.857535,193.641498 C456.032835,193.028573 455.292743,192.238418 454.717469,191.400996 C450.945606,185.910646 446.972071,180.561741 442.578619,175.514012 C439.846043,172.37448 436.987314,169.335991 434.10403,166.168505 Z" fill="#FF6B6B" fillRule="nonzero"></path>
                <path className="sun-svg-path" d="M129.944686,190.519233 C129.536381,191.108664 129.210036,191.612477 128.839461,192.084613 C127.102284,194.297954 124.740308,195.266245 121.909301,194.937352 C119.022813,194.602061 116.848824,193.148622 115.77563,190.503995 C115.209762,189.109538 114.861843,187.63088 114.463944,186.178149 C108.516745,164.465054 102.600826,142.744094 96.6150013,121.040744 C95.5532436,117.191041 95.7476804,113.602733 98.1387524,110.255729 C101.095568,106.116793 106.168286,104.14956 111.267111,105.346722 C117.979477,106.922724 124.658286,108.62994 131.346018,110.300813 C143.199039,113.262166 155.047486,116.240183 166.898693,119.208121 C172.606174,120.637464 178.316921,122.055003 184.023649,123.487072 C187.279827,124.304185 189.347336,126.283624 189.882758,129.458405 C190.405982,132.560796 189.166622,135.039638 186.391529,136.766846 C178.697263,141.555722 171.392129,146.838164 164.476311,152.606443 C159.047555,157.134416 153.915503,161.960334 149.045475,167.033826 C142.802047,173.538108 137.074713,180.437806 131.893145,187.747329 C131.262585,188.636851 130.635168,189.528421 129.944686,190.519233 Z" fill="#FF6B6B" fillRule="nonzero"></path>
                <path className="sun-svg-path" d="M283.627041,542.98726 C281.767403,540.124602 279.935677,537.378721 278.222777,534.565369 C271.361893,523.296789 264.537876,512.00729 257.700357,500.725455 C253.227204,493.344818 248.742121,485.970927 244.286687,478.580348 C242.20757,475.131608 242.676714,471.589966 245.486921,469.048415 C247.351253,467.362192 249.57624,466.735628 252.050418,467.230643 C258.403514,468.501938 264.794158,469.546585 271.240359,470.240501 C281.126957,471.30459 291.050028,471.600146 300.985815,471.215999 C307.861192,470.950187 314.714156,470.333483 321.514085,469.30285 C325.465929,468.703912 329.389054,467.926037 333.320842,467.206889 C335.950339,466.725887 338.380827,467.014216 340.448283,468.812306 C343.205434,471.21021 343.799359,474.98417 341.881557,478.203707 C339.940971,481.461531 337.949294,484.691009 335.983834,487.93502 C327.523977,501.898298 319.067676,515.863492 310.605256,529.825293 C308.297419,533.632988 306.038956,537.470586 303.640867,541.224823 C299.851104,547.157703 291.867855,548.775416 285.884759,544.878372 C285.097492,544.36563 284.431656,543.67906 283.627041,542.98726 Z" fill="#FF6B6B" fillRule="nonzero"></path>
                <path className="sun-svg-path" d="M438.826872,407.796985 C444.681697,401.245489 450.00667,394.462114 454.826714,387.310782 C456.48239,384.854266 458.97886,383.695111 462.04889,384.068738 C465.374289,384.473433 467.650324,386.231006 468.531201,389.377644 C470.506057,396.432075 472.423528,403.501193 474.358961,410.565704 C478.756342,426.616847 483.162126,442.665863 487.540475,458.721731 C489.396771,465.529006 485.484752,471.910207 478.410508,473.656362 C476.473839,474.134372 474.501826,474.103502 472.567835,473.627185 C465.821916,471.965607 459.083042,470.278042 452.343303,468.593745 C434.896027,464.233417 417.450028,459.868483 400.002793,455.50788 C394.83844,454.217174 392.494228,449.137862 395.023983,444.736034 C395.668812,443.614009 396.630637,442.807534 397.725276,442.129854 C404.008861,438.240056 410.032216,434.011279 415.77981,429.42809 C423.347737,423.393231 430.443898,416.890008 436.951543,409.808093 C437.545248,409.161953 438.149005,408.524356 438.826872,407.796985 Z" fill="#FF6B6B" fillRule="nonzero"></path>
                <path className="sun-svg-path" d="M485.673551,309.448791 C486.348904,302.793497 486.702589,296.266265 486.581477,289.731789 C486.400679,279.97946 485.601148,270.270028 483.762307,260.657619 C483.258598,258.024479 482.724901,255.396365 482.18176,252.770253 C481.566383,249.795253 482.512292,247.337843 485.039369,245.535527 C487.689628,243.645357 490.592095,243.527837 493.480023,245.03064 C496.202768,246.447512 498.852572,247.990464 501.534228,249.478268 C520.404443,259.947554 539.267492,270.428442 558.151086,280.876014 C561.723562,282.852548 564.136195,285.582554 564.798543,289.510257 C565.637215,294.483445 563.853959,298.508858 559.511733,301.364767 C557.057887,302.97865 554.390438,304.302583 551.806823,305.736987 C534.841639,315.155957 517.873473,324.570078 500.905141,333.983924 C498.466827,335.336677 496.046531,336.720842 493.575123,338.017171 C489.694316,340.052739 485.279895,338.836628 483.057048,335.199132 C481.995412,333.46182 482.011773,331.618649 482.421002,329.743615 C483.875052,323.081194 484.971564,316.367926 485.673551,309.448791 Z" fill="#FF6B6B" fillRule="nonzero"></path>
                <path className="sun-svg-path" d="M337.091636,92.8710426 C338.742554,95.6090039 340.384873,98.215144 341.915368,100.881133 C343.516865,103.670761 343.35318,106.447597 341.368983,109.00676 C339.455145,111.475152 336.780142,112.344707 333.71756,111.723608 C327.202583,110.402333 320.640376,109.379015 314.027445,108.69215 C310.218476,108.296526 306.386873,108.053439 302.558661,107.894817 C298.277903,107.717465 293.987163,107.585933 289.704793,107.658055 C277.386025,107.865531 265.19014,109.203579 253.127554,111.651276 C252.143154,111.851039 251.111525,112.059163 250.1245,111.984446 C244.273727,111.541557 241.174766,105.745087 244.143673,100.782858 C248.09301,94.1819405 252.107106,87.6171136 256.094745,81.0375439 C264.070085,67.87827 272.045838,54.7192156 280.023182,41.5610592 C280.820685,40.2455964 281.580259,38.905445 282.442314,37.6302439 C287.513236,30.1290785 298.61232,30.1063683 303.576359,37.6634213 C306.293342,41.7996565 308.752263,46.0941725 311.318481,50.3224438 C318.475627,62.1148573 325.62928,73.9092567 332.781197,85.7046438 C334.205842,88.0542658 335.61666,90.4117008 337.091636,92.8710426 Z" fill="#FF6B6B" fillRule="nonzero"></path>
                <path className="sun-svg-path" d="M118.165775,474.990964 C115.859358,475.563544 113.697528,476.143697 111.516362,476.646785 C105.685729,477.991627 99.9221136,475.416553 97.2762495,470.278553 C95.932953,467.669995 95.6543729,464.928645 96.4200827,462.110428 C99.0072091,452.588428 101.608086,443.069821 104.200767,433.549201 C107.841975,420.178198 111.481701,406.806879 115.118507,393.43481 C115.488521,392.074271 115.914959,390.749385 116.892304,389.64457 C120.207908,385.896334 126.189762,386.158566 129.043188,390.265109 C132.90466,395.822389 136.922546,401.266952 141.337198,406.433901 C150.584866,417.257477 160.863115,427.08525 172.464768,435.588216 C177.00861,438.918553 181.713064,442.056308 186.447467,445.136127 C190.326176,447.659259 190.706722,451.828314 189.128917,454.78449 C188.066453,456.775151 186.304464,457.924375 184.072264,458.481416 C176.527477,460.364369 168.986331,462.260692 161.443612,464.151177 C147.062986,467.7555 132.682246,471.359349 118.165775,474.990964 Z" fill="#FF6B6B" fillRule="nonzero"></path>
            </g>
            {/* svg of the travel path of the sun */}
            <g id="hero" stroke="none" fill="none" xmlnsXlink="#path-1" strokeWidth="1">
                <path id="sun-travel-path-svg" d="M55,900 C136.995801,736.169162 303.961234,569.2225 555.8963,399.160013 C807.831365,229.097526 1102.5326,96.0441888 1440,1.8189894e-12" stroke="#fff"></path>
            </g>
        </svg>
        {/* name */}
        <div className="absolute top-[30%] left-0 w-screen flex justify-center z-10">
          <p id="name" className="text-3xl" style={{ color: nameColor }}>Joanna Lau</p>
        </div>
        {/* mountains at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-5">
          <Mountains id="mountains-svg" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe

