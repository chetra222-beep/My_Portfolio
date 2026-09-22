import { ArrowUpRight } from "lucide-react";
import groupPortfolioImg from "../assets/images/group-portfolio-ux.png";

// TODO: replace the remaining placeholder projects with your real work
// (e.g. AutoCar Rover, ESP32-CAM RC Car, Attendance System)
const projects = [
  {
    title: "Group 6 Portfolio (Figma)",
    tags: "UI/UX Design",
    image: groupPortfolioImg,
    link: "https://www.figma.com/proto/YxWrSmtqUpH2CGU4zKYwaD/Project--Portfolio?node-id=3-29&t=61Ir473mXBNs3vRE-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A29",
  },
  {
    title: "Project Title Two",
    tags: "Network, System Admin",
    image: null,
    link: null,
  },
  {
    title: "Project Title Three",
    tags: "Web Design, App Design",
    image: null,
    link: null,
  },
];

export default function Projects() {
  return (
    <section id='projects' className='py-24 px-6'>
      <div className='max-w-6xl mx-auto'>
        <span className='eyebrow'>My Work</span>
        <h2 className='section-heading mt-6'>Recent Projects</h2>
       
        <div className='grid md:grid-cols-3 gap-6 mt-12'>
          {projects.map((project) => (
            <div
              key={project.title}
              className='bg-night-800 border border-white/10 rounded-2xl overflow-hidden group'
            >
              {project.image ? (
                <div className='aspect-video bg-night-700 overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover object-top'
                  />
                </div>
              ) : (
                // TODO: replace with a real screenshot/image for this project
                <div className='aspect-video bg-night-700 flex items-center justify-center'>
                  <span className='text-white/30 text-sm'>Project image</span>
                </div>
              )}
              
              <div className='p-5 flex items-center justify-between'>
                <div>
                  <h3 className='font-semibold'>{project.title}</h3>
                  <p className='text-xs text-white/50 mt-1'>{project.tags}</p>
                </div>
                
                {project.link ? (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-icon group-hover:bg-accent group-hover:border-accent'
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  // as button for projects without a link, so that the layout doesn't shift
                  <button className='btn-icon group-hover:bg-accent group-hover:border-accent'>
                    <ArrowUpRight size={16} />
                  </button>
                )}
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
