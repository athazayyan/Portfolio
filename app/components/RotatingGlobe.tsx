// components/RotatingGlobe.tsx
'use client';

export default function RotatingGlobe() {
  return (
    <div className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
      {/* Background sphere */}
      <div className="absolute inset-0 rounded-full"></div>
      
      {/* Rotating grid lines with 3D effect */}
      <div className="globe-container absolute inset-0">
        {/* Meridian lines (vertical) - TAMBAH LEBIH BANYAK */}
        <div className="globe-line globe-line-1"></div>
        <div className="globe-line globe-line-2"></div>
        <div className="globe-line globe-line-3"></div>
        <div className="globe-line globe-line-4"></div>
        <div className="globe-line globe-line-5"></div>
        <div className="globe-line globe-line-6"></div>
        
        {/* Equator (horizontal) */}
        <div className="globe-equator"></div>
        
        {/* Parallel lines - TAMBAH LEBIH BANYAK */}
        <div className="globe-parallel globe-parallel-1"></div>
        <div className="globe-parallel globe-parallel-2"></div>
        <div className="globe-parallel globe-parallel-3"></div>
        <div className="globe-parallel globe-parallel-4"></div>
      </div>
      
      {/* Center highlight */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/10 via-transparent to-transparent"></div>
    </div>
  );
}