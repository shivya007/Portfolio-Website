import { RiReactjsLine } from "react-icons/ri";
import {DiHtml5, DiCss3, DiJavascript1, DiJava, DiRedis,} from "react-icons/di"; // For HTML, CSS, JavaScript, MongoDB, and Java
import { SiExpress, SiMongodb} from "react-icons/si"; // For Express.js and SQL (PostgreSQL as an example)
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "motion/react"


const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});


const Technologies = () => {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y:-100}} transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies
      </motion.h2>
      <motion.div
      whileInView={{opacity: 1, x: 0}} intial= {{opacity: 0, x: -100}} transition={{duration: 1.5}} 
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)} intial="intial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJava className="text-7xl text-blue-500" /> {/* Java */}
        </motion.div>
        <motion.div
        variants={iconVariants(3)} intial="intial" animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiHtml5 className="text-7xl text-orange-500" /> {/* HTML */}
        </motion.div>
        <motion.div
        variants={iconVariants(5)} intial="intial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiCss3 className="text-7xl text-blue-500" /> {/* CSS */}
        </motion.div>
        <motion.div
        variants={iconVariants(4)} intial="intial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJavascript1 className="text-7xl text-yellow-400" />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
        variants={iconVariants(6)} intial="intial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" /> {/* React */}
        </motion.div>
        <motion.div
        variants={iconVariants(6)} intial="intial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-gray-400" /> {/* Express */}
        </motion.div>
        <motion.div
        variants={iconVariants(5)} intial="intial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-gray-800" /> {/* Next.js */}
        </motion.div>
        <motion.div
        variants={iconVariants(5)} intial="intial" animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" /> {/* MongoDB */}
        </motion.div>
        <motion.div
        variants={iconVariants(4)} intial="intial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiRedis className="text-7xl text-red-700" /> {/* Redis */}
        </motion.div>
        <motion.div
        variants={iconVariants(6)} intial="intial" animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" /> {/* Node.js */}
        </motion.div>
        <motion.div 
        variants={iconVariants(5)} intial="intial" animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-500" />{" "}
          {/* PostgreSQL */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
