import type { ReactNode } from 'react'
import { ScrollProgressBar } from '../components/ui/ScrollProgressBar'
import { BackToTopButton } from '../components/ui/BackToTopButton'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <ScrollProgressBar />
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
