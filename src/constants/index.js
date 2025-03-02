import project1 from "../assets/projects/airbnbimg.jpg";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/spotifyimg.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with expertise in building modern web applications and a strong command of Data Structures and Algorithms (DSA) in Java. Combining front-end technologies like HTML, CSS, JavaScript, and React with back-end tools such as Node.js, Express, and MongoDB, I deliver dynamic, responsive, and scalable solutions. Let’s create something amazing together!`;


export const EXPERIENCES = [
  {
    year: "July 2024 - October 2024",
    role: "FullStack Developer",
    company: "Zidio",
    description: `Developed a Job Portal using React and Node.js, enabling users to browse, filter, and apply for jobs. Integrated MongoDB for data management and built backend APIs with Express for user authentication and job posting features. Focused on responsive design and optimized performance to ensure a seamless user experience across devices.`,
    technologies: ["HTML", "CSS", "React.js","Shadcn/UI", "mongoDB"],
  },
  {
    year: "November 2024 - December 2024",
    role: "Fullstack Developer Intern",
    company: "PearlThoughts",
    description: `Worked on Schedula, a doctor-patient platform, using Next.js, React, and Tailwind CSS. Focused on implementing features that streamline appointment scheduling, patient management, and doctor availability. Integrated dynamic user interfaces for seamless interactions, while ensuring the platform is responsive and user-friendly across devices. The project aimed to improve healthcare service accessibility by providing an intuitive and efficient online scheduling system.`,
    technologies: ["Node.js", "React.js", "Tailwind CSS", "Shadcn/UI"],
  },
];

export const PROJECTS = [
  {
    title: "AirVillas Project",
    image: project1,
    description:
      "Developed Airvillas, a property rental platform, allowing users to browse, filter, and book vacation rentals. Features include property listings, booking management, and user authentication. Integrated payment gateway for secure transactions and implemented responsive design to ensure a smooth experience across all devices.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap", "Node.js", "MongoDB"],
    link: "https://airvillas-project.onrender.com/",
  },
  {
    title: "Buzzy Chat Application",
    image: project2, // Replace with the actual image variable
    description: "Developed a real-time chat application enabling users to send and receive messages instantly. Features include user authentication, private and group chats, typing indicators, and online status updates. Built using React, Node.js, Express, and Socket.io for seamless real-time communication.",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJs", "Node.js", "Express", "Socket.io", "MongoDB"],
    link: "https://buzzy-chat-application.onrender.com/", // Replace with actual deployed link
  },
  {
    title: "BeatBox Music Player",
    image: project3,
    description:
      "Developed Beatbox Spotify, a music streaming interface inspired by Spotify, allowing users to explore, play, and manage their favorite tracks. Implemented features like playlist creation, music search, and a visually engaging UI using React. Focused on providing a smooth, interactive user experience with responsive design, ensuring functionality across various devices.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};