import { useState } from 'react';
import svgPaths from "../imports/svg-l79e3iuktv";
import { VideoPreview } from './VideoPreview';

interface StepFourProps {
  onComplete: (level: string) => void;
  onBack: () => void;
  selectedLevel: string | null;
  currentLevel: string | null;
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-6" data-name="keyboard_arrow_down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="keyboard_arrow_down">
          <path
            d={svgPaths.p3e19700}
            fill="var(--fill-0, #121623)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-center px-4 py-2 relative rounded-bl-[12px] rounded-tl-[12px] shrink-0"
      data-name="state-layer"
    >
      <div className="font-hexagon leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left w-[61px]">
        <ol className="list-decimal" start="4">
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">Goal Level</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-center px-4 py-2 relative rounded-br-[12px] rounded-tr-[12px] shrink-0"
      data-name="state-layer"
    >
      <KeyboardArrowDown />
    </div>
  );
}

function SegmentedButtonParts() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-bl-[12px] rounded-tl-[12px] shrink-0 w-full"
      data-name=".Segmented button parts"
    >
      <div className="absolute border border-[#b4bac4] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-tl-[12px]" />
      <div className="flex flex-row items-center self-stretch">
        <StateLayer />
      </div>
    </div>
  );
}

function SegmentedButtonParts1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative rounded-br-[12px] rounded-tr-[12px] shrink-0"
      data-name=".Segmented button parts"
    >
      <div className="absolute border border-[#b4bac4] border-solid inset-0 pointer-events-none rounded-br-[12px] rounded-tr-[12px]" />
      <StateLayer1 />
    </div>
  );
}

function TextPart() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[181px]"
      data-name="Text part"
    >
      <SegmentedButtonParts />
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Button"
    >
      <TextPart />
      <SegmentedButtonParts1 />
    </div>
  );
}

function ButtonWrapper() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2 items-start justify-start mb-[-1px] p-0 relative shrink-0 w-[236px]"
      data-name="Button Wrapper"
    >
      <Button />
    </div>
  );
}

function AppNavigation() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-center pb-px pt-0 px-0 left-[38px] top-[78px] w-[264px]"
      data-name="App Navigation"
    >
      <ButtonWrapper />
    </div>
  );
}

function RadioButtonUnchecked({ isSelected }: { isSelected: boolean }) {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="radio_button_unchecked"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="radio_button_unchecked">
          <path
            d={svgPaths.pe775900}
            fill={isSelected ? "var(--fill-0, #2196F3)" : "var(--fill-0, #00718C)"}
            id="Vector"
          />
        </g>
      </svg>
      {isSelected && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-[#2196F3] rounded-full"></div>
        </div>
      )}
    </div>
  );
}

function LevelCard({ 
  level, 
  subtitle, 
  description, 
  examples, 
  isSelected, 
  isCurrentLevel,
  onClick,
  videoId 
}: {
  level: string;
  subtitle: string;
  description: string;
  examples: string[];
  isSelected: boolean;
  isCurrentLevel: boolean;
  onClick: () => void;
  videoId: string;
}) {
  const getBackgroundColor = () => {
    if (isSelected) return 'bg-[#e3f2fd] border-2 border-[#2196f3]';
    if (isCurrentLevel) return 'bg-[#e5e5e5] border border-[#b4bac4]';
    return 'bg-[#f8fafd] border border-[#e6eaf0]';
  };

  const getBorderColor = () => {
    if (isSelected) return 'border-[#2196f3]';
    if (isCurrentLevel) return 'border-[#b4bac4]';
    return 'border-[#e6eaf0]';
  };

  return (
    <button
      onClick={onClick}
      className={`h-[576px] relative rounded-2xl shrink-0 w-[302px] cursor-pointer ${getBackgroundColor()}`}
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
                    <RadioButtonUnchecked isSelected={isSelected} />
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-col font-hexagon items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#121623] text-left text-nowrap w-full">
                    <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[32px]">
                      <p className="[text-overflow:inherit] block leading-[40px] overflow-inherit text-nowrap whitespace-pre">
                        {level}
                        {isCurrentLevel && (
                          <span className="text-[14px] text-[#646e78] ml-2">(Current)</span>
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
                    <div className="flex flex-col justify-center relative shrink-0 text-[#646e78] w-full">
                      <p className="block leading-[24px]">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center relative shrink-0 text-[#000000] w-full">
                      <p className="block leading-[24px] mb-0">Examples:</p>
                      <ul className="css-ed5n1g list-disc">
                        {examples.map((example, index) => (
                          <li key={index} className="mb-0 ms-6">
                            <span className="leading-[24px]">
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

export function StepFour({ onComplete, onBack, selectedLevel, currentLevel }: StepFourProps) {
  const [goalSelection, setGoalSelection] = useState<string | null>(selectedLevel);

  const handleLevelSelect = (level: string) => {
    setGoalSelection(level);
    onComplete(level);
  };

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

  const getCurrentLevelDisplay = () => {
    const currentLevelData = levels.find(level => level.id === currentLevel);
    if (currentLevelData) {
      return currentLevelData.level;
    }
    return 'Unknown';
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
      <AppNavigation />
      
      {/* Centered Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-32 pb-16">
        {/* Instruction Text */}
        <div className="h-12 mb-8">
          <div className="flex flex-row items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center p-[8px] relative w-full">
              <div className="font-hexagon leading-[0] not-italic text-[#474f5f] text-[18px] text-center">
                <p className="block leading-[27px]">
                  You're at <strong>{getCurrentLevelDisplay()}</strong> today. What level is the goal for this product?
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Level Cards */}
        <div className="box-border content-stretch flex flex-row gap-6 items-start justify-center p-0 max-w-7xl">
          {levels.map((level) => (
            <LevelCard
              key={level.id}
              level={level.level}
              subtitle={level.subtitle}
              description={level.description}
              examples={level.examples}
              isSelected={goalSelection === level.id}
              isCurrentLevel={currentLevel === level.id}
              onClick={() => handleLevelSelect(level.id)}
              videoId={level.videoId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}