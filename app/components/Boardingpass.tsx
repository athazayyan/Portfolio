import { Icon } from '@iconify/react'

export const Boardingpass = () => {
  return (

<div className="absolute left-0 bottom-15 w-60 h-28 sm:w-[360px] sm:h-40 z-30 rounded-r-2xl shadow-2xl grid grid-cols-3 overflow-hidden font-sans border-y border-r border-black/5">
  
  {/* Bagian Kiri (Utama) */}
  <div className="bg-[#fff7ed] col-span-2 flex flex-col border-r-2 border-dashed border-gray-400/40 relative">
    {/* Header Hijau - Lebih Tipis */}
    <div className="bg-[#27ae60] text-white text-[8px] sm:text-[10px] font-black px-3 py-1 uppercase tracking-tighter flex items-center justify-between">
      <span>Boarding Pass</span>
      <Icon icon="ph:airplane-tilt-fill" className="opacity-70" />
    </div>
    
    <div className="p-2 sm:p-3 flex flex-col justify-between h-full">
      {/* Baris Atas: From */}
      <div>
        <p className="text-[7px] sm:text-[9px] font-bold text-gray-400 uppercase leading-none">From</p>
        <div className="bg-[#fed7aa] px-1.5 py-0.5 mt-1 rounded-sm inline-block">
          <p className="text-[9px] sm:text-[13px] font-black text-[#431407] truncate leading-tight">
            Nanggroe Aceh Darussalam, ID
          </p>
        </div>
      </div>

      {/* Garis Pemisah Oranye Tipis */}
      <div className="h-[1.5px] bg-[#fed7aa] w-full my-1" />

      {/* Baris Bawah: Market & Availability */}
      <div className="flex gap-2">
        <div className="flex-1">
          <p className="text-[7px] sm:text-[9px] font-bold text-gray-400 uppercase leading-none">Market</p>
          <div className="bg-[#fed7aa] px-1.5 py-0.5 mt-1 rounded-sm inline-block w-full">
            <p className="text-[9px] sm:text-[11px] font-black text-[#431407]">Anywhere</p>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-[7px] sm:text-[9px] font-bold text-gray-400 uppercase leading-none">Availability</p>
          <div className="bg-[#fed7aa] px-1.5 py-0.5 mt-1 rounded-sm inline-block w-full">
            <p className="text-[9px] sm:text-[11px] font-black text-[#431407]">Available</p>
          </div>
        </div>
      </div>
    </div>

    {/* Notch Lubang Tiket */}
    <div className="absolute -right-[5px] -top-[5px] w-2.5 h-2.5 bg-white/30 rounded-full" />
    <div className="absolute -right-[5px] -bottom-[5px] w-2.5 h-2.5 bg-white/30 rounded-full" />
  </div>

  {/* Bagian Kanan (Stub) */}
  <div className="bg-[#fff7ed] flex flex-col">
    {/* Header Kuning - Lebih Tipis */}
    <div className="bg-[#f1c40f] h-4 sm:h-6 w-full flex items-center justify-center">
        <div className="w-1/3 h-[1px] bg-black/10 rounded-full" />
    </div>
    
    <div className="flex-1 flex flex-col items-center justify-center p-2">
      {/* Icon Profile - Dikecilkan */}
      <div className="bg-[#94a3b8] w-10 h-10 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center shadow-md border border-white/50">
        <Icon icon="ph:user-fill" className="text-white text-xl sm:text-3xl" />
      </div>
      
      {/* Teks Bawah */}
      <div className="mt-2 text-center">
        <p className="text-[7px] sm:text-[9px] font-black uppercase tracking-tighter text-gray-800 leading-none">
          Contact me
        </p>
        <div className="h-[1px] bg-black/20 w-full mt-0.5" />
      </div>
    </div>
  </div>
</div>  )
}
