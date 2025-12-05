import Image from "next/image";
import Link from "next/link";
import { modules } from "@/routes";

export default function Home() {
  // Helper component for the content card
    // Helper component for the content card
    const ContentCard = ({ number, title, href}) => (
        <Link 
            href={href} 
            className="group block border border-white rounded-lg hover:border-cyan-400 p-6 transition duration-300 transform hover:scale-[1.01] shadow-2xl"
        >
            <div className="flex flex-col h-full justify-between">
                <div>
                    {/* The number is colored cyan and changes to white on hover */}
                    <div className="text-3xl font-extralight mb-4 text-cyan-400 group-hover:text-white transition duration-300">
                        {number}
                    </div>
                    <p className="text-lg font-normal uppercase leading-relaxed tracking-wide">
                        {title}
                    </p>
                </div>
                {/* Arrow icon with a hover translate effect */}
                <div className="mt-4 flex justify-end">
                    {/* Using a simple Unicode arrow for accessibility/simplicity */}
                    <span className="text-2xl leading-none group-hover:translate-x-1 transition duration-300">
                        &gt;
                    </span>
                </div>
            </div>
        </Link>
    );


    return (
            <div className="bg-[#0b0244] text-white min-h-screen font-sans p-8 md:p-12">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header */}
                    <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-8">
                        HANDBOOK CONTENTS
                    </h1>

                    {/* Header Pattern/Graphic - Uses injected custom CSS */}
                    <div className="header-pattern-container mb-12">
                        <div className="header-pattern" />
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {modules.map((module, index) => (
                            <ContentCard 
                                key={index}
                                number={module.number}
                                title={module.title}
                                href={module.href}
                            />
                        ))}
                    </div>

                </div>
            </div>
    );
}