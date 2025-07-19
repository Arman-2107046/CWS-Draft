import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


import { useEffect } from "react";
import { lazy, Suspense } from "react";

// Business Components

const Denim = lazy(() => import("../components/BusinessComponents/Denim"));
const Knitwear = lazy(
  () => import("../components/BusinessComponents/Knitwear")
);
const Kidswear = lazy(
  () => import("../components/BusinessComponents/Kidswear")
);
const Woven = lazy(() => import("../components/BusinessComponents/Woven"));
const Sweater = lazy(() => import("../components/BusinessComponents/Sweater"));
const Chinos = lazy(() => import("../components/BusinessComponents/Chinos"));
const Intimatewear = lazy(
  () => import("../components/BusinessComponents/Intimatewear")
);


// import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Business = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = location.hash.replace("#", "");
    let retry = 0; // safety valve

    const scrollWhenStable = () => {
      const el = document.getElementById(id);
      if (!el) return;

      // Compute distance from top *at this moment*
      const top = el.getBoundingClientRect().top + window.scrollY;

      // If the position changes again within 200 ms we simply re-scroll
      const attemptScroll = () => {
        if (window.scrollY.toFixed() !== top.toFixed()) {
          window.scrollTo({ top, behavior: "smooth" });
        }
      };

      attemptScroll();

      // Retry a couple of times if images keep shifting
      if (++retry <= 10) {
        setTimeout(scrollWhenStable, 200);
      }
    };

    // Wait for the *entire* render + paint cycle
    const raf = requestAnimationFrame(() => setTimeout(scrollWhenStable, 100));

    return () => cancelAnimationFrame(raf);
  }, [location]);

  const businessAreas = [
    {
      title: "Apparel Sourcing",
      description: [
        "At Cotton World Sourcing, we specialize in comprehensive apparel sourcing solutions tailored for global fashion and lifestyle brands. Leveraging our vast network of certified manufacturers and suppliers across Asia, we ensure seamless production from concept to delivery.",
        "Our dedicated sourcing experts focus on delivering high-quality garments at competitive prices, while adhering to strict timelines and ethical standards. From fabric selection and design consultation to quality control and logistics, we manage every aspect of the supply chain with precision and transparency.",
        "With a deep understanding of market trends and a commitment to innovation, we empower brands to scale efficiently, reduce costs, and maintain excellence in product quality.",
      ],
      image: "/businessPage/ApparelSourcing.webp",
      reverse: false,
    },
    {
      title: "Textile Manufacturing",
      description: [
        "At Cotton World Sourcing, we provide premium textile manufacturing and export solutions for global apparel and home textile brands. Partnering with certified mills and advanced facilities in Bangladesh, we deliver high-quality woven and knit fabrics that meet international standards.",
        "Our expert team oversees every step, from yarn sourcing to finishing, to ensure quality, sustainability, and compliance. Whether you need organic cotton, technical textiles, or custom fabrics, we offer scalable, reliable, and cost-effective solutions.",
        "With strong export logistics and on-time delivery, we are your trusted partner for fashion retailers and private labels worldwide.",
      ],
      image: "/businessPage/TextileManufacturing3.webp",
      reverse: true,
    },
    {
      title: "Sustainability Consulting",
      description: [
        "At Cotton World Sourcing, sustainability is a core priority. We help fashion and textile brands adopt eco-friendly practices across sourcing and production.",
        "From selecting certified materials to reducing environmental impact, we guide clients through responsible manufacturing with partners who meet global standards like GOTS, OEKO-TEX®, and BCI.",
        "Whether launching green product lines or improving operations, we deliver practical solutions that align with your brand’s environmental goals and build a cleaner future in fashion.",
      ],
      image: "/businessPage/Sustainable2.webp",
      reverse: false,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero section for business  */}
      <section className="relative h-[90vh] overflow-hidden text-gray-700 bg-slate-200 font-dmSerifText">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[1] blur-md"
          style={{
            backgroundImage: "url('/businessPage/hero5.webp')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate/70 to-gray/90" />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center font-dm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="space-y-1 text-4xl sm:text-6xl lg:text-7xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div> EMPOWERING FASHION </div>
            <div>GUIDED BY</div>
            <div>PRECISION AND PASSION</div>
          </motion.h1>
        </motion.div>
      </section>

      {/* intro section  */}
      <section className="px-4 py-24 sm:px-6 lg:px-12 bg-slate-50 text-slate-800 ">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-3xl font-semibold text-center sm:text-4xl text-slate-900">
            Our Business Areas
          </h2>

          <div className="p-10 space-y-24">
            {businessAreas.map((area, index) => (
              <div
                key={index}
                className={`flex flex-col-reverse items-center gap-10 md:gap-x-12 ${
                  area.reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Image Block */}
                <div className="flex justify-center w-full md:w-1/2">
                  <div className="overflow-hidden shadow-xl aspect-[3/4] w-full max-w-[320px] rounded-2xl">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="object-cover w-full h-full transition-transform duration-500 transform rounded-2xl hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text Block */}
                <div className="w-full text-center md:w-1/2 md:text-left">
                  <h3 className="mb-4 text-2xl font-semibold text-indigo-600 sm:text-3xl">
                    {area.title}
                  </h3>
                  <div className="space-y-4 text-base leading-relaxed sm:text-lg text-slate-700">
                    {area.description.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Business Area  */}
      <h1 className="m-8 text-5xl font-semibold text-center text-slate-800">
        Our Product Categories
      </h1>

      <section id="denim">
        <Suspense
          fallback={
            <div className="py-10 text-center text-slate-500">
              Loading Denim...
            </div>
          }
        >
          <Denim />
        </Suspense>
      </section>

      <section id="knitwear">
        <Suspense
          fallback={
            <div className="py-10 text-center text-slate-500">
              Loading Knitwear...
            </div>
          }
        >
          <Knitwear />
        </Suspense>
      </section>

      <section id="kidswear">
        <Suspense
          fallback={
            <div className="py-10 text-center text-slate-500">
              Loading Kidswear...
            </div>
          }
        >
          <Kidswear />
        </Suspense>
      </section>

      <section id="chinos">
        <Suspense
          fallback={
            <div className="py-10 text-center text-slate-500">
              Loading Chinos...
            </div>
          }
        >
          <Chinos />
        </Suspense>
      </section>

      <section id="woven" style={{ scrollMarginTop: "100px" }}>
        <Suspense
          fallback={
            <div className="py-10 text-center text-slate-500">
              Loading Woven...
            </div>
          }
        >
          <Woven />
        </Suspense>
      </section>

      <section id="sweater">
        <Suspense
          fallback={
            <div className="py-10 text-center text-slate-500">
              Loading Sweater...
            </div>
          }
        >
          <Sweater />
        </Suspense>
      </section>

      <section id="intimatewear">
        <Suspense
          fallback={
            <div className="py-10 text-center text-slate-500">
              Loading Intimatewear...
            </div>
          }
        >
          <Intimatewear />
        </Suspense>
      </section>

      {/* outro section for business  */}

      <section className="px-6 py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto text-center text-white max-w-7xl">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold text-bold transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
          >
            Delivering Excellence in Every Stitch
          </motion.h2>

          {/* Intro paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto mt-6 text-lg text-slate-300"
          >
            At Cotton World Sourcing, our expertise goes beyond garment
            sourcing. With a foundation built on trust, quality, and
            transparency, we proudly serve global clients across a wide range of
            apparel categories. From fast fashion to premium collections, we
            ensure every piece reflects our commitment to precision,
            reliability, and long-term partnership.
          </motion.p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Business;
