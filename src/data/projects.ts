import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'adrs',
    title: 'Aquaculture Documenting and Reporting System',
    description:
      'A web-based system developed for a real university stakeholder to monitor community aquaculture projects — tracking activities, reporting progress, and centralizing records that were previously handled manually.',
    features: [
      'Role-based dashboards for administrators and community project officers',
      'Structured activity and progress reporting with history tracking',
      'Centralized record management replacing manual paperwork',
    ],
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    challenges: [
      'Translating a real stakeholder\'s manual, paper-based workflow into a structured digital process',
      'Designing a database schema flexible enough for varied community project reports',
    ],
    githubUrl: 'https://github.com/maherhakimdev',
  },
  {
    id: 'smoke-detection-iot',
    title: 'Smoke Detection IoT System',
    description:
      'An IoT-based smoke detection prototype that reads gas/smoke concentration in real time and triggers alerts, built around a low-cost microcontroller and sensor.',
    features: [
      'Real-time smoke/gas concentration readings from an MQ-2 sensor',
      'Threshold-based alerting logic',
      'Serial monitoring and calibration via Arduino IDE',
    ],
    technologies: ['ESP32', 'MQ-2 Sensor', 'Arduino IDE'],
    challenges: [
      'Calibrating sensor thresholds to reduce false positives',
      'Managing power and wiring constraints on a compact microcontroller setup',
    ],
    githubUrl: 'https://github.com/maherhakimdev',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    description:
      'This portfolio — a single-page, fully responsive site with dark/light mode, scroll-based animations, and a reusable, typed component architecture.',
    features: [
      'Dark/light theme with localStorage persistence',
      'Scroll progress indicator and back-to-top button',
      'Framer Motion animations throughout, respecting reduced-motion preference',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    challenges: [
      'Structuring a clean, reusable, fully-typed component architecture from scratch',
      'Balancing rich animation with accessibility and performance',
    ],
    image: '/computer_image.jpg',
    githubUrl: 'https://github.com/maherhakimdev',
  },
]
