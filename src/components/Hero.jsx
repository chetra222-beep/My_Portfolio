import { useEffect, useState } from "react";
import { ArrowRight, Facebook, Linkedin, Instagram} from "lucide-react";
import profilePhoto from '../assets/images/Profile.jpg';

// lucide-react has no TikTok icon, so this is a small inline SVG instead
function TikTokIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.31 1.38V7.3s-1.88.09-3.25-1.48z" />
    </svg>
  )
}
const roles = ["WEB DEVELOPER", "NETWORK", "UI/UX DESIGNER", "VIDEO EDITOR"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);



  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id='home' className='pt-40 pb-24 px-6 relative overflow-hidden'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        <div>
          <span className='eyebrow'>KROY CHETRA</span>

          <h1 className='font-display font-bold text-4xl md:text-5xl mt-6 leading-tight'>
            HAY! I'M CHETRA
          </h1>
          <h2 className='font-display font-bold text-4xl md:text-5xl text-accent-light leading-tight min-h-[3.5rem]'>
            I'M A {text}
            <span className='animate-pulse'>|</span>
          </h2>

          {/* TODO: replace with your own intro paragraph */}
          <p className='text-white/60 mt-6 max-w-md leading-relaxed'>
            Undergraduate student at the Royal University of Phnom Penh,
            building practical web, network, and design projects — from
            full-stack apps to clean UI/UX and video content.
          </p>

          <div className='flex items-center gap-4 mt-8'>
            <a href='#contact' className='btn-primary'>
              Get In Touch <ArrowRight size={16} />
            </a>
            {/* TODO: replace # with your real profile links */}
            <a href='https://web.facebook.com/ahhea.trazer' className='btn-icon' aria-label='Facebook'>
              <Facebook size={16} />
            </a>
            <a href='https://www.instagram.com/ahhea.trazer' className='btn-icon' aria-label='Instagram'>
              <Instagram size={16} />
            </a>
             <a href="https://www.tiktok.com/@ahheatrazer" className="btn-icon" aria-label="TikTok">
              <TikTokIcon size={16} />
            </a>
          </div>
        </div>

        <div className='relative'>
          <div className='absolute -inset-6 bg-accent/10 rounded-3xl blur-3xl' />
          {/* TODO: replace with your own photo at /src/assets/profile.jpg */}
          <div className='relative aspect-[4/5] rounded-3xl bg-night-800 border border-white/10 flex items-center justify-center overflow-hidden'>
            <span className='text-white/30 text-sm'>
              <img
                src={profilePhoto}
                alt='Kroy Chetra'
                className='relative aspect-[3/4] rounded-3xl object-cover w-full border border-white/10'
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
