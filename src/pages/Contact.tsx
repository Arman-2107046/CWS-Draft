// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { motion } from "framer-motion";
// import ContactForm from "../components/ContactForm";
// import { Mail, Phone, MapPin } from "lucide-react";

// import { useEffect } from "react";

// // import { Mail, Phone, MapPin } from "lucide-react";

// const Contact = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div>
//       <Navbar />

//       <section className="relative h-[90vh] overflow-hidden text-white bg-slate-200 font-dmSerifText">
//         {/* Background Image Div */}
//         <div
//           className="absolute inset-0 bg-cover bg-center brightness-[1] opacity-60 blur-[5px]"
//           style={{
//             backgroundImage: "url('contactImages/img1.webp')",
//           }}
//         />

//         {/* Hero Content with motion animations */}
//         <motion.div
//           className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-gray-800 font-dm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2 }}
//         >
//           {/* Animated heading */}
//           <motion.h1
//             className="space-y-1 text-4xl sm:text-6xl lg:text-7xl"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             <div>BRIDGING VISIONS</div>
//             <div>WITH COMMUNICATION</div>
//             <div>AND COMMITMENT</div>
//           </motion.h1>
//         </motion.div>
//       </section>

//       {/* FIRST SECTION  */}

//       <section className="px-6 py-24 bg-slate-100">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h2
//             className="mb-6 text-4xl font-semibold leading-tight text-gray-800 sm:text-5xl"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             Connect With Our Team
//           </motion.h2>

//           <motion.p
//             className="max-w-2xl mx-auto text-lg text-gray-600"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Whether you have a question about our products, services, or
//             anything else, our team is ready to answer all your questions and
//             provide the assistance you need. Feel free to reach out to us.
//           </motion.p>
//         </div>
//       </section>

//       {/* 
// import ContactForm from "../components/ContactForm";
// import { motion } from "framer-motion"; */}

//       <section className="px-6 py-24 bg-slate-100">
//         <div className="grid items-start grid-cols-1 gap-16 mx-auto max-w-7xl md:grid-cols-2">
//           {/* Left: Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8 text-gray-700"
//           >
//             <h2 className="text-4xl font-semibold text-gray-800">
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
//                     mosharraf@cottonworldsourcing.com{" "}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <Phone className="mt-1 text-slate-900" />
//                 <div>
//                   <p className="text-sm text-gray-500">Phone</p>
//                   <p className="text-lg font-medium text-gray-800">
//                     +880 1611-419402, +880 1309-950194{" "}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <MapPin className="mt-1 text-slate-900" />
//                 <div>
//                   <p className="text-sm text-gray-500">Address</p>
//                   <p className="text-lg font-medium text-gray-800">
//                   Uttara sector 13, Road- 17 <br />
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

//       <section className="px-6 py-20 bg-white border-t border-gray-200">
//         <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">
//           {/* Left: Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <h3 className="text-3xl font-semibold text-gray-800 md:text-4xl">
//               Visit Our Office
//             </h3>
//             <p className="text-lg leading-relaxed text-gray-600">
//               We welcome partners, clients, and collaborators to our Dhaka
//               office. Please feel free to visit us at the location shown. Our
//               doors are always open to new opportunities and meaningful
//               conversations.
//             </p>

//             <div className="mt-6 text-left">
//               <p className="text-sm text-gray-500">Address</p>
//               <p className="text-lg font-medium text-gray-800">
//                 Uttara sector 13, Road- 17 <br />
//                 Dhaka, Bangladesh
//               </p>
//             </div>
//           </motion.div>

//           {/* Right: Google Map */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg border"
//           >


//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6299.364249616243!2d90.38324473957482!3d23.87186252540126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41746c7628b%3A0x909d6a0f5cebfe8f!2sSector-13%2C%20Dhaka%201230!5e1!3m2!1sen!2sbd!4v1753015638921!5m2!1sen!2sbd"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               // allowfullscreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Our Location"
//               className="w-full h-full"
//             ></iframe>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;



import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Contact | Cotton World Sourcing</title>
        <meta
          name="description"
          content="Get in touch with Cotton World Sourcing. Reach out via email, phone, or visit our office in Uttara, Dhaka."
        />
        <link rel="canonical" href="https://www.cottonworldsourcing.com/contact" />
        <meta property="og:title" content="Contact | Cotton World Sourcing" />
        <meta
          property="og:description"
          content="We're here to answer your questions and connect you with our team."
        />
        <meta property="og:url" content="https://www.cottonworldsourcing.com/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Cotton World Sourcing",
          "image": "https://www.cottonworldsourcing.com/logo.webp",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sector 13, Road 17",
            "addressLocality": "Uttara",
            "addressRegion": "Dhaka",
            "postalCode": "1230",
            "addressCountry": "BD"
          },
          "url": "https://www.cottonworldsourcing.com",
          "telephone": "+8801611419402",
          "email": "mosharraf@cottonworldsourcing.com"
        }
        `}</script>
      </Helmet>

      <Navbar />

      <header className="relative h-[90vh] overflow-hidden text-white bg-slate-200 font-dmSerifText">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[1] opacity-60 blur-[5px]"
          style={{
            backgroundImage: "url('contactImages/img1.webp')",
          }}
          aria-hidden="true"
          role="presentation"
        />

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-gray-800 font-dm"
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
            <div>BRIDGING VISIONS</div>
            <div>WITH COMMUNICATION</div>
            <div>AND COMMITMENT</div>
          </motion.h1>
        </motion.div>
      </header>

      <main className="px-6 py-24 bg-slate-100" role="main">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="mb-6 text-4xl font-semibold leading-tight text-gray-800 sm:text-5xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Connect With Our Team
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you have a question about our products, services, or
            anything else, our team is ready to answer all your questions and
            provide the assistance you need. Feel free to reach out to us.
          </motion.p>
        </div>
      </main>

      <section className="px-6 py-24 bg-slate-100">
        <div className="grid items-start grid-cols-1 gap-16 mx-auto max-w-7xl md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-gray-700"
          >
            <h2 className="text-4xl font-semibold text-gray-800">
              Contact Information
            </h2>

            <p className="text-lg text-gray-600">
              For inquiries or more information about our products and services,
              please use the contact details below or fill out the form.
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
                    +880 1611-419402, +880 1309-950194
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-slate-900" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <address className="text-lg not-italic font-medium text-gray-800">
                    Uttara sector 13, Road- 17<br />
                    Dhaka, Bangladesh
                  </address>
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

      <section className="px-6 py-20 bg-white border-t border-gray-200">
        <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-gray-800 md:text-4xl">
              Visit Our Office
            </h3>
            <p className="text-lg leading-relaxed text-gray-600">
              We welcome partners, clients, and collaborators to our Dhaka
              office. Please feel free to visit us at the location shown. Our
              doors are always open to new opportunities and meaningful
              conversations.
            </p>

            <div className="mt-6 text-left">
              <p className="text-sm text-gray-500">Address</p>
              <address className="text-lg not-italic font-medium text-gray-800">
                Uttara sector 13, Road- 17<br />
                Dhaka, Bangladesh
              </address>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6299.364249616243!2d90.38324473957482!3d23.87186252540126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41746c7628b%3A0x909d6a0f5cebfe8f!2sSector-13%2C%20Dhaka%201230!5e1!3m2!1sen!2sbd!4v1753015638921!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of our Office"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
