import { type ReactNode } from 'react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  color: string;
  svgPattern: string;
}

export const projects: Project[] = [
  {
    name: 'ICC Chatbot',
    description: 'An AI-powered chatbot supporting businesses and organizations to enhance customer service quality. Features speech-to-text, natural language processing, and language model integration.',
    technologies: ['Python', 'FastAPI', 'LLama3', 'Whisper', 'ReactJS', 'Docker'],
    color: '#3B82F6',
    svgPattern: `
      <circle r="40" strokeDasharray="5,5" />
      <circle r="60" strokeDasharray="10,10" />
      <path d="M-40,-40 L40,40 M-40,40 L40,-40" />
    `
  },
  {
    name: 'LendVero',
    description: 'A debt collection system for financial companies featuring automatic work distribution, employee task management, and call center integration with efficient route finding between locations.',
    technologies: ['Java', 'Spring Boot', 'ReactJS', 'React Native', 'MySQL', 'Docker'],
    color: '#10B981',
    svgPattern: `
      <rect x="-50" y="-50" width="100" height="100" rx="10" />
      <rect x="-30" y="-30" width="60" height="60" rx="5" />
      <line x1="-50" y1="0" x2="50" y2="0" />
      <line x1="0" y1="-50" x2="0" y2="50" />
    `
  },
  {
    name: 'JLOS (JACCS Loan Origination System)',
    description: 'A loan management system for JACCS financial company that includes resource management, employee management, electronic identity verification, and secure authentication with 2FA.',
    technologies: ['Java', 'Spring Boot', 'JBPM', 'ReactJS', 'MySQL', 'Docker'],
    color: '#EC4899',
    svgPattern: `
      <circle r="40" />
      <path d="M40,0 A40,40 0 0,1 0,40 A40,40 0 0,1 -40,0 A40,40 0 0,1 0,-40 A40,40 0 0,1 40,0 Z" strokeDasharray="10,10" />
      <path d="M-30,-30 Q0,-60 30,-30 Q60,0 30,30 Q0,60 -30,30 Q-60,0 -30,-30 Z" />
    `
  },
  {
    name: 'RTS (Recruitment Tracking System)',
    description: 'A system for managing recruitment with optimized APIs for handling large candidate data, improved database design, and enhanced performance solutions.',
    technologies: ['Java', 'Spring Boot', 'ReactJS', 'MySQL', 'MongoDB', 'Redis', 'Kafka'],
    color: '#F59E0B',
    svgPattern: `
      <path d="M-40,0 Q-20,-40 0,0 Q20,40 40,0" />
      <path d="M-40,20 Q-20,-20 0,20 Q20,-20 40,20" />
      <path d="M-40,-20 Q-20,20 0,-20 Q20,20 40,-20" />
    `
  },
  {
    name: 'SKM (Skill Management)',
    description: 'An employee skill management system focusing on API performance optimization, database design improvements, and business module development.',
    technologies: ['Java', 'Spring Boot', 'ReactJS', 'MySQL', 'Docker'],
    color: '#6366F1',
    svgPattern: `
      <path d="M-40,-40 L40,40" strokeWidth="2" />
      <path d="M-40,40 L40,-40" strokeWidth="2" />
      <path d="M-40,0 L40,0" strokeWidth="2" />
      <path d="M0,-40 L0,40" strokeWidth="2" />
    `
  },
  {
    name: 'HRMS (Human Resource Management System)',
    description: 'A comprehensive human resource management system for internal use at CMC GLOBAL, handling employee data, time tracking, and performance management.',
    technologies: ['Java', 'Spring Boot', 'ReactJS', 'MySQL'],
    color: '#8B5CF6',
    svgPattern: `
      <rect x="-40" y="-40" width="80" height="80" />
      <circle cx="-20" cy="-20" r="10" />
      <circle cx="20" cy="-20" r="10" />
      <circle cx="-20" cy="20" r="10" />
      <circle cx="20" cy="20" r="10" />
    `
  }
];
