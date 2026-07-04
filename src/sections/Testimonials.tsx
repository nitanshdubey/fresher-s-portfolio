import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  relation: string;
  accent: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "One of the most curious students I've mentored. He doesn't just complete tasks — he asks why things are built the way they are, which is rare this early on.",
    name: 'Rohan Verma',
    role: 'Senior Engineer, Mentor',
    relation: 'Mentor',
    accent: 'from-[var(--color-accent-indigo)]/15 to-transparent',
  },
  {
    quote:
      "Consistently one of the strongest performers in the batch. His projects always went beyond the assignment requirements, showing real initiative.",
    name: 'Dr. Ananya Rao',
    role: 'Professor, Computer Science',
    relation: 'Professor',
    accent: 'from-[var(--color-accent-cyan)]/15 to-transparent',
  },
  {
    quote:
      "We built two hackathon projects together and he was the one who kept our code organized under pressure. Calm, reliable, and always improving.",
    name: 'Ishaan Kapoor',
    role: 'Fellow Developer',
    relation: 'Peer',
    accent: 'from-[var(--color-accent-emerald)]/15 to-transparent',
  },
  {
    quote:
      "Delivered freelance work on time with clean communication throughout. For someone early in their career, the professionalism stood out immediately.",
    name: 'Priya Sharma',
    role: 'Freelance Client',
    relation: 'Colleague',
    accent: 'from-[var(--color-accent-indigo)]/15 to-transparent',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="section-padding page-width relative">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.06),transparent_70%)] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl mx-auto mb-16"
      >
        <span className="text-sm font-medium text-[var(--color-accent-indigo)]">
          Testimonials
        </span>
        <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight">
          What people I've worked with say.
        </h2>
        <p className="mt-4 text-secondary">
          A few words from mentors, professors, and collaborators along the
          way.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`hover-lift glass-card relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br ${testimonial.accent}`}
          >
            <Quote
              size={28}
              className="text-[var(--color-accent-indigo)]/25 mb-4"
              strokeWidth={1.5}
            />

            <p className="text-[15px] leading-relaxed text-[var(--color-text-primary)]/85">
              "{testimonial.quote}"
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white/70 border-subtle flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold font-[var(--font-display)] text-[var(--color-accent-indigo)]">
                  {testimonial.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;