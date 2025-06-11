import React from 'react';
import { AppBar } from './components/AppBar/AppBar';
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
    isFirstCategory,
    isLastCategory,
  } = useAssessment();

  const overallScore = calculateOverallScore();

  return (
    <div className="min-h-screen bg-gray-50">
      <AppBar
        selectedAppType={selectedAppType}
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={handleStepChange}
        onResetAssessment={resetAssessment}
        overallProgress={overallScore}
      />
      
      <div style={{ paddingTop: '80px' }}>
        {renderCurrentView()}
      </div>
    </div>
  );

  function renderCurrentView() {
  // App type selection screen
  if (!selectedAppType) {
    return <AppTypeSelector onSelectAppType={setSelectedAppType} />;
  }

  // Results screen
  if (showResults) {
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
}

export default App;