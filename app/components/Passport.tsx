import React from 'react';
import { Icon } from '@iconify/react';

const Passport = () => {
  return (
    <div className="absolute bg-[#b9cedf] sm:right-30 w-100 h-150 md:w-145 md:h-150 z-30 rounded-b-lg shadow-2xl m-auto flex flex-col overflow-hidden font-sans border border-white/20">
      
      {/* BAGIAN ATAS (BIO PANEL) */}
      <div className="h-[42%] p-6 relative flex flex-col border-b border-blue-400/30">
        {/* Nomor Passport Vertikal */}
        <div className="absolute left-2 top-12 -rotate-90 origin-left text-[10px] font-bold text-orange-500 tracking-widest opacity-80 uppercase">
          No 12412121231
        </div>

        <div className="ml-8 mt-2">
          <h2 className="text-xl font-black text-gray-800 leading-none">Hi There</h2>
          <p className="text-[11px] text-gray-600 mt-2 font-medium">In .....</p>
          <p className="text-[11px] text-gray-800 font-bold leading-relaxed mt-1">
            I Basically put love bla bla bla blaa
          </p>
        </div>

        {/* Link Keahlian Horizontal */}
        <div className="mt-auto flex justify-around text-[10px] font-black text-blue-600 uppercase tracking-tighter italic">
          <span className="underline decoration-2 underline-offset-4 cursor-pointer hover:text-blue-800">Craftsman</span>
          <span className="underline decoration-2 underline-offset-4 cursor-pointer hover:text-blue-800">Data Vis+Mining</span>
          <span className="underline decoration-2 underline-offset-4 cursor-pointer hover:text-blue-800">Bioinformatic</span>
        </div>
      </div>

      {/* BAGIAN BAWAH (IDENTITY PANEL) */}
      <div className="h-[58%] bg-[#c9d9e7] p-5 flex flex-col relative">
        
        {/* Header Negara */}
        <div className="text-center mb-6">
          <h3 className="text-sm font-black text-blue-500 uppercase leading-none tracking-tight">Republik Somewhere</h3>
          <p className="text-[9px] font-bold text-blue-400/80 italic leading-none mt-1">Republic of Somewhere</p>
        </div>

        <div className="grid grid-cols-12 gap-3">
          {/* KOLOM KIRI: FOTO */}
          <div className="col-span-4 flex flex-col items-center">
            <div className="text-[9px] font-black text-blue-500 text-center leading-none mb-2 uppercase italic">
              Paspor<br/><span className="text-[7px] lowercase">Passport</span>
            </div>
            
            <div className="w-full aspect-[3/4] bg-[#fdf2e9] border-2 border-blue-200 rounded shadow-md overflow-hidden p-1">
              <div className="w-full h-full bg-[#e5e7eb] rounded-sm overflow-hidden relative">
                 <img 
                  src="/profiles/profile1.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="text-[10px] font-black text-gray-800 mt-2 italic tracking-tighter text-center uppercase">
              Hmm 1234123
            </div>
          </div>

          {/* KOLOM KANAN: DATA */}
          <div className="col-span-8 flex flex-col gap-3 pl-1">
            <div>
              <p className="text-[8px] font-bold text-blue-400 uppercase leading-none">Nama Lengkap/Full Name</p>
              <p className="text-[13px] font-black text-gray-800 uppercase leading-none mt-1">Atha Zayyan</p>
            </div>

            <div>
              <p className="text-[8px] font-bold text-blue-400 uppercase leading-none">Kewarganegaraan/Nationality</p>
              <p className="text-[13px] font-black text-gray-800 uppercase leading-none mt-1">Indonesia</p>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex-1">
                <p className="text-[8px] font-bold text-blue-400 uppercase leading-none">Jumlah Proyek/Project Count</p>
                <p className="text-[11px] font-black text-gray-800 leading-none mt-1 uppercase">7.. Still Counting Lah</p>
              </div>
              <div className="text-right">
                <p className="text-[8px] font-bold text-gray-400 leading-none">There is No Here</p>
                <p className="text-[11px] font-black text-orange-500 italic mt-1 leading-none">13132</p>
              </div>
            </div>

            <div className="flex justify-between items-end pt-1 border-t border-blue-300/40">
              <div className="flex-1">
                <p className="text-[8px] font-bold text-blue-400 leading-none uppercase">Reg No.</p>
                <p className="text-[11px] font-mono font-black text-gray-600 uppercase mt-1 leading-none tracking-tighter">hmm123123</p>
              </div>
              <div className="text-right">
                <p className="text-[8px] font-bold text-blue-400 leading-none uppercase tracking-tighter">Availability</p>
                <p className="text-[11px] font-black text-gray-800 italic mt-1 leading-none tracking-tighter">True.. Always Active</p>
              </div>
            </div>

            <div className="text-right mt-1">
              <p className="text-[8px] font-bold text-blue-400 leading-none uppercase">Tgl Berlaku/Date of Expiry</p>
              <p className="text-[12px] font-black text-gray-900 mt-1 leading-none uppercase">32 Jan 2030</p>
            </div>
          </div>
        </div>

        {/* MACHINE READABLE ZONE (MRZ) */}
        <div className="mt-auto bg-[#dbe6ef] px-2 py-1.5 rounded font-mono text-[11px] font-black text-gray-500 tracking-wider border border-black/5">
          {`>>ATHA>>ZAYYAN>>1212131`}
        </div>
      </div>
    </div>
  );
};

export default Passport;