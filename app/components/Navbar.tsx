import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 550);
    const handleResize = () => setIsMobile(window.innerWidth < 550);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { title: "Collection", sub: "作品集 | المعرض", link: "#", icons: ["ph:pencil-line-bold"], arrow: "ph:arrow-right-bold" },
    { title: "Work", sub: "项目 | الأعمال", link: "#", icons: ["ph:briefcase-bold"], arrow: "ph:arrow-right-bold" },
    { title: "About", sub: "关于我 | نبذة عني", link: "#", icons: ["ph:user-focus-fill"], arrow: "ph:arrow-down-bold" },
    { title: "Contact", sub: "联系 | تواصل", link: "#", icons: ["ph:envelope-fill"], arrow: "ph:arrow-left-bold" }
  ];

  return (
  <motion.nav
  onClick={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
  initial={false}
  animate={{
    width: open ? (isMobile ? "calc(100vw - 1rem)" : 320) : (isMobile ? 42 : 90),
    height: open ? 243 : (isMobile ? 42 : 70),
  }}
  transition={{ type: "spring", stiffness: 180, damping: 22 }}
  className="
    fixed
     -translate-x-1/2
    sm:left-10 sm:translate-x-0
    top-0 z-50
    bg-[#f2f1e8]
    border-b-3 border-x-2 border-black
    rounded-b-xl shadow-[3px_0px_0px_rgba(0,0,0,0.25)]
    overflow-hidden origin-top
  "
>
      <div className="p-2 sm:p-3">

        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-black pb-1 mb-2">
          <span className="text-xs sm:text-sm font-black tracking-widest uppercase">
            {open ? "Explore" : "Hi!"}
          </span>
         
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
            >
              <ul className="flex flex-col gap-2 mt-2">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={item.link}
                      className="
                        group flex items-center justify-between
                         border-b border-black
                        px-1 py-1
                        
                        hover:bg-blue-100 transition
                      "
                    >
                      {/* Kiri */}
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm font-bold uppercase">
                          {item.title}
                        </span>
                        <span className="text-[9px] text-gray-600 tracking-wide">
                          {item.sub}
                        </span>
                      </div>

                      {/* Kanan */}
                      <div className="flex items-center gap-2">
                        {item.icons.map((ic, idx) => (
                          <div
                            key={idx}
                            className="w-7 h-7 flex items-center justify-center border-2 border-black bg-[#f1c40f]"
                          >
                            <Icon icon={ic} className="text-sm" />
                          </div>
                        ))}
                        <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-black bg-white">
                          <Icon icon={item.arrow} className="text-xs" />
                        </div>
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
