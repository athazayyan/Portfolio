"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [showColophon, setShowColophon] = useState(false);

  return (
    <footer 
      className="relative w-full bg-black text-white py-24 px-6 min-h-[500px] flex flex-col justify-between"
      style={{ zIndex: 10 }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <span className="font-bold">© 2026 Atha Zayyan</span>
              <button 
                onClick={() => setShowColophon(!showColophon)}
                className="underline decoration-gray-700 hover:text-white"
              >
                Colophon
              </button>
            </div>
            
            <AnimatePresence>
              {showColophon && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-xs text-gray-500 max-w-xs"
                >
                  Built with Next.js, Tailwind CSS, & Framer Motion.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <h3 className="text-[10px] font-black mb-6 text-gray-600 uppercase tracking-widest">
              Elsewhere
            </h3>
            <ul className="flex flex-col gap-3">
              {['GitHub', 'LinkedIn', 'Instagram'].map((name) => (
                <li key={name}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-all">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* TEKS RAKSASA - Pakai Atribut Locomotive untuk Paralaks */}
      <div 
        className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-10"
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="horizontal"
      >
        <h2 className="text-[18vw] font-black text-white/10 leading-[0.8] whitespace-nowrap">
          ATHA ZAYYAN — ATHA ZAYYAN
        </h2>
      </div>
    </footer>
  );
};

export default Footer;