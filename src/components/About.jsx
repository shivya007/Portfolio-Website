import { motion } from "framer-motion";
import image from "../assets/Aboutavatar.png";
import AboutPic from "../assets/AboutPic.png";
import { Button } from "./ui/button";
import { Download, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="border-b border-neutral-900 pb-24 px-4">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md"
        >
          About <span className="text-neutral-500">Me</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-4 mx-auto h-1 w-24 bg-indigo-500 origin-center"
        />
      </div>

      {/* Glowing Card */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-10 px-4 py-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-indigo-500/30 transition-all duration-500"
      >
        {/* Avatar */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={AboutPic}
            alt="About Me"
            className="rounded-2xl w-[300px] sm:w-[400px] shadow-md shadow-indigo-700/30"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <h3 className="text-5xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            I'm Shiv,
          </h3>

          <p className="text-2xl text-gray-100 font-medium">
            From Problem-Solving to Creative Websites: My Developer Journey.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed tracking-wide">
  I’m a <span className="text-indigo-400 font-semibold">Full Stack Engineer</span> with a strong foundation in both front-end and back-end technologies. I build <span className="text-blue-400 font-semibold">scalable, secure, and responsive</span> web applications using 
  <span className="text-cyan-300 font-semibold"> React.js</span>, 
  <span className="text-teal-300 font-semibold"> TailwindCSS</span>, 
  <span className="text-green-400 font-semibold"> Node.js</span>, 
  <span className="text-gray-300 font-semibold"> Express.js</span>, and 
  <span className="text-green-500 font-semibold"> MongoDB</span>.

  <br /><br />

  I have a deep understanding of <span className="text-yellow-300 font-semibold">Java</span>, 
  <span className="text-orange-400 font-semibold"> OOPs principles</span>, and 
  <span className="text-pink-400 font-semibold"> Data Structures & Algorithms</span>, which empower me to write optimized and efficient code. I frequently practice <span className="text-purple-400 font-semibold">DSA patterns</span> to strengthen my problem-solving approach.

  <br /><br />

  On the backend, I integrate databases like 
  <span className="text-emerald-300 font-semibold"> SQL</span> and 
  <span className="text-green-500 font-semibold"> MongoDB</span> for structured and unstructured data handling, and I leverage <span className="text-indigo-400 font-semibold">AWS Cloud</span> to deploy and scale applications reliably and securely.

  <br /><br />

  I combine these technical skills with a product-thinking mindset to deliver experiences that are fast, intuitive, and production-ready.
</p>


          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 to-[#1a2a3a] px-6 py-3 text-xl font-semibold text-gray-100 shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 before:absolute before:inset-0 before:-left-full before:z-0 before:bg-gradient-to-r before:from-white/20 before:via-white/50 before:to-white/20 before:opacity-50 before:transition-[left] before:duration-700 hover:before:left-full">
              <a
                href="https://drive.google.com/file/d/1UOqZSZNXYBvSxcdlAjwtgwerqFGJEBHe/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </a>
            </Button>

            <Button asChild className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 to-[#1a2a3a] px-6 py-3 text-lg font-semibold text-gray-100 shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 before:absolute before:inset-0 before:-left-full before:z-0 before:bg-gradient-to-r before:from-white/20 before:via-white/50 before:to-white/20 before:opacity-50 before:transition-[left] before:duration-700 hover:before:left-full">
              <a href="#contacts" className="relative z-10 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
