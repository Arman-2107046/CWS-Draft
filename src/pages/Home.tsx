// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";

import { motion } from "framer-motion";

// Home page component
const Home = () => {
  // const businessAreas = [
  //   {
  //     title: "Knitwear",
  //     description:
  //       "Specializing in t-shirts, sweatshirts, leggings, babywear, and sportswear made from high-quality knit fabrics.",
  //     image: "images/backgrounds/bg1.png",
  //   },
  //   {
  //     title: "Woven Garments",
  //     description:
  //       "Offering shirts, trousers, jackets, uniforms, and fashion dresses made from structured woven fabrics.",
  //     image: "images/backgrounds/bg1.png",
  //   },
  //   {
  //     title: "Denim",
  //     description:
  //       "Expertise in denim jeans, jackets, skirts, and overalls with various washes, treatments, and finishes.",
  //     image: "images/backgrounds/bg1.png",
  //   },
  //   {
  //     title: "Kidswear",
  //     description:
  //       "Comfortable and colorful clothing for babies, toddlers, and children including rompers, sets, and schoolwear.",
  //     image: "images/backgrounds/bg1.png",
  //   },
  // ];

  return (
    <div className="bg-slate-100">
      {/* HERO SECTION WITH SEQUENTIAL BG  */}

      <Navbar />

      <section className="relative h-[90vh] overflow-hidden text-[#60646C] bg-slate-200 font-dmSerifText">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
          style={{
            backgroundImage: "url('/bg-images/hero-img1.jpg')",
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
            <div>CRAFTED WITH </div>
            <div>PRECISION</div>
            <div>IN EVERY THREAD</div>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#60646C]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Trusted Apparel Exporter{" "}
          </motion.p>
        </motion.div>
      </section>

      {/* contact form  */}

      <section className="bg-slate-100 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-gray-700"
          >
            <h2 className="text-4xl font-bold text-gray-800">
              Contact Information
            </h2>

            <p className="text-lg text-gray-600">
              For inquiries or more information about our products and services,
              please use the contact details below or fill out the form.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-slate-900 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-medium text-gray-800">
                    mosharraf@cottonworldsourcing.com{" "}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-slate-900 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-medium text-gray-800">
                    +880 1611-419402, +880 01309-950194
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-slate-900 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-lg font-medium text-gray-800">
                    123 Export Avenue, Textile District <br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
