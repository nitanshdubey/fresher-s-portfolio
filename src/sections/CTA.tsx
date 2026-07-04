import { motion } from "framer-motion";
import { Briefcase, MessageCircle, ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden section-padding page-width">
      {/* Subtle lighting background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(ellipse,rgba(79,70,229,0.08),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-[15%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.06),transparent_70%)] blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-2xl mx-auto text-center rounded-[2rem] border-subtle bg-[var(--color-bg-elevated)]/60 backdrop-blur-sm shadow-soft px-8 py-16 sm:px-14 sm:py-20"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-subtle bg-white/70 text-sm text-secondary mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] animate-pulse-glow" />
          Open to full-time & internship roles
        </span>

        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight">
          Let's Build Something Meaningful Together.
        </h2>

        <p className="mt-4 text-secondary content-width mx-auto">
          Whether you're hiring, collaborating, or just want to talk about an
          idea — I'd love to hear from you.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="button-scale hover-lift group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--color-accent-indigo)] text-white text-sm font-medium shadow-soft"
          >
            <Briefcase size={16} />
            Hire Me
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#contact"
            className="button-scale hover-lift inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-subtle bg-white/70 text-[var(--color-text-primary)] text-sm font-medium"
          >
            <MessageCircle size={16} />
            Let's Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;