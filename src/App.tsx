import { useState } from 'react';
import { StepOne } from '../components/StepOne';
import { StepTwo } from '../components/StepTwo';
import { DataReadinessStep } from '../components/DataReadinessStep';
import { UXReadinessStep } from '../components/UXReadinessStep';
import { GTMReadinessStep } from '../components/GTMReadinessStep';
import { AssessmentResults } from '../components/AssessmentResults';
import { SideNavigation } from '../components/SideNavigation';
import useContent from './hooks/useContent';
import { LoadingScreen } from '../components/LoadingScreen';

type ResponseValue = 'yes' | 'no' | 'planned';

export interface AppData {
  appType: string | null;
  productName: string;
  productManagerName: string;
  currentDataReadinessLevel: string | null;
  goalDataReadinessLevel: string | null;
  uxReadinessResponses: Record<string, ResponseValue>;
}

export default function App() {
  const { content, loading, error } = useContent();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [appData, setAppData] = useState<AppData>({
    appType: null,
    productName: '',
    productManagerName: '',
    currentDataReadinessLevel: null,
    goalDataReadinessLevel: null,
    uxReadinessResponses: {}
  });

  const handleStepNavigation = (step: number) => {
    // Only allow navigation to completed steps or the current step
    if (completedSteps.includes(step) || step <= Math.max(currentStep, Math.max(...completedSteps, 0))) {
      setCurrentStep(step);
    }
  };

  const markStepCompleted = (step: number) => {
    setCompletedSteps(prev => {
      if (!prev.includes(step)) {
        return [...prev, step];
      }
      return prev;
    });
  };

  const handleStepOneComplete = (appType: string) => {
    setAppData(prev => ({ ...prev, appType }));
    markStepCompleted(1);
    setCurrentStep(2);
  };

  const handleStepTwoComplete = (productName: string, productManagerName: string) => {
    setAppData(prev => ({ ...prev, productName, productManagerName }));
    markStepCompleted(2);
    setCurrentStep(3);
  };

  const handleDataReadinessComplete = (currentLevel: string, goalLevel: string) => {
    setAppData(prev => ({ 
      ...prev, 
      currentDataReadinessLevel: currentLevel,
      goalDataReadinessLevel: goalLevel 
    }));
    markStepCompleted(3);
    setCurrentStep(4);
  };

  const handleUXReadinessComplete = (responses: Record<string, ResponseValue>) => {
    setAppData(prev => ({ 
      ...prev, 
      uxReadinessResponses: responses 
    }));
    markStepCompleted(4);
    setCurrentStep(5);
  };

  const handleGTMReadinessComplete = () => {
    markStepCompleted(5);
    setCurrentStep(6);
  };

  const handleRestartAssessment = () => {
    setAppData({
      appType: null,
      productName: '',
      productManagerName: '',
      currentDataReadinessLevel: null,
      goalDataReadinessLevel: null,
      uxReadinessResponses: {}
    });
    setCompletedSteps([]);
    setCurrentStep(1);
  };

  const handleBackToStepOne = () => {
    setCurrentStep(1);
  };

  const handleBackToStepTwo = () => {
    setCurrentStep(2);
  };

  const handleBackToStepThree = () => {
    setCurrentStep(3);
  };

  const handleBackToStepFour = () => {
    setCurrentStep(4);
  };

  const handleBackToStepFive = () => {
    setCurrentStep(5);
  };

  const renderCurrentStep = () => {
    // Don't render anything if content is still loading or not available
    if (loading || !content.dataReadinessLevels || !content.uxCategories) {
      return null;
    }

    switch (currentStep) {
      case 1:
        return (
          <StepOne 
            onComplete={handleStepOneComplete}
            selectedAppType={appData.appType}
            onStepSelect={handleStepNavigation}
            completedSteps={completedSteps}
          />
        );
      case 2:
        return (
          <StepTwo 
            onComplete={handleStepTwoComplete}
            onBack={handleBackToStepOne}
            initialProductName={appData.productName}
            initialProductManagerName={appData.productManagerName}
            onStepSelect={handleStepNavigation}
            completedSteps={completedSteps}
          />
        );
      case 3:
        return (
          <DataReadinessStep 
            levels={content.dataReadinessLevels}
            onComplete={handleDataReadinessComplete}
            onBack={handleBackToStepTwo}
            initialCurrentLevel={appData.currentDataReadinessLevel}
            initialGoalLevel={appData.goalDataReadinessLevel}
            onStepSelect={handleStepNavigation}
            completedSteps={completedSteps}
          />
        );
      case 4:
        return (
          <UXReadinessStep 
            questionCategories={content.uxCategories}
            onComplete={handleUXReadinessComplete}
            onBack={handleBackToStepThree}
            initialResponses={appData.uxReadinessResponses}
            onStepSelect={handleStepNavigation}
            completedSteps={completedSteps}
          />
        );
      case 5:
        return (
          <GTMReadinessStep 
            onComplete={handleGTMReadinessComplete}
            onBack={handleBackToStepFour}
            onStepSelect={handleStepNavigation}
            completedSteps={completedSteps}
          />
        );
      case 6:
        return (
          <AssessmentResults 
            appData={appData}
            onRestart={handleRestartAssessment}
            onBack={handleBackToStepFive}
          />
        );
      default:
        return null;
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <div className="h-screen flex items-center justify-center">
      <div className="text-red-600">Error loading content: {error}</div>
    </div>;
  }

  return (
    <div className="h-screen flex bg-[#f8fafd]">
      {/* Side Navigation */}
      <SideNavigation 
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepSelect={handleStepNavigation}
        appType={appData.appType}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-[280px] flex flex-col items-center justify-center overflow-auto">
        {renderCurrentStep()}
      </div>
    </div>
  );
}