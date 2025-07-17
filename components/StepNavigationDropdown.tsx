import { useState } from 'react';
import { ChevronDownIcon } from './icons/AppTypeIcons';

interface StepNavigationDropdownProps {
  currentStep: number;
  onStepSelect?: (step: number) => void;
  completedSteps?: number[];
}

const steps = [
  { id: 1, label: 'Choose app type' },
  { id: 2, label: 'Your info' },
  { id: 3, label: 'Data Readiness' },
  { id: 4, label: 'UX Readiness' },
  { id: 5, label: 'Go to Market Readiness' },
  { id: 6, label: 'Review Nexus Readiness' }
];

export function StepNavigationDropdown({ 
  currentStep, 
  onStepSelect, 
  completedSteps = [] 
}: StepNavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleStepClick = (stepId: number) => {
    if (onStepSelect && (completedSteps.includes(stepId) || stepId <= currentStep)) {
      onStepSelect(stepId);
    }
    setIsOpen(false);
  };

  const currentStepLabel = steps.find(step => step.id === currentStep)?.label || '';

  return (
    <div className="relative w-[240px]">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-[#b4bac4] rounded-xl p-0 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        {/* Left side - Current step */}
        <div className="flex items-center px-4 py-2 rounded-l-xl border-r border-[#b4bac4] flex-1">
          <div className="font-hexagon text-[16px] text-[#121623] leading-[24px]">
            <span className="font-medium">{currentStep}.</span> {currentStepLabel}
          </div>
        </div>
        
        {/* Right side - Chevron */}
        <div className="flex items-center justify-center p-2 rounded-r-xl w-[40px]">
          <div className={`text-[#121623] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDownIcon />
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#b4bac4] rounded-xl shadow-lg z-50 overflow-hidden">
          {steps.map((step, index) => {
            const isCompleted = completedSteps.includes(step.id);
            const isCurrent = step.id === currentStep;
            const isAccessible = isCompleted || step.id <= currentStep;
            
            return (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                disabled={!isAccessible}
                className={`
                  w-full px-4 py-3 text-left flex items-center justify-between
                  font-hexagon text-[16px] leading-[24px] transition-colors
                  ${isCurrent 
                    ? 'bg-[#e3f2fd] text-[#1976d2]' 
                    : isCompleted 
                      ? 'text-[#121623] hover:bg-gray-50' 
                      : isAccessible
                        ? 'text-[#121623] hover:bg-gray-50'
                        : 'text-[#9e9e9e] cursor-not-allowed'
                  }
                  ${index !== steps.length - 1 ? 'border-b border-[#e6eaf0]' : ''}
                `}
              >
                <span>
                  <span className="font-medium">{step.id}.</span> {step.label}
                </span>
                
                {isCompleted && (
                  <span className="material-symbols-outlined text-[16px] text-green-500">
                    check
                  </span>
                )}
                
                {isCurrent && !isCompleted && (
                  <div className="w-2 h-2 bg-[#2196f3] rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}