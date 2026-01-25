"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { BOT_DATA } from '../data/botData';

interface AthaBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const AthaBot: React.FC<AthaBotProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState('start');
  const [chatHistory, setChatHistory] = useState<any[]>([BOT_DATA.start]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll ke pesan terbaru
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  // Reset bot ke awal setiap kali dibuka kembali
  useEffect(() => {
    if (isOpen) {
      setCurrentStep('start');
      setChatHistory([BOT_DATA.start]);
    }
  }, [isOpen]);

  const handleOptionClick = (option: any) => {
    // 1. LOGIKA LINK (WhatsApp, Email, Internal Halaman)
    if (option.isLink) {
      if (option.nextStep.startsWith('http') || option.nextStep.startsWith('mailto')) {
        window.open(option.nextStep, '_blank');
      } else {
        router.push(option.nextStep);
        onClose();
      }
      return;
    }

    // 2. LOGIKA PERCAKAPAN
    const nextData = BOT_DATA[option.nextStep as keyof typeof BOT_DATA];
    
    if (nextData) {
      setChatHistory(prev => [
        ...prev, 
        { type: 'user', message: option.text }, 
        { ...nextData, type: 'bot' }
      ]);
      setCurrentStep(option.nextStep);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, y: 100, scale: 0.9, rotate: -2 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 w-[350px] h-[550px] bg-[#f2f1e8] rounded-lg  flex flex-col overflow-hidden border-2 border-black z-[9999]"
        >
          {/* HEADER - Green 600 */}
          <div className="bg-green-600 p-5 flex justify-between items-center border-b-2 border-black">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Image src="/profiles/profile3.png" alt="Bot" fill className="object-cover" />
              </div>
              <div>
                <p className="text-white font-black text-sm uppercase tracking-tighter">Atha Bot</p>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse border border-black"></span>
                  <p className="text-white/80 text-[10px] font-bold uppercase">Active Now</p>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-black  hover:bg-yellow-400 "
            >
              <span className="font-black text-black text-xs">✕</span>
            </button>
          </div>

          {/* CHAT AREA */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-[#f2f1e8] scrollbar-hide">
            {chatHistory.map((chat, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: chat.type === 'user' ? 20 : -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                key={idx} 
                className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] p-3 rounded-sm text-[13px] font-bold border-2 border-black  ${
                  chat.type === 'user' 
                    ? 'bg-[#0492c2] text-white' 
                    : 'bg-white text-black'
                }`}>
                  {chat.message}
                </div>
              </motion.div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* OPTIONS AREA */}
          <div className="p-4 bg-white border-t-2 border-black space-y-2">
            {BOT_DATA[currentStep as keyof typeof BOT_DATA]?.options.map((option, idx) => {
              // Cek jika teks mengandung kata kunci "back" atau "kembali"
              const isBackBtn = option.text.toLowerCase().includes("back") || 
                                option.text.toLowerCase().includes("kembali");

              return (
                <motion.button
                  whileHover={{ scale: 1.001, x: 1, y: 1 }}
                  whileTap={{ scale: 1.0, x: 0, y: 0 }}
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full text-left p-3 rounded-md border-2 border-black text-[11px] font-semibold uppercase  ${
                    isBackBtn 
                      ? 'bg-gray-200 text-black/60' // Warna berbeda untuk tombol kembali
                      : 'bg-yellow-400 text-black'  // Warna utama
                  }`}
                >
                  {option.text}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AthaBot;