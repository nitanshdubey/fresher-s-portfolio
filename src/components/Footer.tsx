import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/helloadev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/helloadev",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@helloadev.com",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="page-width section-padding !py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a
              href="#hero"
              className="font-[var(--font-display)] text-lg font-semibold tracking-tight"
            >
              Aditya
              <span className="text-[var(--color-accent-indigo)]">.</span>
            </a>
          </div>

          {/* Navigation */}
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-secondary hover:text-[var(--color-text-primary)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  className="hover-lift w-10 h-10 rounded-full border-subtle bg-white/50 flex items-center justify-center text-secondary hover:text-[var(--color-accent-indigo)] transition-colors"
                >
                  <Icon size={16} />
                </a>
              );
            })}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="hover-lift w-10 h-10 rounded-full border-subtle bg-white/50 flex items-center justify-center text-secondary hover:text-[var(--color-accent-indigo)] transition-colors"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)] text-center">
          <p className="text-xs text-muted">
            © {currentYear} Aditya. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;