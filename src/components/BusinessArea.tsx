// components/BusinessSection.tsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const businessAreas = [
  {
    title: "Knitwear",
    description:
      "Specializing in t-shirts, sweatshirts, leggings, babywear, and sportswear made from high-quality knit fabrics.",
    image: "/BusinessAreaSection/knitwear.jpg",
  },
  {
    title: "Woven Garments",
    description:
      "Offering shirts, trousers, jackets, uniforms, and fashion dresses made from structured woven fabrics.",
    image: "/BusinessAreaSection/woven.jpg",
  },
  {
    title: "Denim",
    description:
      "Expertise in denim jeans, jackets, skirts, and overalls with various washes, treatments, and finishes.",
    image: "/BusinessAreaSection/denim.jpg",
  },
  {
    title: "Kidswear",
    description:
      "Comfortable and colorful clothing for babies, toddlers, and children including rompers, sets, and schoolwear.",
    image: "/BusinessAreaSection/kids.jpg",
  },
];


// const sustainabilityAreas = [
//     {
//       title: "Eco-Friendly Materials",
//       description:
//         "Utilizing organic cotton, recycled fibers, and sustainable blends to reduce environmental impact without compromising quality.",
//       image: "/SustainabilitySection/eco-friendly-materials.jpg",
//     },
//     {
//       title: "Energy Efficiency",
//       description:
//         "Adopting renewable energy sources and energy-efficient machinery across manufacturing facilities to lower carbon footprint.",
//       image: "/SustainabilitySection/energy-efficiency.jpg",
//     },
//     {
//       title: "Waste Reduction",
//       description:
//         "Promoting zero-waste production methods and recycling initiatives to reduce textile waste and promote circular economy.",
//       image: "/SustainabilitySection/waste-reduction.jpg",
//     },
//   ];
  




export default function BusinessArea() {
  return (
    <section className="px-6 py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
        >
          Our Business Areas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mt-4 text-center text-slate-300"
        >
          Discover the categories in which we deliver premium quality and
          unmatched craftsmanship.
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-4">
          {businessAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden shadow-2xl group rounded-2xl"
            >
              {/* Background image with overlay */}
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${area.image})` }}
              >
                <div className="absolute inset-0 transition duration-500 bg-black/40 group-hover:bg-black/60" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end p-8 text-white h-96">
                <h3 className="text-2xl font-bold">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  {area.description}
                </p>
                <div className="flex items-center mt-6 font-semibold text-gray-100">
                  <span className="text-sm">Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Subtle shine on hover */}
              {/* <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-transparent via-white/5 to-white/10" /> */}
            </motion.div>
          ))}
        </div>
      </div>

                    {/* button  */}
                    <div className=" text-center bg-transparent mt-[5rem]">
                <motion.a
                  href="/business"
                  className="inline-block px-10 py-3 text-lg font-semibold tracking-wide transition-colors duration-300 bg-white border-2 rounded-lg shadow-md text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-500 hover:text-slate-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Know More About Our Businesses
                </motion.a>
              </div>
    </section>
  );
}
