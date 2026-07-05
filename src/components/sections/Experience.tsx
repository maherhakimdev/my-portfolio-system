import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../../data/experience'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border bg-surface p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Briefcase size={20} />
            </span>
            <div>
              <h3 className="font-display text-xl text-text">{experience.position}</h3>
              <p className="text-sm text-accent">{experience.company}</p>
            </div>
          </div>
          <span className="rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-text-muted">
            {experience.duration}
          </span>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-text-muted">
            Responsibilities
          </p>
          <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-text-muted">
            {experience.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
