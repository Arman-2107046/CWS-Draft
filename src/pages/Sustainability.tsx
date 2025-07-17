import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// Define the Sustainability component
const Sustainability = () => {
  return (
    // Main container with background color and text color
    <div className="text-gray-800 bg-slate-100">
      {/* Include the Navbar component */}
      <Navbar />
      {/* Hero section with background image and text */}

      <section
        className="relative flex items-center justify-center px-6 overflow-hidden text-white bg-slate-200 font-dmSerifText h-[90vh]"
      >
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

      {/* HERO SECTION ENDED  */}
      <section className="px-4 py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-800 sm:text-5xl">
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

      <div className="h-12 bg-gradient-to-b from-gray-100 to-white" />

      {/* ECO FRIENDLY  */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col items-center gap-12 md:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Text Column */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900">
                Eco-Friendly Materials
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                At Premium Textile, we prioritize sustainable and recycled
                materials across all production stages. By minimizing waste and
                conserving resources, we reduce our environmental footprint
                while delivering quality without compromise.
              </p>
            </motion.div>

            {/* Image Column */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.03]">
                <img
                  src="/sustainabilityImages/eco.jpg"
                  alt="Eco-Friendly Materials"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 transition duration-300 bg-black/10 hover:bg-black/20 rounded-3xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="h-12 bg-gradient-to-b from-white to-green-50" />

      {/* ENERGY EFFICIENCY  */}

      <section className="px-6 py-24 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col items-center gap-12 md:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image Column */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.03]">
                <img
                  src="/sustainabilityImages/energy.jpg"
                  alt="Energy Efficiency"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 transition duration-300 bg-black/10 hover:bg-black/20 rounded-3xl" />
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900">
                Energy Efficiency
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Our facilities are equipped with energy-efficient technologies
                to minimize energy consumption and reduce greenhouse gas
                emissions. Through intelligent energy management, we ensure
                sustainable operations with minimal environmental impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="h-12 bg-gradient-to-b from-green-50 to-white" />

      {/* WASTE REDUCTION  */}

      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col items-center gap-12 md:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Text Column */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900">
                Waste Reduction
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                We implement comprehensive waste management programs to recycle
                and repurpose materials, aiming for zero waste in our
                operations. Through smart resource planning and responsible
                disposal, we ensure a cleaner, circular production cycle.
              </p>
            </motion.div>

            {/* Image Column */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.03]">
                <img
                  src="/sustainabilityImages/waste-reduction.webp"
                  alt="Waste Reduction"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 transition duration-300 bg-black/10 hover:bg-black/20 rounded-3xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <div className="h-12 bg-gradient-to-b from-white to-teal-50" />

      {/* WATER CONSERVATION  */}

      <section className="px-6 py-24 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col items-center gap-12 md:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image Column */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.03]">
                <img
                  src="/sustainabilityImages/water2.jpeg" // replace with your image path
                  alt="Water Conservation"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 transition duration-300 bg-black/10 hover:bg-black/20 rounded-3xl" />
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900">
                Water Conservation
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Through advanced water treatment and recycling systems, we
                significantly reduce water usage in our manufacturing processes.
                Our closed-loop water systems ensure sustainability without
                compromising production quality.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ETHICAL WORKFORCE  */}
      {/* ETHICAL WORKFORCE */}

      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col-reverse items-center gap-12 md:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Text Column */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900">
                Ethical Workforce
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                We are committed to fair labor practices, ensuring safe working
                environments, fair wages, and respect for all employees. Our
                workforce is the heart of our success, and we strive to uplift
                every individual through empowerment and equity.
              </p>
            </motion.div>

            {/* Image Column */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.03]">
                <img
                  src="/sustainabilityImages/ethics2.jpg"
                  alt="Ethical Workforce"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 transition duration-300 bg-black/10 hover:bg-black/20 rounded-3xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINISHING PARA BEFORE FOOTER  */}

      <section className="px-6 py-20 bg-green-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="mb-6 text-4xl font-bold leading-tight text-gray-800"
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
