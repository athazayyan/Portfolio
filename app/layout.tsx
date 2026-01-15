import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import path from "path";
import { style } from "framer-motion/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jostVariable = localFont({
  src: [
    {
      path: '/fonts/Jost-VariableFont_wght.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${jostVariable.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
