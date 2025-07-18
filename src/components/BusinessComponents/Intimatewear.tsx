const IntimatewearList = [
    "/Intimatewear/i1.jpg",
    "/Intimatewear/i2.jpg",
    "/Intimatewear/i3.jpg",
    "/Intimatewear/i4.jpg",
    "/Intimatewear/i5.jpg",
    "/Intimatewear/i6.jpg",
    "/Intimatewear/i7.jpg",
    "/Intimatewear/i8.jpg",
    "/Intimatewear/i9.jpg",
    "/Intimatewear/i10.jpg",
  ];
  
  const Intimatewear = () => {
    return (
      <section className="py-16 bg-white">
        {/* Header */}
        <div className="px-4 mx-auto mb-10 text-center max-w-7xl">
          <h2 className="text-4xl font-bold text-slate-800">Intimatewear Collection</h2>
          <p className="mt-2 text-lg text-slate-600">
            Elegant, soft, and breathable innerwear designed with comfort and quality in mind.
          </p>
        </div>
  
        {/* Responsive Masonry Grid */}
        <div className="px-4 mx-auto space-y-4 max-w-7xl columns-2 sm:columns-3 md:columns-4 lg:columns-4">
          {IntimatewearList.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Intimatewear product ${i + 1}`}
              className="w-full rounded-md shadow-sm break-inside-avoid"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default Intimatewear;
  