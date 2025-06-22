import { PROJECTS } from '../constants'
import { motion } from "framer-motion"
import ProjectCard from './ui/ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className="border-b border-neutral-900 pb-20 pt-10 px-4">
      {/* Section Heading */}
      <div className="relative text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-indigo-400"
        >
          Featured Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="text-5xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-md"
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 mx-auto h-1 w-24 bg-indigo-500 origin-center"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
