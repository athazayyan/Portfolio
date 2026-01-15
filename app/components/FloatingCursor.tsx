import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FloatingCursors = () => {
  const [elements, setElements] = useState<Array<any>>([]);

  const cursorData = [
    { text: "Can you make it pop?", color: "#F87171" },
    { text: "Love the clouds!", color: "#60A5FA" },
    { text: "Software Designer", color: "#FBBF24" },
    { text: "Bioinformatic Researcher", color: "#34D399" },
    { text: "Craftsman", color: "#A78BFA" },
  ];

  useEffect(() => {
    const newElements = cursorData.map((data, i) => ({
      ...data,
      id: i,
      startX: Math.random() * 40, 
      startY: 60 + Math.random() * 40,
      endX: 60 + Math.random() * 40,
      endY: Math.random() * 40,
      duration: 15 + Math.random() * 10,
      delay: i * 1.5,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute flex items-start gap-1"
          initial={{ left: `${el.startX}%`, top: `${el.startY}%`, opacity: 0 }}
          animate={{ left: `${el.endX}%`, top: `${el.endY}%`, opacity: [0, 1, 1, 0] }}
          transition={{ duration: el.duration, repeat: Infinity, delay: el.delay, ease: "linear" }}
        >
          <div style={{ color: el.color }}><Icon icon="ph:cursor-fill" className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-md" /></div>
          {el.text && (
            <div className="px-2 py-1 rounded-sm text-[10px] sm:text-xs font-medium text-white shadow-lg whitespace-nowrap" style={{ backgroundColor: el.color }}>
              {el.text}
            </div>
          )}
        </motion.div>
      ))}

      
    </div>
  );
};

export default FloatingCursors;