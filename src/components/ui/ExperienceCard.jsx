import { motion } from "framer-motion";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative rounded-2xl p-6 border border-neutral-800 bg-neutral-900/80 shadow-md hover:shadow-indigo-500/30 transition-all duration-500 hover:scale-[1.02] backdrop-blur-lg"
    >
      {/* Duration */}
      <div className="text-sm uppercase tracking-wider text-indigo-400 mb-4">
        {experience.year}
      </div>

      {/* Role & Company */}
      <div className="mb-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          {experience.role}
        </h3>
        <p className="text-base text-neutral-400 mt-1">
          at <span className="text-indigo-300 font-medium">{experience.company}</span>
        </p>
      </div>

      {/* Description List */}
      <ul className="list-disc pl-5 mt-4 space-y-3 text-base text-neutral-300">
        {experience.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-6">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-indigo-500/10 text-indigo-300 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
