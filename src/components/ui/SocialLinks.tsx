import { Mail, MessageCircle } from 'lucide-react'
import type { ComponentType } from 'react'
import type { SocialLink, SocialPlatform } from '../../types'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const icons: Record<SocialPlatform, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  whatsapp: MessageCircle,
}

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
}

export function SocialLinks({ links, className = '' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = icons[link.platform]
        return (
          <a
            key={link.platform}
            href={link.href}
            target={link.platform === 'email' ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={link.label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Icon size={18} strokeWidth={1.75} />
          </a>
        )
      })}
    </div>
  )
}
