import { motion } from 'framer-motion';
import {
  GitPullRequest,
  Trophy,
  FolderGit2,
  Briefcase,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

interface ExperienceItem {
  icon: LucideIcon;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    icon: FolderGit2,
    title: 'Personal Projects',
    organization: 'Self-directed',
    period: '2023 — Present',
    description:
      'Designed and shipped multiple full-stack side projects end-to-end, from idea to deployment, to learn by building rather than by tutorial.',
    tags: ['React', 'TypeScript', 'Deployment'],
  },
  {
    icon: GitPullRequest,
    title: 'Open Source Contributions',
    organization: 'Community Projects',
    period: '2024 — Present',
    description:
      'Contributed bug fixes and small features to open-source repositories, learning how real production codebases and review processes work.',
    tags: ['Git', 'Code Review', 'Collaboration'],
  },
  {
    icon: Trophy,
    title: 'Hackathon Participant',
    organization: 'Campus & Online Hackathons',
    period: '2024',
    description:
      'Built functional prototypes under tight deadlines with a team, focusing on shipping a working demo over a perfect one.',
    tags: ['Rapid Prototyping', 'Teamwork'],
  },
  {
    icon: Briefcase,
    title: 'Freelance Web Development',
    organization: 'Independent Clients',
    period: '2024 — Present',
    description:
      'Delivered small websites for local clients, handling requirements, timelines, and revisions independently from start to finish.',
    tags: ['Client Communication', 'React', 'Tailwind CSS'],
  },
  {
    icon: BookOpen,
    title: 'Structured Learning Milestones',
    organization: 'Self-Study',
    period: 'Ongoing',
    description:
      'Completed focused learning sprints on topics like REST APIs and responsive design, always paired with a small project to apply it.',
    tags: ['Continuous Learning'],
  },
];

function Experience() {
  return (
    <section id="experience" className="section-padding page-width">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl mx-auto mb-16"
      >
        <span className="text-sm font-medium text-[var(--color-accent-indigo)]">
          Experience
        </span>
        <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight">
          Real work, outside a traditional job title.
        </h2>
        <p className="mt-4 text-secondary">
          Experience isn't only a job title — it's every project, contribution,
          and deadline that pushed my skills forward.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        <div
          className="absolute left-[27px] top-2 bottom-2 w-px bg-[var(--color-border-strong)] hidden sm:block"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-8">
          {EXPERIENCE_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex flex-col sm:flex-row gap-5 sm:gap-6"
              >
                <div className="relative z-10 shrink-0 w-14 h-14 rounded-2xl bg-[var(--color-bg-elevated)] border-subtle shadow-soft flex items-center justify-center">
                  <Icon size={20} className="text-[var(--color-accent-indigo)]" />
                </div>

                <div className="hover-lift flex-1 rounded-2xl border-subtle bg-white/50 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted mt-0.5">
                        {item.organization}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-muted px-2.5 py-1 rounded-full bg-[var(--color-border)] whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-secondary">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-accent-indigo)]/8 text-[var(--color-accent-indigo)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;