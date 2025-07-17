import { useState } from 'react';
import { StepOne } from '../components/StepOne';
import { StepTwo } from '../components/StepTwo';
import { DataReadinessStep } from '../components/DataReadinessStep';
import { UXReadinessStep } from '../components/UXReadinessStep';

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
    // Complete the flow - could navigate to results page or show completion
    console.log('Assessment complete:', { 
      ...appData, 
      uxReadinessResponses: responses 
    });
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

  const renderCurrentStep = () => {
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
            onComplete={handleUXReadinessComplete}
            onBack={handleBackToStepThree}
            appType={appData.appType}
            initialResponses={appData.uxReadinessResponses}
            onStepSelect={handleStepNavigation}
            completedSteps={completedSteps}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="size-full">
      {renderCurrentStep()}
    </div>
  );
}