import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { heroContent } from '../../data/hero'
import { socialLinks } from '../../data/social'
import { Button } from '../ui/Button'
import { SocialLinks } from '../ui/SocialLinks'
import { scrollToSection } from '../../utils/scrollTo'

export function Hero() {
  const contactLinks = socialLinks.filter((link) => link.platform !== 'whatsapp')

  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 px-6 py-24 md:min-h-[calc(100vh-5rem)] md:flex-row md:py-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center md:text-left"
      >
        <span className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          {heroContent.greeting}
        </span>
        <h1 className="font-display text-5xl leading-tight tracking-tight text-text sm:text-6xl">
          {heroContent.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-accent">{heroContent.title}</p>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-text-muted md:mx-0">
          {heroContent.intro}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
          <Button onClick={() => scrollToSection('projects')}>View Projects</Button>
          <Button variant="outline" href={heroContent.resumeHref} download>
            <Download size={16} /> Download Resume
          </Button>
        </div>

        <SocialLinks links={contactLinks} className="mt-10 justify-center md:justify-start" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative flex-shrink-0"
      >
        <div className="relative h-72 w-60 overflow-hidden rounded-3xl border border-border sm:h-96 sm:w-80">
          <img
            src={heroContent.profileImage}
            alt={heroContent.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg/60 via-transparent to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
