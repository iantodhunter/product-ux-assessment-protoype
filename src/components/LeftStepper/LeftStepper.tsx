import React from 'react';
import { CheckCircle } from 'lucide-react';
import styles from './LeftStepper.module.css';

interface LeftStepperProps {
  currentStep: string;
  onStepClick: (stepId: 'overview' | 'data' | 'ux' | 'gtm' | 'review') => void;
  getStepStatus: (stepId: string) => 'complete' | 'current' | 'available' | 'locked';
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
  onStepClick,
  getStepStatus
}) => {
  return (
    <div className={styles.stepper}>
      <div className={styles.stepperContent}>
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          const isClickable = status !== 'locked';
          
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