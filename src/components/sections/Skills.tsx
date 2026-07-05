import { skillCategories } from '../../data/skills'
import { SectionHeading } from '../ui/SectionHeading'
import { SkillCard } from '../ui/SkillCard'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Skills" title="What I work with" />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
