import React, { useState } from 'react';
import svgPaths from "../imports/svg-u6x7clk7p4";
import imgModel from "figma:asset/c676abb85b963d07eeadfa3bf02eeb83ab0a10a5.png";
import imgModel1 from "figma:asset/f3a686fe62afecc6187ef838ca466d547e59e761.png";
import imgModel2 from "figma:asset/d4f266f2eaaa2b58c6d41660fff6645df4552e70.png";

interface ProjectsContentProps {
  selectedProject: string | null;
  onProjectSelect: (projectId: string | null) => void;
  isPanelOpen: boolean;
}

function Thumbnail({ backgroundImage }: { backgroundImage: string }) {
  return (
    <div
      className="absolute contents translate-x-[-50%] translate-y-[-50%]"
      style={{ top: "calc(50% + 15px)", left: "calc(50% - 3.83332px)" }}
    >
      <div
        className="absolute h-[41.303px] translate-x-[-50%] translate-y-[-50%] w-[81.182px]"
        style={{ top: "calc(50% + 58.4394px)", left: "calc(50% - 3.83335px)" }}
      >
        <div className="absolute bottom-[-48.423%] left-[-24.636%] right-[-24.636%] top-[-48.423%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 122 82"
          >
            <g filter="url(#filter0_f_1_17756)">
              <path
                d={svgPaths.p312e100}
                fill="var(--fill-0, black)"
                fillOpacity="0.1"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="81.303"
                id="filter0_f_1_17756"
                width="121.182"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_1_17756"
                  stdDeviation="10"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div
        className="absolute bg-center bg-contain bg-no-repeat size-[94px] translate-x-[-50%] translate-y-[-50%]"
        style={{
          top: "calc(50% - 2.09091px)",
          left: "calc(50% - 3.83332px)",
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
    </div>
  );
}

function Top({ backgroundImage, isSelected }: { backgroundImage: string; isSelected: boolean }) {
  const bgColor = isSelected ? '#dedddd' : '#f3f3f3';
  return (
    <div className="h-[182px] overflow-clip relative shrink-0 w-full" style={{ backgroundColor: bgColor }}>
      <Thumbnail backgroundImage={backgroundImage} />
    </div>
  );
}

function Badge() {
  return (
    <div className="relative shrink-0 size-2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g>
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #0097BA)"
            r="4"
          />
        </g>
      </svg>
    </div>
  );
}

function Title({ title }: { title: string }) {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
        <Badge />
      </div>
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">{title}</p>
      </div>
    </div>
  );
}

function Description({ title }: { title: string }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start px-1 py-0 relative shrink-0">
      <Title title={title} />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.38)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Created Today</p>
      </div>
    </div>
  );
}

function Bottom({ title }: { title: string }) {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full border-t border-[#e6e6e6]">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Description title={title} />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ 
  id, 
  title, 
  backgroundImage, 
  isSelected, 
  isHovered, 
  onSelect, 
  onHover 
}: { 
  id: string;
  title: string; 
  backgroundImage: string;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: () => void;
  onHover: (hovered: boolean) => void;
}) {
  const borderClass = isSelected 
    ? 'border-2 border-[#545559]' 
    : isHovered 
      ? 'border border-[#545559]' 
      : 'border border-[#e6eaf0]';

  return (
    <div 
      className={`basis-0 grow max-w-[520px] min-h-px min-w-80 relative rounded-lg shrink-0 cursor-pointer transition-all duration-200 overflow-hidden ${borderClass}`}
      onClick={onSelect}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <Top backgroundImage={backgroundImage} isSelected={isSelected} />
      <Bottom title={title} />
    </div>
  );
}

export function ProjectsContent({ selectedProject, onProjectSelect, isPanelOpen }: ProjectsContentProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    { id: 'piston', title: 'Piston', image: imgModel },
    { id: 'gearbox', title: 'Gearbox', image: imgModel1 },
    { id: 'f1', title: 'F1', image: imgModel2 },
  ];

  const handleProjectSelect = (projectId: string) => {
    if (selectedProject === projectId) {
      onProjectSelect(null); // Deselect if already selected
    } else {
      onProjectSelect(projectId);
    }
  };

  // Calculate container width based on panel state
  const containerWidth = isPanelOpen ? 'w-[805px]' : 'calc(100vw - 144px)';

  return (
    <div 
      className={`absolute box-border content-stretch flex flex-row gap-[22px] items-start justify-start left-[122px] p-0 top-[162px] transition-all duration-300 flex-wrap`}
      style={{ width: containerWidth }}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          backgroundImage={project.image}
          isSelected={selectedProject === project.id}
          isHovered={hoveredProject === project.id}
          onSelect={() => handleProjectSelect(project.id)}
          onHover={(hovered) => setHoveredProject(hovered ? project.id : null)}
        />
      ))}
    </div>
  );
}