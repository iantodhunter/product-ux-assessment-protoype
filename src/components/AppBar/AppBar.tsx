import React from 'react';
import { Check, ChevronDown, ArrowLeft } from 'lucide-react';
import { AppType } from '../../types/assessment';
import { appTypes } from '../../data/assessmentData';
import styles from './AppBar.module.css';

interface AppBarProps {
  selectedAppType: AppType['id'] | null;
  currentStep: number;
  completedSteps: number[];
  onStepClick: (step: number) => void;
  onResetAssessment: () => void;
  overallProgress: number;
  showBackButton?: boolean;
  onBack?: () => void;
}

const steps = [
  { id: 0, label: 'Choose Product Type', dynamicLabel: true },
  { id: 1, label: 'Experience Architecture' },
  { id: 2, label: 'Frontend' },
  { id: 3, label: 'Content' },
  { id: 4, label: 'Performance' },
  { id: 5, label: 'Readiness Review' }
];

export const AppBar: React.FC<AppBarProps> = ({
  selectedAppType,
  currentStep,
  completedSteps,
  onStepClick,
  onResetAssessment,
  overallProgress,
  showBackButton = false,
  onBack
}) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const selectedApp = appTypes.find(t => t.id === selectedAppType);
  
  const getStepLabel = (step: typeof steps[0]) => {
    if (step.dynamicLabel && selectedApp) {
      return selectedApp.title;
    }
    return step.label;
  };

  const getStepState = (stepId: number) => {
    if (completedSteps.includes(stepId)) return 'completed';
    if (stepId === currentStep) return 'active';
    if (stepId === 0) return 'available';
    if (completedSteps.includes(0) && selectedAppType) {
      // After first step is completed, steps 1-4 are available
      if (stepId <= 4) return 'available';
      // Step 5 (Readiness Review) requires all previous steps
      if (stepId === 5 && completedSteps.length >= 5) return 'available';
    }
    return 'disabled';
  };

  const isStepClickable = (stepId: number) => {
    const state = getStepState(stepId);
    return state === 'available' || state === 'active' || state === 'completed';
  };

  return (
    <div className={styles.appBar}>
      <div className={styles.container}>
        {/* Left Section - Title */}
        <div className={styles.titleSection}>
          <div className={styles.titleContainer}>
            {showBackButton && (
              <button onClick={onBack} className={styles.backButton}>
                <ArrowLeft size={20} />
              </button>
            )}
            <div className={styles.dropdown}>
              <button 
                className={styles.title}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                User Experience Readiness
                <ChevronDown size={20} className={styles.chevron} />
              </button>
              {showDropdown && (
                <div className={styles.dropdownMenu}>
                  <button className={styles.dropdownItem}>
                    Data Readiness
                  </button>
                  <button className={styles.dropdownItem}>
                    Go-to-Market Readiness
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Center Section - Stepper */}
        <div className={styles.stepperSection}>
          <div className={styles.stepper}>
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div
                  className={`${styles.step} ${styles[getStepState(step.id)]} ${
                    isStepClickable(step.id) ? styles.clickable : ''
                  }`}
                  onClick={() => isStepClickable(step.id) && onStepClick(step.id)}
                >
                  <div className={styles.stepIcon}>
                    {completedSteps.includes(step.id) ? (
                      <Check size={16} />
                    ) : (
                      <span>{step.id + 1}</span>
                    )}
                  </div>
                  <span className={styles.stepLabel}>{getStepLabel(step)}</span>
                </div>
                
                {index < steps.length - 1 && (
                  <div className={`${styles.connector} ${
                    completedSteps.includes(step.id) ? styles.completed : ''
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Section - Progress */}
        <div className={styles.progressSection}>
          <span className={styles.progressText}>{overallProgress}% Complete</span>
          {selectedAppType && (
            <button
              onClick={onResetAssessment}
              className={styles.resetButton}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};