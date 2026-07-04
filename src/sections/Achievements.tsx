import { motion } from 'framer-motion';
import {
  Award,
  Code,
  Trophy,
  Users2,
  BookOpenCheck,
  type LucideIcon,
} from 'lucide-react';

interface Achievement {
  icon: LucideIcon;
  title: string;
  issuer: string;
  date: string;
  category: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: Award,
    title: 'React Developer Certification',
    issuer: 'Meta / Coursera',
    date: '2024',
    category: 'Certification',
  },
  {
    icon: Code,
    title: '150+ Problems Solved',
    issuer: 'LeetCode',
    date: '2023 — Present',
    category: 'Coding Practice',
  },
  {
    icon: Trophy,
    title: 'Top 10 Finalist',
    issuer: 'Campus Hackathon 2024',
    date: '2024',
    category: 'Hackathon',
  },
  {
    icon: BookOpenCheck,
    title: 'Advanced JavaScript Workshop',
    issuer: 'Community Tech Meetup',
    date: '2024',
    category: 'Workshop',
  },
  {
    icon: Users2,
    title: 'Active Contributor',
    issuer: 'Local Developer Community',
    date: '2023 — Present',
    category: 'Community',
  },
  {
    icon: Award,
    title: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    date: '2023',
    category: 'Certification',
  },
];

function Achievements() {
  return (
    <section id="achievements" className="section-padding page-width">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl mx-auto mb-16"
      >
        <span className="text-sm font-medium text-[var(--color-accent-indigo)]">
          Achievements
        </span>
        <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight">
          Milestones along the way.
        </h2>
        <p className="mt-4 text-secondary">
          Small proof points that back up the skills — earned through
          practice, not just claimed on a page.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {ACHIEVEMENTS.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="hover-lift rounded-2xl border-subtle bg-[var(--color-bg-elevated)] shadow-soft p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-accent-indigo)]/10 flex items-center justify-center">
                  <Icon size={20} className="text-[var(--color-accent-indigo)]" />
                </div>
                <span className="text-xs font-medium text-muted px-2.5 py-1 rounded-full bg-[var(--color-border)]">
                  {achievement.category}
                </span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted mt-1">
                  {achievement.issuer} · {achievement.date}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Achievements;