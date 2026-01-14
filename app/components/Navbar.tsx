import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { 
      title: "Collection", 
      sub: "作品集 | المعرض", 
      link: "#", 
      icons: ["ph:pencil-line-bold", "ph:stack-bold"], 
      arrow: "ph:arrow-right-bold" 
    },
    { 
      title: "Work", 
      sub: "项目 | الأعمال", 
      link: "#", 
      icons: ["ph:git-branch-bold", "ph:dots-three-circle-fill", "ph:briefcase-bold"], 
      arrow: "ph:arrow-right-bold" 
    },
    { 
      title: "Contact", 
      sub: "关于我 | نبذة عني", 
      link: "#", 
      icons: ["ph:envelope-fill"], 
      isSpecial: false,
      arrow: "ph:arrow-left-bold" 
    },
    { 
      title: "About", 
      sub: "联系 | تواصل", 
      link: "#", 
      icons: ["ph:user-focus-fill"], 
      isSpecial: false, 
      arrow: "ph:arrow-down-bold" 
    }
  ];

  return (
    <motion.nav
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      initial={false}
      animate={{
        width: open ? 330 : 56, // Mengecil sedikit dari 340/64
        height: open ? "auto" : 56,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 180, 
        damping: 22, 
        mass: 1
      }}
      className="absolute sm:left-10 left-2 top-0 bg-white shadow-2xl overflow-hidden z-50 border-x border-b border-gray-200 origin-top rounded-b-[18px]"
    >
      <div className="p-4 text-black">
        {/* Header HI! - Lebih kecil */}
        <div className="flex items-center h-6 mb-1">
          <span className=" text-lg  uppercase">HI!</span>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "circOut" }}
            >
              <hr className="border-black border-t-2 my-2" />
              
              <ul className="flex flex-col">
                {menuItems.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="border-b border-black last:border-0"
                  >
                    <a 
                      href={item.link} 
                      className="group flex items-center justify-between py-4 hover:bg-gray-50 transition-colors px-1"
                    >
                      {/* Teks Kiri - Dikecilkan sedikit */}
                      <div className="flex flex-col leading-none">
                        <span className="text-[21px] font-[550] tracking-tight uppercase group-hover:underline transition-all">
                          {item.title}
                        </span>
                        <span className="text-[9px] font-medium text-gray-400 mt-1.5 tracking-wide">
                          {item.sub}
                        </span>
                      </div>
                      
                      {/* Ikon Kanan - Container dikecilkan ke w-8/h-8 */}
                      <div className="flex items-center gap-3">
                        <div className="flex gap-2 items-center">
                          {item.icons?.map((iconName, idx) => (
                            <div 
                              key={idx} 
                              className={`flex items-center justify-center w-8 h-8 transition-all ${
                                item.isSpecial 
                                ? "bg-black text-white rounded-md" 
                                : "text-black"
                              }`}
                            >
                              <Icon 
                                icon={iconName} 
                                className={item.isSpecial ? "text-[18px]" : "text-[24px]"} 
                              />
                            </div>
                          ))}
                        </div>
                        {/* Panah Navigasi - Lebih ramping */}
                        <div className="w-6 h-6 flex items-center justify-center">
                          <Icon icon={item.arrow} className="text-xl text-black" />
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