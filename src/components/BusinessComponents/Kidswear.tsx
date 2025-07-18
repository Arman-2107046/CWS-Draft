const Kids = [
  "/Kidswear/k1.jpg",
  "/Kidswear/k2.jpg",
  "/Kidswear/k3.jpg",
  "/Kidswear/k4.jpg",
  "/Kidswear/k5.jpg",
  "/Kidswear/k6.jpg",
  "/Kidswear/k7.jpg",
  "/Kidswear/k8.jpg",
  "/Kidswear/k9.jpg",
  "/Kidswear/k10.jpg",
];

const Kidswear = () => {
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="px-4 mx-auto mb-10 text-center max-w-7xl">
        <h2 className="text-4xl font-bold text-slate-800">Kidswear Collection</h2>
        <p className="mt-2 text-lg text-slate-600">
          Comfortable, colorful, and playful clothing for babies, toddlers, and children.
        </p>
      </div>

      {/* Responsive Masonry Grid */}
      <div className="px-4 mx-auto space-y-4 max-w-7xl columns-2 sm:columns-3 md:columns-4 lg:columns-4">
        {Kids.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Kidswear product ${i + 1}`}
            className="w-full rounded-md shadow-sm break-inside-avoid"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default Kidswear;
