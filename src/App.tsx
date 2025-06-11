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
  
  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (selectedAppType) {
      if (currentStep === 1) {
        // Go back to product selection
        resetAssessment();
      } else {
        // Go to previous step
        handleStepChange(currentStep - 1);
      }
    }
  };
  
  const shouldShowBackButton = selectedAppType || showResults;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9fafb' }}>
      <AppBar
        selectedAppType={selectedAppType}
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={handleStepChange}
        onResetAssessment={resetAssessment}
        overallProgress={overallScore}
        showBackButton={shouldShowBackButton}
        onBack={handleBack}
      />
      
      <div style={{ paddingTop: '80px', maxWidth: '1980px', margin: '0 auto' }}>
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