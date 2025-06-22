import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechnologyCard = ({ tech, duration }) => {
  return (
    <motion.div
      variants={iconVariants(duration)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-indigo-500/30 shadow-md"
    >
      <tech.icon className={`text-7xl ${tech.color}`} />
    </motion.div>
  );
};

export default TechnologyCard;
