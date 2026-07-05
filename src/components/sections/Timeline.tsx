import { timeline } from '../../data/timeline'
import { SectionHeading } from '../ui/SectionHeading'
import { TimelineNode } from '../ui/TimelineNode'

export function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Journey" title="My timeline" />
      <div className="max-w-2xl">
        {timeline.map((item, index) => (
          <TimelineNode key={item.id} item={item} isLast={index === timeline.length - 1} />
        ))}
      </div>
    </section>
  )
}
