import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/compon/Navbar";
import Fouter from '@/components/compon/Fouter'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-orange-400 relative bg-[url('/gold2.avif')] max-w-screen-lg mx-auto text-white"
      >
        <Navbar/>
        {children}
        <Fouter/>
      </body>
    </html>
  );
}
