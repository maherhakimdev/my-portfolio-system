import { socialLinks } from '../data/social'
import { SocialLinks } from '../components/ui/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-text-muted">© {year} Maher Hakim. All rights reserved.</p>
        <SocialLinks links={socialLinks} />
      </div>
    </footer>
  )
}
