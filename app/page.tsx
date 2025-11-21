'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import LoopingText from "./components/LoopingText";


export default function Home() {
  const [active, setActive] = useState(0);

  const profiles = [
    "/profiles/profile1.png",
    "/profiles/profile2.png",
  ];
   const phrases = [
    "Telling cheerful stories",
    "Exploring bioinformatics",
    "Sometimes wrangling data",
    "Occasionally building something",
  ];


 

  const handleProfileClick = () => {
    setActive((prev) => (prev + 1) % profiles.length);
  };


  return (
<div className="h-screen p-8 flex flex-col text-gray-800">
      <section className=" flex flex-col gap-8">

        <nav className="flex justify-between w-full" style={{ fontFamily: "var(--font-ppneue)", fontWeight: 800 }}>
          <div className="w-fit">
          {/* FIXED: Removed cursor-none class */}
          <div 
            className="relative w-18 h-18 rounded-lg overflow-hidden hover:border-2 hover:border-black  border border-gray-700 group"
            onClick={handleProfileClick}
            style={{
              cursor: 'url(/profiles/markqstn.png) 16 16, pointer'
            }}
          >
            <Image
  key={active}            // 👈 ini memaksa reload gambar baru
  src={profiles[active]}
  alt="Profile"
  fill
  className="object-cover transition-opacity duration-300 group-hover:opacity-70"
  unoptimized             // opsional, biar tidak caching
/>

          </div>
        </div>
            <div className="flex space-x-4">
          <ul><a href="">Work</a></ul>
          <ul><a href="">Collection</a></ul>
          <ul><a href="">@nd?</a></ul>
          </div>
          <ul><a href="">Contact</a></ul>
        </nav>

        <div className="flex justify-between gap-8">
        {/* kiri */}
        <div>
            <div className="-mb-5 mt-10 flex gap-4">
        <LoopingText phrases={phrases}/>
          <img src="\hero-sections\tandabutton.gif"  className="w-80 -ml-25 -mb-10 -mt-18" alt="" />
          </div>
          
        <div className="relative mt-1">
  <h1
    className="text-8xl relative"
    style={{
      fontFamily: "var(--font-ppneue)",
      fontWeight: 900,
    }}
  >
    <span className="text-blue-700 relative inline-block">
      <img
        src="/assets/logo.png"
        alt="logo at"
        className="absolute top-6 left-5 w-40 hover:animate-spin hover:scale-125 transition-transform duration-300"
      />
      [
    </span>
    At<span className="text-blue-700">]</span>ha Zayyan
  </h1>

  {/* ⬇️ Pindahkan ke sini dan posisikan ke kiri */}
  <div className="absolute -left-4 bottom-0 mt-4 text-sm bg-amber-800 text-white font-medium px-4 py-1 rounded-md">
    Somewhere in Indonesia
  </div>
</div>
        </div>
        {/* kanan */}
        <img src="/hero-sections/atha.gif" alt="Atha GIF" className="w-180 "/>
        </div>
      </section>
    </div>
  );
}