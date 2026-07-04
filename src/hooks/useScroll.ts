import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface UseScrollOptions {
  duration?: number;
  smoothWheel?: boolean;
  touchMultiplier?: number;
}

/**
 * Initializes Lenis smooth scrolling for the lifetime of the mounted
 * component. Intended to be called once at the app root (see App.tsx).
 */
export function useScroll(options: UseScrollOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // Respect the user's OS-level motion preference — skip Lenis
      // entirely and fall back to native scrolling.
      return;
    }

    const lenis = new Lenis({
      duration: options.duration ?? 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: options.smoothWheel ?? true,
      touchMultiplier: options.touchMultiplier ?? 1.5,
    });

    lenisRef.current = lenis;
    document.documentElement.classList.add('lenis');

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Intercept in-page anchor clicks (#about, #projects, etc.) so they
    // scroll through Lenis instead of jumping instantly via native
    // anchor behavior.
    const handleAnchorClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href || href === '#') return;

      const section = document.querySelector(href);
      if (!section) return;

      event.preventDefault();
      lenis.scrollTo(section as HTMLElement, { offset: -80 });
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.classList.remove('lenis');
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [options.duration, options.smoothWheel, options.touchMultiplier]);

  return lenisRef;
}