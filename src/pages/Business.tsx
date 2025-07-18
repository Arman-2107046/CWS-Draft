import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Denim from "../components/BusinessComponents/Denim";
import Knitwear from "../components/BusinessComponents/Knitwear";
import Kidswear from "../components/BusinessComponents/Kidswear";
import Woven from "../components/BusinessComponents/Woven";
import Sweater from "../components/BusinessComponents/Sweater";
import Chinos from "../components/BusinessComponents/Chinos";
import Intimatewear from "../components/BusinessComponents/Intimatewear";

const Business = () => {
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

      {/* Our Business Area  */}

      <section className="px-6 py-24 bg-slate-50 text-slate-800">
        <div className="mx-auto max-w-7xl">
          {/* Section Headline */}
          <h2 className="mb-16 text-4xl font-bold text-center text-slate-900">
            Our Business Areas
          </h2>

          {/* Business Area 1 */}
          <div className="flex flex-col items-center justify-between gap-10 mb-16 md:flex-row">
            <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
              <img
                src="/businessPage/ApparelSourcing.webp"
                alt="Apparel Sourcing"
                className="object-cover w-full h-full shadow-lg rounded-xl"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-indigo-600">
                Apparel Sourcing
              </h3>
              <p className="text-lg leading-relaxed text-slate-700">
                <p>
                  At Cotton World Sourcing, we specialize in comprehensive
                  apparel sourcing solutions tailored for global fashion and
                  lifestyle brands. Leveraging our vast network of certified
                  manufacturers and suppliers across Asia, we ensure seamless
                  production from concept to delivery.
                </p>

                <p>
                  Our dedicated sourcing experts focus on delivering
                  high-quality garments at competitive prices, while adhering to
                  strict timelines and ethical standards. From fabric selection
                  and design consultation to quality control and logistics, we
                  manage every aspect of the supply chain with precision and
                  transparency.
                </p>

                <p>
                  With a deep understanding of market trends and a commitment to
                  innovation, we empower brands to scale efficiently, reduce
                  costs, and maintain excellence in product quality.
                </p>
              </p>
            </div>
          </div>

          {/* Business Area 2 */}
          <div className="flex flex-col items-center justify-between gap-10 mb-16 md:flex-row-reverse">
            <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
              <img
                src="/businessPage/TextileManufacturing3.webp"
                alt="Apparel Sourcing"
                className="object-cover w-full h-full shadow-lg rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-indigo-600">
                Textile Manufacturing
              </h3>

              <p className="text-lg leading-relaxed text-slate-700">
                <p>
                  At Cotton World Sourcing, we provide premium textile
                  manufacturing and export solutions for global apparel and home
                  textile brands. Partnering with certified mills and advanced
                  facilities in Bangladesh, we deliver high-quality woven and
                  knit fabrics that meet international standards.
                </p>

                <p>
                  Our expert team oversees every step, from yarn sourcing to
                  finishing, to ensure quality, sustainability, and compliance.
                  Whether you need organic cotton, technical textiles, or custom
                  fabrics, we offer scalable, reliable, and cost-effective
                  solutions.
                </p>

                <p>
                  With strong export logistics and on-time delivery, we are your
                  trusted partner for fashion retailers and private labels
                  worldwide.
                </p>
              </p>
            </div>
          </div>

          {/* Business Area 3 */}
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
              <img
                src="/businessPage/Sustainable2.webp"
                alt="Sustainability Consulting"
                className="object-cover w-full h-auto shadow-lg rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="mb-4 text-2xl font-semibold text-indigo-600">
                Sustainability Consulting
              </h3>

              <p className="text-lg leading-relaxed text-slate-700">
                <p>
                  At Cotton World Sourcing, sustainability is a core priority.
                  We help fashion and textile brands adopt eco-friendly
                  practices across sourcing and production.
                </p>
                <p>
                  From selecting certified materials to reducing environmental
                  impact, we guide clients through responsible manufacturing
                  with partners who meet global standards like GOTS, OEKO-TEX®,
                  and BCI.
                </p>
                <p>
                  Whether launching green product lines or improving operations,
                  we deliver practical solutions that align with your brand’s
                  environmental goals and build a cleaner future in fashion.
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>

      <h1 className="m-8 text-5xl font-extrabold text-center text-gray-700">
        Our Product Categories
      </h1>

      {/* Denim  */}

      <section id="denim">
        <Denim />
      </section>

      {/* Knitwear  */}
      <section id="knitwear">
        <Knitwear />
      </section>

      {/* Kidswear  */}

      <section id="kidswear">
        <Kidswear />
      </section>

      {/* Woven  */}

      <section id="woven">
        <Woven />
      </section>

      <section id="sweater">
        <Sweater />
      </section>

      <section id="chinos">
        <Chinos />
      </section>

      <section id="intimatewear">
        <Intimatewear />
      </section>

      {/* outro section for business  */}

      <section className="px-6 py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto text-center text-white max-w-7xl">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
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
