import React from 'react';
import styles from './NavigationButtons.module.css';

interface NavigationButtonsProps {
  isFirstCategory: boolean;
  isLastCategory: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onViewResults: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  isFirstCategory,
  isLastCategory,
  onPrevious,
  onNext,
  onViewResults,
}) => {
  return (
    <div className={styles.navigation}>
      <button
        onClick={onPrevious}
        disabled={isFirstCategory}
        className={styles.navButton}
      >
        Previous
      </button>
      
      {isLastCategory ? (
        <button
          onClick={onViewResults}
          className={`${styles.navButton} ${styles.success}`}
        >
          View Results
        </button>
      ) : (
        <button
          onClick={onNext}
          className={`${styles.navButton} ${styles.primary}`}
        >
          Next
        </button>
      )}
    </div>
  );
};