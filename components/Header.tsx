import React from 'react';
import svgPaths from "../imports/svg-u6x7clk7p4";

interface HeaderProps {
  activeSection: string;
}

function Group() {
  return (
    <div className="absolute bottom-[16.851%] left-[7.113%] right-[7.173%] top-[16.777%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 96 31"
      >
        <g>
          <path
            d={svgPaths.p1f7a7600}
            fill="var(--fill-0, #231F20)"
          />
          <path
            d={svgPaths.p2df57600}
            fill="var(--fill-0, #231F20)"
          />
          <path
            d={svgPaths.p2874dd80}
            fill="var(--fill-0, #231F20)"
          />
          <path
            d={svgPaths.p5c51d00}
            fill="var(--fill-0, #231F20)"
          />
          <path
            d={svgPaths.p26a41e00}
            fill="var(--fill-0, #231F20)"
          />
          <path
            d={svgPaths.p2752be70}
            fill="var(--fill-0, #231F20)"
          />
          <path
            d={svgPaths.p21e29b00}
            fill="var(--fill-0, #231F20)"
          />
          <path
            d={svgPaths.p8dbfa00}
            fill="var(--fill-0, #231F20)"
          />
        </g>
      </svg>
    </div>
  );
}

function HexagonLogo() {
  return (
    <div className="h-[46px] overflow-clip relative shrink-0 w-28">
      <Group />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d={svgPaths.p89aed78}
            fill="var(--fill-0, #545559)"
          />
        </g>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d={svgPaths.p369740f0}
            fill="var(--fill-0, #121623)"
          />
        </g>
      </svg>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d={svgPaths.p21cef280}
            fill="var(--fill-0, black)"
          />
        </g>
      </svg>
    </div>
  );
}

function GridView() {
  return (
    <div className="absolute left-2 size-6 top-2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d={svgPaths.p35baa200}
            fill="var(--fill-0, white)"
          />
        </g>
      </svg>
    </div>
  );
}

function FormatListBulleted() {
  return (
    <div className="absolute left-2 size-6 top-2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d={svgPaths.p34667a00}
            fill="var(--fill-0, black)"
          />
        </g>
      </svg>
    </div>
  );
}

function Sort() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d={svgPaths.p201d1b40}
            fill="var(--fill-0, black)"
          />
        </g>
      </svg>
    </div>
  );
}

function ExpandMore() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d={svgPaths.p18b66300}
            fill="var(--fill-0, #545559)"
          />
        </g>
      </svg>
    </div>
  );
}

export function Header({ activeSection }: HeaderProps) {
  const getSectionTitle = () => {
    switch (activeSection) {
      case 'projects':
        return 'Projects';
      case 'libraries':
        return 'Libraries';
      case 'issues':
        return 'Issues';
      case 'jobs':
        return 'Jobs';
      default:
        return 'Projects';
    }
  };

  return (
    <div className="relative">
      {/* Top header with logo and search */}
      <div className="absolute box-border content-stretch flex flex-row gap-6 items-center justify-start left-0.5 p-[8px] top-0 w-full">
        <HexagonLogo />
        <div className="h-10 relative shrink-0 w-[1096px]">
          <div className="absolute bg-[#ffffff] bottom-0 box-border content-stretch flex flex-row gap-4 items-center justify-center left-0 pl-4 pr-1 py-1 right-[61.246%] rounded top-0">
            <div className="absolute border border-[#dcdddd] border-solid inset-0 pointer-events-none rounded" />
            <div className="basis-0 font-['Open_Sans:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#545559] text-[14px] text-left">
              <p className="block leading-[24px]">Search</p>
            </div>
            <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[48px] shrink-0">
                <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
                  <Search />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation and controls */}
      <div className="absolute box-border content-stretch flex flex-row items-center justify-between left-[122px] p-0 top-[85px] right-6">
        {/* Left side - breadcrumbs and create button */}
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
          {/* Breadcrumb */}
          <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0">
            <Home />
            <div className="flex flex-col font-['Open_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative self-stretch shrink-0 text-[#d1d3d4] text-[14px] text-left w-1">
              <p className="block leading-[24px]">/</p>
            </div>
            <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0">
              <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#005072] text-[14px] text-left text-nowrap">
                <p className="block leading-[24px] whitespace-pre">{getSectionTitle()}</p>
              </div>
            </div>
          </div>

          {/* Create button - only show for Projects */}
          {activeSection === 'projects' && (
            <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded shrink-0">
              <Add />
              <div className="font-['Open_Sans:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">
                <p className="block leading-[24px] whitespace-pre">Create New Project</p>
              </div>
            </div>
          )}
        </div>

        {/* Right side - view toggles and sort - only show for Projects */}
        {activeSection === 'projects' && (
          <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0">
            {/* View toggle */}
            <div className="h-10 relative shrink-0 w-[79px]">
              <div className="absolute bg-[#ffffff] bottom-0 left-[49.367%] right-0 rounded-br-[4px] rounded-tr-[4px] top-0">
                <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
                <FormatListBulleted />
              </div>
              <div className="absolute bg-[#000000] bottom-0 left-0 right-[49.367%] rounded-bl-[4px] rounded-tl-[4px] top-0">
                <GridView />
              </div>
            </div>

            {/* Sort dropdown */}
            <div className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-start px-4 py-1 relative rounded shrink-0 w-[120px]">
              <div className="absolute border border-[#dcdddd] border-solid inset-0 pointer-events-none rounded" />
              <div className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2 py-0 relative shrink-0">
                <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
                  <Sort />
                </div>
              </div>
              <div className="basis-0 box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px px-0 py-1 relative shrink-0">
                <div className="basis-0 font-['Open_Sans:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#545559] text-[14px] text-left">
                  <p className="block leading-[24px]">Sort</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
                <ExpandMore />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}