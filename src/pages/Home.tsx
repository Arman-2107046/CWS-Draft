// // import ContactForm from "../components/ContactForm";
// // import HomeIntro from "../components/HomeIntro";
// // import BusinessArea from "../components/BusinessArea";
// // import Footer from "../components/Footer";
// // import Navbar from "../components/Navbar";
// // import { Mail, Phone, MapPin } from "lucide-react";
// // import { useEffect } from "react";
// // import { motion } from "framer-motion";

// // // Home page component
// // const Home = () => {
// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   return (
// //     <div className="bg-slate-100">
// //       <Navbar />

// //       {/* HERO SECTION WITH  */}

// //       <section className="relative h-[90vh] overflow-hidden text-[#60646C] bg-slate-200 font-dmSerifText">
// //         {/* Background Image */}
// //         <div
// //           className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
// //           style={{
// //             backgroundImage: "url('/bg-images/hero-img1.jpg')",
// //           }}
// //         />

// //         {/* Gradient Overlay */}
// //         <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate/70 to-gray/90" />

// //         {/* Hero Content */}
// //         <motion.div
// //           className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center font-dm"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 1.2 }}
// //         >
// //           <motion.h1
// //             className="space-y-1 text-4xl sm:text-6xl lg:text-7xl"
// //             initial={{ y: 50, opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             transition={{ duration: 1, delay: 0.3 }}
// //           >
// //             <div>CRAFTED WITH </div>
// //             <div>PRECISION</div>
// //             <div>IN EVERY THREAD</div>
// //           </motion.h1>

// //           <motion.p
// //             className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#60646C]"
// //             initial={{ y: 30, opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             transition={{ duration: 1, delay: 0.6 }}
// //           >
// //             Trusted Apparel Exporter{" "}
// //           </motion.p>
// //         </motion.div>
// //       </section>

// //       {/* About Section */}

// //       <section className="px-6 py-20 text-gray-800 bg-white md:px-12 lg:px-24">
// //         <div className="max-w-5xl mx-auto space-y-6 text-center mb-15">
// //           <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
// //             Weaving Trust, Delivering Excellence
// //           </h2>
// //           <p className="text-lg font-light leading-relaxed text-gray-700 md:text-xl">
// //             Cotton World Sourcing stands at the forefront of global textile
// //             export, driven by a commitment to quality, integrity, and
// //             innovation. Specializing in premium cotton products, we partner with
// //             international brands to deliver tailored textile solutions that meet
// //             the highest industry standards. With a focus on sustainability,
// //             craftsmanship, and timely delivery, we bridge tradition with global
// //             demands, empowering fashion and textile industries worldwide.
// //           </p>
// //         </div>

// //         <HomeIntro />
// //         <div className="mt-12 text-center bg-white">
// //           <motion.a
// //             href="/about"
// //             className="inline-block px-10 py-3 text-lg font-semibold tracking-wide transition-colors duration-300 bg-white border-2 rounded-lg shadow-md text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-500 hover:text-slate-900"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.97 }}
// //           >
// //             Know More About Us
// //           </motion.a>
// //         </div>
// //       </section>

// //       {/* Business Area Section  */}

// //       <section>
// //         <BusinessArea />
// //       </section>

// //       {/* SUSTAINABILITY SECTION */}
// //       <section className="px-6 py-24 text-gray-800 bg-white">
// //         <div className="mx-auto mb-16 text-center max-w-7xl">
// //           <motion.h2
// //             className="text-4xl font-semibold sm:text-5xl"
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //           >
// //             Sustainability at the Core
// //           </motion.h2>
// //           <motion.p
// //             className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 sm:text-xl"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             viewport={{ once: true }}
// //           >
// //             We are deeply committed to sustainable practices across all levels
// //             of our supply chain, from eco-friendly materials to ethical
// //             production methods.
// //           </motion.p>
// //         </div>

