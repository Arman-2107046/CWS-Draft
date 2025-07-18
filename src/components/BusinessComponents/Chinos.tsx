const Chinos = () => {
    const chinos = [
      "/Chinos/c1.jpg",
      "/Chinos/c2.jpg",
      "/Chinos/c3.jpg",
      "/Chinos/c4.jpg",
      "/Chinos/c5.jpg",
      "/Chinos/c6.jpg",
      "/Chinos/c7.jpg",
      "/Chinos/c8.jpg",
      "/Chinos/c9.jpg",
      "/Chinos/c10.jpg",
    ];
  
    return (
      <section className="py-16 bg-white">
        {/* Header */}
        <div className="px-4 mx-auto mb-10 text-center max-w-7xl">
          <h2 className="text-4xl font-bold text-slate-800">Chinos Collection</h2>
          <p className="mt-2 text-lg text-slate-600">
            Elevate your everyday look with our versatile and stylish chinos.
          </p>
        </div>
  
        {/* Responsive Masonry Grid */}
        <div className="px-4 mx-auto space-y-4 max-w-7xl columns-1 sm:columns-2 md:columns-3 lg:columns-4">
          {chinos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Chinos product ${i + 1}`}
              className="w-full rounded-md shadow-sm break-inside-avoid"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default Chinos;
  