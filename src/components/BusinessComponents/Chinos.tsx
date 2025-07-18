import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X as XIcon, ChevronLeft, ChevronRight } from "lucide-react";

const chinos = [
  "/Chinos/c1.webp",
  "/Chinos/c2.webp",
  "/Chinos/c3.webp",
  "/Chinos/c4.webp",
  "/Chinos/c5.webp",
  "/Chinos/c6.webp",
  "/Chinos/c7.webp",
  "/Chinos/c8.webp",
  "/Chinos/c9.webp",
  "/Chinos/c10.webp",
];

const Chinos = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + chinos.length) % chinos.length);
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % chinos.length);
  };

  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="px-4 mx-auto mb-10 text-center max-w-7xl">
        <h2 className="text-4xl font-semibold text-slate-800">Chinos Collection</h2>
        <p className="mt-2 text-lg text-slate-600">
          Elevate your everyday look with our versatile and stylish chinos.
        </p>
      </div>

      {/* Responsive Masonry Grid */}
      <div className="px-4 mx-auto space-y-4 max-w-7xl columns-2 sm:columns-2 md:columns-4 lg:columns-4">
        {chinos.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Chinos product ${i + 1}`}
            className="w-full rounded-md shadow-sm cursor-pointer break-inside-avoid"
            loading="lazy"
            whileHover={{ scale: 1.02 }}
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
                src={chinos[selectedIndex]}
                alt="Chinos full"
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

export default Chinos;






// import { useState } from "react";
// import { X as XIcon, ChevronLeft, ChevronRight } from "lucide-react";

// const chinos = [
//   "/Chinos/c1.webp",
//   "/Chinos/c2.webp",
//   "/Chinos/c3.webp",
//   "/Chinos/c4.webp",
//   "/Chinos/c5.webp",
//   "/Chinos/c6.webp",
//   "/Chinos/c7.webp",
//   "/Chinos/c8.webp",
//   "/Chinos/c9.webp",
//   "/Chinos/c10.webp",
// ];

// const Chinos = () => {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

//   const goPrev = () => {
//     if (selectedIndex === null) return;
//     setSelectedIndex((prev) => (prev! - 1 + chinos.length) % chinos.length);
//   };

//   const goNext = () => {
//     if (selectedIndex === null) return;
//     setSelectedIndex((prev) => (prev! + 1) % chinos.length);
//   };

//   return (
//     <section className="py-16 bg-white">
//       {/* Header */}
//       <div className="px-4 mx-auto mb-10 text-center max-w-7xl">
//         <h2 className="text-4xl font-semibold text-slate-800">Chinos Collection</h2>
//         <p className="mt-2 text-lg text-slate-600">
//           Elevate your everyday look with our versatile and stylish chinos.
//         </p>
//       </div>

//       {/* Masonry Grid with Image Zoom Inside Frame */}
//       <div className="px-4 mx-auto space-y-4 max-w-7xl columns-2 sm:columns-2 md:columns-4 lg:columns-4">
//         {chinos.map((src, i) => (
//           <div
//             key={i}
//             onClick={() => setSelectedIndex(i)}
//             className="relative mb-4 overflow-hidden shadow-md cursor-pointer rounded-2xl break-inside-avoid"
//           >
//             <img
//               src={src}
//               alt={`Chinos product ${i + 1}`}
//               className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Lightbox */}
//       {selectedIndex !== null && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-black/80 backdrop-blur-sm"
//           onClick={() => setSelectedIndex(null)}
//         >
//           <div
//             className="relative max-w-[90vw] max-h-[90vh] p-4"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedIndex(null)}
//               className="absolute p-2 bg-white rounded-full shadow top-2 right-2 hover:bg-slate-200"
//             >
//               <XIcon className="w-5 h-5 text-black" />
//             </button>

//             {/* Image */}
//             <img
//               src={chinos[selectedIndex]}
//               alt="Chinos full"
//               className="object-contain max-w-full max-h-full shadow-lg rounded-2xl"
//             />

//             {/* Left Arrow */}
//             <button
//               onClick={goPrev}
//               className="absolute left-[-3rem] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-slate-200"
//             >
//               <ChevronLeft className="w-5 h-5 text-black" />
//             </button>

//             {/* Right Arrow */}
//             <button
//               onClick={goNext}
//               className="absolute right-[-3rem] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-slate-200"
//             >
//               <ChevronRight className="w-5 h-5 text-black" />
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Chinos;
