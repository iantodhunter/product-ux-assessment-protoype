import { useState } from 'react';
import { AssessmentResponse, AppType } from '../types/assessment';
import { categories, statusOptions } from '../data/assessmentData';

export const useAssessment = () => {
  const [selectedAppType, setSelectedAppType] = useState<AppType['id'] | null>(null);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse>({});
  const [showResults, setShowResults] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [unlockedSteps, setUnlockedSteps] = useState<number[]>([0]);

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

  const handleAppTypeSelection = (appType: AppType['id']) => {
    setSelectedAppType(appType);
    setCurrentStep(1);
    setCompletedSteps([0]);
    setUnlockedSteps([0, 1, 2, 3, 4]);
  };

  const handleStepClick = (step: number) => {
    if (step === 0) {
      // Return to app type selection
      setSelectedAppType(null);
      setCurrentStep(0);
      setCurrentCategory(0);
      setShowResults(false);
    } else if (step === 5) {
      // Go to results
      setShowResults(true);
      setCurrentStep(5);
    } else {
      // Go to category
      setCurrentCategory(step - 1);
      setCurrentStep(step);
      setShowResults(false);
    }
  };
  const resetAssessment = () => {
    setSelectedAppType(null);
    setCurrentCategory(0);
    setResponses({});
    setShowResults(false);
    setCurrentStep(0);
    setCompletedSteps([]);
    setUnlockedSteps([0]);
  };

  const nextCategory = () => {
    const nextCat = Math.min(categories.length - 1, currentCategory + 1);
    setCurrentCategory(nextCat);
    setCurrentStep(nextCat + 1);
  };

  const previousCategory = () => {
    const prevCat = Math.max(0, currentCategory - 1);
    setCurrentCategory(prevCat);
    setCurrentStep(prevCat + 1);
  };

  const goToCategory = (index: number) => {
    setCurrentCategory(index);
    setCurrentStep(index + 1);
  };

  // Check if all categories are completed to unlock results
  const allCategoriesCompleted = categories.every(cat => {
    const items = getItemsForCategory(cat.id);
    return items.every(item => responses[item.id]);
  });

  // Update unlocked steps based on completion
  React.useEffect(() => {
    if (selectedAppType && allCategoriesCompleted && !unlockedSteps.includes(5)) {
      setUnlockedSteps(prev => [...prev, 5]);
    }
  }, [responses, selectedAppType, allCategoriesCompleted, unlockedSteps]);
  return {
    selectedAppType,
    setSelectedAppType: handleAppTypeSelection,
    currentCategory,
    responses,
    showResults,
    setShowResults,
    currentStep,
    completedSteps,
    unlockedSteps,
    handleStepClick,
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