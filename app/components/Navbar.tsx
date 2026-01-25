"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

// 1. Definisikan Interface Props agar Navbar bisa menerima fungsi dari Home
interface NavbarProps {
  onContactClick: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 550);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { title: "Home", 
  sub: "首页 | المحور الرئيسي", 
  link: "/", 
  icons: ["ph:house-line-bold"], 
  arrow: "ph:arrow-right-bold" },
        { title: "Collection", sub: "作品集 | المعرض", link: "#", icons: ["ph:pencil-line-bold"], arrow: "ph:arrow-right-bold" },

    { title: "Work", sub: "项目 | الأعمال", link: "/work", icons: ["ph:briefcase-bold"], arrow: "ph:arrow-right-bold" },
    { title: "My Resume", sub: "关于我 | نبذة عني", link: "https://www.notion.so/athazyn/ACHMAD-ATHA-ZAYYAN-1764f3d83b0380d9a1b1ff846e11777c", icons: ["ph:user-focus-fill"], arrow: "ph:arrow-down-bold" },
    { title: "Contact", sub: "联系 | تواصل", link: "#", icons: ["ph:envelope-fill"], arrow: "ph:arrow-left-bold" }
  ];

  return (
    <motion.nav
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
      onClick={() => isMobile && setOpen(!open)}
      initial={false}
      animate={{
        width: open ? 320 : (isMobile ? 50 : 90),
        height: open ? 320 : (isMobile ? 50 : 70), // Ukuran disesuaikan agar item tidak terpotong
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="
        fixed left-3 sm:left-10 top-0 z-[100]
        bg-[#f2f1e8]
        border-b-4 border-x-2 border-black
        rounded-b-2xl 
        overflow-hidden origin-top 
        cursor-pointer
      "
    >
      <div className="p-3">
        {/* Header Section */}
        <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-2">
          <span className="text-xs sm:text-sm font-black tracking-widest uppercase">
            {open ? "Explore" : "Hi!"}
          </span>
          <Icon 
            icon={open ? "ph:x-bold" : "ph:list-bold"} 
            className={`${open ? 'block' : 'hidden'} text-lg`} 
          />
        </div>

        {/* Menu Items */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ul className="flex flex-col gap-1">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => {
                      if (item.title === "Contact") {
                        e.preventDefault(); // Mencegah pindah halaman
                        e.stopPropagation(); // Mencegah trigger parent click
                        onContactClick();    // Jalankan Bot
                        setOpen(false);      // Tutup Navbar
                      }
                    }}
                  >
                    <a
                      href={item.link}
                      target={item.title === "My Resume" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="
                        group flex items-center justify-between
                        border-b border-black/10 
                        px-1 py-2 hover:bg-[#0492c2]/10 transition-colors
                      "
                    >
                      {/* Teks Menu */}
                      <div className="flex flex-col leading-tight">
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-tight">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-gray-500 font-medium">
                          {item.sub}
                        </span>
                      </div>

                      {/* Ikon Menu */}
                      <div className="flex items-center gap-2">
                        {item.icons.map((ic, idx) => (
                          <div
                            key={idx}
                            className="w-7 h-7 flex items-center justify-center  "
                          >
                            <Icon icon={ic} className="text-lg" />
                          </div>
                        ))}
                        <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-black bg-white group-hover:bg-black group-hover:text-white transition-colors">
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