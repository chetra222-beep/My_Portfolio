import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

// TODO: replace with real testimonials once you have them (classmates, clients, teammates)
const reviews = [
  {
    name: 'Client Name',
    role: 'Project Role',
    text: 'Placeholder testimonial text. Replace this with real feedback once you have it.',
  },
  {
    name: 'Client Name',
    role: 'Project Role',
    text: 'Placeholder testimonial text. Replace this with real feedback once you have it.',
  },
  {
    name: 'Client Name',
    role: 'Project Role',
    text: 'Placeholder testimonial text. Replace this with real feedback once you have it.',
  },
]

export default function Reviews() {
  const [index, setIndex] = useState(0)
  const review = reviews[index]

  const prev = () => setIndex((index - 1 + reviews.length) % reviews.length)
  const next = () => setIndex((index + 1) % reviews.length)

  return (
    <section id="reviews" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="eyebrow">Testimonials</span>
        <h2 className="section-heading mt-6">What People Say</h2>

        <div className="bg-night-800 border border-white/10 rounded-2xl p-8 md:p-10 mt-10 relative">
          <Quote className="mx-auto text-accent-light" size={28} />
          <p className="text-white/70 leading-relaxed mt-6">{review.text}</p>
          <div className="mt-6">
            <div className="font-semibold">{review.name}</div>
            <div className="text-sm text-white/50">{review.role}</div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button onClick={prev} className="btn-icon" aria-label="Previous review">
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-1.5">
              {reviews.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-6 bg-accent' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="btn-icon" aria-label="Next review">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
