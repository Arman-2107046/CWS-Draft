

// components/PremiumGallery.tsx
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X as XIcon, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/Home/introImages/img1.webp",
  "/Home/introImages/img2.webp",
  "/Home/introImages/img3.webp",
  "/Home/introImages/img4.webp",
  "/Home/introImages/img5.webp",
  "/Home/introImages/img6.webp",
  "/Home/introImages/img7.webp",
  "/Home/introImages/img8.webp",
  "/Home/introImages/img9.webp",
  "/Home/introImages/img10.webp",
  "/Home/introImages/img11.webp",
  "/Home/introImages/img12.webp",
  "/Home/introImages/img13.webp",
  "/Home/introImages/img14.webp",
  "/Home/introImages/img15.webp",
  "/Home/introImages/img16.webp",
  "/Home/introImages/img17.webp",
  "/Home/introImages/img18.webp",
  "/Home/introImages/img19.webp",
  "/Home/introImages/img20.webp",
];

export default function PremiumGallery() {
  const [index, setIndex] = useState<number | null>(null);

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
    <div className="mt-[3rem]">
      {/* Masonry Layout */}
      <div className="gap-4 p-4 bg-white columns-2 sm:columns-3 md:columns-4 lg-columns-4">
        {images.map((src, i) => (
          <motion.div
            key={src}
            className="mb-4 overflow-hidden shadow-md cursor-pointer rounded-xl break-inside-avoid"
            whileHover={{ scale: 1.02, y: -4 }}
            onClick={() => setIndex(i)}
          >
            <img
              src={src}
              alt=""
              className="object-cover w-full h-auto rounded-xl"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={() => setIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white"
              onClick={() => setIndex(null)}
            >
              <XIcon size={32} />
            </button>

            <button
              className="absolute left-4 text-white/60 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i! - 1 + images.length) % images.length);
              }}
            >
              <ChevronLeft size={40} />
            </button>
            <button
              className="absolute right-4 text-white/60 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i! + 1) % images.length);
              }}
            >
              <ChevronRight size={40} />
            </button>

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
    </div>
  );
}
