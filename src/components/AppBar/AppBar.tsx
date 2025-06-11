import React from 'react';
import { ProgressStepper } from '../ProgressStepper/ProgressStepper';

interface AppBarProps {
  currentStep: number;
  completedSteps: number[];
  unlockedSteps: number[];
  selectedAppType: string | null;
  categoryProgress: number;
  onStepClick: (step: number) => void;
}

export const AppBar: React.FC<AppBarProps> = ({
  currentStep,
  completedSteps,
  unlockedSteps,
  selectedAppType,
  categoryProgress,
  onStepClick,
}) => {
  return (
    <div className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 h-18">
        {/* Left Section - Title */}
        <div className="flex-shrink-0">
          <h1 className="text-lg font-semibold text-gray-900">
            User Experience Readiness
          </h1>
        </div>

        {/* Center Section - Stepper */}
        <div className="flex-1 flex justify-center px-8">
          <ProgressStepper
            currentStep={currentStep}
            completedSteps={completedSteps}
            unlockedSteps={unlockedSteps}
            selectedAppType={selectedAppType}
            onStepClick={onStepClick}
          />
        </div>

        {/* Right Section - Progress */}
        <div className="flex-shrink-0">
          <span className="text-sm font-medium text-gray-600">
            Category: {categoryProgress}%
          </span>
        </div>
      </div>
    </div>
  );
};