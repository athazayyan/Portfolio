import React, { useState } from 'react';

const Passport = () => {
  // Database konten untuk perubahan teks
  const bioContent: Record<string, { title: string; label: string; description: string }> = {
    default: {
      title: "Hi There",
      label: "In General",
      description: "I Basically put love and passion into my works. Feel free to explore my portfolio."
    },
    craftsman: {
      title: "Craftsman",
      label: "Web Design & Dev",
      description: "Saya biasanya buat unik-unik, at least mencoba. Saya buka freelance web design and dev."
    },
    bioinformatic: {
      title: "Bioinformatic",
      label: "Research & Study",
      description: "Saya sedang belajar bioinformatika, ada beberapa school assignment yang bisa saya kasih nampak."
    },
    data: {
      title: "Data Vis+Mining",
      label: "Analyst Role",
      description: "Saya suka Tableau + Power BI + D3.js. Terkadang saya mengulik ML dan DL."
    }
  };

  // State untuk mengontrol konten yang tampil
  const [activeTab, setActiveTab] = useState('default');

  return (
    <div className="absolute bg-[#b9cedf] sm:right-30 w-100 md:w-145 min-h-[580px] z-30 rounded-b-lg shadow-2xl m-auto flex flex-col overflow-hidden font-sans border border-white/20">
      
      {/* BAGIAN ATAS (BIO PANEL) */}
      <div className="h-[40%] p-6 relative flex flex-col border-b border-blue-400/30 shrink-0 transition-all duration-300">
        {/* Nomor Passport Vertikal */}
        <div className="absolute left-2 top-30 sm:top-12 -rotate-90 origin-left text-[10px] font-bold text-orange-500 tracking-widest opacity-80 uppercase">
          No 12412121231
        </div>

        {/* Konten Dinamis */}
        <div className="ml-8 mt-2 animate-in fade-in duration-500">
          <h2 className="text-xl font-black text-gray-800 leading-none uppercase">
            {bioContent[activeTab].title}
          </h2>
          <p className="text-[11px] text-blue-600 mt-2 font-medium italic">
            {bioContent[activeTab].label}
          </p>
          <p className="text-[11px] text-gray-800 font-bold leading-tight mt-2 min-h-[45px]">
            {bioContent[activeTab].description}
          </p>
        </div>

        {/* Link Keahlian Horizontal (Klik untuk mengubah teks) */}
        <div className="mt-auto flex justify-around text-[10px] font-black uppercase tracking-tighter  pb-2">
          <span 
            onClick={() => setActiveTab('craftsman')}
            className={`underline decoration-2 underline-offset-4 cursor-pointer hover:text-blue-800 transition-colors ${activeTab === 'craftsman' ? 'text-blue-800' : 'text-blue-600'}`}
          >
            Craftsman
          </span>
          <span 
            onClick={() => setActiveTab('data')}
            className={`underline decoration-2 underline-offset-4 cursor-pointer hover:text-blue-800 transition-colors ${activeTab === 'data' ? 'text-blue-800' : 'text-blue-600'}`}
          >
            Data Vis+Mining
          </span>
          <span 
            onClick={() => setActiveTab('bioinformatic')}
            className={`underline decoration-2 underline-offset-4 cursor-pointer hover:text-blue-800 transition-colors ${activeTab === 'bioinformatic' ? 'text-blue-800' : 'text-blue-600'}`}
          >
            Bioinformatic
          </span>
        </div>
      </div>

      {/* BAGIAN BAWAH (IDENTITY PANEL) */}
      <div className="flex-1 bg-[#c9d9e7] p-5 flex flex-col relative">
        
        {/* Header Negara */}
        <div className="text-center mb-6">
          <h3 className="text-sm font-black text-blue-500 uppercase leading-none tracking-tight">Republik Somewhere</h3>
          <p className="text-[9px] font-bold text-blue-400/80 italic leading-none mt-1">Republic of Somewhere</p>
        </div>

        <div className="grid grid-cols-12 gap-3 mb-4">
          {/* KOLOM KIRI: FOTO */}
          <div className="col-span-4 flex flex-col items-center">
            <div className="text-[9px] font-black text-blue-500 text-center leading-none mb-2 uppercase italic">
              Paspor<br/><span className="text-[7px] lowercase">Passport</span>
            </div>
            
            <div className="w-full aspect-[3/4] bg-[#fdf2e9] border-2 border-blue-200 rounded shadow-md overflow-hidden p-1">
              <div className="w-full h-full bg-[#e5e7eb] rounded-sm overflow-hidden relative">
                 <img 
                  src="/profiles/profile3.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="text-[10px] font-black text-gray-800 mt-2  tracking-tighter text-center uppercase">
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

            <div className="flex justify-between items-end border-t border-blue-300/20 pt-1">
              <div className="flex-1">
                <p className="text-[8px] font-bold text-blue-400 uppercase leading-none">Jumlah Proyek/Project Count</p>
                <p className="text-[11px] font-black text-gray-800 leading-none mt-1 uppercase">7.. Still Counting Lah</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-black text-orange-500 italic mt-1 leading-none">13132</p>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex-1">
                <p className="text-[8px] font-bold text-blue-400 leading-none uppercase">Reg No.</p>
                <p className="text-[11px] font-mono font-black text-gray-600 uppercase mt-1 leading-none">hmm123123</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-black text-gray-800 italic mt-1 leading-none">Active</p>
              </div>
            </div>

            <div className="text-right mt-1">
              <p className="text-[8px] font-bold text-blue-400 leading-none uppercase">Tgl Berlaku/Date of Expiry</p>
              <p className="text-[12px] font-black text-gray-900 mt-1 leading-none uppercase">32 Jan 2030</p>
            </div>
          </div>
        </div>

        {/* MACHINE READABLE ZONE (MRZ) */}
        <div className="mt-auto bg-[#dbe6ef] px-3 py-2 rounded font-mono text-[11px] md:text-[12px] font-black text-gray-500 border border-black/5 tracking-wider leading-tight">
          <p>P&lt;IDNATHA&lt;&lt;ZAYYAN&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;713121</p>
          <p>12412121231&lt;6IDN9501014M3001321&lt;&lt;&lt;&lt;&lt;&lt;&lt;06</p>
        </div>
      </div>
    </div>
  );
};

export default Passport;