// //         <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 max-w-7xl">
// //           {/* Card 1 */}
// //           <motion.div
// //             className="overflow-hidden shadow-lg rounded-2xl bg-gray-50"
// //             whileHover={{ scale: 1.03 }}
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7 }}
// //             viewport={{ once: true }}
// //           >
// //             <img
// //               src="/Home/sustainArea/ecofab.webp"
// //               alt="Eco Materials"
// //               className="object-cover w-full h-56"
// //             />
// //             <div className="p-6 text-left">
// //               <h3 className="mb-2 text-xl font-semibold">
// //                 Eco-Conscious Fabrics
// //               </h3>
// //               <p className="text-sm text-gray-600">
// //                 We use organic, recycled, and low-impact materials to reduce our
// //                 environmental footprint.
// //               </p>
// //             </div>
// //           </motion.div>

// //           {/* Card 2 */}
// //           <motion.div
// //             className="overflow-hidden shadow-lg rounded-2xl bg-gray-50"
// //             whileHover={{ scale: 1.03 }}
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7, delay: 0.2 }}
// //             viewport={{ once: true }}
// //           >
// //             <img
// //               src="\Home\sustainArea\water.webp"
// //               alt="Water Saving"
// //               className="object-cover w-full h-56"
// //             />
// //             <div className="p-6 text-left">
// //               <h3 className="mb-2 text-xl font-semibold">
// //                 Water-Saving Processes
// //               </h3>
// //               <p className="text-sm text-gray-600">
// //                 Our dyeing and washing techniques are optimized to conserve
// //                 water and energy.
// //               </p>
// //             </div>
// //           </motion.div>

// //           {/* Card 3 */}
// //           <motion.div
// //             className="overflow-hidden shadow-lg rounded-2xl bg-gray-50"
// //             whileHover={{ scale: 1.03 }}
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7, delay: 0.4 }}
// //             viewport={{ once: true }}
// //           >
// //             <img
// //               src="\Home\sustainArea\ethics.webp"
// //               alt="Ethical Workforce"
// //               className="object-cover w-full h-56"
// //             />
// //             <div className="p-6 text-left">
// //               <h3 className="mb-2 text-xl font-semibold">Ethical Workforce</h3>
// //               <p className="text-sm text-gray-600">
// //                 We uphold safe working conditions, fair wages, and respectful
// //                 treatment of all workers.
// //               </p>
// //             </div>
// //           </motion.div>
// //         </div>

// //         {/* CTA Button */}
// //         <div className="mt-12 text-center bg-white">
// //           <motion.a
// //             href="/sustainability"
// //             className="inline-block px-10 py-3 text-lg font-semibold tracking-wide transition-colors duration-300 bg-white border-2 rounded-lg shadow-md text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-500 hover:text-slate-900"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.97 }}
// //           >
// //             Know More About Our Sustainability
// //           </motion.a>
// //         </div>
// //       </section>

// //       {/* contact form  section */}
// //       <section className="px-6 py-24 bg-slate-100">
// //         <div className="grid items-start grid-cols-1 gap-16 mx-auto max-w-7xl md:grid-cols-2">
// //           {/* Left: Contact Information */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //             className="space-y-8 text-gray-700"
// //           >
// //             <h2 className="text-4xl font-semibold text-gray-800">
// //               Contact Information
// //             </h2>

// //             <p className="text-lg text-gray-600">
// //               For inquiries or more information about our products and services,
// //               please use the contact details below or fill out the form.
// //             </p>

// //             <div className="space-y-6">
// //               <div className="flex items-start gap-4">
// //                 <Mail className="mt-1 text-slate-900" />
// //                 <div>
// //                   <p className="text-sm text-gray-500">Email</p>
// //                   <p className="text-lg font-medium text-gray-800">
// //                     mosharraf@cottonworldsourcing.com{" "}
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="flex items-start gap-4">
// //                 <Phone className="mt-1 text-slate-900" />
// //                 <div>
// //                   <p className="text-sm text-gray-500">Phone</p>
// //                   <p className="text-lg font-medium text-gray-800">
// //                     +880 1611-419402, +880 01309-950194
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="flex items-start gap-4">
// //                 <MapPin className="mt-1 text-slate-900" />
// //                 <div>
// //                   <p className="text-sm text-gray-500">Address</p>
// //                   <p className="text-lg font-medium text-gray-800">
// //                     Uttara sector 13, Road- 17 <br />
// //                     Dhaka, Bangladesh
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* Right: Contact Form */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             viewport={{ once: true }}
// //           >
// //             <ContactForm />
// //           </motion.div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Home;

