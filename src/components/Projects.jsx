import { ArrowUpRight } from 'lucide-react'

// TODO: replace with your real projects (e.g. AutoCar Rover, ESP32-CAM RC Car, Attendance System)
const projects = [
  {
    title: 'Project Title One',
    tags: 'Web Design, App Design',
  },
  {
    title: 'Project Title Two',
    tags: 'Network, System Admin',
  },
  {
    title: 'Project Title Three',
    tags: 'UI/UX, Video Editing',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <span className="eyebrow">My Work</span>
        <h2 className="section-heading mt-6">Recent Projects</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-night-800 border border-white/10 rounded-2xl overflow-hidden group"
            >
              {/* TODO: replace with a real screenshot/image for this project */}
              <div className="aspect-video bg-night-700 flex items-center justify-center">
                <span className="text-white/30 text-sm">Project image</span>
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-xs text-white/50 mt-1">{project.tags}</p>
                </div>
                <button className="btn-icon group-hover:bg-accent group-hover:border-accent">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
