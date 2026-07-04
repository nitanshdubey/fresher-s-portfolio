import { motion } from 'framer-motion';

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  maxWidth?: string;
}

function SectionTitle({
  label,
  title,
  description,
  align = 'center',
  maxWidth = 'max-w-xl',
}: SectionTitleProps) {
  const alignmentClasses =
    align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`${maxWidth} ${alignmentClasses} mb-16`}
    >
      <span className="text-sm font-medium text-[var(--color-accent-indigo)]">
        {label}
      </span>

      <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-secondary">{description}</p>
      )}
    </motion.div>
  );
}

export default SectionTitle;