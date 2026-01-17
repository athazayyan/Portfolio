"use client";
import React from "react";

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
        className="relative z-10 flex flex-col items-center py-24 rounded-t-[3rem] overflow-hidden hidden sm:block"
        data-scroll-section
      >
        <div className="w-full">
          
          {/* MARQUEE GALLERY */}
          <div className="relative w-full overflow-hidden mb-24 opacity-90">
            <div className="flex group">
              <div className="flex items-center shrink-0 justify-around gap-8 min-w-max w-full animate-[marquee_50s_linear_infinite] backface-hidden">
                {[...images, ...images].map((img, idx) => (
                  <div key={idx} className="transition-transform duration-500 hover:scale-105 px-2">
                    <img 
                      width="220" 
                      height="220"
                      src={img.src}
                      alt={img.alt}
                      className={`rounded-xl aspect-square object-cover ${img.rotation} border border-gray-200 shadow-sm`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="mx-auto px-16 max-w-7xl">
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-4">
                 <div className="h-[2px] w-12 bg-[#0492c2]"></div>
                 <p className="font-mono text-[#0492c2] text-sm font-bold tracking-tighter uppercase">Subject Introduction // 01</p>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-light leading-tight text-black max-w-4xl tracking-tight">
                <span className="font-bold italic text-gray-900">Once Again!,</span> I am dedicated to integrating creativity and technical precision into every project.
              </h2>
              
              <div className="mt-10 pt-8 flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <p className="text-[10px] font-bold text-[#0492c2] uppercase leading-none mb-1">Kategori / Category</p>
                  <h2 className="text-2xl font-mono font-black text-gray-800 tracking-tighter uppercase">
                    Selected_Work / <span className="italic text-[#0492c2]">Highlight</span>
                  </h2>
                </div>
              </div>
            </div>

            {/* ASYMMETRIC PROJECT GRID */}
            <div className="flex flex-col md:flex-row gap-16 items-start mt-10">
              {/* Project Card 1 */}
              <div className="group cursor-pointer w-full md:w-[60%]">
                <div className="relative aspect-[16/10] bg-[#f2f1e8] passport-texture rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:shadow-[8px_8px_0px_0px_#0492c2]">
                   <div className="absolute top-4 left-4 font-mono text-[10px] font-bold text-[#0492c2] opacity-40">DOC_TYPE: WEB_ARCHIVE</div>
                   <div className="absolute inset-0 flex items-center justify-center text-black/5 font-black text-[10rem] group-hover:text-[#0492c2]/10 transition-colors duration-700 select-none">01</div>
                </div>
                <div className="mt-8 flex justify-between items-start px-2">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#0492c2] uppercase leading-none">Project_Name</p>
                    <h3 className="text-2xl font-black uppercase tracking-tighter italic">Large Scale Project</h3>
                    <p className="text-gray-500 text-xs font-mono mt-2 tracking-widest border-l-2 border-[#0492c2] pl-3">Lead Development / 2024</p>
                  </div>
                  <div className="h-12 w-12 border-2 border-black rounded-lg flex items-center justify-center group-hover:bg-[#0492c2] group-hover:text-white transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-xl font-bold">↗</span>
                  </div>
                </div>
              </div>

              {/* Project Card 2 (Teks di ATAS) */}
              <div className="group cursor-pointer w-full md:w-[35%] md:mt-24 flex flex-col">
                <div className="mb-8 flex justify-between items-start px-2">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-[#0492c2] uppercase leading-none">Project_Name</p>
                    <h3 className="text-xl font-black uppercase tracking-tighter italic">Mini Concept</h3>
                    <p className="text-gray-500 text-xs font-mono mt-2 tracking-widest border-l-2 border-[#0492c2] pl-3">UI Design / 2023</p>
                  </div>
                  <div className="h-10 w-10 border-2 border-black rounded-lg flex items-center justify-center group-hover:bg-[#0492c2] group-hover:text-white transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-lg font-bold">↗</span>
                  </div>
                </div>
                <div className="relative aspect-square bg-[#f2f1e8] passport-texture rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group-hover:shadow-[8px_8px_0px_0px_#0492c2]">
                   <div className="absolute top-4 left-4 font-mono text-[10px] font-bold text-[#0492c2] opacity-40">DOC_TYPE: UI_EXP</div>
                   <div className="absolute inset-0 flex items-center justify-center text-black/5 font-black text-8xl group-hover:text-[#0492c2]/10 transition-colors duration-700 select-none">02</div>
                </div>
              </div>
            </div>

            {/* --- PASSPORT STYLE FOOTER --- */}
            <footer className="mt-40 border-t-4 border-black pt-10 pb-20">
              <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                
                {/* Contact Stamps */}
                <div className="flex flex-wrap gap-6">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group relative">
                    <div className="border-2 border-dashed border-[#0492c2] px-6 py-3 rounded-full -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                      <p className="text-[10px] font-mono font-bold text-[#0492c2] leading-none text-center">LINKEDIN_STAMP</p>
                      <p className="text-lg font-black text-gray-800 tracking-tighter">@athazayyan</p>
                    </div>
                  </a>
                  <a href="mailto:hello@atha.com" className="group relative">
                    <div className="border-2 border-black px-6 py-3 rounded-sm rotate-2 group-hover:rotate-0 transition-transform duration-300 bg-white">
                      <p className="text-[10px] font-mono font-bold text-gray-400 leading-none mb-1">EMAIL_OFFICIAL</p>
                      <p className="text-lg font-black text-gray-800 tracking-tighter">hello@atha.com</p>
                    </div>
                  </a>
                </div>

                {/* Machine Readable Footer Info */}
                <div className="flex-1 md:text-right font-mono">
                  <p className="text-[10px] font-bold text-[#0492c2] uppercase">Exit Confirmation</p>
                  <p className="text-sm text-gray-400 mt-2 leading-tight">
                    PORTFOLIO_VER_2024.0.1<br />
                    LOCATION: BANDA ACEH, IDN<br />
                    {"<<<<<<<<<<<<<<<<<<<<<<<"}
                  </p>
                </div>

              </div>
              
              {/* Bottom Copyright Bar */}
              <div className="mt-20 flex justify-between items-center text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
                <span>Atha Zayyan — All Rights Reserved</span>
                <span className="hidden md:block">Scroll to Top ↥</span>
              </div>
            </footer>

          </div>
        </div>
      </section>
    </>
  );
};

export default HighlightSection;