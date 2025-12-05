"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";
import SwipePage from "../components/SwipePage";

export default function LandingPage() {
    const router = useRouter();
    const enter = () => {
        router.push('/introduction');
    }
    return (
      <SwipePage>
        <div className="min-h-screen bg-[#0d0060] flex flex-col justify-between p-8 md:p-16 text-white font-sans">
      
          {/* Top Section: Logo and Main Title */}
          <div className="flex flex-col">

            {/* Main Text Block */}
            <h1 className="text-5xl md:text-5xl font-light leading-snug tracking-tight uppercase mb-4">
              HSE<br />
              ACCOUNTABILITY<br />
              FRAMEWORK
            </h1>

            <h2 className="text-2xl md:text-3xl font-normal leading-relaxed mb-12">
              Responsible Person<br />
              Handbook
            </h2>
          </div>

          {/* Mid Section: Colorful Bars and Enter Button */}
          <div className="flex flex-col">
            
            {/* Colorful Bar Visual (Abstracted based on typical digital designs) */}
            <div className="w-full h-8 mb-10 overflow-hidden">
              {/* Blue/Teal bars */}
              <div className="flex -mx-1">
                <div className="w-1/4 h-8 bg-teal-400 opacity-75 mr-1"></div>
                <div className="w-1/6 h-8 bg-teal-500 mr-1"></div>
                <div className="w-1/12 h-8 bg-teal-300 mr-1"></div>
                <div className="w-1/6 h-8 bg-cyan-400"></div>
              </div>
              
              {/* Pink/Purple bars - Placed below or overlapping, styled as a separate element */}
              <div className="flex -mx-1 mt-2">
                <div className="w-1/3 h-8 bg-purple-500 opacity-90 ml-auto mr-1"></div>
                <div className="w-1/6 h-8 bg-pink-600 mr-1"></div>
                <div className="w-1/4 h-8 bg-purple-400"></div>
              </div>
            </div>

            {/* Enter Button */}
            <button onClick={enter} className="cursor-pointer w-40 h-12 border border-white flex items-center justify-center text-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#0d0060]">
              <span className="mr-2">Enter</span>
              {/* Simple right arrow for navigation */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </SwipePage>
    
  );
  
}