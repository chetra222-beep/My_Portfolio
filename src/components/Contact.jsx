import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id='contact' className='py-24 px-6'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-14'>
        <div>
          <span className='eyebrow'>Contact</span>
          <h2 className='section-heading mt-6'>Let's Work Together</h2>
          <p className='text-white/60 mt-4 leading-relaxed max-w-md'>
            Have a project in mind or want to collaborate? Reach out through any
            of the channels below.
          </p>

          <div className='space-y-4 mt-8'>
            {/* TODO: replace with your real contact details */}
            <div className='flex items-center gap-3 text-white/70'>
              <Mail size={18} className='text-accent-light' />
              chittra22211@gmail.com
            </div>
            <div className='flex items-center gap-3 text-white/70'>
              <Phone size={18} className='text-accent-light' />
              +855 88 229 7770
            </div>
            <div className='flex items-center gap-3 text-white/70'>
              <MapPin size={18} className='text-accent-light' />
              Phnom Penh, Cambodia
            </div>
          </div>
        </div>

        <form
          className='bg-night-800 border border-white/10 rounded-2xl p-6 space-y-4'
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className='text-xs text-white/50'>Name</label>
            <input
              type='text'
              className='w-full mt-1 bg-night-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent'
              placeholder='Your name'
            />
          </div>
          <div>
            <label className='text-xs text-white/50'>Email</label>
            <input
              type='email'
              className='w-full mt-1 bg-night-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent'
              placeholder='you@example.com'
            />
          </div>
          <div>
            <label className='text-xs text-white/50'>Message</label>
            <textarea
              rows={4}
              className='w-full mt-1 bg-night-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent'
              placeholder='Tell me about your project'
            />
          </div>
          <button type='submit' className='btn-primary w-full justify-center'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
