"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/projects';

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#f2f1e8] pt-15 pb-20 px-6 sm:px-10">
      <header className="max-w-7xl mx-auto mb-5 px-5">
        <motion.h1 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-lg font-black uppercase tracking-tighter"
        >
          Selected  <span className="text-[#0492c2]">Works</span>
        </motion.h1>
        <p >
          Portfolio Archive 2023 — 2026
        </p>
      </header>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link href={`/work/${project.slug}`} className="group block">
              <div 
                className="relative border-2 rounded-lg  overflow-hidden transition-all duration-300  "
                style={{ backgroundColor: project.color }}
              >
                {/* Image Placeholder / Thumbnail */}
                <div className="h-64 sm:h-80 border-b-4 border-black bg-white flex items-center justify-center overflow-hidden">
                   <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                   />
                </div>

                {/* Content */}
                <div className="p-6 bg-white border-t-2 border-black">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-black uppercase px-2 py-1 border-2 border-black bg-white">
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-black uppercase mt-2 leading-none">
                        {project.title}
                      </h3>
                    </div>
                    <span className="font-black text-xl italic">/{project.year}</span>
                  </div>
                  <p className="font-medium text-sm leading-relaxed mb-6">
                    {project.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 font-black uppercase text-xs group-hover:underline">
                    View Project Details 
                    <span className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center bg-black text-white">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}