"use client";
import { useTheme } from 'next-themes';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  


  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const { setTheme,theme } = useTheme();

  useEffect(()=>{
    if(!theme){
        setTheme('system');
    }

  },[])

  const toggleTheme=()=>{
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <header className="w-full sticky top-0 z-50 bg-[#FCF4FC] dark:bg-black shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 lg:py-5">
        {/* Logo */}
        <Link href="/en" className="flex-shrink-0">
          <div className="hidden lg:block">
            <Image
              src="/mainLogo.svg"
              alt="Shukhee Logo"
              width={120}
              height={100}
              priority
            />
          </div>
          <div className="block lg:hidden">
            <Image
              src="/mainLogo.svg"
              alt="Shukhee Logo"
              width={100}
              height={80}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-5 items-center">
          <Link
            href="/en"
            className="font-medium text-sm text-primarydark:text-gray-300  dark:hover:text-white "
          >
            Home
          </Link>

          <Link
            href="https://www.shukhee.com/en/doctor"
            className="dark:text-gray-300  dark:hover:text-white font-medium text-sm text-gray-600 hover:text-primary transition-colors"
          >
            Find Doctor
          </Link>

          {/* Service Dropdown - Hover based */}
          <div
            className="relative"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
          >
            <button
              type="button"
              className="dark:text-gray-300  dark:hover:text-white flex items-center font-medium text-sm text-gray-600 hover:text-primary focus:outline-none transition-colors"
              aria-expanded={isServiceOpen}
            >
              Service
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  isServiceOpen ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isServiceOpen && (
              <div className="absolute top-3 left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <Link
                  href="/en/service1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Service 1
                </Link>
                <Link
                  href="/en/service2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Service 2
                </Link>
              </div>
            )}
          </div>

          {/* Emergency Service Dropdown - Hover based */}
          <div
            className="relative"
            onMouseEnter={() => setIsEmergencyOpen(true)}
            onMouseLeave={() => setIsEmergencyOpen(false)}
          >
            <button
              type="button"
              className="dark:text-gray-300  dark:hover:text-white flex items-center font-medium text-sm text-gray-600 hover:text-primary focus:outline-none transition-colors"
              aria-expanded={isEmergencyOpen}
            >
              Emergency Service
              <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  isEmergencyOpen ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isEmergencyOpen && (
              <div className="absolute top-3 left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <Link
                  href="/en/emergency"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Emergency Care
                </Link>
                <Link
                  href="/en/ambulance"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Ambulance Service
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/en/self-registration"
            className="dark:text-gray-300  dark:hover:text-white font-medium text-sm text-gray-600 hover:text-primary transition-colors"
          >
            Become a Provider
          </Link>

          <Link
            href="/en/subscription"
            className="border border-[#9B468A] text-[#9B468A] font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#9B468A] hover:text-white transition-colors"
          >
            Subscription
          </Link>
        </nav>

        {/* Right side buttons and icons */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:block border border-[#9B468A] text-[#9B468A] font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#9B468A] hover:text-white transition-colors">
            Log In
          </button>

          <button className="hidden lg:block bg-[#9B468A] text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#8a3f7a] transition-colors">
            Sign Up
          </button>

          {/* Language / globe icon */}
          <button
            type="button"
            className="text-[#9B468A] dark:text-[#9B468A] hover:text-[#9B468A] transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label="Change Language"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 512 512"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M48 112h288M192 64v48m80 336 96-224 96 224m-162.5-64h133M281.3 112S257 206 199 277 80 384 80 384"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M256 336s-35-27-72-75-56-85-56-85"
              />
            </svg>
          </button>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <span className="ms-8  mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Light
              </span>
              <input type="checkbox" value="" className="sr-only peer" onChange={toggleTheme} checked={theme==="dark"?true:false} />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Dark
              </span>
            </label>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            
            className="lg:hidden focus:outline-none p-1 rounded-md hover:bg-gray-100 text-black dark:text-white dark:hover:text-black transition-colors"
            aria-expanded={isMenuOpen}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              height="26"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FCF4FC] border-t border-gray-200 px-4 pb-4">
          <nav className="flex flex-col gap-3 mt-4">
            <Link
              href="/en"
              className="text-sm font-medium text-[#9B468A] py-2"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/en/doctor"
              className="text-sm font-medium text-gray-600 py-2 hover:text-[#9B468A] transition-colors"
              onClick={closeMobileMenu}
            >
              Find Doctor
            </Link>
            <button
              className="text-sm font-medium text-gray-600 py-2 hover:text-[#9B468A] transition-colors text-left flex"
              onClick={() => {
                setIsMobileServiceOpen(!isMobileServiceOpen);
                /* Add mobile dropdown logic */
              }}
              
            >
              Service
               <svg
                className={`ml-1 w-4 h-4 transition-transform ${
                  isMobileServiceOpen ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
              </svg>
            </button>
            {isMobileServiceOpen && (
                <div className='{ flex flex-col gap-2 items-start bg-gray-300 w-max p-2'>
                <button>service 1</button>
                <button>service 1</button>
            </div>
            )}
            <button
              className="text-sm font-medium text-gray-600 py-2 hover:text-[#9B468A] transition-colors text-left"
              onClick={() => {
                /* Add mobile dropdown logic */
              }}
            >
              Emergency Service
            </button>
            <Link
              href="/en/self-registration"
              className="text-sm font-medium text-gray-600 py-2 hover:text-[#9B468A] transition-colors"
              onClick={closeMobileMenu}
            >
              Become a Provider
            </Link>
            <Link
              href="/en/subscription"
              className="border border-[#9B468A] text-[#9B468A] font-medium text-sm px-4 py-2 rounded-lg w-fit hover:bg-[#9B468A] hover:text-white transition-colors"
              onClick={closeMobileMenu}
            >
              Subscription
            </Link>

            {/* Mobile Auth Buttons */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200">
              <button className="flex-1 border border-[#9B468A] text-[#9B468A] font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#9B468A] hover:text-white transition-colors">
                Log In
              </button>
              <button className="flex-1 bg-[#9B468A] text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#8a3f7a] transition-colors">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
