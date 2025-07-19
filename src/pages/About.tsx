import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import MissionVisionSection from "../components/MissionVisionSection";

import { useEffect } from "react";




const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  


  return (
    <div>
      <Navbar />
      {/* HERO SECTION  */}

      <section className="relative h-[90vh] overflow-hidden text-[#60646C] bg-slate-200 font-dmSerifText">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.4]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate/70 to-gray/90" />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center font-dm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Logo with animation */}
          <motion.img
            src="/aboutImages/image.webp" // Replace with your logo path
            alt="Cotton World Sourcing Logo"
            className="object-contain w-32 mb-8 sm:w-40 lg:w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Heading */}
          <motion.h1
            className="space-y-1 text-4xl sm:text-6xl lg:text-7xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div>COTTON</div>
            <div>WORLD</div>
            <div>SOURCING</div>
          </motion.h1>
        </motion.div>
      </section>

      {/* About Company  */}
      <section className="flex flex-col items-center justify-between gap-12 px-6 py-16 mx-auto bg-white max-w-7xl md:flex-row">
        {/* Left: Image */}
        <div className="w-full max-w-lg overflow-hidden transition-transform duration-500 shadow-lg cursor-pointer md:flex-1 rounded-xl hover:scale-105">
          <img
            src="/aboutImages/about side.webp"
            alt="Company Building"
            className="object-cover w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Right: Company Profile */}
        <div className="w-full max-w-xl font-sans text-gray-800 md:flex-1">
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-gray-900">
            About Cotton World Sourcing
          </h2>

          <div>
            <p className="mb-6 text-lg leading-relaxed">
              Cotton World Sourcing is a ready-made garments buying house and
              exporter based in Bangladesh. We specialize in sourcing both local
              and imported fabrics and trims to ensure fast production and
              on-time delivery.
            </p>
            <br />

            <p className="mb-6 text-lg leading-relaxed">
              Our experienced team manages dedicated merchandisers for Woven,
              Knit, and Sweater categories. We supply a wide range of products
              including T Shirts, Polo Shirts, Sweatshirts, Shirts, Trousers,
              Jackets, Skirts, Towels, and Denim items.
            </p>
            <br />

            <p className="text-lg leading-relaxed">
              We cater to both large and small orders, starting from 1,000
              pieces per color. Our top priority is quality and customer
              satisfaction. Each factory has a dedicated QC, with daily visits
              from our QC In-charge and merchandisers.
            </p>
            <br />
            <p className="text-lg leading-relaxed">
              Final inspections are overseen by our Managing Director to ensure
              quality before shipment. We offer competitive pricing, reliable
              service, and consistent quality , making us your trusted sourcing
              partner.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision Section  */}

      <MissionVisionSection />

      {/* About Company  */}
      <section className="flex flex-col items-center justify-between gap-12 px-6 py-16 mx-auto bg-white max-w-7xl md:flex-row">
        {/* Left: Image */}

        {/* Right: Company Profile */}
        <div className="w-full max-w-xl font-sans text-gray-800 md:flex-1">
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-gray-900">
            Our Commitment to Quality & Service Excellence
          </h2>

          <div>
            <p className="mb-6 text-lg leading-relaxed">
              Cotton World Sourcing is a ready-made garments buying house and
              exporter based in Bangladesh. We specialize in sourcing both local
              and imported fabrics and trims to ensure fast production and
              on-time delivery.
            </p>
            <br />

            <p className="mb-6 text-lg leading-relaxed">
              Our experienced team manages dedicated merchandisers for Woven,
              Knit, and Sweater categories. We supply a wide range of products
              including T Shirts, Polo Shirts, Sweatshirts, Shirts, Trousers,
              Jackets, Skirts, Towels, and Denim items.
            </p>
            <br />

            <p className="text-lg leading-relaxed">
              We cater to both large and small orders, starting from 1,000
              pieces per color. Our top priority is quality and customer
              satisfaction. Each factory has a dedicated QC, with daily visits
              from our QC In-charge and merchandisers.
            </p>
            <br />
            <p className="text-lg leading-relaxed">
              Final inspections are overseen by our Managing Director to ensure
              quality before shipment. We offer competitive pricing, reliable
              service, and consistent quality , making us your trusted sourcing
              partner.
            </p>
          </div>
        </div>

        <div className="w-full max-w-lg overflow-hidden transition-transform duration-500 shadow-lg cursor-pointer md:flex-1 rounded-xl hover:scale-105">
          <img
            src="/aboutImages/service.webp"
            alt="Company Building"
            className="object-cover w-full h-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* Message of MD  */}
      <section className="px-6 py-24 bg-white">
        <div className="grid items-center max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="/aboutImages/MD.webp"
              alt="Managing Director"
              className="object-cover shadow-lg rounded-2xl w-72 h-85"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl font-semibold text-slate-800 sm:text-4xl">
              Message from the Managing Director
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              It’s my pleasure to welcome you to our journey in the textile
              industry. I’m Md. Mosharraf Hossain, a Textile Engineer with over
              a decade of experience working with top European, American, and Australian
              buyers. In 2025, I founded Cotton World Sourcing with a vision to
              provide trusted, high-quality garment sourcing solutions, focusing
              on competitive pricing, timely delivery, and strict quality
              control. Backed by a skilled team, we manage Woven, Knit, and
              Sweater orders with care and precision. I believe in long-term
              partnerships built on trust, performance, and mutual growth. Join
              us in shaping a better future for textile sourcing.
            </p>

            <div className="mt-8">
              <p className="text-xl font-semibold text-slate-800">
                Md. Mosharraf Hossain{" "}
              </p>
              <p className="text-slate-500">Managing Director</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
