import React from 'react';

// Google Material Icons components
export const WebAppIcon = () => (
  <span className="material-symbols-outlined text-[64px] text-[#646e78]">
    web
  </span>
);

export const DesktopAppIcon = () => (
  <span className="material-symbols-outlined text-[64px] text-[#646e78]">
    desktop_landscape
  </span>
);

export const DeviceIcon = () => (
  <span className="material-symbols-outlined text-[64px] text-[#646e78]">
    assistant_device
  </span>
);

// Navigation icons
export const ChevronDownIcon = () => (
  <span className="material-symbols-outlined text-[24px]">
    keyboard_arrow_down
  </span>
);

// Radio button icon
export const RadioButtonIcon = ({ isSelected }: { isSelected: boolean }) => (
  <span className={`material-symbols-outlined text-[24px] ${isSelected ? 'text-[#2196F3]' : 'text-[#00718C]'}`}>
    {isSelected ? 'radio_button_checked' : 'radio_button_unchecked'}
  </span>
);

// Play button for video previews
export const PlayIcon = () => (
  <span className="material-symbols-outlined text-[32px]">
    play_circle
  </span>
);