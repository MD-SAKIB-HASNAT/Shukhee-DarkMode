'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { useEffect } from 'react';
import Image from "next/image";
import Spec from './components/SpecialtiesSection';
import Faq from './components/Faq';

export default function Home() {
  

  return (
    <div className="min-h-screen flex flex-col items-center  bg-[#F6F7FE] dark:bg-gray-800 transition-colors duration-300">
     <Navbar />
    
        {/* <Link href="/home">Home</Link>
       */}
     <Hero />
     <img src='/banner.webp' alt='' className='w-[90%] h-[180px] md:h-auto flex mx-auto my-auto rounded-2xl'/>
     <Spec />
     <Faq />
    </div>
  );
}
