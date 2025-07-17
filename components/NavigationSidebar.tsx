import React, { useState } from 'react';
import svgPaths from "../imports/svg-ljptb3jhll";
import imgImagePlaceholder from "figma:asset/3e47576a9d52720ba03b5132f9a322a51dbed37b.png";

interface NavigationSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

function NexusLogo() {
  return (
    <div
      className="absolute left-1/2 size-5 translate-x-[-50%] translate-y-[-50%]"
      data-name="Nexus Logo"
      style={{ top: "calc(50% - 0.25px)" }}
    >
      <div className="absolute bottom-0 left-[-0.399%] right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 21 20"
        >
          <g id="Nexus Logo">
            <g id="Vector">
              <path d={svgPaths.p1159c980} fill="var(--fill-0, black)" />
              <path d={svgPaths.p38735500} fill="var(--fill-0, black)" />
              <path d={svgPaths.p292ee200} fill="var(--fill-0, black)" />
              <path d={svgPaths.p5788f0} fill="#A5D867" />
              <path d={svgPaths.p321efec0} fill="var(--fill-0, black)" />
              <path d={svgPaths.p2aa8ea0} fill="var(--fill-0, black)" />
              <path d={svgPaths.p14126000} fill="var(--fill-0, black)" />
              <path d={svgPaths.pcb09600} fill="var(--fill-0, black)" />
              <path d={svgPaths.p174ab980} fill="var(--fill-0, black)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowTopLeft() {
  return (
    <div className="relative shrink-0 size-6" data-name="arrow_top_left">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="arrow_top_left">
          <path
            d={svgPaths.p2fe00d00}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function HomeStorage({ isActive }: { isActive?: boolean }) {
  return (
    <div className="relative shrink-0 size-6" data-name="home_storage">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="home_storage">
          <path
            d={svgPaths.p10309b00}
            fill={isActive ? "var(--fill-0, #121623)" : "var(--fill-0, #646E78)"}
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function MenuBook() {
  return (
    <div className="relative shrink-0 size-6" data-name="menu_book">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="menu_book">
          <path
            d={svgPaths.p248d3880}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function AssignmentTurnedIn() {
  return (
    <div className="relative shrink-0 size-6" data-name="assignment_turned_in">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="assignment_turned_in">
          <path
            d={svgPaths.p5f4bd00}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function RequestQuote() {
  return (
    <div className="relative shrink-0 size-6" data-name="request_quote">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="request_quote">
          <path
            d={svgPaths.p1f0d2880}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-6" data-name="add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="add">
          <path
            d={svgPaths.p183fcc00}
            fill="var(--fill-0, #B4BAC4)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Notifications() {
  return (
    <div className="relative shrink-0 size-6" data-name="notifications">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="notifications">
          <path
            d={svgPaths.p8856600}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute right-3.5 size-2 top-2" data-name="Badge">
      <div className="absolute inset-[-12.5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <g id="Badge">
            <circle
              cx="5"
              cy="5"
              fill="var(--fill-0, #FD453F)"
              id="dot"
              r="4.5"
              stroke="var(--stroke-0, white)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Tooltip({ children, content }: { children: React.ReactNode; content: string }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 px-2 py-1 bg-[#121212] text-[#ffffff] text-[12px] rounded whitespace-nowrap font-['Hexagon_Akkurat:Regular',_sans-serif]">
          {content}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#121212]"></div>
        </div>
      )}
    </div>
  );
}

export function NavigationSidebar({ activeSection, onSectionChange }: NavigationSidebarProps) {
  const navItems = [
    { id: 'return', icon: ArrowTopLeft, label: 'Return', tooltip: 'Return to Portal' },
    { id: 'projects', icon: HomeStorage, label: 'Projects' },
    { id: 'libraries', icon: MenuBook, label: 'Libraries' },
    { id: 'issues', icon: AssignmentTurnedIn, label: 'Issues' },
    { id: 'jobs', icon: RequestQuote, label: 'Jobs' },
  ];

  return (
    <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow items-center justify-between max-w-20 min-h-px min-w-[72px] px-3 py-6 relative shrink-0 w-20">
      {/* Top content */}
      <div className="box-border content-stretch flex flex-col gap-0.5 items-center justify-start p-0 relative shrink-0">
        {/* Branding */}
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0 size-14">
            <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px p-0 relative rounded-lg shrink-0 w-full">
              <div className="relative rounded-lg shrink-0 w-full">
                <div className="flex flex-col items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative w-full">
                    <div className="h-[42.5px] relative shrink-0 w-10">
                      <NexusLogo />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu items */}
        <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            const isProjectsActive = activeSection === 'projects' && item.id === 'projects';
            
            return (
              <div
                key={item.id}
                className="box-border content-stretch flex flex-col h-14 items-center justify-center p-0 relative shrink-0 cursor-pointer"
                onClick={() => item.id !== 'return' && onSectionChange(item.id)}
              >
                <div className={`basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px p-0 relative rounded-lg shrink-0 ${isProjectsActive ? 'bg-[#e6eaf0]' : ''}`}>
                  <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0">
                    {item.tooltip ? (
                      <Tooltip content={item.tooltip}>
                        <IconComponent isActive={isProjectsActive} />
                      </Tooltip>
                    ) : (
                      <IconComponent isActive={isProjectsActive} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Add page button */}
          <div className="box-border content-stretch flex flex-col h-14 items-center justify-center p-0 relative shrink-0 cursor-pointer">
            <div className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px p-0 relative rounded-lg shrink-0">
              <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0">
                <Tooltip content="Add page...">
                  <Add />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom content */}
      <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0">
        {/* Notifications */}
        <div className="box-border content-stretch flex flex-col h-9 items-center justify-start p-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-lg shrink-0">
            <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0">
              <Notifications />
              <Badge />
            </div>
          </div>
        </div>

        {/* Avatar with image */}
        <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-lg shrink-0">
            <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0">
              <div className="box-border content-stretch flex flex-row items-center justify-between max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-[999px] shrink-0 size-8">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative rounded-[999px] shrink-0 size-8">
                  <div className="relative shrink-0 size-8">
                    <img
                      className="block max-w-none size-full rounded-full"
                      height="32"
                      loading="lazy"
                      src={imgImagePlaceholder}
                      width="32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User initials avatar */}
        <div className="bg-[#858c99] box-border content-stretch flex flex-row items-center justify-between max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-[999px] shrink-0 size-8">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative rounded-[999px] shrink-0 size-8">
            <div className="basis-0 flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-center">
              <p className="block leading-[19px]">JS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 right-0 top-0 w-px">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 1 900"
        >
          <path
            clipRule="evenodd"
            d="M1 900H0V0H1V900Z"
            fill="var(--fill-0, #E6EAF0)"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}