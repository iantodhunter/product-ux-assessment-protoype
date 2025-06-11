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
    <>
      <div className="sticky top-0 z-10 bg-white rounded-lg border border-gray-200 shadow-sm mb-6 p-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-900">
            {selectedApp?.title} Readiness
          </h1>
          <button
            onClick={onResetAssessment}
            className="px-3 py-1.5 border border-gray-300 text-gray-600 hover:text-gray-800 hover:border-gray-400 text-sm rounded-lg transition-colors"
          >
            Change App Type
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(index)}
            className={`p-4 rounded-lg border-2 text-center transition-all ${
              currentCategory === index
                ? 'border-gray-400 bg-gray-100 text-gray-900'
                : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="font-medium">{category.title}</div>
            <div className="text-lg font-bold text-blue-600 mt-1">
              {calculateCategoryScore(category.id)}%
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

// Remove the old tabsContainer structure
const OldComponent = () => {
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