import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import type { Certificate } from '../../types'

interface CertificateCardProps {
  certificate: Certificate
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
    >
      <div className="flex h-36 items-center justify-center bg-accent-soft">
        {certificate.image ? (
          <img src={certificate.image} alt={certificate.title} className="h-full w-full object-cover" />
        ) : (
          <Award className="text-accent/50" size={32} aria-hidden="true" />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-text">{certificate.title}</h3>
        <p className="mt-1 text-sm text-text-muted">
          {certificate.issuer} · {certificate.date}
        </p>
      </div>
    </motion.div>
  )
}
