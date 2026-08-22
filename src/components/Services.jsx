import { Code2, Network, PenTool, Video } from 'lucide-react'

// TODO: adjust descriptions to match what you actually offer
const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Building full-stack websites and web apps with modern frameworks.',
  },
  {
    icon: Network,
    title: 'Networking',
    desc: 'Setting up and maintaining network infrastructure and IT systems.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    desc: 'Designing clean, user-friendly interfaces for web and mobile.',
  },
  {
    icon: Video,
    title: 'Video Editing',
    desc: 'Editing and producing video content for projects and social media.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-night-900">
      <div className="max-w-6xl mx-auto">
        <span className="eyebrow">Services</span>
        <h2 className="section-heading mt-6">
          What <span className="text-accent-light">I</span> Do
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-night-800 border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                <Icon size={20} className="text-accent-light" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-white/50 mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
