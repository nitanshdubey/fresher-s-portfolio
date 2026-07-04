import { motion } from 'framer-motion';
import { GraduationCap, Target, Heart, Sparkles } from 'lucide-react';

const STRENGTHS = [
  'Fast Learner',
  'Detail-Oriented',
  'Clear Communicator',
  'Collaborative',
];

const INTERESTS = [
  'Web Performance',
  'Design Systems',
  'Open Source',
  'Product Thinking',
];

function About() {
  return (
    <section id="about" className="section-padding page-width">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Left: asymmetrical photo block */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative w-full max-w-sm mx-auto lg:mx-0">
            {/* Photo placeholder */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-subtle shadow-soft bg-gradient-to-br from-[var(--color-accent-indigo)]/10 to-[var(--color-accent-cyan)]/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-[var(--font-display)] font-semibold text-[var(--color-accent-indigo)]/30">
                  AD
                </span>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="animate-float absolute -bottom-6 -right-6 w-40 rounded-2xl bg-[var(--color-bg-elevated)] shadow-soft border-subtle p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={14} className="text-[var(--color-accent-indigo)]" />
                <span className="text-xs font-medium">Fresher</span>
              </div>
              <p className="text-xs text-muted">Ready to build great things</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 lg:pt-8"
        >
          <span className="text-sm font-medium text-[var(--color-accent-indigo)]">
            Who I Am
          </span>

          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight">
            A developer who cares about the details.
          </h2>

          <p className="mt-6 text-secondary content-width">
            I got into software development because I loved the idea of
            turning a blank page into something people could actually use.
            That curiosity hasn't faded — every project is still a chance to
            learn something new, whether it's a framework, a design pattern,
            or just a better way to solve a problem.
          </p>

          <p className="mt-4 text-secondary content-width">
            I'm early in my career, but I approach every piece of work with
            the same standard: understand the problem deeply, write code I'd
            be proud to hand over, and never stop asking "how could this be
            better?"
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-[var(--color-accent-indigo)]/10 flex items-center justify-center">
                <GraduationCap size={18} className="text-[var(--color-accent-indigo)]" />
              </div>
              <div>
                <p className="text-sm font-medium">Education</p>
                <p className="text-sm text-muted mt-0.5">
                  B.Tech in Computer Science
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-[var(--color-accent-cyan)]/10 flex items-center justify-center">
                <Target size={18} className="text-[var(--color-accent-indigo)]" />
              </div>
              <div>
                <p className="text-sm font-medium">Objective</p>
                <p className="text-sm text-muted mt-0.5">
                  Build products that solve real problems
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm font-medium mb-3 flex items-center gap-2">
              <Heart size={15} className="text-[var(--color-accent-indigo)]" />
              Strengths
            </p>
            <div className="flex flex-wrap gap-2">
              {STRENGTHS.map((strength) => (
                <span
                  key={strength}
                  className="hover-scale px-3.5 py-1.5 rounded-full border-subtle text-sm text-secondary bg-white/60"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium mb-3">Interests</p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="hover-scale px-3.5 py-1.5 rounded-full border-subtle text-sm text-secondary bg-white/60"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;