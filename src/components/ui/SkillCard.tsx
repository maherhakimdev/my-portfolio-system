import { motion } from 'framer-motion'
import type { SkillCategory } from '../../types'

interface SkillCardProps {
  category: SkillCategory
}

export function SkillCard({ category }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40"
    >
      <p className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
        {category.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span key={skill} className="rounded-full bg-accent-soft px-3 py-1.5 text-sm text-text">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
