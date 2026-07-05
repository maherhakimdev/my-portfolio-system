export interface NavLink {
  id: string
  label: string
}

export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'whatsapp'

export interface SocialLink {
  platform: SocialPlatform
  label: string
  href: string
}

export interface HeroContent {
  greeting: string
  name: string
  title: string
  intro: string
  profileImage: string
  resumeHref: string
}

export interface EducationItem {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
}

export interface AboutContent {
  summary: string
  careerObjective: string
  interests: string[]
  education: EducationItem
}

export interface SkillCategory {
  id: string
  label: string
  skills: string[]
}

export interface Experience {
  company: string
  position: string
  duration: string
  responsibilities: string[]
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  features: string[]
  technologies: string[]
  challenges: string[]
  image?: string
  githubUrl?: string
  liveUrl?: string
}

export type TimelineItemType = 'education' | 'experience' | 'milestone' | 'goal'

export interface TimelineItem {
  id: string
  date: string
  title: string
  description: string
  type: TimelineItemType
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  image?: string
}

export interface ContactFormValues {
  name: string
  email: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>
