import project1 from "../assets/projects/airbnbimg.jpg";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/spotifyimg.jpg";
import Authenticaton from "../assets/projects/Authentication.png";
import JobTracker from "../assets/projects/JobTracker.png";

import { RiReactjsLine } from "react-icons/ri";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiJava,
  DiRedis,
} from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const HERO_CONTENT = `I am a passionate full-stack developer with expertise in building modern web applications and a strong command of Data Structures and Algorithms (DSA) in Java. Combining front-end technologies like HTML, CSS, JavaScript, and React with back-end tools such as Node.js, Express, and MongoDB, I deliver dynamic, responsive, and scalable solutions. Let’s create something amazing together!`;


export const EXPERIENCES = [
  {
    year: "November 2024 - February 2025",
    role: "Fullstack Engineer",
    company: "PearlThoughts",
    description: [
      "Transformed doctor-patient Figma designs into a fully responsive web application using React.js and Tailwind CSS, enhancing user experience across devices.",
      "Integrated Clerk to handle secure login/signup flows, improving user onboarding efficiency and enabling centralized user management.",
      "Built scalable REST APIs using Node.js and MongoDB to handle patient records, appointment scheduling, and medical history, improving operational efficiency.",
      "Deployed the application on Vercel and Render with CI/CD integration, enabling real-time updates and reducing manual deployment overhead for the team.",
    ],
    technologies: ["Node.js", "React.js", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    year: "July 2024 - October 2024",
    role: "FullStack Developer",
    company: "Zidio",
    description: [
      "Developed a Job Portal using React and Node.js.",
      "Enabled users to browse, filter, and apply for jobs.",
      "Integrated MongoDB for data management.",
      "Built backend APIs with Express for user authentication and job posting features.",
      "Focused on responsive design and optimized performance for a seamless user experience across devices."
   ],
    technologies: ["HTML", "CSS", "React.js","Shadcn/UI", "mongoDB"],
  },
  
];

export const PROJECTS = [
  {
    title: "Advanced Authentication System",
    image: Authenticaton,
    headline: "Secure login/signup with MFA and Email Verification",
    description:
      "Developed Airvillas, a property rental platform, allowing users to browse, filter, and book vacation rentals. Features include property listings, booking management, and user authentication. Integrated payment gateway for secure transactions and implemented responsive design to ensure a smooth experience across all devices.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap", "Node.js", "MongoDB"],
    link: "https://advanced-auth-nine.vercel.app/",
  },
  {
    title: "AirVillas Project",
    image: project1,
    headline: "AirVillas - Your Vacation Rental Solution",
    description:
      "Developed Airvillas, a property rental platform, allowing users to browse, filter, and book vacation rentals. Features include property listings, booking management, and user authentication. Integrated payment gateway for secure transactions and implemented responsive design to ensure a smooth experience across all devices.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap", "Node.js", "MongoDB"],
    link: "https://airvillas-project.onrender.com/",
  },
  {
    title: "Buzzy Chat Application",
    image: project2,
    headline: "Buzzy - Real-time Chat Application",
    description: "Developed a real-time chat application enabling users to send and receive messages instantly. Features include user authentication, private and group chats, typing indicators, and online status updates. Built using React, Node.js, Express, and Socket.io for seamless real-time communication.",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJs", "Node.js", "Express", "Socket.io", "MongoDB"],
    link: "https://buzzy-chat-application.onrender.com/", 
  },
  {
    title: "BeatBox Music Player",
    image: project3,
    headline: "BeatBox - Your Personal Music Player",
    description:
      "Developed Beatbox Spotify, a music streaming interface inspired by Spotify, allowing users to explore, play, and manage their favorite tracks. Implemented features like playlist creation, music search, and a visually engaging UI using React. Focused on providing a smooth, interactive user experience with responsive design, ensuring functionality across various devices.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/shivya007/BEAT-BOX-SPOTIFY-",
  },
  {
    title: "Student Job tracker",
    image: JobTracker,
    headline: "Track your job applications with ease",
    description:
      "Developed Airvillas, a property rental platform, allowing users to browse, filter, and book vacation rentals. Features include property listings, booking management, and user authentication. Integrated payment gateway for secure transactions and implemented responsive design to ensure a smooth experience across all devices.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap", "Node.js", "MongoDB"],
    link: "https://student-job-tracker-sable.vercel.app/",
  },
  
];



export const TECHNOLOGIES = [
  { name: "Java", icon: DiJava, color: "text-blue-500", duration: 2.5 },
  { name: "HTML", icon: DiHtml5, color: "text-orange-500", duration: 3 },
  { name: "CSS", icon: DiCss3, color: "text-blue-500", duration: 5 },
  { name: "JavaScript", icon: DiJavascript1, color: "text-yellow-400", duration: 4 },
  { name: "React", icon: RiReactjsLine, color: "text-cyan-400", duration: 6 },
  { name: "Express", icon: SiExpress, color: "text-gray-400", duration: 6 },
  { name: "Next.js", icon: TbBrandNextjs, color: "text-gray-800", duration: 5 },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", duration: 5 },
  { name: "Redis", icon: DiRedis, color: "text-red-700", duration: 4 },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", duration: 6 },
  { name: "PostgreSQL", icon: BiLogoPostgresql, color: "text-sky-500", duration: 5 },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};