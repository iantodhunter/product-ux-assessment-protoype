import React from 'react';
import { categories } from '../../data/assessmentData';
import { appTypes } from '../../data/assessmentData';
import { AppType } from '../../types/assessment';
import styles from './CategoryTabs.module.css';

interface CategoryTabsProps {
  selectedAppType: AppType['id'];
  currentCategory: number;
  onCategoryChange: (index: number) => void;
  onResetAssessment: () => void;
  calculateCategoryScore: (categoryId: string) => number;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  selectedAppType,
  currentCategory,
  onCategoryChange,
  onResetAssessment,
  calculateCategoryScore,
}) => {
  const selectedApp = appTypes.find(t => t.id === selectedAppType);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsHeader}>
        <h1 className={styles.title}>
          {selectedApp?.title} Assessment
        </h1>
        <button
          onClick={onResetAssessment}
          className={styles.changeAppButton}
        >
          Change App Type
        </button>
      </div>
      
      <div className={styles.tabsList}>
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(index)}
            className={`${styles.tab} ${currentCategory === index ? styles.active : ''}`}
          >
            <div className={styles.tabContent}>
              {category.title}
              <span className={styles.tabScore}>{calculateCategoryScore(category.id)}%</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};