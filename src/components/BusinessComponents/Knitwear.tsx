import React from "react";

const knit = [
  "/Knitwear/k1.jpg",
  "/Knitwear/k2.jpg",
  "/Knitwear/k3.jpg",
  "/Knitwear/k4.jpg",
  "/Knitwear/k5.jpg",
  "/Knitwear/k6.jpg",
  "/Knitwear/k7.jpg",
  "/Knitwear/k8.jpg",
  "/Knitwear/k9.jpg",
  "/Knitwear/k10.jpg",
];

const Knitwear = () => {
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="px-4 mx-auto mb-10 text-center max-w-7xl">
        <h2 className="text-4xl font-bold text-slate-800">Knitwear Collection</h2>
        <p className="mt-2 text-lg text-slate-600">
          Discover our comfortable and stylish knitwear products crafted with care.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="gap-4 px-4 mx-auto space-y-4 max-w-7xl columns-1 sm:columns-2 md:columns-3">
        {knit.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Knitwear product ${i + 1}`}
            className="w-full mb-4 rounded-lg shadow-md break-inside"
          />
        ))}
      </div>
    </section>
  );
};

export default Knitwear;
