import { Icon } from '@iconify/react';

const Boardingpass = () => {
  return (
    <div
      className="boardingpass absolute left-0 bottom-0 w-full max-w-[280px] sm:max-w-[360px]
      rounded-r-lg shadow-[4px_2px_0px_rgba(0,0,0,0.1)] border-r border-t
      grid grid-cols-3 overflow-hidden
      border-b-3 border-black z-50 pointer-events-auto"
    >
      {/* Bagian Kiri */}
      <div className="col-span-2 flex flex-col   relative bg-transparent">

        {/* Header */}
        <div className="bg-[#0492c2] text-white text-[9px] sm:text-xs font-black
          px-3 py-2 uppercase tracking-widest flex items-center justify-between">
          <span>Boarding Pass</span>
          <Icon icon="ph:airplane-tilt-fill" className="text-base sm:text-xl opacity-90" />
        </div>

        <div className="p-3 flex flex-col justify-between h-full gap-2">

          <div>
            <p className="text-[8px] sm:text-[8px] font-bold text-[#0492c2] uppercase">From</p>
            <div className="bg-blue-100 border-2 border-black px-2 py-1">
              <p className="text-[8px] sm:text-[10px] font-bold text-gray-900 truncate">
                Nanggroe Aceh Darussalam, ID
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="h-[1px] bg-black flex-1 rounded-full"></div>
            <div className="h-[1px] bg-black flex-1 rounded-full"></div>
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <p className="text-[8px] sm:text-[8px] font-bold text-[#0492c2] uppercase">Market</p>
              <div className="bg-blue-100 border-2 border-black px-2 py-1">
                <p className="text-[8px] sm:text-xs font-bold text-gray-900">Anywhere</p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-[8px] sm:text-[8px] font-bold text-[#0492c2] uppercase">Status</p>
              <div className="bg-blue-100 border-2 border-black px-2 py-1">
                <p className="text-[8px] sm:text-xs font-bold text-gray-900">Available</p>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      {/* Stub Kanan */}
      <div className="flex flex-col border-l border-dashed bg-transparent ">

        <div className="bg-[#f1c40f] sm:h-9 h-8 flex items-center justify-center ">
          <div className="w-1/2 h-[2px] bg-black/40" />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-3 gap-2">

          <Icon icon="ph:user-fill" className="text-2xl w-14 h-14" />

          <a
            href="mailto:atha.al.khand@gmail.com"
            className="relative z-[100] pointer-events-auto"
          >
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-900 flex items-center gap-1 hover:underline">
              Contact
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"
                />
              </svg>
            </p>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Boardingpass;
