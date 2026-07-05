import type { Certificate } from '../types'

// TODO: replace with real certificates (title, issuer, date, image path in public/).
export const certificates: Certificate[] = [
  { id: 'cert-1', title: 'Web Development Fundamentals', issuer: 'Issuing Organization', date: '2023' },
  { id: 'cert-2', title: 'Database Design & SQL', issuer: 'Issuing Organization', date: '2023' },
  { id: 'cert-3', title: 'React Development', issuer: 'Issuing Organization', date: '2024' },
  { id: 'cert-4', title: 'IoT Fundamentals', issuer: 'Issuing Organization', date: '2024' },
]
