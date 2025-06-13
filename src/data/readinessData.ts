import { DataReadinessLevel, GTMQuestion } from '../types/readiness';

export const dataReadinessLevels: DataReadinessLevel[] = [
  {
    id: 0,
    title: 'Level 0 - Basic Data Structure',
    description: 'Your application has basic data organization with simple file storage or basic database structure. Data is primarily stored locally or in simple formats.',
    videoUrl: 'https://cdn.sanity.io/media-libraries/mlGuplABjaY2/files/c18aa33c5a6c04049ff57bc621ba24d4ab5cd83a.mp4'
  },
  {
    id: 1,
    title: 'Level 1 - Structured Data Management',
    description: 'Your application uses structured databases with proper relationships, basic APIs, and some data validation. Data is organized and accessible programmatically.',
    videoUrl: 'https://cdn.sanity.io/media-libraries/mlGuplABjaY2/files/fe4f84651011ed1091cf765c264cd6eaf3a84be3.mp4'
  },
  {
    id: 2,
    title: 'Level 2 - Advanced Data Architecture',
    description: 'Your application has enterprise-grade data architecture with real-time synchronization, comprehensive APIs, advanced security, and scalable data management systems.',
    videoUrl: 'https://cdn.sanity.io/media-libraries/mlGuplABjaY2/files/006672d141921dd3add0e61e4770711a27534757.mp4'
  },
  {
    id: 3,
    title: 'Level 3 - Enterprise Data Platform',
    description: 'Your application features a comprehensive enterprise data platform with advanced analytics, machine learning integration, and full data governance capabilities.',
    videoUrl: null // Coming soon
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