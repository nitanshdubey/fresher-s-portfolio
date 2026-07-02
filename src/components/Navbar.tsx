import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <header
      className={`navbar-blur fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "is-scrolled" : ""
      }`}
    >
      <nav className="page-width flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="font-[var(--font-display)] text-lg font-semibold tracking-tight"
        >
          Aditya
          <span className="text-[var(--color-accent-indigo)]">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
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

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex button-scale hover-lift items-center px-5 py-2.5 rounded-lg bg-[var(--color-text-primary)] text-white text-sm font-medium"
        >
          Let's Talk
        </a>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="md:hidden p-2 -mr-2 text-[var(--color-text-primary)]"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:hidden overflow-hidden bg-[var(--color-bg)] border-t border-[var(--color-border)]"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block py-3 text-base text-[var(--color-text-primary)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="button-scale inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-[var(--color-text-primary)] text-white text-sm font-medium"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;