// import { Helmet } from 'react-helmet-async';
// import ContactForm from "../components/ContactForm";
// import HomeIntro from "../components/HomeIntro";
// import BusinessArea from "../components/BusinessArea";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { useEffect } from "react";
// import { motion } from "framer-motion";

// const Home = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="bg-slate-100">
//       <Helmet>
//         <title>Cotton World Sourcing | Premium Textile Exporter</title>
//         <meta name="description" content="Cotton World Sourcing is a leading global textile exporter specializing in premium cotton products. We are committed to quality, sustainability, and innovation." />
//         <meta name="keywords" content="textile, cotton, exporter, sustainability, premium cotton" />
//       </Helmet>
//       <Navbar />
//       {/* Your existing component JSX */}
//       <section className="relative h-[90vh] overflow-hidden text-[#60646C] bg-slate-200 font-dmSerifText">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
//           style={{
//             backgroundImage: "url('/bg-images/hero-img1.jpg')",
//           }}
//           aria-label="Background image of crafted textiles"
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate/70 to-gray/90" />
//         {/* Hero Content */}
//         <motion.div
//           className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center font-dm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2 }}
//         >
//           <motion.h1
//             className="space-y-1 text-4xl sm:text-6xl lg:text-7xl"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             <div>CRAFTED WITH </div>
//             <div>PRECISION</div>
//             <div>IN EVERY THREAD</div>
//           </motion.h1>
//           <motion.p
//             className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#60646C]"
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.6 }}
//           >
//             Trusted Apparel Exporter
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* Rest of your component JSX */}
//       {/* About Section */}
//       <section className="px-6 py-20 text-gray-800 bg-white md:px-12 lg:px-24">
//         <div className="max-w-5xl mx-auto space-y-6 text-center mb-15">
//           <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
//             Weaving Trust, Delivering Excellence
//           </h2>
//           <p className="text-lg font-light leading-relaxed text-gray-700 md:text-xl">
//             Cotton World Sourcing stands at the forefront of global textile
//             export, driven by a commitment to quality, integrity, and
//             innovation. Specializing in premium cotton products, we partner with
//             international brands to deliver tailored textile solutions that meet
//             the highest industry standards. With a focus on sustainability,
//             craftsmanship, and timely delivery, we bridge tradition with global
//             demands, empowering fashion and textile industries worldwide.
//           </p>
//         </div>
//         <HomeIntro />
//         <div className="mt-12 text-center bg-white">
//           <motion.a
//             href="/about"
//             className="inline-block px-10 py-3 text-lg font-semibold tracking-wide transition-colors duration-300 bg-white border-2 rounded-lg shadow-md text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-500 hover:text-slate-900"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             Know More About Us
//           </motion.a>
//         </div>
//       </section>

//       {/* Business Area Section */}
//       <section aria-labelledby="business-area-section">
//         <BusinessArea />
//       </section>

