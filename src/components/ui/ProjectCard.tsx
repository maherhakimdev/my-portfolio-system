import { motion } from 'framer-motion'
import { ExternalLink, ImageOff } from 'lucide-react'
import type { Project } from '../../types'
import { Button } from './Button'
import { GithubIcon } from './BrandIcons'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
    >
      <div className="flex h-48 items-center justify-center overflow-hidden bg-accent-soft">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover"
          />
        ) : (
          <ImageOff className="text-accent/50" size={32} aria-hidden="true" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-display text-xl text-text">{project.title}</h3>
        <p className="text-sm leading-relaxed text-text-muted">{project.description}</p>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-text-muted">
            Features
          </p>
          <ul className="list-disc space-y-1 pl-4 text-sm text-text-muted">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-text-muted">
            Challenges
          </p>
          <ul className="list-disc space-y-1 pl-4 text-sm text-text-muted">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs text-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="px-5! py-2.5! text-xs"
            >
              <GithubIcon size={16} /> GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5! py-2.5! text-xs"
            >
              <ExternalLink size={16} /> Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
