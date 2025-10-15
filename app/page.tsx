'use client';

import { useTheme } from 'next-themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  

  return (
    <div className="min-h-screen flex flex-col items-center  bg-[#F6F7FE] dark:bg-gray-800 transition-colors duration-300">
      <Navbar />
     <Hero />
     <img src='/banner.webp' alt='' className='w-full md:w-[90%] h-[150px] md:h-auto flex mx-auto my-auto rounded-2xl'/>
    </div>
  );
}
