import localFont from 'next/font/local';
import "./globals.css";
import HalftoneBG from './components/HalftoneBG';


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
 return (
    <html lang="en" className={`${jost.variable}`}> 
      <body className={`${jost.className} antialiased bg-[#F1F1F0]` }>

        {children}
      </body>
    </html>
  );
}