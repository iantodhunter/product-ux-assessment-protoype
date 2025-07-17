import React from 'react';

// Consolidated app type icons using simplified SVG paths
export const WebAppIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
    <rect x="8" y="12" width="48" height="36" rx="4" fill="currentColor" opacity="0.2"/>
    <rect x="8" y="12" width="48" height="8" rx="4" fill="currentColor"/>
    <rect x="12" y="24" width="16" height="2" rx="1" fill="currentColor" opacity="0.6"/>
    <rect x="12" y="28" width="12" height="2" rx="1" fill="currentColor" opacity="0.6"/>
    <rect x="32" y="24" width="20" height="2" rx="1" fill="currentColor" opacity="0.4"/>
    <rect x="32" y="28" width="16" height="2" rx="1" fill="currentColor" opacity="0.4"/>
    <rect x="32" y="32" width="18" height="2" rx="1" fill="currentColor" opacity="0.4"/>
  </svg>
);

export const DesktopAppIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
    <rect x="6" y="8" width="52" height="32" rx="2" fill="currentColor" opacity="0.2"/>
    <rect x="6" y="8" width="52" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="28" y="40" width="8" height="8" fill="currentColor" opacity="0.6"/>
    <rect x="16" y="48" width="32" height="4" rx="2" fill="currentColor"/>
    <circle cx="32" cy="24" r="6" fill="currentColor" opacity="0.4"/>
  </svg>
);

export const DeviceIcon = () => (
  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
    <rect x="20" y="4" width="24" height="56" rx="6" fill="currentColor" opacity="0.2"/>
    <rect x="20" y="4" width="24" height="56" rx="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="14" r="2" fill="currentColor" opacity="0.6"/>
    <rect x="24" y="20" width="16" height="24" rx="2" fill="currentColor" opacity="0.4"/>
    <circle cx="32" cy="52" r="4" fill="currentColor" opacity="0.6"/>
  </svg>
);

// Navigation icons
export const ChevronDownIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Radio button icon
export const RadioButtonIcon = ({ isSelected }: { isSelected: boolean }) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    {isSelected && <circle cx="12" cy="12" r="4" fill="currentColor"/>}
  </svg>
);

// Play button for video previews
export const PlayIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
    <polygon points="5,3 19,12 5,21" fill="currentColor"/>
  </svg>
);