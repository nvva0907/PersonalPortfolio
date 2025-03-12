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
    name: 'HRMS System',
    description: 'A comprehensive human resource management system with employee tracking, leave management, and performance evaluation.',
    technologies: ['Java', 'Spring Boot', 'React'],
    color: '#3B82F6',
    svgPattern: `
      <circle r="40" strokeDasharray="5,5" />
      <circle r="60" strokeDasharray="10,10" />
      <path d="M-40,-40 L40,40 M-40,40 L40,-40" />
    `
  },
  {
    name: 'Skill Management Platform',
    description: 'A platform for tracking and developing employee skills with personalized learning paths and certification tracking.',
    technologies: ['Node.js', 'MongoDB', 'React'],
    color: '#10B981',
    svgPattern: `
      <rect x="-50" y="-50" width="100" height="100" rx="10" />
      <rect x="-30" y="-30" width="60" height="60" rx="5" />
      <line x1="-50" y1="0" x2="50" y2="0" />
      <line x1="0" y1="-50" x2="0" y2="50" />
    `
  },
  {
    name: 'AI Chatbot for IDNES',
    description: 'A sophisticated AI chatbot providing customer support, information retrieval, and automated assistance for the IDNES platform.',
    technologies: ['Python', 'NLP', 'React'],
    color: '#EC4899',
    svgPattern: `
      <circle r="40" />
      <path d="M40,0 A40,40 0 0,1 0,40 A40,40 0 0,1 -40,0 A40,40 0 0,1 0,-40 A40,40 0 0,1 40,0 Z" strokeDasharray="10,10" />
      <path d="M-30,-30 Q0,-60 30,-30 Q60,0 30,30 Q0,60 -30,30 Q-60,0 -30,-30 Z" />
    `
  },
  {
    name: 'Web AI for Voice Processing',
    description: 'A web application that utilizes AI to transcribe, analyze, and extract insights from voice recordings.',
    technologies: ['TensorFlow', 'Web Audio API', 'React'],
    color: '#F59E0B',
    svgPattern: `
      <path d="M-40,0 Q-20,-40 0,0 Q20,40 40,0" />
      <path d="M-40,20 Q-20,-20 0,20 Q20,-20 40,20" />
      <path d="M-40,-20 Q-20,20 0,-20 Q20,20 40,-20" />
    `
  },
  {
    name: 'Real-Time System (RTS)',
    description: 'A real-time monitoring and reporting system providing instant analytics and notifications for critical business metrics.',
    technologies: ['WebSockets', 'Node.js', 'React'],
    color: '#6366F1',
    svgPattern: `
      <path d="M-40,-40 L40,40" strokeWidth="2" />
      <path d="M-40,40 L40,-40" strokeWidth="2" />
      <path d="M-40,0 L40,0" strokeWidth="2" />
      <path d="M0,-40 L0,40" strokeWidth="2" />
    `
  },
  {
    name: 'JLOS (Justice Law & Order System)',
    description: 'A comprehensive system for managing legal cases, documents, and proceedings for justice and law enforcement agencies.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
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
