const woven = [
  "/Woven/w1.jpg",
  "/Woven/w2.jpg",
  "/Woven/w3.jpg",
  "/Woven/w4.jpg",
  "/Woven/w5.jpg",
  "/Woven/w6.jpg",
  "/Woven/w7.jpg",
  "/Woven/w8.jpg",
  "/Woven/w9.jpg",
  "/Woven/w10.jpg",
];

const Woven = () => {
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="px-4 mx-auto mb-10 text-center max-w-7xl">
        <h2 className="text-4xl font-bold text-slate-800">Woven Collection</h2>
        <p className="mt-2 text-lg text-slate-600">
          Explore our premium collection of woven garments crafted with
          exceptional quality and precision.
        </p>
      </div>

      {/* Responsive Masonry Grid */}
      <div className="px-4 mx-auto space-y-4 max-w-7xl columns-2 sm:columns-3 md:columns-4 lg:columns-4">
        {woven.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Woven product ${i + 1}`}
            className="w-full rounded-md shadow-sm break-inside-avoid"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default Woven;
