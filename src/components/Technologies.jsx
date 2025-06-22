import { TECHNOLOGIES } from "../constants/index.js";
import { motion } from "framer-motion";
import TechnologyCard from "./ui/TechnologyCard";

const Technologies = () => {
  return (
    <section id="skills" className="border-b border-neutral-800 pb-24 px-4">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-indigo-400 animate-in slide-in-from-top fade-in"
        >
          Tools I Work With
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md animate-in fade-in"
        >
          Technologies
        </motion.h2>

        {/* Underline accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 mx-auto h-1 w-24 bg-indigo-500 origin-center animate-in fade-in"
        />
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative overflow-hidden">
        {/* Invisible scroll track */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800 rounded-full w-full z-0" />

        <motion.div
          className="flex gap-10 min-w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer"
        >
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[100px]">
              <TechnologyCard tech={tech} duration={tech.duration} />
              <p className="text-sm text-neutral-300 mt-2 text-center">{tech.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
