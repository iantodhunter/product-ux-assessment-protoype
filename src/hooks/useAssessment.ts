import { useState } from 'react';
import { AssessmentResponse, AppType } from '../types/assessment';
import { categories, statusOptions } from '../data/assessmentData';

export const useAssessment = () => {
  const [selectedAppType, setSelectedAppType] = useState<AppType['id'] | null>(null);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse>({});
  const [showResults, setShowResults] = useState(false);

  const getItemsForCategory = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return [];
    
    const items = [...category.items.universal];
    if (selectedAppType && category.items[selectedAppType]) {
      items.push(...category.items[selectedAppType]!);
    }
    return items;
  };

  const calculateCategoryScore = (categoryId: string): number => {
    const items = getItemsForCategory(categoryId);
    if (items.length === 0) return 0;

    let totalScore = 0;
    let maxScore = 0;

    items.forEach(item => {
      const response = responses[item.id];
      if (response && response !== 'na') {
        const statusOption = statusOptions.find(opt => opt.id === response);
        if (statusOption && statusOption.score !== null) {
          totalScore += statusOption.score;
          maxScore += 100;
        }
      } else if (!response || response !== 'na') {
        maxScore += 100;
      }
    });

    return maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
  };

  const calculateOverallScore = (): number => {
    const scores = categories.map(cat => calculateCategoryScore(cat.id));
    const validScores = scores.filter(score => score !== null);
    return validScores.length > 0 ? Math.round(validScores.reduce((a, b) => a + b, 0) / validScores.length) : 0;
  };

  const handleResponse = (itemId: string, status: string) => {
    setResponses(prev => ({
      ...prev,
      [itemId]: status
    }));
  };

  const resetAssessment = () => {
    setSelectedAppType(null);
    setCurrentCategory(0);
    setResponses({});
    setShowResults(false);
  };

  const nextCategory = () => {
    setCurrentCategory(Math.min(categories.length - 1, currentCategory + 1));
  };

  const previousCategory = () => {
    setCurrentCategory(Math.max(0, currentCategory - 1));
  };

  const goToCategory = (index: number) => {
    setCurrentCategory(index);
  };

  return {
    selectedAppType,
    setSelectedAppType,
    currentCategory,
    responses,
    showResults,
    setShowResults,
    getItemsForCategory,
    calculateCategoryScore,
    calculateOverallScore,
    handleResponse,
    resetAssessment,
    nextCategory,
    previousCategory,
    goToCategory,
    isFirstCategory: currentCategory === 0,
    isLastCategory: currentCategory === categories.length - 1,
  };
};