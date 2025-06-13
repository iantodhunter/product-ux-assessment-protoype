import { DataReadinessLevel, GTMQuestion } from '../types/readiness';

export const dataReadinessLevels: DataReadinessLevel[] = [
  {
    id: 0,
    title: 'No direct integration of NEXUS data schema with application or device',
    description: 'Basic data organization with simple file storage or basic database structure.',
    userSee: 'Users can share the working file using a project and Nexus drive. Users may be able to log in to Nexus within the app, but limited to basic platform features and links.',
    examples: 'Any Hexagon desktop application, Excel, Adobe Acrobat, Polyworks, SOLIDWORKS',
    videoUrl: 'https://cdn.sanity.io/media-libraries/mlGuplABjaY2/files/c18aa33c5a6c04049ff57bc621ba24d4ab5cd83a.mp4'
  },
  {
    id: 1,
    title: 'Application has integrated Nexus project selection. Files and/or data are stored in the project and can be usable by the same application and others.',
    description: 'Structured databases with proper relationships, basic APIs, and some data validation.',
    userSee: 'Users are able to \'save to Nexus project\' and \'open from\' Nexus project.',
    examples: 'Apex*, Designer*, Expert*, WorkNC*, Busy* (*certain features)',
    videoUrl: 'https://cdn.sanity.io/media-libraries/mlGuplABjaY2/files/fe4f84651011ed1091cf765c264cd6eaf3a84be3.mp4'
  },
  {
    id: 2,
    title: 'Project files and data created by [application] can be used bidirectionally.',
    description: 'Enterprise-grade data architecture with real-time synchronization and comprehensive APIs.',
    userSee: 'Users are able to \'open from Nexus project\'. When using other Nexus apps, users see level 2 applications in the \'Open with\' list.',
    examples: 'Apex GD, Adams',
    videoUrl: 'https://cdn.sanity.io/media-libraries/mlGuplABjaY2/files/006672d141921dd3add0e61e4770711a27534757.mp4'
  },
  {
    id: 3,
    title: 'Project data and schema is used to achieve real-time collaboration. Clicking \'File save\' is no longer needed. Changes are immediately saved.',
    description: 'Comprehensive enterprise data platform with advanced analytics and machine learning integration.',
    userSee: 'Users can set projects and settings in the working application.',
    examples: 'VTDX, 3D Whiteboard',
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