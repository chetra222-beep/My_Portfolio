
import { ArrowRight } from 'lucide-react'
import aboutPhoto from '../assets/images/About.jpg'
// TODO: adjust these stats to reflect your real numbers
const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '3+', label: 'Years Learning' },
  { value: '4', label: 'Core Skills' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-night-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="relative">
          {/* TODO: replace with your own photo */}
          <div className="aspect-[4/5] rounded-3xl bg-night-800 border border-white/10 flex items-center justify-center max-w-sm">
            <span className="text-white/30 text-sm">
            <img src={aboutPhoto} 
            alt="About Me" 
            className="relative aspect-[3/4] rounded-3xl object-cover w-full border border-white/10'
              />" />
            </span>
          </div>
        </div>

        <div>
          <span className="eyebrow">About Me</span>
          <h2 className="section-heading mt-6">
            I am a <span className="text-accent-light">Web Developer</span> &{' '}
            <span className="text-accent-light">Designer</span>
          </h2>

          {/* TODO: replace with your own bio */}
          <p className="text-white/60 mt-6 leading-relaxed">
            Currently studying at the Royal University of Phnom Penh, I work across
            web development, networking, UI/UX design, and video editing. I enjoy
            turning ideas into working products — from full-stack web apps to
            polished interfaces and edited video content.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-night-800 border border-white/10 rounded-xl px-4 py-5 text-center"
              >
                <div className="font-display font-bold text-2xl text-white">{stat.value}</div>
                <div className="text-xs text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary mt-8">
            Get In Touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
