import { EXPERIENCES } from "../constants"
import { motion } from "motion/react"
import ExperienceCard from "./ui/ExperienceCard"
const Experience = () => {
  return (
    <section id="experience" className=" text-white py-20 px-4 border-b border-neutral-800">
      
      {/* Section Heading */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-indigo-400"
        >
          Where I've Worked
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 mx-auto h-1 w-24 bg-indigo-500 origin-center"
        />
      </div>

      {/* Experience Cards */}
      <div className=" gap-6 max-w-6xl mx-auto">
        {EXPERIENCES.map((exp, idx) => (
            <div key={idx} >
                <ExperienceCard experience={exp} />
                <br />
                <br />
            </div>

        ))}
      </div>
    </section>
  );
}

export default Experience