import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import { useEffect } from "react";
import SustainabilityBody from "../components/SustainabilityBody";

// Define the Sustainability component
const Sustainability = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    // Main container with background color and text color
    <div className="text-gray-800 bg-slate-100">
      {/* Include the Navbar component */}
      <Navbar />
      {/* Hero section with background image and text */}

      <section className="relative flex items-center justify-center px-6 overflow-hidden text-white bg-slate-200 font-dmSerifText h-[90vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[1] opacity-90 blur-[5px]"
          style={{
            backgroundImage: "url('/sustainabilityImages/hero4.webp')",
          }}
        />

        {/* Optional Gradient Overlay (for better contrast) */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Hero Content with motion animations */}
        <motion.div
          className="relative z-10 w-full max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="space-y-1 text-4xl font-bold sm:text-6xl lg:text-7xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div>SHAPING A</div>
            <div>GREENER WORLD</div>
            <div>WITH INNOVATION</div>
          </motion.h1>

          {/* Optional Paragraph */}
          {/* <motion.p
      className="mt-6 text-lg sm:text-xl lg:text-2xl text-slate-100"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      Trusted Apparel Exporter
    </motion.p> */}
        </motion.div>
      </section>

      {/* INTRO SECTION   */}
      <section className="px-4 py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-semibold leading-tight text-gray-800 sm:text-5xl">
            Sustainable Practices for a Better Future
          </h1>
          <p className="mx-auto text-lg leading-relaxed text-gray-600 sm:text-xl">
            At Cotton World Sourcing, sustainability isn't just a practice, it's
            a principle woven into every thread of our operations. We lead with
            innovation, responsibility, and care, continuously reducing our
            environmental footprint through conscious sourcing and efficient
            production. Our commitment goes beyond business; it’s a promise to
            protect the planet, empower communities, and shape a better future
            for generations to come.
          </p>
        </div>
      </section>

      <section>
        <SustainabilityBody />
      </section>

      {/* <div className="h-12 bg-gradient-to-b from-gray-100 to-white" /> */}

      {/* FINISHING PARA BEFORE FOOTER  */}

      <section className="px-6 py-20 bg-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="mb-6 text-4xl font-semibold leading-tight text-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Our Sustainable Future Starts Today
          </motion.h2>

          <motion.p
            className="mb-8 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            At Cotton World Sourcing, sustainability is not a destination, it's
            a continuous journey. Together with our partners and clients, we are
            redefining how textiles can serve both people and the planet.
          </motion.p>

          {/* <motion.button
            className="px-8 py-3 mt-4 text-lg font-medium text-white transition bg-green-700 rounded-full shadow hover:bg-green-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Our Initiatives
          </motion.button> */}
        </div>
      </section>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
};

// Export the Sustainability component as the default export
export default Sustainability;
