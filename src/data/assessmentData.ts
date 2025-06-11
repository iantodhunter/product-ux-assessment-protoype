import { AppType, StatusOption, AssessmentCategory } from '../types/assessment';

export const appTypes: AppType[] = [
  {
    id: 'web',
    title: 'Web App',
    description: 'Browser-based application',
    icon: '🌐'
  },
  {
    id: 'desktop',
    title: 'Desktop App',
    description: 'Native desktop application',
    icon: '💻'
  },
  {
    id: 'other',
    title: 'Hardware/Device',
    description: 'Devices or onboard HMIs',
    icon: '🏭'
  }
];

export const statusOptions: StatusOption[] = [
  { id: 'complete', label: 'Complete', color: 'success', score: 100 },
  { id: 'short', label: 'Next 6 Months', color: 'info', score: 50 },
  { id: 'long', label: 'Next 2 Years', color: 'warning', score: 25 },
  { id: 'not-planned', label: 'Not Planned', color: 'error', score: 0 },
  { id: 'na', label: 'Not Applicable', color: 'neutral', score: null }
];

export const categories: AssessmentCategory[] = [
  {
    id: 'experience',
    title: 'Experience Architecture',
    items: {
      universal: [
        {
          id: 'nexus-auth',
          title: 'Uses Nexus authentication',
          details: []
        },
        {
          id: 'app-selector',
          title: 'Other Nexus apps through app switcher available',
          details: []
        },
        {
          id: 'ui-consistency',
          title: 'App interoperability',
          details: ['A user working on one project who opens that project details view in a different app maintains the context they were working in. With no differences in data and should feel seamless. And likewise vice versa.']
        },
        {
          id: 'account-access',
          title: 'User can access their Nexus account information',
          details: []
        },
        {
          id: 'org-visibility',
          title: 'User can see current organization',
          details: []
        },
        {
          id: 'onboarding',
          title: 'User onboarding - first-time users understand what to do',
          details: ['Welcome dialogue, tooltips, guides']
        },
        {
          id: 'feature-intro',
          title: 'Major features introduced through tooltips or demos',
          details: []
        },
        {
          id: 'demo-trial',
          title: 'Demo/trial available for non-paying/new users to try major features',
          details: []
        }
      ],
      web: [
        {
          id: 'cross-app-open',
          title: 'Projects created from other Nexus apps are displayed and openable by this app',
          details: []
        },
        {
          id: 'cross-app-create',
          title: 'Projects created in this app can be opened by other Nexus apps with data readiness level 1+',
          details: []
        },
        {
          id: 'realtime-updates',
          title: 'Real-time Update Feedback',
          details: [
            'Defaults to updating in real time',
            'Progress indicators during save/sync operations',
            'Lock/edit workflow: Clear indication when items are locked by another app',
            'Visual feedback when editing state is released'
          ]
        },
        {
          id: 'url-sharing',
          title: 'URL Shareability',
          details: [
            'Registered users with access can open shared URLs',
            'Users without access get "request access" page',
            'Non-signed-in users get contextual sign-in page'
          ]
        },
        {
          id: 'credits-experience',
          title: 'Credits Experience',
          details: [
            'View remaining credits in relevant activities',
            'See credit cost before actions',
            'Purchase new credits when needed'
          ]
        },
        {
          id: 'trial-experience',
          title: 'Trial Experience',
          details: ['If in trial period, user clearly sees trial status with time remaining and upgrade prompts']
        }
      ],
      desktop: [
        {
          id: 'nexus-button',
          title: 'Nexus button in top right corner (ribbon bar) allows user to sign in',
          details: []
        },
        {
          id: 'user-avatar',
          title: 'User avatar appears in top right next to Nexus button when signed in',
          details: []
        },
        {
          id: 'account-dropdown',
          title: 'User can access account and sign out by clicking avatar',
          details: []
        },
        {
          id: 'notifications',
          title: 'User can open notifications/actions from Nexus platform via top-right icon buttons',
          details: []
        },
        {
          id: 'menu-integration',
          title: 'Nexus features available in major menu items with contextualized descriptions',
          details: []
        },
        {
          id: 'native-open',
          title: 'User able to open Nexus projects through native "Open File" UI',
          details: []
        },
        {
          id: 'native-save',
          title: 'User able to save to Nexus through native "Save As" dialogue',
          details: []
        },
        {
          id: 'project-panel',
          title: 'User can view project details, files, and comments through Nexus Projects panel',
          details: ['Via native dialogues or embedded browser']
        }
      ]
    }
  },
  {
    id: 'frontend',
    title: 'Frontend Implementation',
    items: {
      universal: [
        {
          id: 'brand-implementation',
          title: 'Brand Implementation: Uses design system colors and logos as defined by Nexus branding guidelines',
          details: []
        },
        {
          id: 'color-contrast',
          title: 'Color Contrast: Meets accessibility color contrast requirements',
          details: []
        }
      ],
      web: [
        {
          id: 'react-framework',
          title: 'React Implementation: Uses React framework',
          details: []
        },
        {
          id: 'component-library',
          title: 'Component Library: Loads latest Nexus UI 4 Nova React components',
          details: []
        },
        {
          id: 'design-audit',
          title: 'Design System Audit: UI audit has been conducted and reviewed from the release checklist',
          details: []
        },
        {
          id: 'tablet-usability',
          title: 'Tablet Usability: Is usable on tablet',
          details: []
        },
        {
          id: 'mobile-usability',
          title: 'Mobile Usability: Is usable on mobile',
          details: []
        },
        {
          id: 'touchscreen-optimization',
          title: 'Touchscreen Optimization: Optimized for touchscreens',
          details: ['Gesture controls, zooming, etc.']
        }
      ],
      desktop: [
        {
          id: 'nexus-actions-placement',
          title: 'Nexus Actions Placement: Main Nexus actions located in top right corner',
          details: ['Log in, log out, access to Nexus help, other components']
        },
        {
          id: 'design-system-components',
          title: 'Nexus Design System Components: Nexus buttons and icons use components supplied by Nexus design system',
          details: []
        },
        {
          id: 'component-sizing',
          title: 'Component Sizing: Components in top right corner fall within 320x320 to 480x480 pixel dimensions',
          details: []
        },
        {
          id: 'panel-behaviors',
          title: 'Panel Behaviors: Account dropdown, Nexus panel, and notifications panel appear below their respective top-right icons',
          details: ['Note: Extension windows, project panels, or mini-app panels do not need to follow the same display/interaction behaviors']
        }
      ]
    }
  },
  {
    id: 'content',
    title: 'Content Design',
    items: {
      universal: [
        {
          id: 'professional-tone',
          title: 'Professional Tone: Uses professional but plain tone - British English with Hexagon\'s style',
          details: ['Clear, restrained, no filler']
        },
        {
          id: 'message-clarity',
          title: 'Message Clarity: Messages are succinct with no casual intros or exclamation points',
          details: []
        },
        {
          id: 'persona-alignment',
          title: 'Persona Alignment: Content reflects clear, published personas that represent real users',
          details: []
        },
        {
          id: 'screen-reader',
          title: 'Screen Reader Compatibility: Follows WCAG 2 standards for legally required elements',
          details: ['Tab index, proper labeling, etc.']
        },
        {
          id: 'help-accessibility',
          title: 'Help Content Accessibility: Tooltips and help text are easy to access and genuinely useful',
          details: []
        },
        {
          id: 'error-messages',
          title: 'Error Message Quality: Error messages are detailed and cover likely fault scenarios',
          details: []
        },
        {
          id: 'terminology',
          title: 'Terminology Consistency: Uses "Nexus" terminology consistently',
          details: ['Not "cloud" or other variants']
        }
      ],
      web: [],
      desktop: []
    }
  },
  {
    id: 'performance',
    title: 'Performance & Analytics',
    items: {
      universal: [
        {
          id: 'user-feedback',
          title: 'User satisfaction collected through feedback forms embedded in the app',
          details: []
        },
        {
          id: 'usage-analytics',
          title: 'Usage Analytics: Major feature usage is tracked',
          details: []
        },
        {
          id: 'returning-users',
          title: 'Returning Users Tracking: Number of returning users is measured',
          details: []
        },
        {
          id: 'load-times',
          title: 'Load Times: Sub 2-second load times for main operations',
          details: []
        },
        {
          id: 'progress-indicators',
          title: 'Progress Indicators: Long operations show progress indicators',
          details: []
        },
        {
          id: 'error-tracking',
          title: 'Error Tracking: Errors are tracked and logged',
          details: []
        }
      ],
      web: [
        {
          id: 'session-persistence',
          title: 'Session Persistence: Users can leave/return to page during long operations without losing progress',
          details: []
        },
        {
          id: 'extended-load-handling',
          title: 'Extended Load Time Handling: For very long operations, page state persists across navigation',
          details: []
        }
      ],
      desktop: [
        {
          id: 'nexus-panel-load',
          title: 'Nexus Panel Load Times: Embedded browser panels load in under 2 seconds',
          details: []
        },
        {
          id: 'session-duration',
          title: 'Session Duration: Users stay logged in for ~30 days even after closing/reopening app',
          details: []
        },
        {
          id: 'cross-app-auth',
          title: 'Cross-App Authentication: Login to Nexus Drive shares session/token with other desktop apps',
          details: ['Single sign-on functionality']
        }
      ]
    }
  }
];