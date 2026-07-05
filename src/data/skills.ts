import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    skills: ['PHP', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    skills: ['React', 'CodeIgniter', 'Express', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    id: 'database',
    label: 'Database',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
  },
]
