import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

// import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <section className="relative h-[90vh] overflow-hidden text-white bg-slate-200 font-dmSerifText">
        {/* Background Image Div */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[1] opacity-60 blur-[5px]"
          style={{
            backgroundImage: "url('contactImages/img1.jpg')",
          }}
        />

        {/* Hero Content with motion animations */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center font-dm text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Animated heading */}
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

          {/* Commented out paragraph, can be uncommented if needed */}
          {/* <motion.p
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#60646C]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Trusted Apparel Exporter
          </motion.p> */}
        </motion.div>
      </section>

      {/* FIRST SECTION  */}

      <section className="bg-slate-100 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Connect With Our Team
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
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
      </section>

      {/* 
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion"; */}

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
                    +880 1611-419402, +880 01309-950194{" "}
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

      {/* <section id="contact">
        <h2>Our Location</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3469.5456922467447!2d90.42035647511719!3d23.81318697862774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjamuna%20future%20park!5e1!3m2!1sen!2sbd!4v1752694918538!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: 0 }} // ✅ style as an object
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section> */}

      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              Visit Our Office
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We welcome partners, clients, and collaborators to our Dhaka
              office. Please feel free to visit us at the location shown. Our
              doors are always open to new opportunities and meaningful
              conversations.
            </p>

            <div className="text-left mt-6">
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-lg font-medium text-gray-800">
                123 Export Avenue, Textile District
                <br />
                Dhaka, Bangladesh
              </p>
            </div>
          </motion.div>

          {/* Right: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3469.5456922467447!2d90.42035647511719!3d23.81318697862774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjamuna%20future%20park!5e1!3m2!1sen!2sbd!4v1752694918538!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
