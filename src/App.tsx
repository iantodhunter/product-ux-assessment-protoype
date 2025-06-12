import React from 'react';
import { ReadinessNavigation } from './components/ReadinessNavigation/ReadinessNavigation';
import { ProductOverview } from './pages/ProductOverview/ProductOverview';
import { DataReadiness } from './pages/DataReadiness/DataReadiness';
import { UXAssessment } from './components/UXAssessment/UXAssessment';
import { GTMReadiness } from './pages/GTMReadiness/GTMReadiness';
import { FinalReview } from './pages/FinalReview/FinalReview';
import { useReadiness } from './hooks/useReadiness';
import { useAssessment } from './hooks/useAssessment';
import { appTypes } from './data/assessmentData';
import './styles/variables.css';
import './styles/global.css';

function App() {
  const {
    readinessState,
    currentView,
    setCurrentView,
    createProduct,
    updateProduct,
    setDataLevel,
    updateGTMResponse,
    updateUXResponse,
    getReadinessSections,
    resetReadiness
  } = useReadiness();

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

  const handleViewChange = (view: 'overview' | 'data' | 'ux' | 'gtm' | 'review') => {
    setCurrentView(view);
    
    // Handle UX assessment initialization
    if (view === 'ux' && !selectedAppType) {
      // If no app type selected, we need to handle this in UX assessment
      setSelectedAppType('web'); // Default to web for now
    }
  };

  const handleProductCreate = (name: string, pmName?: string, pmEmail?: string) => {
    createProduct(name, pmName, pmEmail);
  };

  const handleDataLevelSelect = (level: 0 | 1 | 2) => {
    setDataLevel(level);
  };

  const handleDataContinue = () => {
    setCurrentView('ux');
  };

  const handleGTMSave = () => {
    setCurrentView('review');
  };

  const handleUXComplete = () => {
    setCurrentView('gtm');
  };

  const handleSectionClick = (sectionId: 'data' | 'ux' | 'gtm') => {
    setCurrentView(sectionId);
  };

  const handleStartNew = () => {
    resetReadiness();
    resetAssessment();
    setCurrentView('overview');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9fafb' }}>
      <ReadinessNavigation
        currentView={currentView}
        onViewChange={handleViewChange}
        productName={readinessState.product?.name}
      />
      
      <div style={{ paddingTop: '100px' }}>
        {renderCurrentView()}
      </div>
    </div>
  );

  function renderCurrentView() {
    switch (currentView) {
      case 'overview':
        return (
          <ProductOverview
            productName={readinessState.product?.name || ''}
            pmName={readinessState.product?.pmName}
            pmEmail={readinessState.product?.pmEmail}
            readinessSections={getReadinessSections()}
            onProductUpdate={updateProduct}
            onSectionClick={handleSectionClick}
          />
        );

      case 'data':
        return (
          <DataReadiness
            selectedLevel={readinessState.dataLevel}
            onLevelSelect={handleDataLevelSelect}
            onContinue={handleDataContinue}
          />
        );

      case 'ux':
        return (
          <UXAssessment
            selectedAppType={selectedAppType || 'web'}
            currentCategory={currentCategory}
            responses={responses}
            onCategoryChange={goToCategory}
            onResponse={(itemId, status) => {
              handleResponse(itemId, status);
              updateUXResponse(itemId, status);
            }}
            onPrevious={previousCategory}
            onNext={nextCategory}
            onComplete={handleUXComplete}
            isFirstCategory={isFirstCategory}
            isLastCategory={isLastCategory}
            getItemsForCategory={getItemsForCategory}
            calculateCategoryScore={calculateCategoryScore}
          />
        );

      case 'gtm':
        return (
          <GTMReadiness
            responses={readinessState.gtmResponses}
            onResponseChange={updateGTMResponse}
            onSave={handleGTMSave}
          />
        );

      case 'review':
        if (!readinessState.product) {
          setCurrentView('overview');
          return null;
        }
        return (
          <FinalReview
            product={readinessState.product}
            readinessSections={getReadinessSections()}
            onStartNew={handleStartNew}
          />
        );

      default:
        return null;
    }
  }
}

export default App;