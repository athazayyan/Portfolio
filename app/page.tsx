'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { Icon } from "@iconify/react";
import Passport from "./components/Passport";
import Boardingpass from "./components/Boardingpass";
import FloatingCursors from "./components/FloatingCursor";

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
          setTimeout(() => { locomotiveScroll.update(); }, 1000);
        }
      } catch (error) { console.error(error); }
    };
    initScroll();
    return () => { if (locomotiveScroll) locomotiveScroll.destroy(); };
  }, []);

  const handleProfileClick = () => {
    setActive((prev) => (prev + 1) % profiles.length);
  };

  return (
    <main ref={scrollRef} data-scroll-container className=" w-full ">
      <Navbar />
      
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
          className="absolute z-60 right-8 top-18 sm:right-20 sm:top-16 md:right-20 md:top-24"
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

      {/* SECTION 2: CONTENT (Stacking Effect) */}
      <section 
        className="min-h-screen relative z-10 flex flex-col items-center justify-center p-8 sm:p-20  rounded-t-4xl"
        data-scroll-section
      >
        <div className="w-full max-w-6xl text-black">
          <h2 className="text-6xl font-black italic mb-10 text-center uppercase">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">Project 01</div>
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">Project 02</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="h-[40vh] bg-black flex items-center justify-center" data-scroll-section>
        <h2 className="text-white text-4xl font-bold opacity-30">ATHA ZAYYAN</h2>
      </section>
    </main>
  );
}