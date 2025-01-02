import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1>Shiv</h1>
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