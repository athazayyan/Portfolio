import React, { useState } from 'react';

const Passport = () => {
  // Database konten untuk perubahan teks
  const bioContent: Record<string, { title: string; label: string; description: string }> = {
    default: {
      title: "Greetings",
      label: "Multidisciplinary Profile",
      description: "I am dedicated to integrating creativity and technical precision into every project. Feel free to explore my diverse portfolio of work."
    },
    craftsman: {
      title: "Digital Craftsman",
      label: "Web Design & Development",
      description: "I specialize in developing unique, high-quality digital interfaces. Currently accepting freelance commissions for bespoke web design and development."
    },
    bioinformatic: {
      title: "Bioinformatician",
      label: "Computational Biology",
      description: "Currently advancing my research in bioinformatics, with a focus on academic assignments involving genomic data analysis and visualization."
    },
    data: {
      title: "Data Specialist",
      label: "Analytics & Mining",
      description: "Proficient in Tableau, Power BI, and D3.js. I have a keen interest in data mining, frequently exploring Machine Learning and Deep Learning frameworks."
    }
  };

  // State untuk mengontrol konten yang tampil
  const [activeTab, setActiveTab] = useState('default');

  return (
   
<div
  className="
    absolute top-0 left-1/2 -translate-x-1/2
    w-[95vw] max-w-[380px] sm:max-w-[520px] md:max-w-[640px]
    min-h-145
    rounded-b-xl
    shadow-[4px_2px_0px_rgba(0,0,0,0.1)]
    flex flex-col overflow-hidden
    border-b-4 border-black border-l-2 border-r-2
    passport z-50 pointer-events-none
  "
  id="passport"
>
      <div className="min-h-60 p-4 sm:p-6 relative flex flex-col border-b-4 border-black shrink-0 transition-all duration-300 ">
       
        
        {/* Nomor Passport Vertikal */}
        <div className="absolute left-2 top-32 sm:top-28 sm:left-4 -rotate-90 origin-left text-xs sm:text-sm font-bold text-orange-700 tracking-wider">
          No 12412121231
        </div>

        {/* Konten Dinamis */}
        <div className="ml-6 sm:ml-8 mt-2 animate-in fade-in duration-500">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-none" style={{ textShadow: '2px 2px 0px rgba(255,255,255,0.8)' }}>
            {bioContent[activeTab].title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 mt-3 font-medium">
            {bioContent[activeTab].label} 
          </p>
          <p className="text-xs sm:text-sm text-gray-800 leading-snug mt-3 min-h-[60px] sm:min-h-[50px]">
            {bioContent[activeTab].description}
          </p>
        </div>

        {/* Link Keahlian Horizontal (Klik untuk mengubah teks) */}
        <div className="mt-auto flex flex-wrap justify-around gap-2 text-xs sm:text-sm font-bold pb-2 pointer-events-auto
 ">
          <span 
            onClick={() => setActiveTab('craftsman')}
            className={`relative cursor-pointer hover:scale-101 transition-transform ${activeTab === 'craftsman' ? 'text-gray-600' : 'text-gray-800'}`}
          >
            <span className="relative z-10">Craftsman</span>
            {activeTab === 'craftsman' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0492c2] "></span>}
          </span>
          <span 
            onClick={() => setActiveTab('data')}
            className={`relative cursor-pointer hover:scale-101 transition-transform ${activeTab === 'data' ? 'text-gray-600' : 'text-gray-800'}`}
          >
            <span className="relative z-10">Data Vis+Mining</span>
            {activeTab === 'data' && <span className="absolute -bottom-1 left-0 w-full w-full h-0.5 bg-[#0492c2]"></span>}
          </span>
          <span 
            onClick={() => setActiveTab('bioinformatic')}
            className={`relative cursor-pointer hover:scale-101 transition-transform ${activeTab === 'bioinformatic' ? 'text-gray-600' : 'text-gray-800'}`}
          >
            <span className="relative z-10">Bioinformatic</span>
            {activeTab === 'bioinformatic' && <span className="absolute -bottom-1 left-0 w-full w-full h-0.5 bg-[#0492c2]"></span>}
          </span>
        </div>
      </div>

      {/* BAGIAN BAWAH (IDENTITY PANEL) */}
      <div className="flex-1  p-4 sm:p-5 flex flex-col relative">
        
       
        
        {/* Header Negara */}
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-bold text-[#0492c2] leading-none tracking-tight">Republik Somewhere</h3>
          <p className="text-[10px] sm:text-xs font-medium text-[#0492c2] leading-none mt-1">Republic of Somewhere</p>
        </div>

        <div className="grid grid-cols-12 gap-2 sm:gap-3 mb-4">
          {/* KOLOM KIRI: FOTO */}
          <div className="col-span-5 sm:col-span-4 flex flex-col items-center">
            <div className="text-[10px] sm:text-xs font-bold text-[#0492c2] text-center leading-tight mb-2">
              Paspor<br/><span className="text-[8px] sm:text-[9px]">Passport</span>
            </div>
            
            <div className="w-full aspect-[3/4] bg-white border-1 border-black rounded-lg  overflow-hidden ">
              <div className="w-full h-full bg-gray-200 rounded overflow-hidden relative">
                 <img 
                  src="/hero/passport.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="text-[10px] sm:text-xs font-bold text-gray-800 mt-2 tracking-tight text-center">
              Hmm 1234123
            </div>
          </div>

          {/* KOLOM KANAN: DATA */}
          <div className="col-span-7 sm:col-span-8 flex flex-col gap-2 sm:gap-3 pl-1">
            <div>
              <p className="text-[9px] sm:text-[10px] font-bold text-[#0492c2] leading-none">Nama Lengkap / Full Name</p>
              <p className="text-sm sm:text-base font-bold text-gray-900 leading-none mt-1">Atha Zayyan</p>
            </div>

            <div>
              <p className="text-[9px] sm:text-[10px] font-bold text-[#0492c2] leading-none">Kewarganegaraan / Nationality</p>
              <p className="text-sm sm:text-base font-bold text-gray-900 leading-none mt-1">Indonesia</p>
            </div>

            <div className="flex justify-between items-end border-t-2 border-dashed border-gray-400 pt-2">
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

        {/* MACHINE READABLE ZONE (MRZ) */}
        <div className="mt-auto bg-white px-4 sm:px-3 py-2  border-t border-black  text-[9px] sm:text-[11px] font-bold text-gray-600 tracking-wider leading-tight overflow-x-auto -mx-5 -mb-4" style={{ fontFamily: 'monospace' }}>
          <p className="whitespace-nowrap">P&lt;IDN&lt;ATHA&lt;&lt;ZAYYAN&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;713121</p>
          <p className="whitespace-nowrap">12412121231&lt;6IDN9501014M3001321&lt;&lt;&lt;&lt;&lt;&lt;&lt;07</p>
        </div>
      </div>
    </div>
  );
};

export default Passport;