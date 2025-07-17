// components/PremiumGallery.tsx
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X as XIcon, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/Home/introImages/img11.jpg",
  //   '/Home/introImages/img22.jpg',
  //   '/Home/introImages/img33.jpg',
  "/Home/introImages/img44.jpg",
  "/Home/introImages/img 55.jpg",
  "/Home/introImages/img66.jpg",
  "/Home/introImages/img77.jpg",
];

export default function HomeIntro() {
  const [index, setIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  /* keyboard navigation inside light-box */
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i! - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i! + 1) % images.length);
    },
    [index]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <>
      {/* HORIZONTAL SCROLLING STRIP */}
      {/* <div
        ref={galleryRef}
        className="flex justify-around gap-4 px-4 py-6 overflow-x-auto bg-white snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        {images.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            className="flex-shrink-0 object-cover w-64 transition-shadow shadow-xl h-80 rounded-xl snap-center hover:shadow-2xl"
            whileHover={{ scale: 1.05, y: -4 }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div> */}

      <div
        ref={galleryRef}
        className="flex justify-around gap-4 px-4 py-6 overflow-x-auto bg-white snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        {images.map((src, i) => (
          <motion.div
            key={src}
            className="flex-shrink-0 overflow-hidden shadow-xl cursor-pointer w-60 h-80 rounded-xl hover:shadow-2xl snap-center"
            whileHover={{ scale: 1.05, y: -4 }}
            onClick={() => setIndex(i)}
          >
            <img
              src={src}
              alt=""
              className="object-cover object-center w-full h-full"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>

      {/* FULL-SCREEN LIGHT-BOX */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={() => setIndex(null)}
          >
            {/* CLOSE BUTTON */}
            <button
              className="absolute transition top-4 right-4 text-white/60 hover:text-white"
              aria-label="Close"
              onClick={() => setIndex(null)}
            >
              <XIcon size={32} />
            </button>

            {/* PREV / NEXT */}
            <button
              className="absolute transition left-4 text-white/60 hover:text-white"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i! - 1 + images.length) % images.length);
              }}
            >
              <ChevronLeft size={40} />
            </button>
            <button
              className="absolute transition right-4 text-white/60 hover:text-white"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i! + 1) % images.length);
              }}
            >
              <ChevronRight size={40} />
            </button>

            {/* IMAGE */}
            <motion.img
              key={index}
              src={images[index]}
              alt=""
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 
      <div className="mt-12 text-center">
          <motion.a
            href="/sustainability"
            className="inline-block px-8 py-3 text-lg font-semibold text-white transition-all duration-300 bg-green-600 rounded-full shadow-md hover:bg-green-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Know More About Our Sustainability
          </motion.a>
        </div> */}
    </>
  );
}
