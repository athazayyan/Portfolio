// components/LocationBadge.tsx
'use client';
import { useState } from 'react';
import RotatingGlobe from './RotatingGlobe';

export default function LocationBadge() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const popupWidth = 340;
    const popupHeight = 140;
    const offset = 20;

    // Calculate position dengan boundary check
    let x = e.clientX + offset;
    let y = e.clientY - popupHeight - offset;

    // Prevent overflow ke kanan
    if (x + popupWidth > window.innerWidth) {
      x = e.clientX - popupWidth - offset;
    }

    // Prevent overflow ke atas
    if (y < 0) {
      y = e.clientY + offset;
    }

    setMousePosition({ x, y });
  };

  return (
    <>
      {/* Main Badge */}
      <div 
        className="absolute -left-1.5 -bottom-0.5 flex items-center gap-3 bg-gray-800 text-white font-medium pl-4 pr-2 py-4 rounded-tr-2xl hover:shadow-lg transition-all"
        data-scroll
        data-scroll-speed="0"
        style={{
          fontFamily: "var(--font-testsohne)",
          fontWeight: 500,
          cursor: 'url(/profiles/markqstn.png) 16 16, pointer',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <span className="text-sm">
          I live <br />
          <span>Somewhere in Indonesia</span>
        </span>
        <span className='bg-white rounded-3xl p-2'>
          <RotatingGlobe />
        </span>
      </div>

      {/* Popup Card yang Follow Mouse */}
      {isHovered && (
        <div 
          className="fixed pointer-events-none z-1000"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transition: 'all 0.1s ease-out',
          }}
        >
          <div 
            className="bg-gray-900 rounded-2xl p-4 shadow-2xl border-2 border-gray-600 animate-scale-in"
            style={{ 
              width: '340px',
              fontFamily: "var(--font-testsohne)",
            }}
          >
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border-2 ">
                <img
                  src="/assets/mapaceh.png"
                  alt="Map of Aceh"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="flex flex-col gap-2 text-white">
                <h4 className="text-base font-bold">Born in Sabang</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Sabang is Indonesia's westernmost city, located on Weh Island in Aceh Province
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}   