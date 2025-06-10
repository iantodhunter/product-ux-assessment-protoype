import React from 'react';
import { AppTypeSelector } from './components/AppTypeSelector/AppTypeSelector';
import { AssessmentPage } from './pages/AssessmentPage/AssessmentPage';
import { ResultsView } from './components/ResultsView/ResultsView';
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

  // App type selection screen
  if (!selectedAppType) {
    return <AppTypeSelector onSelectAppType={setSelectedAppType} />;
  }

  // Results screen
  if (showResults) {
    const overallScore = calculateOverallScore();
    const categoryScores = categories.map(cat => ({
      ...cat,
      score: calculateCategoryScore(cat.id)
    }));

    return (
      <ResultsView
        selectedAppType={selectedAppType}
        overallScore={overallScore}
        categoryScores={categoryScores}
        onResetAssessment={resetAssessment}
      />
    );
  }

  // Assessment screen
  return (
    <AssessmentPage
      selectedAppType={selectedAppType}
      currentCategory={currentCategory}
      responses={responses}
      onCategoryChange={goToCategory}
      onResetAssessment={resetAssessment}
      onResponse={handleResponse}
      onPrevious={previousCategory}
      onNext={nextCategory}
      onViewResults={() => setShowResults(true)}
      isFirstCategory={isFirstCategory}
      isLastCategory={isLastCategory}
      getItemsForCategory={getItemsForCategory}
      calculateCategoryScore={calculateCategoryScore}
    />
  );
}

export default App;