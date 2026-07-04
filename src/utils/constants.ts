import type { LucideIcon } from 'lucide-react';
import {
  Code2,
  Braces,
  Layers,
  Rocket,
  Server,
  Infinity as InfinityIcon,
  FileCode2,
  Palette,
  FileType2,
  Atom,
  Wind,
  GitBranch,
  Github,
  Globe,
  LayoutGrid,
  Puzzle,
  Sparkles,
  GitPullRequest,
  Trophy,
  FolderGit2,
  Briefcase,
  BookOpen,
  Award,
  Code,
  Users2,
  BookOpenCheck,
  Mail,
  Linkedin,
  MapPin,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Personal Info                                                       */
/* ------------------------------------------------------------------ */

export const PERSONAL_INFO = {
  name: 'Aditya',
  fullName: 'Aditya Sharma',
  initials: 'AD',
  role: 'Software Developer',
  email: 'hello@adityadev.com',
  location: 'Bhopal, India',
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/adityadev',
    linkedin: 'https://linkedin.com/in/adityadev',
  },
  availability: {
    hiring: true,
    label: 'Available for opportunities',
  },
};

/* ------------------------------------------------------------------ */
/* Navigation                                                           */
/* ------------------------------------------------------------------ */

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

/* ------------------------------------------------------------------ */
/* About Section                                                        */
/* ------------------------------------------------------------------ */

export const ABOUT_CONTENT = {
  story: [
    "I got into software development because I loved the idea of turning a blank page into something people could actually use. That curiosity hasn't faded — every project is still a chance to learn something new, whether it's a framework, a design pattern, or just a better way to solve a problem.",
    'I\'m early in my career, but I approach every piece of work with the same standard: understand the problem deeply, write code I\'d be proud to hand over, and never stop asking "how could this be better?"',
  ],
  education: 'B.Tech in Computer Science',
  objective: 'Build products that solve real problems',
  strengths: ['Fast Learner', 'Detail-Oriented', 'Clear Communicator', 'Collaborative'],
  interests: ['Web Performance', 'Design Systems', 'Open Source', 'Product Thinking'],
};

/* ------------------------------------------------------------------ */
/* Journey Section                                                      */
/* ------------------------------------------------------------------ */

export interface JourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
  year: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
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

/* ------------------------------------------------------------------ */
/* Skills Section                                                       */
/* ------------------------------------------------------------------ */

export type SkillCategory = 'Core' | 'Framework' | 'Tools' | 'Practice';

export interface Skill {
  icon: LucideIcon;
  name: string;
  category: SkillCategory;
}

export const SKILLS: Skill[] = [
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

/* ------------------------------------------------------------------ */
/* Projects Section                                                     */
/* ------------------------------------------------------------------ */

export interface Project {
  name: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  accent: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'TaskFlow',
    description:
      'A minimalist task management app with drag-and-drop boards, real-time sync, and keyboard-first navigation.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
    accent: 'from-[var(--color-accent-indigo)]/15 to-[var(--color-accent-cyan)]/10',
  },
  {
    name: 'WeatherLens',
    description:
      'A weather dashboard that visualizes forecasts through clean data cards instead of cluttered widgets.',
    stack: ['React', 'REST API', 'Framer Motion'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
    accent: 'from-[var(--color-accent-cyan)]/15 to-[var(--color-accent-emerald)]/10',
  },
  {
    name: 'DevNotes',
    description:
      'A distraction-free markdown editor for developers, with live preview and local-first storage.',
    stack: ['TypeScript', 'React', 'Git'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
    accent: 'from-[var(--color-accent-emerald)]/15 to-[var(--color-accent-indigo)]/10',
  },
];

/* ------------------------------------------------------------------ */
/* Experience Section                                                    */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  icon: LucideIcon;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
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

/* ------------------------------------------------------------------ */
/* Achievements Section                                                  */
/* ------------------------------------------------------------------ */

export interface Achievement {
  icon: LucideIcon;
  title: string;
  issuer: string;
  date: string;
  category: string;
}

export const ACHIEVEMENTS: Achievement[] = [
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

/* ------------------------------------------------------------------ */
/* Testimonials Section                                                  */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  relation: 'Mentor' | 'Professor' | 'Peer' | 'Colleague';
  accent: string;
}

export const TESTIMONIALS: Testimonial[] = [
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
      'Consistently one of the strongest performers in the batch. His projects always went beyond the assignment requirements, showing real initiative.',
    name: 'Dr. Ananya Rao',
    role: 'Professor, Computer Science',
    relation: 'Professor',
    accent: 'from-[var(--color-accent-cyan)]/15 to-transparent',
  },
  {
    quote:
      'We built two hackathon projects together and he was the one who kept our code organized under pressure. Calm, reliable, and always improving.',
    name: 'Ishaan Kapoor',
    role: 'Fellow Developer',
    relation: 'Peer',
    accent: 'from-[var(--color-accent-emerald)]/15 to-transparent',
  },
  {
    quote:
      'Delivered freelance work on time with clean communication throughout. For someone early in their career, the professionalism stood out immediately.',
    name: 'Priya Sharma',
    role: 'Freelance Client',
    relation: 'Colleague',
    accent: 'from-[var(--color-accent-indigo)]/15 to-transparent',
  },
];

/* ------------------------------------------------------------------ */
/* Contact Section                                                       */
/* ------------------------------------------------------------------ */

export interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
}

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/adityadev',
    href: PERSONAL_INFO.social.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/adityadev',
    href: PERSONAL_INFO.social.github,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: PERSONAL_INFO.location,
    href: null,
  },
];

/* ------------------------------------------------------------------ */
/* Social Links (Footer)                                                 */
/* ------------------------------------------------------------------ */

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Github, label: 'GitHub', href: PERSONAL_INFO.social.github },
  { icon: Linkedin, label: 'LinkedIn', href: PERSONAL_INFO.social.linkedin },
  { icon: Mail, label: 'Email', href: `mailto:${PERSONAL_INFO.email}` },
];