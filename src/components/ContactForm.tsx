import { useRef } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  return (
    <section className="max-w-2xl p-8 mx-auto space-y-6 bg-white shadow-xl rounded-xl">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            placeholder="Write your message here..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-3 font-semibold text-white transition rounded-md shadow bg-slate-800 hover:bg-slate-900"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
