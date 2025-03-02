import { motion } from "motion/react"
import image from "../assets/Aboutavatar.png"
import { Button } from "./ui/button";
import { Download, Phone } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">

      <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={image} alt="AboutMe" />
          </div>
        </motion.div>


        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
      <div className="flex justify-center lg:justify-start">
        <div className="my-2 max-w-xl py-6">
          <p className="text-gradient-animation text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            I'm Shiv,
          </p>
          
          <div className="relative group">
            <p className="text-2xl font-semibold text-gray-100 mb-6 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              From Problem-Solving to Creative Website: My Developer Journey.
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
            </p>
          </div>
      
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed tracking-wide transition-all duration-500 hover:bg-gray-800/30 hover:px-4 hover:py-3 rounded-lg">
              <span className="text-blue-400 font-medium">I create fast, scalable, and user-friendly</span> web applications using 
              <span className="highlight-tech">React.js</span>, 
              <span className="highlight-tech">TailwindCSS</span>, 
              <span className="highlight-tech">Node.js</span>, 
              <span className="highlight-tech">Express.js</span> and 
              <span className="highlight-tech">MongoDB</span>. 
              With a strong problem-solving mindset and experience in building efficient solutions, 
              I ensure that every project runs smoothly, performs well, and delivers a 
              <span className="text-purple-400 font-medium"> great user experience</span>.
            </p>
          </div>
        </div>
      </div>

            <div className="flex flex-wrap gap-4">
            <Button asChild className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 to-[#1a2a3a] px-6 py-3 text-lg font-semibold text-gray-100 shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 before:absolute before:inset-0 before:-left-full before:z-0 before:bg-gradient-to-r before:from-white/20 before:via-white/50 before:to-white/20 before:opacity-50 before:transition-[left] before:duration-700">
              <a href="https://drive.google.com/file/d/1mupoYPIFPP1If7guifPQeKfSTCcYAkkp/view?usp=sharing" target="_blank" className="relative z-10"><Download className="w-5 h-5 mr-2" />Resume</a>
            </Button>
            <style jsx>{`
              @keyframes shine {
                to {
                  left: 200%;
                }
              }
             .group:hover::before {
                animation: shine 1.5s ease-in-out;
              }
            `}</style>
            <Button asChild className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 to-[#1a2a3a] px-6 py-3 text-lg font-semibold text-gray-100 shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 before:absolute before:inset-0 before:-left-full before:z-0 before:bg-gradient-to-r before:from-white/20 before:via-white/50 before:to-white/20 before:opacity-50 before:transition-[left] before:duration-700">
              <a href="https://drive.google.com/file/d/1mupoYPIFPP1If7guifPQeKfSTCcYAkkp/view?usp=sharing" target="_blank" className="relative z-10"><Phone className="w-5 h-5 mr-2" />Contact Me</a>
            </Button>
            <style jsx>{`
              @keyframes shine {
                to {
                  left: 200%;
                }
              }
             .group:hover::before {
                animation: shine 1.5s ease-in-out;
              }
            `}</style>
            </div>
            </motion.div>
      </div>
    </div>
  );
};

export default About;
