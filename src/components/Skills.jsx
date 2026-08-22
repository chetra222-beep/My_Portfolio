// TODO: adjust the skills list and percentages to match your real level
const skills = [
  { name: 'Web Development', level: 85 },
  { name: 'Networking', level: 75 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Video Editing', level: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-night-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow">Skills</span>
          <h2 className="section-heading mt-6">
            What <span className="text-accent-light">I'm</span> Good At
          </h2>
          {/* TODO: replace with your own short intro about your skillset */}
          <p className="text-white/60 mt-4 leading-relaxed max-w-md">
            A mix of technical and creative skills built through coursework,
            personal projects, and hands-on practice.
          </p>
        </div>

        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-white/80">{skill.name}</span>
                <span className="text-white/50">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-night-800 border border-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-dark to-accent-light transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
