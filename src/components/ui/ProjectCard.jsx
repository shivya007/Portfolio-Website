import { ArrowUpRight } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-105 h-64">
      
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-0"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover blur-[1.2px] group-hover:blur-0 transition-all duration-500 scale-105 group-hover:scale-110"
        />
      </a>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Arrow Icon (top right) */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white p-2 rounded-full transition-transform duration-300"
      >
        <ArrowUpRight className="w-5 h-5 text-black transition-transform duration-500 ease-in-out hover:-rotate-[30deg] hover:shadow-lg hover:shadow-indigo-400"/>
      </a>

      {/* Title and Headline (bottom left) */}
      <div className="absolute bottom-4 left-4 z-20 text-white">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-neutral-300 max-w-xs">{project.headline}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
