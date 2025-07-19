import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const Denim = () => {
  const denim = [
    "/Denim/d1.webp",
    "/Denim/d2.webp",
    "/Denim/d3.webp",
    "/Denim/d4.webp",
    "/Denim/d5.webp",
    "/Denim/d6.webp",
    "/Denim/d7.webp",
    "/Denim/d8.webp",
    "/Denim/d9.webp",
    "/Denim/d10.webp",
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + denim.length) % denim.length);
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % denim.length);
  };

  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="px-4 mx-auto mb-10 text-center max-w-7xl">
        <h2 className="text-4xl font-semibold text-slate-800">Denim Collection</h2>
        <p className="mt-2 text-lg text-slate-600">
          Explore our premium denim range designed for comfort, crafted for style.
        </p>
      </div>



      {/* <div className="overflow-hidden shadow-xl aspect-[3/4] w-full max-w-[320px] rounded-2xl">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="object-cover w-full h-full transition-transform duration-500 transform rounded-2xl hover:scale-105"
                    />
                  </div> */}



      {/* Masonry Grid */}
      <div className="gap-4 px-4 mx-auto space-y-4 max-w-7xl columns-2 sm:columns-3 md:columns-4">
        {denim.map((src, i) => (
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            key={i}
            src={src}
            alt={`Denim ${i + 1}`}
            onClick={() => setSelectedIndex(i)}
            className="w-full mb-4 transition-shadow duration-200 rounded-lg cursor-pointer break-inside-avoid hover:shadow-xl"
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
            {/* Stop propagation when clicking on image */}
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
                src={denim[selectedIndex]}
                alt="Denim full"
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

export default Denim;

      {/* Masonry Grid */}
     