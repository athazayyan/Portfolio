import "./globals.css";
import localFont from "next/font/local";
import SmoothScroll from './components/SmoothScrolling'; 
import MusicPlayer from './components/MusicPlayer';  // ✅ Import





export const ppNeueMachina = localFont({
  src: [
    { path: "../public/fonts/PPNeueMachina-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/PPNeueMachina-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/PPNeueMachina-Ultrabold.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-ppneue",
});

export const testSohne = localFont({
  src: "../public/fonts/TestSohneBreit-Buch.otf",
  variable: "--font-testsohne",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ppNeueMachina.variable} ${testSohne.variable}`}>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
                <MusicPlayer />  

      </body>
    </html>
  );
}