//       {/* Sustainability Section */}
//       <section className="px-6 py-24 text-gray-800 bg-white" aria-labelledby="sustainability-section">
//         <div className="mx-auto mb-16 text-center max-w-7xl">
//           <motion.h2
//             id="sustainability-section"
//             className="text-4xl font-semibold sm:text-5xl"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             Sustainability at the Core
//           </motion.h2>
//           <motion.p
//             className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 sm:text-xl"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             We are deeply committed to sustainable practices across all levels
//             of our supply chain, from eco-friendly materials to ethical
//             production methods.
//           </motion.p>
//         </div>
//         <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 max-w-7xl">
//           {/* Card 1 */}
//           <motion.div
//             className="overflow-hidden shadow-lg rounded-2xl bg-gray-50"
//             whileHover={{ scale: 1.03 }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <img
//               src="/Home/sustainArea/ecofab.webp"
//               alt="Eco-Conscious Fabrics"
//               className="object-cover w-full h-56"
//             />
//             <div className="p-6 text-left">
//               <h3 className="mb-2 text-xl font-semibold">
//                 Eco-Conscious Fabrics
//               </h3>
//               <p className="text-sm text-gray-600">
//                 We use organic, recycled, and low-impact materials to reduce our
//                 environmental footprint.
//               </p>
//             </div>
//           </motion.div>
//           {/* Card 2 */}
//           <motion.div
//             className="overflow-hidden shadow-lg rounded-2xl bg-gray-50"
//             whileHover={{ scale: 1.03 }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <img
//               src="/Home/sustainArea/water.webp"
//               alt="Water-Saving Processes"
//               className="object-cover w-full h-56"
//             />
//             <div className="p-6 text-left">
//               <h3 className="mb-2 text-xl font-semibold">
//                 Water-Saving Processes
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Our dyeing and washing techniques are optimized to conserve
//                 water and energy.
//               </p>
//             </div>
//           </motion.div>
//           {/* Card 3 */}
//           <motion.div
//             className="overflow-hidden shadow-lg rounded-2xl bg-gray-50"
//             whileHover={{ scale: 1.03 }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <img
//               src="/Home/sustainArea/ethics.webp"
//               alt="Ethical Workforce"
//               className="object-cover w-full h-56"
//             />
//             <div className="p-6 text-left">
//               <h3 className="mb-2 text-xl font-semibold">Ethical Workforce</h3>
//               <p className="text-sm text-gray-600">
//                 We uphold safe working conditions, fair wages, and respectful
//                 treatment of all workers.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//         {/* CTA Button */}
//         <div className="mt-12 text-center bg-white">
//           <motion.a
//             href="/sustainability"
//             className="inline-block px-10 py-3 text-lg font-semibold tracking-wide transition-colors duration-300 bg-white border-2 rounded-lg shadow-md text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-500 hover:text-slate-900"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             Know More About Our Sustainability
//           </motion.a>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="px-6 py-24 bg-slate-100" aria-labelledby="contact-section">
//         <div className="grid items-start grid-cols-1 gap-16 mx-auto max-w-7xl md:grid-cols-2">
//           {/* Left: Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8 text-gray-700"
//           >
//             <h2 id="contact-section" className="text-4xl font-semibold text-gray-800">
//               Contact Information
//             </h2>
//             <p className="text-lg text-gray-600">
//               For inquiries or more information about our products and services,
//               please use the contact details below or fill out the form.
//             </p>
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <Mail className="mt-1 text-slate-900" />
//                 <div>
//                   <p className="text-sm text-gray-500">Email</p>
//                   <p className="text-lg font-medium text-gray-800">
//                     mosharraf@cottonworldsourcing.com
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Phone className="mt-1 text-slate-900" />
//                 <div>
//                   <p className="text-sm text-gray-500">Phone</p>
//                   <p className="text-lg font-medium text-gray-800">
//                     +880 1611-419402, +880 01309-950194
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4">
//                 <MapPin className="mt-1 text-slate-900" />
//                 <div>
//                   <p className="text-sm text-gray-500">Address</p>
//                   <p className="text-lg font-medium text-gray-800">
//                     Uttara sector 13, Road- 17 <br />
//                     Dhaka, Bangladesh
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//           {/* Right: Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <ContactForm />
//           </motion.div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeIntro from "../components/HomeIntro";
import BusinessArea from "../components/BusinessArea";
import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-gray-800 bg-slate-100">
      <Helmet>
        <title>
          Cotton World Sourcing | Premium Textile Exporter from Bangladesh
        </title>
        <meta
          name="description"
          content="Cotton World Sourcing is a trusted Bangladesh-based textile exporter delivering high-quality cotton products with a focus on sustainability and innovation."
        />
        <meta
          name="keywords"
          content="textile exporter, cotton products, sustainable textiles, Bangladesh textile export, Cotton World Sourcing, premium fabrics"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Cotton World Sourcing | Trusted Global Textile Exporter"
        />
        <meta
          property="og:description"
          content="Explore premium sustainable cotton solutions crafted with precision in Bangladesh by Cotton World Sourcing."
        />
        <meta property="og:image" content="/meta/og-image-home.jpg" />
        <meta property="og:url" content="https://www.cottonworldsourcing.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.cottonworldsourcing.com" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[90vh] overflow-hidden bg-slate-200 font-dmSerifText text-[#60646C]">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
          style={{ backgroundImage: "url('/bg-images/hero-img1.jpg')" }}
          aria-label="Bangladesh textile production"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate/70 to-gray/90" />
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
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
            <div>CRAFTED WITH</div>
            <div>PRECISION</div>
            <div>IN EVERY THREAD</div>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl lg:text-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Trusted Apparel Exporter from Bangladesh
          </motion.p>
        </motion.div>
      </header>

      {/* About Us Section */}
      <section className="px-6 py-20 bg-white md:px-12 lg:px-24" id="about">
        <div className="max-w-5xl mx-auto space-y-6 text-center mb-15">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Weaving Trust, Delivering Excellence
          </h2>
          <p className="text-lg font-light leading-relaxed text-gray-700 md:text-xl">
            Cotton World Sourcing stands at the forefront of global textile
            export, driven by a commitment to quality, integrity, and
            innovation. Specializing in premium cotton products, we partner with
            international brands to deliver tailored textile solutions that meet
            the highest industry standards. With a focus on sustainability,
            craftsmanship, and timely delivery, we bridge tradition with global
            demands, empowering fashion and textile industries worldwide.
          </p>
        </div>
        <HomeIntro />
        <div className="mt-12 text-center">
          <motion.a
            href="/about"
            className="inline-block px-10 py-3 text-lg font-semibold tracking-wide transition-colors duration-300 bg-white border-2 rounded-lg shadow-md text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-500 hover:text-slate-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Know More About Us
          </motion.a>
        </div>
      </section>

      {/* Business Area Section */}
      <section id="business" aria-labelledby="business-heading">
        <BusinessArea />
      </section>

      {/* Sustainability Section */}
      <section
        className="px-6 py-24 bg-white"
        aria-labelledby="sustainability-heading"
      >
        <div className="mx-auto mb-16 text-center max-w-7xl">
          <motion.h2
            id="sustainability-heading"
            className="text-4xl font-semibold sm:text-5xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Sustainability at the Core
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From eco-friendly fabrics to ethical labor — sustainability drives
            every decision we make.
          </motion.p>
        </div>

        {/* Sustainability Cards */}
        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 max-w-7xl">
          {[
            {
              title: "Eco-Conscious Fabrics",
              text: "We use organic, recycled, and low-impact materials to reduce our environmental footprint.",
              img: "/Home/sustainArea/ecofab.webp",
              alt: "Eco-conscious fabric materials",
              delay: 0,
            },
            {
              title: "Water-Saving Processes",
              text: "Our dyeing and washing techniques are optimized to conserve water and energy.",
              img: "/Home/sustainArea/water.webp",
              alt: "Sustainable water use in textile production",
              delay: 0.2,
            },
            {
              title: "Ethical Workforce",
              text: "We uphold safe working conditions, fair wages, and respectful treatment of all workers.",
              img: "/Home/sustainArea/ethics.webp",
              alt: "Ethical garment workers",
              delay: 0.4,
            },
          ].map(({ title, text, img, alt, delay }) => (
            <motion.div
              key={title}
              className="overflow-hidden shadow-lg rounded-2xl bg-gray-50"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay }}
              viewport={{ once: true }}
            >
              <img
                src={img}
                alt={alt}
                className="object-cover w-full h-56"
                loading="lazy"
              />
              <div className="p-6 text-left">
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="/sustainability"
            className="inline-block px-10 py-3 text-lg font-semibold tracking-wide transition-colors duration-300 bg-white border-2 rounded-lg shadow-md text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-500 hover:text-slate-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Know More About Our Sustainability
          </motion.a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="px-6 py-24 bg-slate-100"
        aria-labelledby="contact-heading"
      >
        <div className="grid items-start grid-cols-1 gap-16 mx-auto max-w-7xl md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-gray-700"
          >
            <h2
              id="contact-heading"
              className="text-4xl font-semibold text-gray-800"
            >
              Contact Information
            </h2>
            <p className="text-lg text-gray-600">
              For orders or partnerships, get in touch through the form or reach
              out to us directly.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-medium text-gray-800">
                    mosharraf@cottonworldsourcing.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-medium text-gray-800">
                    +880 1611-419402, +880 01309-950194
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-lg font-medium text-gray-800">
                    Uttara Sector 13, Road-17
                    <br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

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
