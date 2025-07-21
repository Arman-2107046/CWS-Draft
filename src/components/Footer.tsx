import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Footer: React.FC = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "Business", path: "/business" },
    { label: "About", path: "/about" },
    { label: "Sustainability", path: "/sustainability" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer
      className="bg-[#0d1117] text-white"
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-14">
        <motion.div
          className="flex flex-wrap justify-between gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Company Info */}
          <div
            className="flex-1 min-w-[250px] space-y-5"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1f2937] rounded-md shadow-md">
                <span className="text-lg font-bold text-green-500">C</span>
              </div>
              <span
                className="text-xl font-semibold tracking-wider"
                itemProp="name"
              >
                Cotton World Sourcing
              </span>
            </div>
            <p
              className="text-sm leading-relaxed text-gray-300"
              itemProp="description"
            >
              Driving innovation and sustainability in global sourcing with
              uncompromising quality and commitment.
            </p>
            <div className="flex pt-2 space-x-4">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-green-500"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-green-500"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-green-500"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex-1 min-w-[250px] space-y-5">
            <h3 className="text-lg font-semibold tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              {links.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm text-gray-300 transition hover:text-green-500 hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Business Services */}
          <div className="flex-1 min-w-[250px] space-y-5">
            <h3 className="text-lg font-semibold tracking-wide">
              Our Business Area
            </h3>
            <ul className="space-y-3">
              {[
                {
                  icon: <MapPin className="w-4 h-4" />,
                  title: "Apparel Sourcing",
                  desc: "Global sourcing for fashion and apparel brands.",
                },
                {
                  icon: <Mail className="w-4 h-4" />,
                  title: "Textile Manufacturing",
                  desc: "High-quality textile production and supply chain management.",
                },
                {
                  icon: <Phone className="w-4 h-4" />,
                  title: "Sustainability Consulting",
                  desc: "Advising on eco-friendly and sustainable sourcing practices.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="p-1 rounded bg-slate-800">{item.icon}</span>
                  <div>
                    <span className="font-medium">{item.title}</span>
                    <div className="text-xs text-gray-400">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <address
            className="flex-1 min-w-[250px] space-y-5 not-italic"
            itemScope
            itemType="http://schema.org/PostalAddress"
          >
            <h3 className="text-lg font-semibold tracking-wide">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5" />
                <a
                  href="mailto:mosharraf@cottonworldsourcing.com"
                  className="hover:text-green-500"
                  itemProp="email"
                >
                  mosharraf@cottonworldsourcing.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5" />
                <span itemProp="telephone">
                  <a href="tel:+8801611419402" className="hover:text-green-500">
                    +880 1611-419402
                  </a>
                  ,{" "}
                  <a href="tel:+8801309950194" className="hover:text-green-500">
                    +880 1309-950194
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span itemProp="streetAddress">
                  Uttara sector 13, Road- 17, Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </address>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-[#1f2937] mt-12 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-sm text-gray-500">
            © 2025 Cotton World Sourcing. All rights reserved.
            <button
              type="button"
              onClick={() => {}}
              className="ml-2 cursor-pointer hover:text-green-500 hover:underline focus:outline-none"
            >
              Privacy Policy
            </button>{" "}
            |{" "}
            <button
              type="button"
              onClick={() => {}}
              className="ml-2 cursor-pointer hover:text-green-500 hover:underline focus:outline-none"
            >
              Terms of Service
            </button>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
