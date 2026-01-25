"use client";
import React from "react";
import Image from "next/image";

const HighlightSection: React.FC = () => {
  const images = [
    { src: "/profiles/profile3.png", alt: "Profile 1", rotation: "-rotate-2" },
    { src: "/profiles/profile4.png", alt: "Profile 2", rotation: "rotate-2" },
    { src: "/profiles/profile5.jpeg", alt: "Profile 3", rotation: "-rotate-2" },
    { src: "/profiles/profile6.jpeg", alt: "Profile 4", rotation: "rotate-2" },
    { src: "/profiles/profile7.jpeg", alt: "Profile 5", rotation: "-rotate-2" },
    { src: "/profiles/profile8.jpeg", alt: "Profile 6", rotation: "rotate-2" },
    { src: "/profiles/profile9.jpeg", alt: "Profile 7", rotation: "-rotate-2" },
    { src: "/profiles/profile10.jpeg", alt: "Profile 8", rotation: "rotate-2" },
    { src: "/profiles/profile11.gif", alt: "Profile 9", rotation: "-rotate-2" },
  ];

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .passport-texture {
          background-image: url("https://www.transparenttextures.com/patterns/paper-fibers.png");
        }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>

      <section 
        className="relative z-10 flex flex-col items-center py-24 rounded-t-[3rem] overflow-hidden hidden sm:block "
        data-scroll-section
      >
        {/* CONTENT SECTION */}
        <div className="mx-auto px-10 w-full ">
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
               <div className="h-[2px] w-12 bg-green-500"></div>
               <p className="font-mono text-green-500 text-sm font-bold tracking-tighter uppercase">Subject Introduction // 01</p>
            </div>

            <h2 className=" font-semibold tracking-tighter ">Hi, I'm Atha</h2>
            
            <h2 className=" font-semibold leading-tight text-black max-w-4xl">
              <span className="font-light text-gray-900">Once Again!,</span> I am dedicated to integrating creativity and technical precision into every project. <span className="font-light text-sm text-gray-500">Plz Hire me :) 5555 </span>
            </h2>
            
            <div className="mt-8 justify-between flex gap-6">
              <div>
                <p className="text-[10px] font-bold text-orange-700 uppercase leading-none mb-1">Kategori / Category</p>
                <h2 className="text-2xl font-mono font-semibold text-gray-800 tracking-tighter ">
                  Selected_Work / <span className="text-[#f1c40f]">Highlight</span> 
                </h2>
              </div>
              <a href="/work"><span className="bg-white text-sm p-2 border-2 right-0">all work here -&gt;</span></a>
            </div>
          </div>

          {/* ASYMMETRIC PROJECT GRID */}
          <div className="flex flex-col md:flex-row gap-16 items-start">
            
            {/* Project Card 1 */}
            <div className="group cursor-pointer w-full md:w-[60%]">
              <div className="relative aspect-[16/10] bg-white rounded-2xl overflow-hidden border-2 border-black transition-all duration-300 flex flex-col">
                
                {/* Header Area */}
                <div className="h-10 w-full bg-[#0492c2] flex items-center px-4 gap-2 shrink-0 border-b border-black/10 z-20">
                  <div className="flex gap-1.5 h-full items-center mr-4">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  </div>
                  <div className="font-mono text-[9px] font-bold text-white/80 uppercase tracking-widest">
                    Archive_Secure_Access
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative flex-1 bg-[#f2f1e8] passport-texture overflow-hidden">
                  <div className="absolute top-10 -right-5 w-[90%] h-[95%] rounded-2xl overflow-hidden border-2 border-black/10 shadow-md bg-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <Image 
                      src="/project/kupvaBI.png" 
                      alt="kupva BI" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-101"
                    />
                    <div className="absolute top-4 left-4 z-30">
                       <span className="bg-[#0492c2] text-white text-[8px] font-bold px-2 py-1 rounded-sm uppercase tracking-tighter shadow-sm">
                          For Indonesia Bank Internal Use
                       </span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-6 font-mono text-[10px] text-black/10 font-bold rotate-180 [writing-mode:vertical-lr]">
                    IDN_KPV_0024
                  </div>
                </div>
              </div>

              {/* Info Section 1 */}
              <div className="mt-8 flex justify-between items-start px-2">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-[#0492c2] uppercase leading-none">Project_Name</p>
                  <h3 className="text-2xl font-semibold tracking-tighter">Kupva BI Platform</h3>
                  <p className="text-gray-500 text-xs font-mono mt-2 tracking-widest border-l-2 border-[#f1c40f] pl-2">Intern / 2024</p>
                </div>
                <div className="h-12 w-12 border-2 border-black rounded-lg flex items-center justify-center group-hover:bg-[#0492c2] group-hover:text-white transition-all duration-300">
                  <span className="text-xl font-bold">↗</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group cursor-pointer w-full md:w-[35%] md:mt-24 flex flex-col">
              {/* Bagian Teks di Atas */}
              <div className="mb-8 flex justify-between items-start px-2">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-[#0492c2] uppercase leading-none">Sabang_Karsa</p>
                  <h3 className="text-xl font-semibold  tracking-tighter ">Sabang Tourism</h3>
                  <p className="text-gray-500 text-xs font-mono mt-2 tracking-widest border-l-2 border-[#f1c40f] pl-3">Fullstack / 2025</p>
                </div>
                <div className="h-10 w-10 border-2 border-black rounded-lg flex items-center justify-center group-hover:bg-[#0492c2] group-hover:text-white transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-lg font-bold">↗</span>
                </div>
              </div>

              {/* Bagian Visual */}
              <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border-2 border-black transition-all duration-300 flex flex-col ">
                
                {/* Header Area (Black Style) */}
                <div className="h-8 w-full bg-green-600 flex items-center px-3 gap-2 shrink-0 z-20">
                  <div className="flex gap-1 h-full items-center mr-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                  </div>
                  <div className="font-mono text-[8px] font-bold text-amber-200 uppercase tracking-widest">
                    Live_Preview_02
                  </div>
                </div>

                {/* Area Pembungkus */}
                <div className="relative flex-1 bg-[#f2f1e8] passport-texture overflow-hidden">
                  <div className="absolute top-20 left-30 w-[85%] h-[85%] rounded-xl overflow-hidden border-2  border-black/5 shadow-sm bg-white transition-transform duration-500 group-hover:scale-101">
                    <Image 
                      src="/project/sabangKarsa.png" 
                      alt="Sabang Tourism" 
                      fill 
                      className="object-cover object-top-left "
                    />
                    <div className="absolute top-3 left-3 z-30">
                       <span className="bg-green-600 text-white text-[7px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-tighter">
                          Published
                       </span>
                    </div>
                  </div>
                  <div className="absolute top-10 right-4 font-mono text-[8px] text-black/20 font-bold -rotate-90">
                    SBG_TRSM_25
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* MARQUEE GALLERY */}
        <div className="relative w-full overflow-hidden mb-10 mt-24 opacity-90 py-2">
          <div className="flex group">
            <div className="flex items-center shrink-0 justify-around gap-8 min-w-max w-full animate-[marquee_50s_linear_infinite] backface-hidden">
              {[...images, ...images].map((img, idx) => (
                <div key={idx} className="transition-transform duration-500 hover:scale-105 px-2">
                  <Image 
                    width={220} 
                    height={220}
                    src={img.src}
                    alt={img.alt}
                    className={`rounded-xl aspect-square object-cover ${img.rotation} border border-gray-200 shadow-sm`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        {/* FOOTER */}
<footer className="mt-5 border-t-2 mx-10 border-black pt-10 px-10">
  {/* Baris Utama: Sosmed, Testimoni, dan Info */}
  <div className="flex flex-col md:flex-row justify-between items-start gap-12 max-w-7xl mx-auto w-full">
    
    {/* Grup Kiri: Sosmed & Tombol Testimoni */}
    <div className="flex flex-col gap-6"> 
      {/* Contact Icons */}
      <div className="flex flex-wrap gap-8 items-center">
        <a href="https://www.linkedin.com/in/achmad-atha-zayyan-1538a0244/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#0492c2] transition-colors">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="mailto:atha.al.khand@gmail.com" className="text-2xl hover:text-[#0492c2] transition-colors">
          <i className="fa fa-envelope"></i>
        </a>
        <a href="https://github.com/athazayyan" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-600 transition-colors">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://www.instagram.com/athazayyan_/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500 transition-colors">
          <i className="fa fa-instagram"></i>
        </a>
      </div>

      {/* Tombol Testimoni (Sekarang di bawah Sosmed) */}
      <a href="/testimoni" className="w-fit">
        <div className="bg-yellow-400 border-2 border-black p-2 px-4 rounded-xl font-mono text-xs font-bold  hover:translate-x-0.5 transition-all">
          Leave Testimoni Note 
        </div>
      </a>
    </div>

    {/* Grup Kanan: Machine Readable Footer Info */}
    <div className="flex-1 md:text-right font-mono">
      <p className="text-[10px] font-bold text-[#0492c2] uppercase tracking-widest">Exit Confirmation</p>
      <p className="text-sm text-gray-400 mt-2 leading-tight uppercase">
        PORTFOLIO_VER_2026.0.1<br />
        LOCATION: BANDA ACEH, IDN<br />
        <span className="text-[10px] opacity-50 block mt-2 lowercase italic">
          *herosection testimoni can be written by clicking the button
        </span>
        <span className="block mt-1">{"<<<<<<<<<<<<<<<<<<<<<<<"}</span>
      </p>
    </div>

  </div>
</footer>
      </section>
    </>
  );
};

export default HighlightSection;