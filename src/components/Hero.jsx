import image from "../assets/frontavatar.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { HERO_CONTENT } from "../constants";
import SAPic from "../assets/SAPic.png"; // Import your image here

const fullName = "Shiv Arora";
const Hero = () => {
  const [typedName, setTypedName] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0); // ✅ persistent mutable index

   useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = indexRef.current;

      if (currentIndex <= fullName.length - 1) {
        setTypedName(fullName.slice(0, currentIndex + 1));
        indexRef.current += 1;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-neutral-900 bg-gradient-to-b from-[#0f0f0f] via-[#111111] to-[#0f0f0f] py-24"
    >
      {/* Glowing radial background */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[600px] w-[600px] bg-indigo-700 blur-[150px] opacity-20 rounded-full -z-10" />

      <div className="flex flex-col lg:flex-row items-center justify-between px-4 max-w-7xl mx-auto gap-16">
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-lg mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500">
              {typedName}
            </span>
            {isTyping && <span className="animate-pulse text-indigo-400">|</span>}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-indigo-300 mb-6 tracking-wide"
          >
            Full Stack Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl tracking-wide"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Right Side: Avatar Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={SAPic}
            alt="Shiv Arora"
            className="w-[320px] sm:w-[380px] lg:w-[420px] rounded-2xl shadow-lg shadow-indigo-500/20 transition-all duration-500 hover:scale-105 hover:shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;