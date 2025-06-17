import React from 'react';
import { AppBar } from './components/AppBar/AppBar';
import { LeftStepper } from './components/LeftStepper/LeftStepper';
import { Modal } from './components/Modal/Modal';
import { AppTypeSelector } from './components/AppTypeSelector/AppTypeSelector';
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
  const [showAppTypeModal, setShowAppTypeModal] = React.useState(false);
  
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
        setShowAppTypeModal(true);
      }
    }
  };

  const handleLogoClick = () => {
    setCurrentView('overview');
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

  const handleAppTypeSelect = (appType: any) => {
    setSelectedAppType(appType);
    setShowAppTypeModal(false);
  };

  const handleChangeAppType = () => {
    setShowAppTypeModal(true);
  };

  const handleSectionClick = (sectionId: 'data' | 'ux' | 'gtm') => {
    setCurrentView(sectionId);
    
    // Show app type modal if going to UX and no type selected
    if (sectionId === 'ux' && !selectedAppType) {
      setShowAppTypeModal(true);
    }
  };

  const handleStartNew = () => {
    resetReadiness();
    resetAssessment();
    setCurrentView('overview');
  };

  // Show app type modal on UX page load if no type selected
  React.useEffect(() => {
    if (currentView === 'ux' && !selectedAppType) {
      setShowAppTypeModal(true);
    }
  }, [currentView, selectedAppType]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9fafb' }}>
      {/* Fixed App Bar */}
      <AppBar onLogoClick={handleLogoClick} />
      
      {/* App Type Modal */}
      <Modal 
        isOpen={showAppTypeModal} 
        onClose={() => setShowAppTypeModal(false)}
        title="Select Application Type"
      >
        <AppTypeSelector onSelectAppType={handleAppTypeSelect} />
      </Modal>
      
      <div style={{ display: 'flex', maxWidth: '1980px', margin: '0 auto', minHeight: '100vh' }}>
        {/* Left-Hand Stepper */}
        <LeftStepper
          currentStep={currentView}
          currentUXCategory={currentCategory}
          onStepClick={handleStepClick}
          onUXCategoryClick={goToCategory}
          onChangeAppType={handleChangeAppType}
          getStepStatus={getStepStatus}
          calculateCategoryScore={calculateCategoryScore}
        />
        
        {/* Main Content Area */}
        <div style={{ 
          flex: 1, 
          paddingLeft: '72px', 
          paddingRight: '72px',
          paddingTop: '120px', // Account for fixed app bar
          paddingBottom: '40px'
        }}>
          {renderCurrentView()}
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
            onProductSave={() => setCurrentView('data')}
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
            onChangeAppType={handleChangeAppType}
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