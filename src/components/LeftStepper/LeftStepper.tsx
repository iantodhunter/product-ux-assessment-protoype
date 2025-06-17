import React from 'react';
import { CheckCircle, Settings } from 'lucide-react';
import { categories } from '../../data/assessmentData';
import styles from './LeftStepper.module.css';

interface LeftStepperProps {
  currentStep: string;
  currentUXCategory?: number;
  onStepClick: (stepId: 'overview' | 'data' | 'ux' | 'gtm' | 'review') => void;
  onUXCategoryClick?: (categoryIndex: number) => void;
  onChangeAppType?: () => void;
  getStepStatus: (stepId: string) => 'complete' | 'current' | 'available' | 'locked';
  calculateCategoryScore?: (categoryId: string) => number;
}

const steps = [
  { id: 'overview', label: 'Product Overview' },
  { id: 'data', label: 'Data Readiness' },
  { id: 'ux', label: 'User Experience Readiness' },
  { id: 'gtm', label: 'Go-to-Market Readiness' },
  { id: 'review', label: 'Final Review' }
];

export const LeftStepper: React.FC<LeftStepperProps> = ({
  currentStep,
  currentUXCategory = 0,
  onStepClick,
  onUXCategoryClick,
  onChangeAppType,
  getStepStatus,
  calculateCategoryScore
}) => {
  return (
    <div className={styles.stepper}>
      <div className={styles.stepperContent}>
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          const isClickable = status !== 'locked';
          const isUXStep = step.id === 'ux';
          const isUXActive = currentStep === 'ux';
          
          return (
            <div key={step.id} className={styles.stepContainer}>
              <button
                onClick={() => isClickable && onStepClick(step.id as any)}
                disabled={!isClickable}
                className={`${styles.step} ${styles[status]} ${isClickable ? styles.clickable : ''}`}
              >
                <div className={styles.stepIndicator}>
                  {status === 'complete' ? (
                    <CheckCircle size={20} className={styles.checkIcon} />
                  ) : (
                    <div className={styles.stepNumber}>{index + 1}</div>
                  )}
                </div>
                <span className={styles.stepLabel}>{step.label}</span>
              </button>
              
              {/* UX Sub-steps */}
              {isUXStep && isUXActive && (
                <div className={styles.subSteps}>
                  {categories.map((category, categoryIndex) => (
                    <button
                      key={category.id}
                      onClick={() => onUXCategoryClick?.(categoryIndex)}
                      className={`${styles.subStep} ${currentUXCategory === categoryIndex ? styles.subStepActive : ''}`}
                    >
                      <div className={styles.subStepIndicator}>
                        <div className={styles.subStepDot} />
                      </div>
                      <div className={styles.subStepContent}>
                        <span className={styles.subStepLabel}>{category.title}</span>
                        {calculateCategoryScore && (
                          <span className={styles.subStepScore}>
                            {calculateCategoryScore(category.id)}%
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                  
                  {/* Change App Type Button */}
                  <button
                    onClick={onChangeAppType}
                    className={styles.changeAppTypeButton}
                  >
                    <div className={styles.subStepIndicator}>
                      <Settings size={16} className={styles.settingsIcon} />
                    </div>
                    <span className={styles.subStepLabel}>Change App Type</span>
                  </button>
                </div>
              )}
              
              {index < steps.length - 1 && (
                <div className={`${styles.connector} ${status === 'complete' ? styles.connectorComplete : ''}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};