import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X as XIcon, ChevronLeft, ChevronRight } from "lucide-react";

const woven = [
  "/Woven/w1.webp",
  "/Woven/w2.webp",
  "/Woven/w3.webp",
  "/Woven/w4.webp",
  "/Woven/w5.webp",
  "/Woven/w6.webp",
  "/Woven/w7.webp",
  "/Woven/w8.webp",
  "/Woven/w9.webp",
  "/Woven/w10.webp",
];

const Woven = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + woven.length) % woven.length);
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % woven.length);
  };

  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="px-4 mx-auto mb-10 text-center max-w-7xl">
        <h2 className="text-4xl font-bold text-slate-800">Woven Collection</h2>
        <p className="mt-2 text-lg text-slate-600">
          Explore our premium collection of woven garments crafted with exceptional quality and precision.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="px-4 mx-auto space-y-4 max-w-7xl columns-2 sm:columns-3 md:columns-4 lg:columns-4">
        {woven.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Woven product ${i + 1}`}
            className="w-full rounded-md shadow-sm cursor-pointer break-inside-avoid"
            loading="lazy"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute p-2 bg-white rounded-full shadow top-2 right-2 hover:bg-slate-200"
              >
                <XIcon className="w-5 h-5 text-black" />
              </button>

              {/* Image */}
              <img
                src={woven[selectedIndex]}
                alt="Woven full"
                className="max-w-[90vw] max-h-[90vh] rounded shadow-xl"
              />

              {/* Left Arrow */}
              <button
                onClick={goPrev}
                className="absolute left-[-3rem] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-slate-200"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={goNext}
                className="absolute right-[-3rem] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-slate-200"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Woven;
