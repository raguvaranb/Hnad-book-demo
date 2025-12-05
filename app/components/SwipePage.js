"use client";
 
import { useSwipeable } from "react-swipeable";
import { useRouter, usePathname } from "next/navigation";
import { pages } from "@/routes";
import { motion, AnimatePresence } from "framer-motion";
 
export default function SwipePage({ children }) {
  const router = useRouter();
  const pathname = usePathname();
 
  const currentIndex = pages.indexOf(pathname);
  const nextRoute = pages[currentIndex + 1];
  const prevRoute = pages[currentIndex - 1];
 
  // swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => nextRoute && router.push(nextRoute),
    onSwipedRight: () => prevRoute && router.push(prevRoute),
    preventScrollOnSwipe: true,
    trackTouch: true,
    delta: 15,
  });
 
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        {...handlers}
        className="min-h-screen flex flex-col touch-pan-y"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{
          duration: 0.35,
          ease: [0.22, 0.61, 0.36, 1],
        }}
      >
        
 
        {/* content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}