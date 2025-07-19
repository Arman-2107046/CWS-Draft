import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const Kids = [
  "/Kidswear/kid1.webp",
  "/Kidswear/kid2.webp",
  "/Kidswear/kid3.webp",
  "/Kidswear/kid4.webp",
  "/Kidswear/kid5.webp",
  "/Kidswear/kid6.webp",
  "/Kidswear/kid7.webp",
  "/Kidswear/kid8.webp",
  "/Kidswear/kid9.webp",
  "/Kidswear/kid10.webp",
];

const Kidswear = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + Kids.length) % Kids.length);
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % Kids.length);
  };

  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="px-4 mx-auto mb-10 text-center max-w-7xl">
        <h2 className="text-4xl font-semibold text-slate-800">Kidswear Collection</h2>
        <p className="mt-2 text-lg text-slate-600">
          Comfortable, colorful, and playful clothing for babies, toddlers, and children.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="px-4 mx-auto space-y-4 max-w-7xl columns-2 sm:columns-3 md:columns-4 lg:columns-4">
        {Kids.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Kidswear product ${i + 1}`}
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
                <X className="w-5 h-5 text-black" />
              </button>

              {/* Image */}
              <img
                src={Kids[selectedIndex]}
                alt="Kidswear full"
                className="max-w-[90vw] max-h-[90vh] rounded shadow-xl"
              />

              {/* Left Arrow */}
              <button
                onClick={goPrev}
                className="absolute left-[-3rem] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-slate-200"
              >
                <ArrowLeft className="w-5 h-5 text-black" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={goNext}
                className="absolute right-[-3rem] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-slate-200"
              >
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Kidswear;
