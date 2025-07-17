import svgPaths from "../imports/svg-ap37xalq9c";
import { AppType } from "../App";

interface AppTypeSelectionProps {
  onAppTypeSelect: (appType: AppType) => void;
  selectedType: AppType;
}

function Tabs() {
  return (
    <div className="relative shrink-0 size-16" data-name="tabs">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 64 64"
      >
        <g id="tabs">
          <path
            d={svgPaths.p10553b80}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function JamboardKiosk() {
  return (
    <div className="relative shrink-0 size-16" data-name="jamboard_kiosk">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 64 64"
      >
        <g id="jamboard_kiosk">
          <path
            d={svgPaths.p30775180}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TvRemote() {
  return (
    <div className="relative shrink-0 size-16" data-name="tv_remote">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 64 64"
      >
        <g id="tv_remote">
          <path
            d={svgPaths.pc3d1f00}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function SelectAppType({ type, icon, label, isSelected, onClick }: {
  type: AppType;
  icon: React.ReactNode;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`box-border content-stretch flex flex-col gap-4 items-center justify-start min-w-[220px] p-[16px] relative rounded-lg shrink-0 w-[220px] transition-all duration-200 hover:scale-105 ${
        isSelected 
          ? 'bg-[#e3f2fd] border-2 border-[#2196f3]' 
          : 'bg-[#edf0f3] border border-[#b4bac4]'
      }`}
      data-name="Select App type"
    >
      {icon}
      <div
        className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#646e78] text-[23px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[34px]">{label}</p>
      </div>
    </button>
  );
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
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-center text-nowrap">
        <ol className="list-decimal" start="1">
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">Choose app type</span>
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
      className="absolute box-border content-stretch flex flex-col items-center justify-center pb-px pt-0 px-0 right-[1160px] top-[72px] w-[264px]"
      data-name="App Navigation"
    >
      <ButtonWrapper />
    </div>
  );
}

export function AppTypeSelection({ onAppTypeSelect, selectedType }: AppTypeSelectionProps) {
  return (
    <div
      className="bg-[#f8fafd] relative size-full"
      data-name="Nexus Readiness Example"
    >
      <div className="absolute font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] left-[30px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-6">
        <p className="block leading-[27px] whitespace-pre">Nexus Readiness</p>
      </div>
      <div className="absolute font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] left-[1347px] not-italic text-[#000000] text-[0px] text-nowrap text-right top-[831px] translate-x-[-100%]">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px] text-[14px] whitespace-pre">
          Modes
        </p>
      </div>
      
      <div className="absolute box-border content-stretch flex flex-row gap-6 items-center justify-start left-[366px] top-[428px]">
        <SelectAppType
          type="web"
          icon={<Tabs />}
          label="A web app"
          isSelected={selectedType === 'web'}
          onClick={() => onAppTypeSelect('web')}
        />
        <SelectAppType
          type="desktop"
          icon={<JamboardKiosk />}
          label="A desktop app"
          isSelected={selectedType === 'desktop'}
          onClick={() => onAppTypeSelect('desktop')}
        />
        <SelectAppType
          type="device"
          icon={<TvRemote />}
          label="Device or mixed"
          isSelected={selectedType === 'device'}
          onClick={() => onAppTypeSelect('device')}
        />
      </div>
      
      <div className="absolute box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center left-0 p-[8px] top-[325px] w-[1440px]">
        <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#474f5f] text-[18px] text-left text-nowrap">
          <p className="block leading-[27px] whitespace-pre">
            Please choose which type of product you're building.
          </p>
        </div>
      </div>
      
      <AppNavigation />
    </div>
  );
}