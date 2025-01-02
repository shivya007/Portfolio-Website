import image from "../assets/About.jpg"
import { motion } from "motion/react"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
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
            <p className="my-2 max-w-xl py-6 text-lg text-gray-300 leading-relaxed">
              I’ve always been passionate about problem-solving, which led me to dive deep into <span className="font-semibold text-blue-400">Data Structures and Algorithms (DSA)</span>. With a strong foundation in Java, I’ve solved over 400 problems on LeetCode, gaining in-depth knowledge of algorithms, efficient coding practices, and optimizing solutions. This journey has not only sharpened my logical thinking but also reinforced my ability to tackle complex challenges systematically.
              <br />
              <br />
              Beyond problem-solving, I’ve built a solid skill set as a <span className="font-semibold text-purple-400">Full Stack Developer</span>, crafting dynamic and responsive web applications. During my internship at Zidio Development, I worked on a Job Portal Application, designing and developing scalable features to enhance user experiences. This project strengthened my expertise in tools like React, Node.js, and MongoDB, while also honing my ability to create robust backend systems.
              <br />
              <br />
              Later, at PearlThoughts, I collaborated on a Next.js project, translating Figma designs into pixel-perfect, responsive web pages. This experience helped me refine my understanding of UI/UX design principles and modern frontend frameworks.
              <br />
              <br />
              Combining my love for DSA in Java and web development, I aim to create efficient, impactful solutions that bridge functionality with innovation. Whether solving algorithmic challenges or designing seamless user experiences, I’m always eager to learn, grow, and contribute to meaningful projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
