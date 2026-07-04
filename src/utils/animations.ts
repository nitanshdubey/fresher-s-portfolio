import type { Variants, Transition } from 'framer-motion';

/* ------------------------------------------------------------------ */
/* Shared Easing & Durations                                           */
/* ------------------------------------------------------------------ */

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.2,
  base: 0.4,
  slow: 0.7,
  slower: 0.9,
} as const;

/* ------------------------------------------------------------------ */
/* Viewport Defaults (for whileInView usage)                            */
/* ------------------------------------------------------------------ */

export const VIEWPORT_ONCE = { once: true, amount: 0.3 } as const;
export const VIEWPORT_ONCE_TIGHT = { once: true, amount: 0.4 } as const;
export const VIEWPORT_ONCE_LOOSE = { once: true, amount: 0.2 } as const;

/* ------------------------------------------------------------------ */
/* Section Header Variant (label + heading + description)               */
/* ------------------------------------------------------------------ */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.slower, ease: EASE_PREMIUM },
  },
};

/* ------------------------------------------------------------------ */
/* Stagger Container (Hero copy block, card grids)                      */
/* ------------------------------------------------------------------ */

export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0.15
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/* ------------------------------------------------------------------ */
/* Grid Item Helper (Skills, Achievements — wave-based stagger)          */
/* ------------------------------------------------------------------ */

/**
 * Produces a transition with a delay based on column position, so grid
 * items reveal in a left-to-right "wave" per row instead of firing
 * uniformly. Pass the item's index and the grid's column count.
 */
export function gridItemTransition(
  index: number,
  columns = 4,
  baseDelay = 0.06
): Transition {
  return {
    duration: 0.55,
    delay: (index % columns) * baseDelay,
    ease: EASE_PREMIUM,
  };
}

/* ------------------------------------------------------------------ */
/* Sequential List Helper (Journey, Experience — top-to-bottom)         */
/* ------------------------------------------------------------------ */

export function listItemTransition(
  index: number,
  baseDelay = 0.06,
  duration = 0.6
): Transition {
  return {
    duration,
    delay: index * baseDelay,
    ease: EASE_PREMIUM,
  };
}

/* ------------------------------------------------------------------ */
/* Hover Presets (for whileHover on motion components)                  */
/* ------------------------------------------------------------------ */

export const hoverLift = {
  y: -4,
  transition: { duration: DURATION.fast, ease: EASE_PREMIUM },
};

export const hoverScale = {
  scale: 1.03,
  transition: { duration: DURATION.fast, ease: EASE_PREMIUM },
};

/* ------------------------------------------------------------------ */
/* Page Transition (reserved for future routed views)                   */
/* ------------------------------------------------------------------ */

export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_PREMIUM },
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATION.fast, ease: EASE_PREMIUM },
  },
};