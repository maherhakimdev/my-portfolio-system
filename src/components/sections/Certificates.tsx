import { certificates } from '../../data/certificates'
import { SectionHeading } from '../ui/SectionHeading'
import { CertificateCard } from '../ui/CertificateCard'

export function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Certificates" title="Certifications & courses" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </section>
  )
}
