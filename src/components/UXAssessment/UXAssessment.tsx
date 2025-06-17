import React, { useState, useEffect } from 'react';
import { AssessmentItem } from '../AssessmentItem/AssessmentItem';
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
  onChangeAppType: () => void;
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
  onChangeAppType,
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
      {/* Assessment Items */}
      <div className={styles.itemsList}>
        {itemsToShow.map((item, index) => (
          <AssessmentItem
            key={item.id}
            item={item}
            response={responses[item.id]}
            onResponse={handleResponse}
            isVisible={true}
            animationDelay={index * 100}
          />
        ))}
      </div>

      {/* Progress Info */}
      <div className={styles.progressInfo}>
        <span className={styles.progressText}>
          {visibleItemsCount}/{allItems.length} items • {categoryScore}% complete
        </span>
      </div>

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