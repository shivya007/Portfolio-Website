import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-3">
        <div className="flex flex-shrink-0 items-center">
            <h1>Shiv</h1>
        </div>

        <div  className="hidden md:flex space-x-6 text-lg">
          <a href="" className="hover:text-blue-900">Home</a>
          <a href="#about" className="hover:text-blue-900" >About</a>
          <a href="#skills" className="hover:text-blue-900">Skills</a>
          <a href="#projects" className="hover:text-blue-900">Projects</a>
          <a href="#experience" className="hover:text-blue-900">Experience</a>
          <a href="" className="hover:text-blue-900">Blog</a>
          <a href="#contacts" className="hover:text-blue-900">Contact</a>
        </div>

        


        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/shiv-arora-485b1b226/" target="_blank"><FaLinkedin/></a> 
          <a href="https://github.com/shivya007"><FaGithub/></a>
          <a href="https://www.instagram.com/shiv.arora.5686/"><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar