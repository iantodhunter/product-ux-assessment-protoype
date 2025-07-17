import svgPaths from "./svg-4pix6ztsiw";

function StateLayer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-center px-4 py-2 relative rounded-bl-[12px] rounded-tl-[12px] shrink-0"
      data-name="state-layer"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left w-[61px]">
        <ol className="list-decimal" start="2">
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">Your info</span>
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
            <p className="block leading-[27px] whitespace-pre">Product Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="basis-0 font-['Hexagon_Akkurat:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#646e78] text-[16px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[24px] overflow-inherit">{`Add product name ... `}</p>
      </div>
    </div>
  );
}

function TrailingContent() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 shrink-0"
      data-name="Trailing content"
    />
  );
}

function StateLayer2() {
  return (
    <div
      className="basis-0 grow h-10 min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-10 items-center justify-between p-[8px] relative w-full">
          <Content />
          <TrailingContent />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-10 items-center justify-start p-0 relative rounded-lg shrink-0 w-full"
      data-name="Container"
    >
      <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-lg" />
      <StateLayer2 />
    </div>
  );
}

function TextField() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start mb-[-1px] p-0 relative shrink-0 w-full"
      data-name="Text field"
    >
      <Container />
    </div>
  );
}

function Autocomplete() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 relative shrink-0 w-[253px]"
      data-name="Autocomplete"
    >
      <TextField />
    </div>
  );
}

function Frame1010106756() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1010106753 />
      <Autocomplete />
    </div>
  );
}

function Frame1010106754() {
  return (
    <div className="h-12 relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center p-[8px] relative w-full">
          <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#474f5f] text-[18px] text-left text-nowrap">
            <p className="block leading-[27px] whitespace-pre">
              Product Manager’s Name
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="basis-0 font-['Hexagon_Akkurat:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#646e78] text-[16px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[24px] overflow-inherit">
          Add PM’S name ....
        </p>
      </div>
    </div>
  );
}

function TrailingContent1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 shrink-0"
      data-name="Trailing content"
    />
  );
}

function StateLayer3() {
  return (
    <div
      className="basis-0 grow h-10 min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-10 items-center justify-between p-[8px] relative w-full">
          <Content1 />
          <TrailingContent1 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-10 items-center justify-start p-0 relative rounded-lg shrink-0 w-full"
      data-name="Container"
    >
      <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-lg" />
      <StateLayer3 />
    </div>
  );
}

function TextField1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start mb-[-1px] p-0 relative shrink-0 w-full"
      data-name="Text field"
    >
      <Container1 />
    </div>
  );
}

function Autocomplete1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 relative shrink-0 w-[253px]"
      data-name="Autocomplete"
    >
      <TextField1 />
    </div>
  );
}

function Frame1010106757() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1010106754 />
      <Autocomplete1 />
    </div>
  );
}

function Frame1010106755() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-10 items-center justify-start left-0 p-0 top-[299px] w-[1440px]">
      <Frame1010106756 />
      <Frame1010106757 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-xl shrink-0"
      data-name="state-layer"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#00718c] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Back</p>
      </div>
    </div>
  );
}

function CommonButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative rounded-xl shrink-0"
      data-name="Common button"
    >
      <StateLayer4 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-xl shrink-0"
      data-name="state-layer"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Next</p>
      </div>
    </div>
  );
}

function CommonButton1() {
  return (
    <div
      className="bg-[#00718c] box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative rounded-xl shrink-0"
      data-name="Common button"
    >
      <StateLayer5 />
    </div>
  );
}

function Frame1010106759() {
  return (
    <div className="absolute box-border content-stretch flex flex-row items-center justify-between left-[480px] p-0 top-[605px] w-[480px]">
      <CommonButton />
      <CommonButton1 />
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
      <div className="absolute font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] left-[1347px] not-italic text-[#000000] text-[0px] text-nowrap text-right top-[831px] translate-x-[-100%]">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px] text-[14px] whitespace-pre">
          Modes
        </p>
      </div>
      <AppNavigation />
      <Frame1010106755 />
      <Frame1010106759 />
    </div>
  );
}