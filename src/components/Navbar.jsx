import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-night-950/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg tracking-wide">
          <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <Zap size={16} className="text-white" />
          </span>
          CHETRA
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-primary">
          Let's Talk
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-night-900 border-t border-white/5 px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-white text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
            Let's Talk
          </a>
        </div>
      )}
    </header>
  )
}
