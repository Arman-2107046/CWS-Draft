// components/MissionVisionSection.tsx
import { motion } from "framer-motion";

const missions = [
  {
    title: "STRATEGIC PLANNING",
    image: "/aboutImages/strat.jpg",
    description:
      "We implement smart strategies to align sourcing goals with your business vision for maximum efficiency and growth.",
  },
  {
    title: "QUALITY ASSURANCE",
    image: "/aboutImages/quality.jpg",
    description:
      "Every product is rigorously inspected to ensure the highest standards of quality at every stage of production.",
  },
  {
    title: "PRODUCT EXCELLENCE",
    image: "/aboutImages/img3.jpg",
    description:
      "We deliver refined craftsmanship and top-grade materials to achieve excellence in every garment.",
  },
  {
    title: "TIMELY DELIVERY",
    image: "/aboutImages/time.jpg",
    description:
      "Our agile operations and smart logistics guarantee on-time shipments without compromising quality.",
  },
  {
    title: "CUSTOMER SATISFACTION",
    image: "/aboutImages/customer.png",
    description:
      "We prioritize our clients by delivering reliable service, quick communication, and consistent quality.",
  },
  {
    title: "GLOBAL EXPANSION",
    image: "/aboutImages/global.jpg",
    description:
      "We are expanding our global presence by building strong partnerships across key international markets.",
  },
];

export default function MissionVisionSection() {
  return (


    
<section className="px-6 py-24 bg-gradient-to-br from-slate-100 via-white to-slate-100">
  <div className="mx-auto text-center max-w-7xl">
    <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 md:text-5xl">
      Our Mission & Vision
    </h2>
    <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
      We are committed to delivering excellence in sourcing, manufacturing, and global textile innovation. Explore our core values that guide every step we take.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 gap-8 mx-auto mt-20 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
    {missions.map((mission, i) => (
      <motion.div
        key={mission.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="relative overflow-hidden shadow-2xl cursor-pointer rounded-2xl group"
      >
        {/* Title always visible above image */}
        <div className="absolute top-0 left-0 z-20 px-4 py-2 text-lg font-semibold text-white bg-black bg-opacity-60">
          {mission.title}
        </div>

        {/* Background image */}
        <div
          className="absolute inset-0 transition duration-500 bg-center bg-cover group-hover:brightness-90"
          style={{ backgroundImage: `url(${mission.image})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 transition duration-500 bg-black bg-opacity-20 group-hover:bg-opacity-40" />

        {/* Hidden Text on Hover */}
        <div className="relative z-10 flex items-end h-64 p-6">
          <p className="text-sm text-white transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            {mission.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

  );
}
