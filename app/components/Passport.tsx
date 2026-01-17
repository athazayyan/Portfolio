"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type BioKey = "default" | "craftsman" | "bioinformatic" | "data";

const Passport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<BioKey>("default");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const bioContent: Record<BioKey, { title: string; label: string; description: string }> = {
    default: {
      title: "Greetings",
      label: "Multidisciplinary Profile",
      description: "I am dedicated to integrating creativity and technical precision into every project. Feel free to explore my diverse portfolio of work.",
    },
    craftsman: {
      title: "Digital Craftsman",
      label: "Web Design & Development",
      description: "I specialize in developing unique, high-quality digital interfaces. Currently accepting freelance commissions for bespoke web design and development.",
    },
    bioinformatic: {
      title: "Bioinformatician",
      label: "Computational Biology",
      description: "Currently advancing my research in bioinformatics, with a focus on academic assignments involving genomic data analysis and visualization.",
    },
    data: {
      title: "Data Specialist",
      label: "Analytics & Mining",
      description: "Proficient in Tableau, Power BI, and D3.js. I have a keen interest in data mining, frequently exploring Machine Learning and Deep Learning frameworks.",
    },
  };

  return (
    <>
      <style>{`
        .passport-bg {
          background-color: #f2f1e8;
          background-image:
            linear-gradient(#ffffffa6, #ffffffa6),
            url("https://cdn.prod.website-files.com/64a24a477b774d01d169b819/64a25c6b93ad13ce30aa73d1_background-texture.jpg");
          background-size: auto, 45vw;
          background-repeat: repeat;
          background-position: center;
        }
      `}</style>
      
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => isMobile && setIsOpen(!isOpen)}
        className={`
          absolute top-0 left-1/2 md:-right-25 -translate-x-1/2 md:-translate-x-6 
          w-[95vw] max-w-[380px] sm:max-w-[520px] md:max-w-[640px] 
          rounded-b-xl shadow-[4px_2px_0px_rgba(0,0,0,0.1)] 
          flex flex-col overflow-hidden border-b-4 border-black border-l-2 border-r-2 
          z-50 
          ${isMobile ? "cursor-pointer pointer-events-auto" : "cursor-default pointer-events-none"}
          ${isMobile && !isOpen ? "h-[120px]" : "min-h-[580px]"}
        `}
      >
        <AnimatePresence mode="wait">
          {isMobile && !isOpen ? (
            <motion.div
              key="cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 bg-[#4a1d1d] flex flex-col items-center justify-center p-4 z-50"
              style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')" }}
            >
              <div className="border border-[#d4af37] w-full h-full flex flex-col items-center justify-center rounded-sm">
                <span className="text-[#d4af37] text-[10px] font-bold tracking-[0.3em] uppercase mb-1">Republik of Somewhere</span>
                <div className="w-8 h-8 border-2 border-[#d4af37] rounded-full flex items-center justify-center mb-1">
                  <div className="w-4 h-4 bg-[#d4af37] rotate-45" />
                </div>
                <span className="text-[#d4af37] text-lg font-black tracking-[0.4em]">PASPOR</span>
                <motion.span 
                  animate={{ opacity: [0.4, 1, 0.4] }} 
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-[#d4af37] text-[8px] mt-1"
                >
                  TAP TO OPEN
                </motion.span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col w-full h-full passport-bg"
            >
              {isMobile && (
                <div className="absolute top-2 right-4 text-[10px] font-bold text-gray-400 z-10">
                  TAP ANYWHERE
                </div>
              )}

              <div className="min-h-60 p-4 sm:p-6 relative flex flex-col border-b-4 border-black shrink-0 transition-all duration-300">
                <div className="absolute left-2 top-32 sm:top-28 sm:left-4 -rotate-90 origin-left text-xs sm:text-sm font-bold text-orange-700 tracking-wider">
                  No 12412121231
                </div>

                <div className="ml-6 sm:ml-8 mt-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-none" style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.8)" }}>
                    {bioContent[activeTab].title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-700 mt-3 font-medium">
                    {bioContent[activeTab].label}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-800 leading-snug mt-3 min-h-[60px] sm:min-h-[50px]">
                    {bioContent[activeTab].description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap justify-around gap-2 text-xs sm:text-sm font-bold pb-2 pointer-events-auto">
                  {(["craftsman", "data", "bioinformatic"] as const).map((key) => (
                    <span
                      key={key}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab(key);
                      }}
                      className={`relative cursor-pointer hover:scale-105 transition-transform ${activeTab === key ? "text-gray-600" : "text-gray-800"}`}
                    >
                      <span className="relative z-10 capitalize">{key === "data" ? "Data Vis+Mining" : key}</span>
                      {activeTab === key && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0492c2]" />}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 p-4 sm:p-5 flex flex-col relative">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-[#0492c2] leading-none tracking-tight">Republik Somewhere</h3>
                  <p className="text-[10px] sm:text-xs font-medium text-[#0492c2] leading-none mt-1">Republic of Somewhere</p>
                </div>

                <div className="grid grid-cols-12 gap-2 sm:gap-3 mb-4">
                  <div className="col-span-5 sm:col-span-4 flex flex-col items-center">
                    <div className="text-[10px] sm:text-xs font-bold text-[#0492c2] text-center leading-tight mb-2">
                      Paspor<br /><span className="text-[8px] sm:text-[9px]">Passport</span>
                    </div>
                    <div className="w-full aspect-[3/4] bg-white border border-black rounded-lg overflow-hidden">
<div className="w-full h-full bg-gray-200 relative"> 
  <Image 
    src="/hero/passport.jpeg"  // 1. Tambahkan kutip "" dan slash "/" di depan
    alt="Passport Photo"       // 2. Wajib ada alt
    fill                       // 3. Gunakan fill agar menyesuaikan div parent
    className="object-cover"   // 4. Agar foto tidak gepeng/terdistorsi
  />
</div>                    </div>
                    <div className="text-[10px] sm:text-xs font-bold text-gray-800 mt-2 tracking-tight text-center">Hmm 1234123</div>
                  </div>

                  <div className="col-span-7 sm:col-span-8 flex flex-col gap-2 sm:gap-3 pl-1">
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold text-[#0492c2] leading-none">Nama Lengkap / Full Name</p>
                      <p className="text-sm sm:text-base font-bold text-gray-900 leading-none mt-1">Atha Zayyan</p>
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold text-[#0492c2] leading-none">Kewarganegaraan / Nationality</p>
                      <p className="text-sm sm:text-base font-bold text-gray-900 leading-none mt-1">Indonesia</p>
                    </div>
                    <div className="flex justify-between items-end pt-2">
                      <div className="flex-1 pr-2">
                        <p className="text-[8px] sm:text-[9px] font-bold text-[#0492c2] leading-none">Jmlh Prjct/Number of Projects</p>
                        <p className="text-[10px] sm:text-xs font-bold text-gray-800 leading-tight mt-1">7.. Still Counting</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] sm:text-[9px] font-bold text-[#0492c2] leading-none">IDK Wht No</p>
                        <p className="text-[10px] sm:text-xs font-bold text-gray-700 mt-1 leading-none">13132</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex-1">
                        <p className="text-[8px] sm:text-[9px] font-bold text-[#0492c2] leading-none">Reg No.</p>
                        <p className="text-[10px] sm:text-xs font-bold text-gray-700 mt-1 leading-none">hmm123123</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] sm:text-[9px] font-bold text-[#0492c2] leading-none">Status</p>
                        <p className="text-[10px] sm:text-xs font-bold text-gray-800 mt-1 leading-none">Active</p>
                      </div>
                    </div>
                    <div className="text-right mt-1">
                      <p className="text-[8px] sm:text-[9px] font-bold text-[#0492c2] leading-none">Tgl Berlaku / Date of Expiry</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-900 mt-1 leading-none">32 Jan 2030</p>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-auto bg-white px-4 sm:px-3 py-2 border-t border-black text-[9px] sm:text-[11px] font-bold text-gray-600 tracking-wider leading-tight overflow-x-auto -mx-5 -mb-4"
                  style={{ fontFamily: "monospace" }}
                >
                  <p className="whitespace-nowrap">{"P<IDN<ATHA<<ZAYYAN<<<<<<<<<<<<<<<<<<<<<<<<<<713121"}</p>
                  <p className="whitespace-nowrap">{"12412121231<6IDN9501014M3001321<<<<<<<07"}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Passport;