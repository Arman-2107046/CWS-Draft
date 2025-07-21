import { motion } from "framer-motion";

const sustainabilityArea = [
  {
    title: "Eco-Friendly Materials",
    description:
      "At Cotton World Sourcing, we prioritize sustainable and recycled materials across all production stages. By minimizing waste and conserving resources, we reduce our environmental footprint while delivering quality without compromise.",
    image: "/sustainabilityImages/eco.webp",
  },
  {
    title: "Energy Efficiency",
    description:
      "Our facilities are equipped with energy-efficient technologies to minimize energy consumption and reduce greenhouse gas emissions. Through intelligent energy management, we ensure sustainable operations with minimal environmental impact.",
    image: "/sustainabilityImages/energy.webp",
  },
  {
    title: "Waste Reduction",
    description:
      "We implement comprehensive waste management programs to recycle and repurpose materials, aiming for zero waste in our operations. Through smart resource planning and responsible disposal, we ensure a cleaner, circular production cycle.",
    image: "/sustainabilityImages/waste.webp",
  },
  {
    title: "Water Conservation",
    description:
      "Through advanced water treatment and recycling systems, we significantly reduce water usage in our manufacturing processes. Our closed-loop water systems ensure sustainability without compromising production quality.",
    image: "/sustainabilityImages/water.webp",
  },
  {
    title: "Ethical Workforce",
    description:
      "We are committed to fair labor practices, ensuring safe working environments, fair wages, and respect for all employees. Our workforce is the heart of our success, and we strive to uplift every individual through empowerment and equity.",
    image: "/sustainabilityImages/work.webp",
  },
];

const SustainabilityBody = () => {
  return (
    <>
      {sustainabilityArea.map((item, index) => (
        <section
          key={index}
          className="px-6 py-24 bg-white"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className={`flex flex-col items-center gap-12 md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Text Column */}
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-gray-900">
                  {item.title}
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </motion.div>

              {/* Image Column */}
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.03]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 transition duration-300 bg-black/10 hover:bg-black/20 rounded-3xl" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
};

export default SustainabilityBody;
