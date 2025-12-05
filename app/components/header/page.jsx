"use client"
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { pages } from "@/routes";

export default function Header() {

  const router = useRouter();
  const pathname = usePathname();
 
  const currentIndex = pages.indexOf(pathname);
  const nextRoute = pages[currentIndex + 1];
  const prevRoute = pages[currentIndex - 1];

  const home = () => {
      router.push('/home');
  }
// click events
  const goNext = () => nextRoute && router.push(nextRoute);
  const goPrev = () => prevRoute && router.push(prevRoute);

  return (
    // Main container with the deep blue background and padding
    <div className="absolute w-full h-15 z-10 bg-[#0d0060] text-white py-4 px-6 flex items-center justify-between shadow-lg">
      
      {/* Section Title */}
      <div className="text-xl md:text-2xl font-normal tracking-wide uppercase">
        INTRODUCTION
      </div>

      {/* Navigation Icons Group */}
      <div className="flex space-x-4">
        
        {/* Up Arrow Icon Button (Previous/Back) */}
        <button disabled={!prevRoute} onClick={goPrev} className={`cursor-pointer w-10 h-10 border border-white rounded-full flex items-center justify-center transition duration-200 hover:bg-white hover:text-[#0d0060] ${
              !prevRoute ? "opacity-30" : ""
            }`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Down Arrow Icon Button (Next/Forward) */}
        <button disabled={!nextRoute} onClick={goNext} className={`cursor-pointer w-10 h-10 border border-white rounded-full flex items-center justify-center transition duration-200 hover:bg-white hover:text-[#0d0060] ${
              !nextRoute ? "opacity-30" : ""
            }`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        {/* Home Icon Button */}
        <button onClick={home} className="cursor-pointer w-10 h-10 border border-white rounded-full flex items-center justify-center transition duration-200 hover:bg-white hover:text-[#0d0060]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6m-6 0v-4a1 1 0 011-1h2a1 1 0 011 1v4" />
          </svg>
        </button>
      </div>

      {/* Placeholder for the blue striped section if needed, though typically this would be below the header */}
      {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-700 opacity-50"></div> */}
    </div>
  );
}