import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  CircleCheck,
  Send,
  Loader2,
} from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@helloadev.com",
    href: "mailto:hello@helloadev.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/helloadev",
    href: "https://linkedin.com/in/helloadev",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/helloadev",
    href: "https://github.com/helloadev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhopal, India",
    href: null,
  },
];

type SubmitStatus = "idle" | "submitting" | "success";

function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    field: "name" | "email" | "message",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("submitting");

    // Replace with your backend / Formspree / EmailJS later
    window.setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding page-width">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="text-center max-w-xl mx-auto mb-16"
      >
        <span className="text-sm font-medium text-[var(--color-accent-indigo)]">
          Contact
        </span>

        <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight">
          Let's talk about your next project.
        </h2>

        <p className="mt-4 text-secondary">
          Have a role, a project, or just a question? My inbox is always open.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border-subtle bg-white/60 w-fit text-sm text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-emerald)] animate-pulse-glow" />
            Available for new opportunities
          </div>

          <div className="flex flex-col gap-5">
            {CONTACT_DETAILS.map((detail) => {
              const Icon = detail.icon;

              const content = (
                <div className="hover-lift flex items-center gap-4 rounded-2xl border-subtle bg-white/50 p-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-[var(--color-accent-indigo)]/10 flex items-center justify-center">
                    <Icon
                      size={18}
                      className="text-[var(--color-accent-indigo)]"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-muted">{detail.label}</p>
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );

              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={
                    detail.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    detail.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border-subtle bg-[var(--color-bg-elevated)] shadow-soft p-7 sm:p-8 flex flex-col gap-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border-subtle bg-white/60 text-sm text-[var(--color-text-primary)] placeholder:text-muted transition-colors focus:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border-subtle bg-white/60 text-sm text-[var(--color-text-primary)] placeholder:text-muted transition-colors focus:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell me a bit about the opportunity or project..."
                className="w-full px-4 py-3 rounded-xl border-subtle bg-white/60 text-sm text-[var(--color-text-primary)] placeholder:text-muted transition-colors focus:bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="button-scale hover-lift mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--color-accent-indigo)] text-white text-sm font-medium disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={16} className="animate-spin-slow" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CircleCheck size={16} />
                  Message Sent
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="text-sm text-[var(--color-accent-emerald)] text-center">
                Thanks for reaching out — I'll get back to you soon.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;