import React, { useState, useEffect } from 'react';
import { AppTypeSelector } from '../AppTypeSelector/AppTypeSelector';
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
    mediaUrl?: string;
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
  const [visibleItems, setVisibleItems] = useState<Record<string, number>>({});

  const currentCat = categories[currentCategory];
  const allItems = getItemsForCategory(currentCat.id);
  const categoryScore = calculateCategoryScore(currentCat.id);

  // Initialize visible items for current category
  useEffect(() => {
    const categoryKey = `${currentCat.id}-${selectedAppType}`;
    if (!visibleItems[categoryKey]) {
      setVisibleItems(prev => ({
        ...prev,
        [categoryKey]: 1 // Show first item initially
      }));
    }
  }, [currentCategory, selectedAppType, currentCat.id, visibleItems]);

  // Progressive disclosure logic
  const handleResponse = (itemId: string, status: string) => {
    onResponse(itemId, status);
    
    // Update visible items count for progressive disclosure
    const categoryKey = `${currentCat.id}-${selectedAppType}`;
    const currentVisible = visibleItems[categoryKey] || 1;
    const itemIndex = allItems.findIndex(item => item.id === itemId);
    
    if (itemIndex === currentVisible - 1 && currentVisible < allItems.length) {
      setVisibleItems(prev => ({
        ...prev,
        [categoryKey]: currentVisible + 1
      }));
    }
  };

  const categoryKey = `${currentCat.id}-${selectedAppType}`;
  const visibleItemsCount = visibleItems[categoryKey] || 1;
  const itemsToShow = allItems.slice(0, visibleItemsCount);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>UX Readiness Assessment</h1>
        <p className={styles.description}>
          Evaluate your application's user experience readiness across key categories.
        </p>
      </div>

      {/* Application Type Selector */}
      <div className={styles.appTypeSelector}>
        <h3 className={styles.appTypeSelectorTitle}>Select Application Type</h3>
        <div className={styles.appTypeCards}>
          <button
            onClick={() => {/* Handle web app selection */}}
            className={`${styles.appTypeCard} ${selectedAppType === 'web' ? styles.selected : ''}`}
          >
            <span className={styles.appTypeIcon}>🌐</span>
            <span className={styles.appTypeLabel}>Web App</span>
          </button>
          <button
            onClick={() => {/* Handle desktop app selection */}}
            className={`${styles.appTypeCard} ${selectedAppType === 'desktop' ? styles.selected : ''}`}
          >
            <span className={styles.appTypeIcon}>💻</span>
            <span className={styles.appTypeLabel}>Desktop Application</span>
          </button>
          <button
            onClick={() => {/* Handle device/hardware selection */}}
            className={`${styles.appTypeCard} ${selectedAppType === 'other' ? styles.selected : ''}`}
          >
            <span className={styles.appTypeIcon}>🏭</span>
            <span className={styles.appTypeLabel}>Device/Hardware</span>
          </button>
        </div>
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
        items={itemsToShow}
        responses={responses}
        categoryScore={categoryScore}
        onResponse={handleResponse}
        visibleItemsCount={visibleItemsCount}
        totalItemsCount={allItems.length}
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