import React from 'react';
import { Check } from 'lucide-react';

interface ProgressStepperProps {
  currentStep: number;
  completedSteps: number[];
  unlockedSteps: number[];
  selectedAppType: string | null;
  onStepClick: (step: number) => void;
}

const getStepLabel = (stepIndex: number, selectedAppType: string | null) => {
  const stepLabels = [
    selectedAppType ? getAppTypeLabel(selectedAppType) : 'Choose Product Type',
    'Experience Architecture',
    'Frontend',
    'Content',
    'Performance',
    'Readiness Review'
  ];
  return stepLabels[stepIndex];
};

const getAppTypeLabel = (appType: string) => {
  const labels = {
    web: 'Web App',
    desktop: 'Desktop App',
    other: 'Hardware/Device'
  };
  return labels[appType as keyof typeof labels] || 'Product Type';
};

export const ProgressStepper: React.FC<ProgressStepperProps> = ({
  currentStep,
  completedSteps,
  unlockedSteps,
  selectedAppType,
  onStepClick,
}) => {
  const steps = Array.from({ length: 6 }, (_, i) => i);

  const getStepClasses = (stepIndex: number) => {
    const isActive = currentStep === stepIndex;
    const isCompleted = completedSteps.includes(stepIndex);
    const isUnlocked = unlockedSteps.includes(stepIndex);
    const isLocked = !isUnlocked;

    let classes = 'relative flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-medium transition-all duration-200 ';

    if (isActive) {
      classes += 'bg-blue-600 text-white border-blue-600 ';
    } else if (isCompleted) {
      classes += 'bg-green-100 text-green-700 border-green-300 ';
    } else if (isUnlocked) {
      classes += 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 cursor-pointer ';
    } else {
      classes += 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed ';
    }

    return classes;
  };

  const getConnectorClasses = (stepIndex: number) => {
    const isUnlocked = unlockedSteps.includes(stepIndex + 1);
    return `flex-1 h-0.5 mx-2 ${isUnlocked ? 'bg-blue-300' : 'bg-gray-200'}`;
  };

  const handleStepClick = (stepIndex: number) => {
    if (unlockedSteps.includes(stepIndex)) {
      onStepClick(stepIndex);
    }
  };

  return (
    <div className="flex items-center max-w-4xl">
      {steps.map((stepIndex) => (
        <React.Fragment key={stepIndex}>
          <div className="flex flex-col items-center">
            <button
              onClick={() => handleStepClick(stepIndex)}
              className={getStepClasses(stepIndex)}
              disabled={!unlockedSteps.includes(stepIndex)}
              title={!unlockedSteps.includes(stepIndex) ? 'Complete previous steps to unlock' : ''}
            >
              {completedSteps.includes(stepIndex) ? (
                <Check className="w-4 h-4" />
              ) : (
                stepIndex + 1
              )}
            </button>
            <span className="mt-2 text-xs text-gray-600 text-center max-w-20 leading-tight">
              {getStepLabel(stepIndex, selectedAppType)}
            </span>
          </div>
          {stepIndex < steps.length - 1 && (
            <div className={getConnectorClasses(stepIndex)} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};