import { useState } from 'react';
import { AssessmentResponse, AppType } from '../types/assessment';
import { categories, statusOptions } from '../data/assessmentData';

export const useAssessment = () => {
  const [selectedAppType, setSelectedAppType] = useState<AppType['id'] | null>(null);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [responses, setResponses] = useState<AssessmentResponse>({});
  const [showResults, setShowResults] = useState(false);

  // Step 0: Product selection
  // Steps 1-4: Assessment categories
  // Step 5: Results review
  
  const handleStepChange = (step: number) => {
    if (step === 0) {
      // Going back to product selection
      setSelectedAppType(null);
      setCurrentStep(0);
      setCurrentCategory(0);
      setShowResults(false);
    } else if (step >= 1 && step <= 4) {
      // Assessment categories (steps 1-4 map to categories 0-3)
      setCurrentCategory(step - 1);
      setCurrentStep(step);
      setShowResults(false);
    } else if (step === 5) {
      // Results review
      setShowResults(true);
      setCurrentStep(5);
    }
  };

  const handleAppTypeSelection = (appType: AppType['id']) => {
    setSelectedAppType(appType);
    setCurrentStep(1);
    setCurrentCategory(0);
    // Mark step 0 as completed
    if (!completedSteps.includes(0)) {
      setCompletedSteps(prev => [...prev, 0]);
    }
  };

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

  // Check if a category is completed (has responses for all items)
  const isCategoryCompleted = (categoryIndex: number): boolean => {
    const category = categories[categoryIndex];
    const items = getItemsForCategory(category.id);
    return items.every(item => responses[item.id]);
  };

  // Update completed steps based on category completion
  const updateCompletedSteps = () => {
    const newCompletedSteps = [...completedSteps];
    
    // Check each category (steps 1-4)
    for (let i = 0; i < categories.length; i++) {
      const stepId = i + 1;
      if (isCategoryCompleted(i) && !newCompletedSteps.includes(stepId)) {
        newCompletedSteps.push(stepId);
      }
    }
    
    setCompletedSteps(newCompletedSteps);
  };

  const handleResponse = (itemId: string, status: string) => {
    setResponses(prev => ({
      ...prev,
      [itemId]: status
    }));
    
    // Update completed steps after a short delay to allow state to update
    setTimeout(updateCompletedSteps, 100);
  };

  const resetAssessment = () => {
    setSelectedAppType(null);
    setCurrentCategory(0);
    setCurrentStep(0);
    setCompletedSteps([]);
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
    setSelectedAppType: handleAppTypeSelection,
    currentCategory,
    currentStep,
    completedSteps,
    responses,
    showResults,
    setShowResults,
    handleStepChange,
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