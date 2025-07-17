import { StepNavigationDropdown } from './StepNavigationDropdown';
import { StepDescription } from './StepDescription';
import { WebAppIcon, DesktopAppIcon, DeviceIcon } from './icons/AppTypeIcons';

interface StepOneProps {
  onComplete: (appType: string) => void;
  selectedAppType: string | null;
  onStepSelect?: (step: number) => void;
  completedSteps?: number[];
}

function SelectAppType({ 
  icon, 
  label, 
  isSelected, 
  onClick 
}: {
  icon: React.ReactNode;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`box-border content-stretch flex flex-col gap-4 items-center justify-start min-w-[220px] p-[16px] relative rounded-lg shrink-0 w-[220px] transition-all duration-200 hover:scale-105 ${
        isSelected 
          ? 'bg-[#e3f2fd] border-2 border-[#2196f3]' 
          : 'bg-[#edf0f3] border border-[#b4bac4]'
      }`}
      data-name="Select App type"
      onClick={onClick}
    >
      <div className={`absolute border border-solid inset-0 pointer-events-none rounded-lg ${
        isSelected ? 'border-[#2196f3]' : 'border-[#b4bac4]'
      }`} />
      {icon}
      <div
        className="font-hexagon leading-[0] min-w-full not-italic relative shrink-0 text-[#646e78] text-[23px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[34px]">{label}</p>
      </div>
    </button>
  );
}



export function StepOne({ 
  onComplete, 
  selectedAppType, 
  onStepSelect, 
  completedSteps = [] 
}: StepOneProps) {
  const handleAppTypeSelect = (appType: string) => {
    onComplete(appType);
  };

  return (
    <div
      className="bg-[#f8fafd] relative size-full"
      data-name="Nexus Readiness Example"
    >
      {/* Header */}
      <div className="absolute font-hexagon leading-[0] left-[30px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-6">
        <p className="block leading-[27px] whitespace-pre">Nexus Readiness</p>
      </div>
      
      {/* Step Navigation */}
      <div className="absolute left-[30px] top-[70px]">
        <StepNavigationDropdown 
          currentStep={1}
          onStepSelect={onStepSelect}
          completedSteps={completedSteps}
        />
      </div>
      
      {/* Step Description */}
      <StepDescription>
        Please choose which type of product you're building.
      </StepDescription>
      
      {/* Centered Main Content */}
      <div className="flex flex-col items-center justify-center h-full">
        
        {/* App Type Selection Cards */}
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-center">
          <SelectAppType
            icon={<WebAppIcon />}
            label="A web app"
            isSelected={selectedAppType === 'web'}
            onClick={() => handleAppTypeSelect('web')}
          />
          <SelectAppType
            icon={<DesktopAppIcon />}
            label="A desktop app"
            isSelected={selectedAppType === 'desktop'}
            onClick={() => handleAppTypeSelect('desktop')}
          />
          <SelectAppType
            icon={<DeviceIcon />}
            label="Device or mixed"
            isSelected={selectedAppType === 'device'}
            onClick={() => handleAppTypeSelect('device')}
          />
        </div>
      </div>
    </div>
  );
}