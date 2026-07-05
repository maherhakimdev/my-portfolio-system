import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPin } from 'lucide-react'
import { socialLinks } from '../../data/social'
import { SectionHeading } from '../ui/SectionHeading'
import { SocialLinks } from '../ui/SocialLinks'
import { Button } from '../ui/Button'
import { validateContactForm } from '../../utils/validateContactForm'
import type { ContactFormErrors, ContactFormValues } from '../../types'

const initialValues: ContactFormValues = { name: '', email: '', message: '' }

export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const email = socialLinks.find((link) => link.platform === 'email')

  const handleChange =
    (field: keyof ContactFormValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validateContactForm(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setValues(initialValues)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let&apos;s <em className="font-display italic text-accent">connect</em>
          </>
        }
        subtitle="I'm open to collaborations, opportunities, and interesting conversations."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          {email && (
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted">Email</p>
                <p className="text-sm text-text">{email.href.replace('mailto:', '')}</p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
              <MapPin size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-text-muted">Location</p>
              <p className="text-sm text-text">Kinrara, Puchong, Selangor, Malaysia</p>
            </div>
          </div>
          <SocialLinks links={socialLinks} className="pt-2" />
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          noValidate
          className="rounded-2xl border border-border bg-surface p-8"
        >
          {submitted && (
            <div className="mb-6 flex items-center gap-2 rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-accent">
              <CheckCircle2 size={18} /> Thanks! Your message has been noted.
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted">
              Name
            </label>
            <input
              id="name"
              value={values.name}
              onChange={handleChange('name')}
              className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none focus:border-accent"
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email-input" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted">
              Email
            </label>
            <input
              id="email-input"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none focus:border-accent"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-muted">
              Message
            </label>
            <textarea
              id="message"
              value={values.message}
              onChange={handleChange('message')}
              rows={4}
              className="w-full resize-y rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none focus:border-accent"
              placeholder="Tell me about your project or opportunity…"
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <Button type="submit" className="w-full justify-center">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
