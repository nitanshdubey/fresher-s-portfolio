import { motion } from 'framer-motion';
import {
  Code2,
  Braces,
  Layers,
  Rocket,
  Server,
  Infinity as InfinityIcon,
  type LucideIcon,
} from 'lucide-react';

interface JourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
  year: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    icon: Code2,
    title: 'Started with HTML & CSS',
    description:
      'Built my first static pages and fell in love with turning ideas into something visual on a screen.',
    year: 'Year 1',
  },
  {
    icon: Braces,
    title: 'Learned JavaScript',
    description:
      'Moved from static pages to interactive experiences — this is where "building" started feeling like problem-solving.',
    year: 'Year 1–2',
  },
  {
    icon: Layers,
    title: 'Mastered React',
    description:
      'Learned to think in components and state. React changed how I structure every project since.',
    year: 'Year 2',
  },
  {
    icon: Rocket,
    title: 'Built Real Projects',
    description:
      'Took ideas from concept to deployed product — dealing with real constraints, not just tutorials.',
    year: 'Year 2–3',
  },
  {
    icon: Server,
    title: 'Exploring Backend',
    description:
      'Currently deepening my understanding of APIs, databases, and how systems connect end-to-end.',
    year: 'Present',
  },
  {
    icon: InfinityIcon,
    title: 'Continuous Learning',
    description:
      'Every week I pick something new to explore — that habit is the one constant in how I grow.',
    year: 'Ongoing',
  },
];

function Journey() {
  return (
    <section id="journey" className="section-padding page-width bg-surface-alt">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl mx-auto mb-16"
      >
        <span className="text-sm font-medium text-[var(--color-accent-indigo)]">
          My Journey
        </span>
        <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight">
          Every skill here was earned, one step at a time.
        </h2>
        <p className="mt-4 text-secondary">
          Not a checklist of qualifications — a real path of learning, building, and
          improving.
        </p>
      </motion.div>

      <div className="relative max-w-2xl mx-auto">
        {/* Vertical connecting line */}
        <div
          className="absolute left-[27px] top-2 bottom-2 w-px bg-[var(--color-border-strong)]"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-10">
          {JOURNEY_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex gap-6 pl-0"
              >
                <div className="relative z-10 shrink-0 w-14 h-14 rounded-2xl bg-[var(--color-bg-elevated)] border-subtle shadow-soft flex items-center justify-center">
                  <Icon size={20} className="text-[var(--color-accent-indigo)]" />
                </div>

                <div className="hover-lift flex-1 rounded-2xl border-subtle bg-white/50 p-5 pt-4">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                      {step.title}
                    </h3>
                    <span className="text-xs font-medium text-muted px-2.5 py-1 rounded-full bg-[var(--color-border)]">
                      {step.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Journey;