'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Passport from "./components/Passport";
import Boardingpass from "./components/Boardingpass";
import FloatingCursors from "./components/FloatingCursor";
import HighlightSection from "./components/HighlightSection";

export default function Home() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const profiles = [
    "/profiles/profile3.png",
    "/profiles/profile4.png",
    "/profiles/profile5.jpeg",
    "/profiles/profile6.jpeg",
    "/profiles/profile7.jpeg",
    "/profiles/profile8.jpeg",
    "/profiles/profile9.jpeg",
    "/profiles/profile11.gif",
    "/profiles/profile10.jpeg",


  ];

  useEffect(() => {
    let locomotiveScroll: any;
    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        if (scrollRef.current) {
          locomotiveScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.07, // Sedikit lebih responsif
            multiplier: 1,
          });
          setTimeout(() => { locomotiveScroll?.update(); }, 1000);
        }
      } catch (error) { console.error(error); }
    };
    initScroll();
    return () => { if (locomotiveScroll) locomotiveScroll?.destroy(); };
  }, []);

  const handleProfileClick = () => {
    setActive((prev) => (prev + 1) % profiles.length);
  };

  return (
    <>        

    <main ref={scrollRef} data-scroll-container className=" w-full ">
      
      {/* SECTION 1: HERO (KEMBALI KE LAYOUT SEMULA) */}
      <section 
        className="relative w-screen h-screen overflow-hidden z-0"
        data-scroll-section
      >
        {/* Layer 0: Background Animasi Kursor */}
        <FloatingCursors />

        {/* Layer 1: Frame Border (Desain Awal) */}
      

        {/* Layer 2: Paspor & Boardingpass (Z-index 20) */}
       <div 
  className="relative z-50 flex items-center justify-center h-full pointer-events-none"
  data-scroll
  data-scroll-speed="-1"
>
  <div className="pointer-events-auto">
    <Passport />
  </div>
</div>

          <Boardingpass />

        {/* Layer 3: Clickable Profil (Z-index 30) */}
        <div 
          className="absolute z-60 right-8 top-8 sm:right-15 sm:top-10 md:right-15 md:top-20"
          data-scroll
          data-scroll-speed="1.5"
        >
          <div className="relative w-12 h-12 sm:w-24 sm:h-24 flex items-center justify-center">
            <img 
              src="/hero/materai.png" 
              alt="Materai" 
              className="absolute w-full h-full object-contain pointer-events-none" 
            />
            <div 
              onClick={handleProfileClick}
              className="relative w-[80%] h-[80%] overflow-hidden border border-[#f47f2b] group cursor-pointer shadow-md bg-black"
              style={{ cursor: 'url(/profiles/markqstn.png) 16 16, pointer' }}
            >
              <Image 
                key={active} 
                src={profiles[active]} 
                alt="Profile" 
                fill 
                className="object-cover duration-300 opacity-75 group-hover:opacity-100" 
                unoptimized 
              />
            </div>
          </div>
        </div>
      </section>

      <HighlightSection></HighlightSection>

    </main>
    </>
  );
}