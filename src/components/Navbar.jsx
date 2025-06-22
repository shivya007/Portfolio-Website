import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";
import SALOGO from "../assets/SALOGO.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-neutral-800 px-6 py-4 flex items-center justify-between shadow-md">
      
      {/* Left logo (You can customize this badge/logo) */}
      <div className="flex items-center text-white font-bold text-xl tracking-widest animate-pulse">
        <img
  src={SALOGO}
  alt="Logo"
  className="w-16 sm:w-20 object-contain scale-125 sm:scale-150 -my-2 sm:-my-3 drop-shadow-[0_0_10px_rgba(99,102,241,0.4)] hover:scale-160 transition-transform duration-500 ease-in-out"
/>
      </div>

      {/* Middle nav links */}
      <div className="hidden md:flex space-x-6 text-[22px] font-medium">
        {[
          { label: "Home", href: "#" },
          { label: "About", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Projects", href: "#projects" },
          { label: "Experience", href: "#experience" },
          { label: "Blog", href: "#blog" },
          { label: "Contact", href: "#contacts" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-gray-300 hover:text-indigo-400 transition duration-300 hover:scale-105 hover:drop-shadow-lg"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Social icons */}
      <div className="flex items-center gap-4 text-2xl text-gray-300">
        <a
          href="https://www.linkedin.com/in/shiv-arora-485b1b226/"
          target="_blank"
          className="hover:text-indigo-400 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shivya007"
          target="_blank"
          className="hover:text-indigo-400 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="http://leetcode.com/passionshiv007"
          target="_blank"
          className="hover:text-indigo-400 transition duration-300"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://medium.com/@passionshiv007"
          target="_blank"
          className="hover:text-indigo-400 transition duration-300"
        >
          <FaMedium />
        </a>
        <a
          href="https://www.instagram.com/shiv.arora.5686/"
          target="_blank"
          className="hover:text-indigo-400 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
