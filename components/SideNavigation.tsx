import { StepNavigationDropdown } from './StepNavigationDropdown';
import { StepDescription } from './StepDescription';
import { SectionStepper } from './SectionStepper';

interface SideNavigationProps {
  currentStep: number;
  completedSteps: number[];
  onStepSelect?: (step: number) => void;
  appType: string | null;
}

export function SideNavigation({
  currentStep,
  completedSteps,
  onStepSelect,
  appType,
}: SideNavigationProps) {
  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Please choose which type of product you're building.";
      case 2:
        return "Please provide some basic information about your product.";
      case 3:
        return "Assess your current data integration level and set your goal for this product.";
      case 4:
        const appTypeName = appType === 'web' ? 'Web App' : 
                           appType === 'desktop' ? 'Desktop App' : 
                           appType === 'device' ? 'Device or Mixed' : 'Application';
        return (
          <>
            <span>{`Looks like you're building a `}</span>
            <span className="font-medium">{appTypeName}</span>
            <span>{`. Let's review what UX you've got in place.`}</span>
          </>
        );
      default:
        return "Complete your Nexus readiness assessment.";
    }
  };

  return (
    <div className="fixed left-0 top-0 h-full w-[280px] bg-white border-r border-[#b4bac4] flex flex-col">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="font-hexagon text-[18px] text-[#000000] font-medium">
          Nexus Readiness
        </div>
      </div>
      
      {/* Step Navigation */}
      <div className="px-6 pb-4">
        <StepNavigationDropdown 
          currentStep={currentStep}
          onStepSelect={onStepSelect}
          completedSteps={completedSteps}
        />
      </div>
      
      {/* Step Description */}
      <div className="px-6 pb-4">
        <StepDescription>
          {getStepDescription()}
        </StepDescription>
      </div>
      
      {/* Section Stepper - Only for UX Readiness */}
      {currentStep === 4 && (
        <div className="px-6">
          <SectionStepper 
            appType={appType}
            currentSection="general"
            completedSections={[]}
          />
        </div>
      )}
    </div>
  );
}