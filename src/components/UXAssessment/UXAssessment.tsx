import React from 'react';
import { AssessmentCategory } from '../AssessmentCategory/AssessmentCategory';
import { NavigationButtons } from '../NavigationButtons/NavigationButtons';
import { categories } from '../../data/assessmentData';
import { AppType, AssessmentResponse } from '../../types/assessment';
import styles from './UXAssessment.module.css';

interface UXAssessmentProps {
  selectedAppType: AppType['id'];
  currentCategory: number;
  responses: AssessmentResponse;
  onCategoryChange: (index: number) => void;
  onResponse: (itemId: string, status: string) => void;
  onPrevious: () => void;
  onNext: () => void;
  onComplete: () => void;
  isFirstCategory: boolean;
  isLastCategory: boolean;
  getItemsForCategory: (categoryId: string) => Array<{
    id: string;
    title: string;
    details: string[];
  }>;
  calculateCategoryScore: (categoryId: string) => number;
}

export const UXAssessment: React.FC<UXAssessmentProps> = ({
  selectedAppType,
  currentCategory,
  responses,
  onCategoryChange,
  onResponse,
  onPrevious,
  onNext,
  onComplete,
  isFirstCategory,
  isLastCategory,
  getItemsForCategory,
  calculateCategoryScore,
}) => {
  const currentCat = categories[currentCategory];
  const items = getItemsForCategory(currentCat.id);
  const categoryScore = calculateCategoryScore(currentCat.id);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>UX Readiness Assessment</h1>
        <p className={styles.description}>
          Evaluate your application's user experience readiness across key categories.
        </p>
      </div>

      {/* Category Navigation */}
      <div className={styles.categoryTabs}>
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(index)}
            className={`${styles.categoryTab} ${currentCategory === index ? styles.active : ''}`}
          >
            <div className={styles.tabContent}>
              <span className={styles.tabTitle}>{category.title}</span>
              <span className={styles.tabScore}>{calculateCategoryScore(category.id)}%</span>
            </div>
          </button>
        ))}
      </div>

      {/* Current Category Assessment */}
      <AssessmentCategory
        title={currentCat.title}
        items={items}
        responses={responses}
        categoryScore={categoryScore}
        onResponse={onResponse}
      />

      {/* Navigation */}
      <NavigationButtons
        isFirstCategory={isFirstCategory}
        isLastCategory={isLastCategory}
        onPrevious={onPrevious}
        onNext={onNext}
        onViewResults={onComplete}
      />
    </div>
  );
};