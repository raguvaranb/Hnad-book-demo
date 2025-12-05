"use client"
import Image from "next/image";
import Header from "../components/header/page";
import { useRouter } from "next/navigation";
import SwipePage from "../components/SwipePage";

export default function Introduction() {
  const router = useRouter();
  const enter = () => {
      router.push('/home');
  }
  const darkBlueBg = '#0d0060';
  const accentPink = '#e21d60'; // A shade close to the safety box

  // Placeholder for the DocumentHeader component (assuming it was created previously)
  const DocumentHeader = () => (
      <div className={`bg-[${darkBlueBg}] text-white py-4 px-6 flex items-center justify-between shadow-lg`}>
          <div className="text-xl md:text-2xl font-normal tracking-wide uppercase">
              01 WHO'S WHO
          </div>
          <div className="flex space-x-4">
              {/* Navigation Icons Placeholder */}
              <div className="w-10 h-10 border border-white rounded-full"></div>
              <div className="w-10 h-10 border border-white rounded-full"></div>
              <div className="w-10 h-10 border border-white rounded-full"></div>
          </div>
      </div>
  );
  return (
  <>
    <SwipePage>
      <Header/>
      <div className="min-h-screen flex flex-col font-sans">
            
            {/* Header (using the previously designed component) */}
            <DocumentHeader />

            {/* Content Area */}
            <div className="flex-grow bg-white p-8 md:p-16 text-blue-900">

                {/* Main Commitment Heading */}
                <h1 className="text-2xl font-bold mb-6">
                    We are committed to preventing harm by putting <span className="text-blue-900">Safety First</span>
                </h1>

                {/* Text Block 1 */}
                <p className="mb-6 leading-relaxed">
                    Putting Safety First means always having safety front of mind in every decision we take.
                </p>

                {/* Text Block 2 */}
                <p className="mb-6 leading-relaxed">
                    It requires the real and visible involvement of everyone who works for Rolls-Royce in creating a high reliability culture. A culture where employees can see their leaders are personally engaged and motivated to make a difference; where expectations and norms are clearly communicated; and everyone is empowered to intervene.
                </p>

                {/* Text Block 3 */}
                <p className="mb-6 leading-relaxed">
                    Our Accountability Framework is a guide that supports and promotes a Safety First mindset across all of our sites.
                </p>

                {/* Text Block 4 */}
                <p className="mb-12 leading-relaxed">
                    Many of our sites are home to multiple businesses performing different operations, but all involve common High Consequence Hazards that could cause serious injuries and fatalities, or significant harm to the environment.
                </p>

                {/* Pink Accent Box */}
                <div className={`bg-[#e21d60] text-white p-6 rounded-sm shadow-md`}>
                    <p className="font-bold leading-snug">
                        Our Accountability Framework helps everyone at a site to work together to manage High Consequence Hazardsin a co-ordinated and consistent way.
                    </p>
                </div>
            </div>
        </div>
    </SwipePage>
  </>   
  );
}