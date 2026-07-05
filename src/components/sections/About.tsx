import { motion } from 'framer-motion'
import { GraduationCap, Sparkles, Target } from 'lucide-react'
import { aboutContent } from '../../data/about'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  const { summary, careerObjective, interests, education } = aboutContent

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="About Me" title="Getting to know me" />

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-border bg-surface p-8 md:col-span-2"
        >
          <p className="text-base leading-relaxed text-text-muted">{summary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-2xl border border-border bg-surface p-8"
        >
          <GraduationCap className="mb-4 text-accent" size={24} />
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">Education</p>
          <h3 className="font-display text-lg text-text">{education.institution}</h3>
          <p className="mt-1 text-sm text-text-muted">
            {education.degree}, {education.field}
          </p>
          <p className="mt-1 text-sm text-text-muted">
            {education.startDate} – {education.endDate}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-2xl border border-border bg-surface p-8"
        >
          <Target className="mb-4 text-accent" size={24} />
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">
            Career Objective
          </p>
          <p className="text-sm leading-relaxed text-text-muted">{careerObjective}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="rounded-2xl border border-border bg-surface p-8 md:col-span-2"
        >
          <Sparkles className="mb-4 text-accent" size={24} />
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">Interests</p>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span key={interest} className="rounded-full bg-accent-soft px-3 py-1.5 text-sm text-text">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
