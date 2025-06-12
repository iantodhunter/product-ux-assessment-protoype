import { DataReadinessLevel, GTMQuestion } from '../types/readiness';

export const dataReadinessLevels: DataReadinessLevel[] = [
  {
    id: 0,
    title: 'Level 0 - Basic Data Structure',
    description: 'Your application has basic data organization with simple file storage or basic database structure. Data is primarily stored locally or in simple formats.',
    videoUrl: 'https://example.com/level-0-video'
  },
  {
    id: 1,
    title: 'Level 1 - Structured Data Management',
    description: 'Your application uses structured databases with proper relationships, basic APIs, and some data validation. Data is organized and accessible programmatically.',
    videoUrl: 'https://example.com/level-1-video'
  },
  {
    id: 2,
    title: 'Level 2 - Advanced Data Architecture',
    description: 'Your application has enterprise-grade data architecture with real-time synchronization, comprehensive APIs, advanced security, and scalable data management systems.',
    videoUrl: 'https://example.com/level-2-video'
  }
];

export const gtmQuestions: GTMQuestion[] = [
  {
    id: 'target-market',
    title: 'Who is your primary target market?',
    type: 'textarea',
    required: true
  },
  {
    id: 'value-proposition',
    title: 'What is your unique value proposition?',
    type: 'textarea',
    required: true
  },
  {
    id: 'pricing-model',
    title: 'What is your pricing model?',
    type: 'select',
    options: ['Subscription', 'One-time purchase', 'Freemium', 'Enterprise licensing', 'Other'],
    required: true
  },
  {
    id: 'launch-timeline',
    title: 'What is your expected launch timeline?',
    type: 'select',
    options: ['Next 3 months', '3-6 months', '6-12 months', 'More than 1 year'],
    required: true
  },
  {
    id: 'marketing-channels',
    title: 'What marketing channels will you use?',
    type: 'textarea',
    required: false
  },
  {
    id: 'success-metrics',
    title: 'How will you measure success?',
    type: 'textarea',
    required: false
  }
];