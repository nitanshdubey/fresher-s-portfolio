import { motion } from 'framer-motion';
import {
  FileCode2,
  Palette,
  Braces,
  FileType2,
  Atom,
  Wind,
  GitBranch,
  Github,
  Globe,
  LayoutGrid,
  Puzzle,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

interface Skill {
  icon: LucideIcon;
  name: string;
  category: 'Core' | 'Framework' | 'Tools' | 'Practice';
}

const SKILLS: Skill[] = [
  { icon: FileCode2, name: 'HTML', category: 'Core' },
  { icon: Palette, name: 'CSS', category: 'Core' },
  { icon: Braces, name: 'JavaScript', category: 'Core' },
  { icon: FileType2, name: 'TypeScript', category: 'Core' },
  { icon: Atom, name: 'React', category: 'Framework' },
  { icon: Wind, name: 'Tailwind CSS', category: 'Framework' },
  { icon: GitBranch, name: 'Git', category: 'Tools' },
  { icon: Github, name: 'GitHub', category: 'Tools' },
  { icon: Globe, name: 'REST APIs', category: 'Tools' },
  { icon: LayoutGrid, name: 'Responsive Design', category: 'Practice' },
  { icon: Puzzle, name: 'Problem Solving', category: 'Practice' },
  { icon: Sparkles, name: 'Attention to Detail', category: 'Practice' },
];

const categoryStyles: Record<Skill['category'], string> = {
  Core: 'from-[var(--color-accent-indigo)]/10 to-[var(--color-accent-indigo)]/0',
  Framework: 'from-[var(--color-accent-cyan)]/10 to-[var(--color-accent-cyan)]/0',
  Tools: 'from-[var(--color-accent-emerald)]/10 to-[var(--color-accent-emerald)]/0',
  Practice: 'from-[var(--color-text-primary)]/5 to-[var(--color-text-primary)]/0',
};

function Skills() {
  return (
    <section id="skills" className="section-padding page-width">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl mx-auto mb-16"
      >
        <span className="text-sm font-medium text-[var(--color-accent-indigo)]">
          Skills
        </span>
        <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight">
          Tools I use to bring ideas to life.
        </h2>
        <p className="mt-4 text-secondary">
          A focused toolkit, backed by a habit of picking up whatever a project
          actually needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className={`hover-lift group relative overflow-hidden rounded-2xl border-subtle bg-gradient-to-br ${categoryStyles[skill.category]} bg-white/50 p-5 flex flex-col items-start gap-4`}
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--color-bg-elevated)] border-subtle shadow-soft flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Icon size={20} className="text-[var(--color-accent-indigo)]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  {skill.name}
                </p>
                <p className="text-xs text-muted mt-0.5">{skill.category}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;