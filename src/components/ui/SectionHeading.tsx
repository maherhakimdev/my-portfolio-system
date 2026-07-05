import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  subtitle?: string
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mb-14"
    >
      <span className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl tracking-tight text-text sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-xl text-text-muted">{subtitle}</p>}
    </motion.div>
  )
}
