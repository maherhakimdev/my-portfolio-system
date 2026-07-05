import { motion } from 'framer-motion'
import type { TimelineItem } from '../../types'

interface TimelineNodeProps {
  item: TimelineItem
  isLast: boolean
}

export function TimelineNode({ item, isLast }: TimelineNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="relative flex gap-6 pb-10 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <span className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-accent ring-4 ring-accent-soft" />
        {!isLast && <span className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />}
      </div>
      <div className="pb-2">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">{item.date}</p>
        <h3 className="mt-1 font-display text-lg text-text">{item.title}</h3>
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-text-muted">{item.description}</p>
      </div>
    </motion.div>
  )
}
