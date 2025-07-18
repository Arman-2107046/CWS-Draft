
  

const Sweater = () => {
    
    
    const sweater = [
    "/Sweater/s1.jpg",
    "/Sweater/s2.jpg",
    "/Sweater/s3.jpg",
    "/Sweater/s4.jpg",
    "/Sweater/s5.jpg",
    "/Sweater/s6.jpg",
    "/Sweater/s7.jpg",
    "/Sweater/s8.jpg",
    "/Sweater/s9.jpg",
    "/Sweater/s10.jpg",
  ];




    
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="px-4 mx-auto mb-10 text-center max-w-7xl">
        <h2 className="text-4xl font-bold text-slate-800">Sweater Collection</h2>
        <p className="mt-2 text-lg text-slate-600">
          Stay warm and stylish with our cozy sweater designs.
        </p>
      </div>

      {/* Responsive Masonry Grid */}
      <div className="px-4 mx-auto space-y-4 max-w-7xl columns-2 sm:columns-3 md:columns-4 lg:columns-4">
        {sweater.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Sweater product ${i + 1}`}
            className="w-full rounded-md shadow-sm break-inside-avoid"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default Sweater;
