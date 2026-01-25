'use client';
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from './components/Navbar';
import AthaBot from './components/AthaBot';
import { useState } from 'react';




const jost = localFont({
  src: './fonts/Jost-VariableFont_wght.ttf', 
  variable: '--font-jost', // Gunakan path relatif yang benar
  display: 'swap', // Mencegah teks hilang saat loading (FOIT)
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isBotOpen, setIsBotOpen] = useState(false);
 return (
  
    <html lang="en" className={`${jost.variable}`}> 
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </head>
      <body className={`${jost.className} antialiased bg-[#F1F1F0]` }>
        <Navbar onContactClick={() => setIsBotOpen(true)}></Navbar>
        <AthaBot isOpen={isBotOpen} onClose={() => setIsBotOpen(false)} />

        {children}
      </body>
    </html>
  );
}