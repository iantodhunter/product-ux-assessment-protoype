import { useState } from 'react';
import { VideoPreview } from './VideoPreview';
import { RadioButtonIcon } from './icons/AppTypeIcons';

interface DataReadinessStepProps {
  onComplete: (currentLevel: string, goalLevel: string) => void;
  onBack: () => void;
  initialCurrentLevel: string | null;
  initialGoalLevel: string | null;
  onStepSelect?: (step: number) => void;
  completedSteps?: number[];
}

function LevelCard({ 
  level, 
  subtitle, 
  description, 
  examples, 
  isSelected, 
  isCurrentLevel,
  isDisabled,
  onClick,
  videoId 
}: {
  level: string;
  subtitle: string;
  description: string;
  examples: string[];
  isSelected: boolean;
  isCurrentLevel?: boolean;
  isDisabled: boolean;
  onClick: () => void;
  videoId: string;
}) {
  const getBackgroundColor = () => {
    if (isDisabled) return 'bg-[#f5f5f5] border border-[#e0e0e0] opacity-60';
    if (isSelected) return 'bg-[#e3f2fd] border-2 border-[#2196f3]';
    if (isCurrentLevel) return 'bg-[#e8f5e8] border-2 border-[#4caf50]';
    return 'bg-[#f8fafd] border border-[#e6eaf0]';
  };

  const getBorderColor = () => {
    if (isDisabled) return 'border-[#e0e0e0]';
    if (isSelected) return 'border-[#2196f3]';
    if (isCurrentLevel) return 'border-[#4caf50]';
    return 'border-[#e6eaf0]';
  };

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`h-[576px] relative rounded-2xl shrink-0 w-[302px] cursor-pointer transition-all duration-200 hover:scale-[1.02] ${getBackgroundColor()}`}
      data-name="Level Card"
    >
      <div className="box-border content-stretch flex flex-col h-[576px] items-center justify-center overflow-clip p-0 relative w-[302px]">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center pb-6 pt-0 px-0 relative rounded-2xl shrink-0 w-full">
          {/* Header */}
          <div className="relative shrink-0 w-full">
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start pb-0 pl-6 pr-4 pt-6 relative w-full">
                <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-[8px] relative shrink-0">
                    {isCurrentLevel ? (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-[12px] text-white">
                          check
                        </span>
                      </div>
                    ) : (
                      <div className={isSelected ? "text-blue-500" : "text-gray-500"}>
                        <RadioButtonIcon isSelected={isSelected} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col font-hexagon items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#121623] text-left text-nowrap w-full">
                    <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[32px]">
                      <p className="[text-overflow:inherit] block leading-[40px] overflow-inherit text-nowrap whitespace-pre flex items-center gap-2">
                        {level}
                        {isCurrentLevel && (
                          <span className="text-[14px] text-green-600 font-medium">(Current)</span>
                        )}
                      </p>
                    </div>
                    <div
                      className="flex flex-col justify-center min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[18px]"
                      style={{ width: "min-content" }}
                    >
                      <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[27px] overflow-inherit">
                        {subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col font-hexagon items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-left w-full">
                    <div className="flex flex-col justify-center relative shrink-0 text-[#474f5f] w-full">
                      <p className="block leading-[24px]">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0 text-[#474f5f] w-full">
                      <p className="block leading-[24px] mb-0">Examples:</p>
                      <ul className="css-ed5n1g list-disc">
                        {examples.map((example, index) => (
                          <li key={index} className="mb-0 ms-6">
                            <span className="leading-[24px] text-[#474f5f]">
                              {example}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Preview */}
          <VideoPreview
            videoId={videoId}
            title={`${level} Data Readiness Example`}
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
          />
        </div>
      </div>
      <div className={`absolute border border-solid inset-0 pointer-events-none rounded-2xl ${getBorderColor()}`} />
    </button>
  );
}

function StepperCard({ 
  type, 
  level, 
  subtitle, 
  isCompleted,
  isActive,
  onClick 
}: { 
  type: 'current' | 'goal'; 
  level?: string; 
  subtitle?: string; 
  isCompleted: boolean;
  isActive: boolean;
  onClick?: () => void;
}) {
  const getCardStyle = () => {
    if (isCompleted) {
      return type === 'current' 
        ? 'bg-[#e8f5e8] border-2 border-[#4caf50]' 
        : 'bg-[#e3f2fd] border-2 border-[#2196f3]';
    }
    if (isActive) {
      return 'bg-white border-2 border-[#2196f3] shadow-lg';
    }
    return 'bg-[#f5f5f5] border-2 border-[#e0e0e0]';
  };

  const getTextColor = () => {
    if (isCompleted) {
      return type === 'current' ? 'text-[#2e7d32]' : 'text-[#1976d2]';
    }
    if (isActive) {
      return 'text-[#1976d2]';
    }
    return 'text-[#9e9e9e]';
  };

  const getIconColor = () => {
    if (isCompleted) {
      return type === 'current' ? 'text-green-500' : 'text-blue-500';
    }
    return 'text-[#9e9e9e]';
  };

  const label = type === 'current' ? 'Current Level' : 'Goal Level';

  const CardComponent = onClick ? 'button' : 'div';

  return (
    <CardComponent
      onClick={onClick}
      className={`text-center transition-all duration-300 ${onClick ? 'cursor-pointer hover:scale-105' : ''}`}
    >
      <div className="flex items-center gap-2 justify-center mb-3">
        <div className={`font-hexagon text-[18px] font-medium transition-colors ${isActive ? 'text-[#1976d2]' : 'text-[#646e78]'}`}>
          {label}
        </div>
        {isCompleted && (
          <span className={`material-symbols-outlined text-[20px] ${getIconColor()}`}>
            check
          </span>
        )}
        {isActive && !isCompleted && (
          <div className="w-5 h-5 border-2 border-[#2196f3] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-[#2196f3] rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
      <div className={`${getCardStyle()} rounded-2xl p-6 min-w-[220px] shadow-sm transition-all duration-300`}>
        {level ? (
          <>
            <div className={`font-hexagon text-[28px] font-medium mb-1 ${getTextColor()}`}>
              {level}
            </div>
            <div className="font-hexagon text-[16px] text-[#646e78]">
              {subtitle}
            </div>
          </>
        ) : (
          <div className="py-6">
            <div className="font-hexagon text-[18px] text-[#9e9e9e]">
              {isActive ? 'Select your level' : 'Waiting...'}
            </div>
          </div>
        )}
      </div>
    </CardComponent>
  );
}

export function DataReadinessStep({ 
  onComplete, 
  onBack, 
  initialCurrentLevel, 
  initialGoalLevel
}: DataReadinessStepProps) {
  const [currentLevel, setCurrentLevel] = useState<string | null>(initialCurrentLevel);
  const [goalLevel, setGoalLevel] = useState<string | null>(initialGoalLevel);

  const levels = [
    {
      id: 'level0',
      level: 'Level 0',
      subtitle: 'No integration',
      description: 'Basic standalone application with no Nexus integration',
      examples: [
        'Traditional desktop software that saves to shared drive / Nexus Drive',
        'Standalone non-Nexus web apps'
      ],
      videoId: 'level0-demo'
    },
    {
      id: 'level1',
      level: 'Level 1',
      subtitle: 'Basic integration',
      description: 'Application with basic Nexus data schema integration',
      examples: [
        'Apps using Nexus file formats',
        'Basic API connectivity to Nexus services'
      ],
      videoId: 'level1-demo'
    },
    {
      id: 'level2',
      level: 'Level 2',
      subtitle: 'Advanced integration',
      description: 'Application with advanced Nexus integration and real-time sync',
      examples: [
        'Real-time data synchronization',
        'Advanced Nexus workflow integration'
      ],
      videoId: 'level2-demo'
    },
    {
      id: 'level3',
      level: 'Level 3',
      subtitle: 'Full integration',
      description: 'Complete Nexus ecosystem integration with all features',
      examples: [
        'Full Nexus platform integration',
        'Native Nexus application development'
      ],
      videoId: 'level3-demo'
    }
  ];

  const handleCurrentLevelSelect = (level: string) => {
    setCurrentLevel(level);
    // Reset goal level when current level changes
    setGoalLevel(null);
  };

  const handleGoalLevelSelect = (level: string) => {
    setGoalLevel(level);
  };

  const handleCurrentLevelEdit = () => {
    setGoalLevel(null);
  };

  const getHeadingText = () => {
    if (!currentLevel) {
      return "How are you using the Nexus Data Schema today?";
    } else if (!goalLevel) {
      return "What level is the goal for this product?";
    } else {
      return "Data Readiness Assessment Complete";
    }
  };

  const getCurrentLevelData = () => {
    return levels.find(level => level.id === currentLevel);
  };

  const getGoalLevelData = () => {
    return levels.find(level => level.id === goalLevel);
  };

  const handleComplete = () => {
    if (currentLevel && goalLevel) {
      onComplete(currentLevel, goalLevel);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-16">
      
      {/* Stepper Progress - Always visible */}
      <div className="flex items-center gap-8 mb-12 fade-in-up">
        {/* Current Level Card */}
        <StepperCard
          type="current"
          level={getCurrentLevelData()?.level}
          subtitle={getCurrentLevelData()?.subtitle}
          isCompleted={!!currentLevel}
          isActive={!currentLevel}
          onClick={currentLevel ? handleCurrentLevelEdit : undefined}
        />
        
        {/* Arrow */}
        <span className="material-symbols-outlined text-[40px] text-[#646e78] transition-colors duration-300">
          arrow_forward
        </span>
        
        {/* Goal Level Card */}
        <StepperCard
          type="goal"
          level={getGoalLevelData()?.level}
          subtitle={getGoalLevelData()?.subtitle}
          isCompleted={!!goalLevel}
          isActive={!!currentLevel && !goalLevel}
        />
      </div>
      
      {/* Dynamic Instruction Text */}
      <div className="h-12 mb-8">
        <div className="flex flex-row items-center justify-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center p-[8px] relative w-full">
            <div className="font-hexagon leading-[0] not-italic text-[#474f5f] text-[18px] text-center">
              <p className="block leading-[27px] whitespace-pre">{getHeadingText()}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Level Cards - Hide when both selections are complete */}
      {(!currentLevel || !goalLevel) && (
        <div className="box-border content-stretch flex flex-row gap-6 items-start justify-center p-0 max-w-7xl">
          {levels.map((level) => (
            <LevelCard
              key={level.id}
              level={level.level}
              subtitle={level.subtitle}
              description={level.description}
              examples={level.examples}
              isSelected={
                !currentLevel 
                  ? false 
                  : goalLevel === level.id
              }
              isCurrentLevel={currentLevel === level.id}
              isDisabled={false}
              onClick={() => {
                if (!currentLevel) {
                  handleCurrentLevelSelect(level.id);
                } else {
                  handleGoalLevelSelect(level.id);
                }
              }}
              videoId={level.videoId}
            />
          ))}
        </div>
      )}
      
      {/* Complete Button */}
      {currentLevel && goalLevel && (
        <div className="flex justify-center mt-8 fade-in-up">
          <button
            onClick={handleComplete}
            className="bg-[#00718c] text-white px-12 py-4 rounded-xl font-hexagon text-[18px] font-medium hover:bg-[#005a6b] transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Continue to UX Assessment
          </button>
        </div>
      )}
    </div>
  );
}