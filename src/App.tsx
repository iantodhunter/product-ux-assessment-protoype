import React from 'react';
import { LeftStepper } from './components/LeftStepper/LeftStepper';
import { TopHeader } from './components/TopHeader/TopHeader';
import { ProductOverview } from './pages/ProductOverview/ProductOverview';
import { DataReadiness } from './pages/DataReadiness/DataReadiness';
import { UXAssessment } from './components/UXAssessment/UXAssessment';
import { GTMReadiness } from './pages/GTMReadiness/GTMReadiness';
import { FinalReview } from './pages/FinalReview/FinalReview';
import { useReadiness } from './hooks/useReadiness';
import { useAssessment } from './hooks/useAssessment';
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
    resetReadiness,
    getStepStatus
  } = useReadiness();

  const {
    selectedAppType,
    setSelectedAppType,
    currentCategory,
    responses,
    handleResponse,
    resetAssessment,
    nextCategory,
    previousCategory,
    goToCategory,
    isFirstCategory,
    isLastCategory,
    getItemsForCategory,
    calculateCategoryScore,
  } = useAssessment();

  const handleStepClick = (stepId: 'overview' | 'data' | 'ux' | 'gtm' | 'review') => {
    const stepStatus = getStepStatus(stepId);
    if (stepStatus !== 'locked') {
      setCurrentView(stepId);
      
      // Handle UX assessment initialization
      if (stepId === 'ux' && !selectedAppType) {
        setSelectedAppType('web'); // Default to web
      }
    }
  };

  const handleLogoClick = () => {
    setCurrentView('overview');
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
      <div style={{ display: 'flex', maxWidth: '1980px', margin: '0 auto', minHeight: '100vh' }}>
        {/* Left-Hand Stepper */}
        <LeftStepper
          currentStep={currentView}
          onStepClick={handleStepClick}
          getStepStatus={getStepStatus}
        />
        
        {/* Main Content Area */}
        <div style={{ flex: 1, paddingLeft: '72px', paddingRight: '72px' }}>
          {/* Top Header (scrolls with content) */}
          <TopHeader onLogoClick={handleLogoClick} />
          
          {/* Content */}
          <div style={{ paddingTop: '40px' }}>
            {renderCurrentView()}
          </div>
        </div>
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