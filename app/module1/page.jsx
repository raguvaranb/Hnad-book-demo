"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "../components/header/page";
import SwipePage from "../components/SwipePage";

export default function Module1() {
    const router = useRouter();
    const enter = () => {
        router.push('/introduction');
    }
  const HomeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
    );

    return (
        <>
            <SwipePage>
                
                <Header />
                <div className="bg-[#0b0244] text-white min-h-screen relative overflow-hidden">
                    

                    {/* Main Content Area */}
                    <div className="flex flex-col h-full pt-20 p-8 md:p-16 max-w-5xl mx-auto">
                        
                        {/* Module Number */}
                        <div className="text-8xl md:text-[12rem] font-extralight leading-none mb-10 pl-4">
                            01
                        </div>

                        {/* Module Title */}
                        <h2 className="text-4xl md:text-6xl font-light uppercase leading-snug tracking-wider">
                            ACCOUNTABILITY FRAMEWORK: WHO'S WHO
                        </h2>
                        
                        {/* Placeholder content to fill the screen (optional) */}
                        {/* <div className="mt-20 text-xl max-w-2xl font-light opacity-80">
                            This is the main introduction text for the module. It covers the hierarchy of responsibilities and defines the key roles involved in the framework.
                        </div> */}

                    </div>

                    {/* Bottom Graphic (Patterned Bar) */}
                    <div className="bottom-pattern-container">
                        <div className="bottom-pattern-wrapper">
                            <div className="header-pattern" />
                        </div>
                    </div>

                </div>
            </SwipePage>
        </>
        
    );
}