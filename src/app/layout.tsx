import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { ReactNode } from 'react';
import "./globals.css";
import Link from "next/link";
import DropdownMenu from "./components/DropdownMenu";
import Image from "next/image";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '900'],
  display:'swap',
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by cafes",
  icons:{
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={orbitron.className}>
      <body className="relative min-h-screen min-w-full flex flex-col">
        <video 
          src='/background.mp4'
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          muted
          playsInline
          loop
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 -z-10">
        </div>
        <header>
          <nav className="w-full flex items-center justify-between p-2 bg-transparent">
            <DropdownMenu />
            <div className="flex justify-center items-center z-0">
              <Link href={'/'}>
                <Image 
                  src='/images/home_button.svg'
                  alt="Home" 
                  width={42}
                  height={42}
                  className='p-2 filter invert transition ease-in-out hover:scale-110 duration-300' 
                />
              </Link>
              <Link href={'https://github.com/cafesmire'} target="_blank">
                <Image 
                  src='/images/github.svg'
                  alt="GitHub" 
                  width={42}
                  height={42}
                  className='p-2 filter invert transition ease-in-out hover:scale-110 duration-300' 
                />
              </Link>
            </div>
          </nav>
        </header>
        
        <main className="flex-grow">
          {children}
        </main>

        <footer className="w-full bg-gray-800 text-white p-4 text-center">
          &copy; {new Date().getFullYear()} Portfolio by cafes
        </footer>
      </body>
    </html>
  );
}

