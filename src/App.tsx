import React from 'react';
import { AppTypeSelector } from './components/AppTypeSelector/AppTypeSelector';
import { AssessmentPage } from './pages/AssessmentPage/AssessmentPage';
import { ResultsView } from './components/ResultsView/ResultsView';
import { AppBar } from './components/AppBar/AppBar';
import { useAssessment } from './hooks/useAssessment';
import { categories } from './data/assessmentData';
import './styles/variables.css';
import './styles/global.css';

function App() {
  const {
    selectedAppType,
    setSelectedAppType,
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
    isFirstCategory,
    isLastCategory,
  } = useAssessment();

  // Calculate current category progress for app bar
  const currentCategoryProgress = selectedAppType && !showResults 
    ? calculateCategoryScore(categories[currentCategory]?.id || '') 
    : 0;
  // App type selection screen
  if (!selectedAppType) {
    return <AppTypeSelector onSelectAppType={setSelectedAppType} />;
  }
  // Show app bar for all screens after app type selection
  const appBarProps = {
    currentStep,
    completedSteps,
    unlockedSteps,
    selectedAppType,
    categoryProgress: currentCategoryProgress,
    onStepClick: handleStepClick,
  };

  // Results screen
  if (showResults) {
    const overallScore = calculateOverallScore();
    const categoryScores = categories.map(cat => ({
      ...cat,
      score: calculateCategoryScore(cat.id)
    }));

    return (
      <>
        <AppBar {...appBarProps} />
      <ResultsView
        selectedAppType={selectedAppType}
        overallScore={overallScore}
        categoryScores={categoryScores}
        onResetAssessment={resetAssessment}
      />
      </>
    );
  }

  // Assessment screen
  return (
    <>
      <AppBar {...appBarProps} />
    <AssessmentPage
      selectedAppType={selectedAppType}
      currentCategory={currentCategory}
      responses={responses}
      onResponse={handleResponse}
      onPrevious={previousCategory}
      onNext={nextCategory}
      onViewResults={() => setShowResults(true)}
      isFirstCategory={isFirstCategory}
      isLastCategory={isLastCategory}
      getItemsForCategory={getItemsForCategory}
      calculateCategoryScore={calculateCategoryScore}
    />
    </>
  );
}

export default App;