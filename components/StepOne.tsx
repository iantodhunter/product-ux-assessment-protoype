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
          : 'bg-[#e8f5e8] border border-[#4caf50]'
      }`}
      data-name="Select App type"
      onClick={onClick}
    >
      <div className={`absolute border border-solid inset-0 pointer-events-none rounded-lg ${
        isSelected ? 'border-[#2196f3]' : 'border-[#4caf50]'
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
  selectedAppType
}: StepOneProps) {
  const handleAppTypeSelect = (appType: string) => {
    onComplete(appType);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
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
  );
}