'use client'
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  { name: "Rizky", role: "Startup Founder", quote: "Design-nya unik, beda dari portfolio biasa." },
  { name: "Alya", role: "Product Manager", quote: "Interaksinya halus, kerasa premium." },
  { name: "Daniel", role: "Creative Director", quote: "Visual storytelling-nya kuat banget." },
  { name: "Nadia", role: "UI Researcher", quote: "Struktur visualnya rapi dan mudah dipahami." },
  { name: "Fahmi", role: "Tech Lead", quote: "Animasi halus, tidak mengganggu fokus konten." },         
];

const colors = ["#d4af37", "#0492c2", "#34D399",  "#F87171"];

const FloatingCursors = () => {
  const [elements, setElements] = useState<any[]>([]);
  // State untuk menangani klik di mobile (toggle visibility)
  const [clickedId, setClickedId] = useState<number | null>(null);

  useEffect(() => {
    const total = 60;
    const cols = 10;
    const rows = 6;

    const newElements = Array.from({ length: total }).map((_, i) => {
      const hasText = Math.random() > 0.6;
      const testimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
      const col = i % cols;
      const row = Math.floor(i / cols);
      const cellW = 100 / cols;
      const cellH = 100 / rows;
      const jitterX = Math.random() * (cellW * 0.5);
      const jitterY = Math.random() * (cellH * 0.5);
      const startX = col * cellW + jitterX;
      const startY = row * cellH + jitterY;

      return {
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        showText: hasText,
        ...testimonial,
        startX,
        startY: startY + 40,
        endX: startX + (Math.random() * 20 - 10),
        endY: startY - 30,
        duration: 18 + Math.random() * 12,
        delay: i * 0.4,
      };
    });

    setElements(newElements);
  }, []);

  return (
    <div className="absolute inset-0 z-5 overflow-visible pointer-events-none">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute flex items-start gap-2 group cursor-pointer pointer-events-auto"
          // Toggle klik untuk mobile/desktop
          onClick={() => setClickedId(clickedId === el.id ? null : el.id)}
          initial={{ left: `${el.startX}%`, top: `${el.startY}%`, opacity: 0 }}
          animate={{
            left: `${el.endX}%`,
            top: `${el.endY}%`,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear",
          }}
        >
          {/* Cursor - Membesar saat Hover di Laptop */}
          <div 
            style={{ color: el.color }} 
            className="transition-transform duration-200 group-hover:scale-125 active:scale-90"
          >
            <Icon icon="ph:cursor-fill" className="w-4 h-4 sm:w-5 sm:h-5 drop-shadow-md" />
          </div>

          {el.showText && (
            <div className="relative">
              {/* Mini preview */}
              <div className="bg-[#f2f1e8] border border-black px-2 py-[2px] text-[8px] font-bold
                shadow-[1px_1px_0px_rgba(0,0,0,0.25)] rounded-sm whitespace-nowrap">
                “{el.quote.slice(0, 14)}…”
              </div>

              {/* Hover/Click Card */}
              {/* Menggunakan group-hover untuk Laptop & state clickedId untuk HP */}
              <div className={`
                absolute left-1/2 top-full mt-3 -translate-x-1/2
                w-56 bg-white border-2 border-black rounded-sm
                p-3 text-[10px]
                shadow-[4px_4px_0px_rgba(0,0,0,0.25)]
                transition-all duration-200 z-[9999]
                pointer-events-none
                ${clickedId === el.id 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                }
              `}>
                <p className="font-black text-[11px]">{el.name}</p>
                <p className="italic text-gray-600 mb-1">{el.role}</p>
                <p className="leading-tight">"{el.quote}"</p>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCursors;