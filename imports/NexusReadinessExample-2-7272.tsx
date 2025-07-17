import svgPaths from "./svg-l79e3iuktv";

function StateLayer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-center px-4 py-2 relative rounded-bl-[12px] rounded-tl-[12px] shrink-0"
      data-name="state-layer"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left w-[61px]">
        <ol className="list-decimal" start="3">
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">Data Readiness</span>
          </li>
        </ol>
      </div>
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

function Frame1010106753() {
  return (
    <div className="h-12 relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center p-[8px] relative w-full">
          <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#474f5f] text-[18px] text-left text-nowrap">
            <p className="block leading-[27px] whitespace-pre">{`How are you using the Nexus Data Schema today? `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadioButtonUnchecked() {
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
            fill="var(--fill-0, #00718C)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StateLayer5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-[8px] relative shrink-0"
      data-name="state-layer"
    >
      <RadioButtonUnchecked />
    </div>
  );
}

function RadioButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-0 relative shrink-0"
      data-name="Radio button"
    >
      <StateLayer5 />
    </div>
  );
}

function Frame1010106761() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#121623] text-left text-nowrap w-full">
      <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[32px]">
        <p className="[text-overflow:inherit] block leading-[40px] overflow-inherit text-nowrap whitespace-pre">
          Level 0
        </p>
      </div>
      <div
        className="flex flex-col justify-center min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[18px]"
        style={{ width: "min-content" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[27px] overflow-inherit">
          No integration
        </p>
      </div>
    </div>
  );
}

function Frame1010106760() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-left w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[#646e78] w-full">
        <p className="block leading-[24px]">
          Basic standalone application with no Nexus integration
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#000000] w-full">
        <p className="block leading-[24px] mb-0">Examples:</p>
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">
              Traditional desktop software that saves to shared drive / Nexus
              Drive
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">
              Standalone non-Nexus web apps
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text content"
    >
      <Frame1010106761 />
      <Frame1010106760 />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start pb-0 pl-6 pr-4 pt-6 relative w-full">
          <RadioButton />
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function PlayArrow() {
  return (
    <div
      className="[grid-area:1_/_1] ml-[114.363px] mt-[60.621px] relative size-[41.274px]"
      data-name="play_arrow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 42 42"
      >
        <g id="play_arrow">
          <path
            d={svgPaths.p29294a00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#e6eaf0] h-[162.516px] ml-0 mt-0 rounded-xl w-[270px]" />
      <PlayArrow />
    </div>
  );
}

function StateLayer6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-center pb-6 pt-0 px-0 relative rounded-2xl shrink-0 w-full"
      data-name="state-layer"
    >
      <Header />
      <Group3 />
    </div>
  );
}

function LevelCard() {
  return (
    <div
      className="bg-[#f8fafd] h-[576px] relative rounded-2xl shrink-0 w-[302px]"
      data-name="Level Card"
    >
      <div className="box-border content-stretch flex flex-col h-[576px] items-center justify-center overflow-clip p-0 relative w-[302px]">
        <StateLayer6 />
      </div>
      <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

function RadioButtonUnchecked1() {
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
            fill="var(--fill-0, #00718C)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StateLayer10() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-[8px] relative shrink-0"
      data-name="state-layer"
    >
      <RadioButtonUnchecked1 />
    </div>
  );
}

function RadioButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-0 relative shrink-0"
      data-name="Radio button"
    >
      <StateLayer10 />
    </div>
  );
}

function Frame1010106763() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#121623] text-left text-nowrap w-full">
      <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[32px]">
        <p className="[text-overflow:inherit] block leading-[40px] overflow-inherit text-nowrap whitespace-pre">
          Level 1
        </p>
      </div>
      <div
        className="flex flex-col justify-center min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[18px]"
        style={{ width: "min-content" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[27px] overflow-inherit">
          No integration
        </p>
      </div>
    </div>
  );
}

function Frame1010106764() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-left w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[#646e78] w-full">
        <p className="block leading-[24px]">
          Basic standalone application with no Nexus integration
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#000000] w-full">
        <p className="block leading-[24px] mb-0">Examples:</p>
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">
              Traditional desktop software that saves to shared drive / Nexus
              Drive
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">
              Standalone non-Nexus web apps
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function TextContent1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text content"
    >
      <Frame1010106763 />
      <Frame1010106764 />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start pb-0 pl-6 pr-4 pt-6 relative w-full">
          <RadioButton1 />
          <TextContent1 />
        </div>
      </div>
    </div>
  );
}

function PlayArrow1() {
  return (
    <div
      className="[grid-area:1_/_1] ml-[114.363px] mt-[60.621px] relative size-[41.274px]"
      data-name="play_arrow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 42 42"
      >
        <g id="play_arrow">
          <path
            d={svgPaths.p29294a00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#e6eaf0] h-[162.516px] ml-0 mt-0 rounded-xl w-[270px]" />
      <PlayArrow1 />
    </div>
  );
}

function StateLayer11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-center pb-6 pt-0 px-0 relative rounded-2xl shrink-0 w-full"
      data-name="state-layer"
    >
      <Header1 />
      <Group4 />
    </div>
  );
}

function LevelCard1() {
  return (
    <div
      className="bg-[#f8fafd] h-[576px] relative rounded-2xl shrink-0 w-[302px]"
      data-name="Level Card"
    >
      <div className="box-border content-stretch flex flex-col h-[576px] items-center justify-center overflow-clip p-0 relative w-[302px]">
        <StateLayer11 />
      </div>
      <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

function RadioButtonUnchecked2() {
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
            fill="var(--fill-0, #00718C)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StateLayer15() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-[8px] relative shrink-0"
      data-name="state-layer"
    >
      <RadioButtonUnchecked2 />
    </div>
  );
}

function RadioButton2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-0 relative shrink-0"
      data-name="Radio button"
    >
      <StateLayer15 />
    </div>
  );
}

function Frame1010106765() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#121623] text-left text-nowrap w-full">
      <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[32px]">
        <p className="[text-overflow:inherit] block leading-[40px] overflow-inherit text-nowrap whitespace-pre">
          Level 2
        </p>
      </div>
      <div
        className="flex flex-col justify-center min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[18px]"
        style={{ width: "min-content" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[27px] overflow-inherit">
          No integration
        </p>
      </div>
    </div>
  );
}

function Frame1010106766() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-left w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[#646e78] w-full">
        <p className="block leading-[24px]">
          Basic standalone application with no Nexus integration
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#000000] w-full">
        <p className="block leading-[24px] mb-0">Examples:</p>
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">
              Traditional desktop software that saves to shared drive / Nexus
              Drive
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">
              Standalone non-Nexus web apps
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function TextContent2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text content"
    >
      <Frame1010106765 />
      <Frame1010106766 />
    </div>
  );
}

function Header2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start pb-0 pl-6 pr-4 pt-6 relative w-full">
          <RadioButton2 />
          <TextContent2 />
        </div>
      </div>
    </div>
  );
}

function PlayArrow2() {
  return (
    <div
      className="[grid-area:1_/_1] ml-[114.363px] mt-[60.621px] relative size-[41.274px]"
      data-name="play_arrow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 42 42"
      >
        <g id="play_arrow">
          <path
            d={svgPaths.p29294a00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#e6eaf0] h-[162.516px] ml-0 mt-0 rounded-xl w-[270px]" />
      <PlayArrow2 />
    </div>
  );
}

function StateLayer16() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-center pb-6 pt-0 px-0 relative rounded-2xl shrink-0 w-full"
      data-name="state-layer"
    >
      <Header2 />
      <Group5 />
    </div>
  );
}

function LevelCard2() {
  return (
    <div
      className="bg-[#f8fafd] h-[576px] relative rounded-2xl shrink-0 w-[302px]"
      data-name="Level Card"
    >
      <div className="box-border content-stretch flex flex-col h-[576px] items-center justify-center overflow-clip p-0 relative w-[302px]">
        <StateLayer16 />
      </div>
      <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

function RadioButtonUnchecked3() {
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
            fill="var(--fill-0, #00718C)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StateLayer20() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-[8px] relative shrink-0"
      data-name="state-layer"
    >
      <RadioButtonUnchecked3 />
    </div>
  );
}

function RadioButton3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-0 relative shrink-0"
      data-name="Radio button"
    >
      <StateLayer20 />
    </div>
  );
}

function Frame1010106767() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#121623] text-left text-nowrap w-full">
      <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[32px]">
        <p className="[text-overflow:inherit] block leading-[40px] overflow-inherit text-nowrap whitespace-pre">
          Level 3
        </p>
      </div>
      <div
        className="flex flex-col justify-center min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[18px]"
        style={{ width: "min-content" }}
      >
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[27px] overflow-inherit">
          No integration
        </p>
      </div>
    </div>
  );
}

function Frame1010106768() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[16px] text-left w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[#646e78] w-full">
        <p className="block leading-[24px]">
          Basic standalone application with no Nexus integration
        </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#000000] w-full">
        <p className="block leading-[24px] mb-0">Examples:</p>
        <ul className="css-ed5n1g list-disc">
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">
              Traditional desktop software that saves to shared drive / Nexus
              Drive
            </span>
          </li>
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">
              Standalone non-Nexus web apps
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function TextContent3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text content"
    >
      <Frame1010106767 />
      <Frame1010106768 />
    </div>
  );
}

function Header3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start pb-0 pl-6 pr-4 pt-6 relative w-full">
          <RadioButton3 />
          <TextContent3 />
        </div>
      </div>
    </div>
  );
}

function PlayArrow3() {
  return (
    <div
      className="[grid-area:1_/_1] ml-[114.363px] mt-[60.621px] relative size-[41.274px]"
      data-name="play_arrow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 42 42"
      >
        <g id="play_arrow">
          <path
            d={svgPaths.p29294a00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#e6eaf0] h-[162.516px] ml-0 mt-0 rounded-xl w-[270px]" />
      <PlayArrow3 />
    </div>
  );
}

function StateLayer21() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-center pb-6 pt-0 px-0 relative rounded-2xl shrink-0 w-full"
      data-name="state-layer"
    >
      <Header3 />
      <Group6 />
    </div>
  );
}

function LevelCard3() {
  return (
    <div
      className="bg-[#f8fafd] h-[576px] relative rounded-2xl shrink-0 w-[302px]"
      data-name="Level Card"
    >
      <div className="box-border content-stretch flex flex-col h-[576px] items-center justify-center overflow-clip p-0 relative w-[302px]">
        <StateLayer21 />
      </div>
      <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

function Frame1010106755() {
  return (
    <div className="box-border content-stretch flex flex-row gap-10 h-[635px] items-start justify-start p-0 relative shrink-0 w-[1344px]">
      <LevelCard />
      <LevelCard1 />
      <LevelCard2 />
      <LevelCard3 />
    </div>
  );
}

function Frame1010106762() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-px items-center justify-center left-0 p-0 top-[130px] w-[1440px]">
      <Frame1010106753 />
      <Frame1010106755 />
    </div>
  );
}

export default function NexusReadinessExample() {
  return (
    <div
      className="bg-[#f8fafd] relative size-full"
      data-name="Nexus Readiness Example"
    >
      <div className="absolute font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] left-[30px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-6">
        <p className="block leading-[27px] whitespace-pre">Nexus Readiness</p>
      </div>
      <AppNavigation />
      <Frame1010106762 />
    </div>
  );
}