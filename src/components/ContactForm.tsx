import { useRef } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  return (
    <section className="bg-white shadow-xl rounded-xl p-8 space-y-6 max-w-2xl mx-auto">
      <motion.form
        ref={form}
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Full Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="you@example.com"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="Subject of your message"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            placeholder="Write your message here..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-md font-semibold shadow transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
