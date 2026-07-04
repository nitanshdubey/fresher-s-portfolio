import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Download,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden page-width"
    >
      {/* Ambient background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.10),transparent_70%)] blur-2xl" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.10),transparent_70%)] blur-2xl" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full section-padding">
        {/* Left */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-subtle bg-white/60 text-sm text-secondary mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] animate-pulse-glow" />
            Available for opportunities
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold tracking-tight text-[var(--color-text-primary)]"
          >
            Building Digital
            <br />
            Experiences That{" "}
            <span className="relative inline-block">
              Matter.
              <svg
                className="absolute left-0 -bottom-2 w-full"
                height="10"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8C40 2 160 2 198 8"
                  stroke="var(--color-accent-indigo)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-secondary content-width"
          >
            I'm a passionate software developer who enjoys solving problems,
            learning continuously, and transforming ideas into intuitive web
            experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="button-scale hover-lift group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--color-accent-indigo)] text-white text-sm font-medium shadow-soft"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="button-scale hover-lift inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-subtle bg-white/70 text-[var(--color-text-primary)] text-sm font-medium"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative h-[440px] hidden lg:block"
        >
          {/* Background Shape */}
          <motion.div
  variants={cardVariants}
  className="absolute top-8 right-4 w-64 h-64 rounded-[2rem] overflow-hidden border-subtle shadow-soft"
>
  <img
    src="https://github.com/nitanshdubey/fresher-s-portfolio/blob/main/caroline-badran-rpyxB9yOFXw-unsplash.jpg?raw=true"
    alt="Creative workspace"
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
  />

  {/* Optional subtle dark overlay for a premium look */}
  <div className="absolute inset-0 bg-black/10" />
</motion.div>

          {/* Browser Card */}
          <motion.div
            variants={cardVariants}
            className="animate-float absolute top-4 left-2 w-64 rounded-2xl bg-[var(--color-bg-elevated)] shadow-soft border-subtle overflow-hidden"
          >
            <div className="overflow-hidden">
  <img
    src="https://github.com/nitanshdubey/fresher-s-portfolio/blob/main/michal-bielejewski-P8tzRoPwTu8-unsplash.jpg?raw=true"
    alt="Modern workspace"
    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>
          </motion.div>

          {/* Uptime Card */}
          <motion.div
            variants={cardVariants}
            className="animate-float-slow absolute bottom-16 left-16 w-48 rounded-2xl bg-[var(--color-bg-elevated)] shadow-soft border-subtle p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted">Uptime</span>
              <TrendingUp
                size={14}
                className="text-[var(--color-accent-emerald)]"
              />
            </div>

            <p className="text-2xl font-semibold font-[var(--font-display)]">
              99.9%
            </p>
          </motion.div>

          {/* Deploy Card */}
          <motion.div
  variants={cardVariants}
  className="animate-float absolute bottom-0 right-6 w-56 rounded-2xl overflow-hidden bg-[var(--color-bg-elevated)] shadow-soft border-subtle"
>
  <img
    src="https://github.com/nitanshdubey/fresher-s-portfolio/blob/main/microsoft-copilot-ghVMdPN33vM-unsplash.jpg?raw=true"
    alt="AI coding workspace"
    className="w-full h-44 object-cover"
  />

  <div className="p-4">
    <div className="flex items-center gap-2 mb-2">
      <CheckCircle2
        size={16}
        className="text-[var(--color-accent-emerald)]"
      />
      <span className="text-sm font-medium">Deploy successful</span>
    </div>

    <div className="h-2 w-full rounded-full bg-[var(--color-border)]">
      <div className="h-2 w-4/5 rounded-full bg-[var(--color-accent-indigo)]" />
    </div>
  </div>
</motion.div>

          {/* Sparkle */}
          <motion.div
            variants={cardVariants}
            className="animate-float-slow absolute top-2 right-24 w-10 h-10 rounded-xl bg-[var(--color-accent-cyan)]/15 border-subtle flex items-center justify-center"
          >
            <Sparkles
              size={16}
              className="text-[var(--color-accent-indigo)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;