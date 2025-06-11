import React from 'react';
import { AssessmentCategory } from '../../components/AssessmentCategory/AssessmentCategory';
import { NavigationButtons } from '../../components/NavigationButtons/NavigationButtons';
import { categories } from '../../data/assessmentData';
import { AppType, AssessmentResponse } from '../../types/assessment';
import styles from './AssessmentPage.module.css';

interface AssessmentPageProps {
  selectedAppType: AppType['id'];
  currentCategory: number;
  responses: AssessmentResponse;
  onResponse: (itemId: string, status: string) => void;
  onPrevious: () => void;
  onNext: () => void;
  onViewResults: () => void;
  isFirstCategory: boolean;
  isLastCategory: boolean;
  getItemsForCategory: (categoryId: string) => Array<{
    id: string;
    title: string;
    details: string[];
  }>;
  calculateCategoryScore: (categoryId: string) => number;
}

export const AssessmentPage: React.FC<AssessmentPageProps> = ({
  selectedAppType,
  currentCategory,
  responses,
  onResponse,
  onPrevious,
  onNext,
  onViewResults,
  isFirstCategory,
  isLastCategory,
  getItemsForCategory,
  calculateCategoryScore,
}) => {
  const currentCat = categories[currentCategory];
  const items = getItemsForCategory(currentCat.id);
  const categoryScore = calculateCategoryScore(currentCat.id);

  return (
    <div className="max-w-4xl mx-auto p-6 pt-2">
      <AssessmentCategory
        title={currentCat.title}
        items={items}
        responses={responses}
        categoryScore={categoryScore}
        onResponse={onResponse}
      />

      <NavigationButtons
        isFirstCategory={isFirstCategory}
        isLastCategory={isLastCategory}
        onPrevious={onPrevious}
        onNext={onNext}
        onViewResults={onViewResults}
      />
    </div>
  );
};