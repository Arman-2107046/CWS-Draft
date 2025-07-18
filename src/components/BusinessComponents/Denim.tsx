const Denim = () => {
  const denim = [
    "/Denim/d1.jpg",
    "/Denim/d2.jpg",
    "/Denim/d3.jpg",
    "/Denim/d4.jpg",
    "/Denim/d5.jpg",
    "/Denim/d6.jpg",
    "/Denim/d7.jpg",
    "/Denim/d8.jpg",
    "/Denim/d9.jpg",
    "/Denim/d10.jpg",
  ];

  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="px-4 mx-auto mb-10 text-center max-w-7xl">
        <h2 className="text-4xl font-bold text-slate-800">Denim Collection</h2>
        <p className="mt-2 text-lg text-slate-600">
          Explore our premium denim range — designed for comfort, crafted for style.
        </p>
      </div>

      {/* Responsive Masonry Grid */}
      <div className="gap-4 px-4 mx-auto space-y-4 max-w-7xl columns-2 sm:columns-3 md:columns-4 lg:columns-4">
        {denim.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Denim product ${i + 1}`}
            className="w-full rounded-md shadow-sm break-inside-avoid"
          />
        ))}
      </div>
    </section>
  );
};

export default Denim;
