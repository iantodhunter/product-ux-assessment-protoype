import svgPaths from "./svg-ixj44q5cs0";

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-5" data-name="Arrow Left">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Arrow Left">
          <path
            clipRule="evenodd"
            d={svgPaths.p39fd6f00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function UnstyledIconButton() {
  return (
    <button
      className="box-border content-stretch cursor-pointer flex flex-row items-center justify-center overflow-visible p-[2px] relative rounded-[48px] shrink-0"
      data-name="UnstyledIconButton"
    >
      <ArrowLeft />
    </button>
  );
}

function Header() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <UnstyledIconButton />
      <div className="flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] h-full justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121623] text-[18px] text-left text-nowrap w-[236px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[27px] overflow-inherit">
          Create Issue
        </p>
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
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">
          Gearbox
        </p>
      </div>
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
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="keyboard_arrow_down">
          <path
            d={svgPaths.p3e19700}
            fill="var(--fill-0, #646E78)"
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
      className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-[8px] relative rounded-xl shrink-0"
      data-name="state-layer"
    >
      <KeyboardArrowDown />
    </div>
  );
}

function IconButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-0 relative rounded-xl shrink-0 size-10"
      data-name="Icon button"
    >
      <StateLayer />
    </div>
  );
}

function TrailingContent() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-end p-0 relative shrink-0"
      data-name="Trailing content"
    >
      <IconButton />
    </div>
  );
}

function StateLayer1() {
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
      <StateLayer1 />
    </div>
  );
}

function DropdownItem() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Dropdown item"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Project</p>
      </div>
      <Container />
    </div>
  );
}

function Dropdown() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Dropdown"
    >
      <DropdownItem />
    </div>
  );
}

function Value() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Value"
    >
      <div className="basis-0 flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#646e78] text-[16px] text-left">
        <p className="block leading-[24px]">Enter email addresses</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Left"
    >
      <Value />
    </div>
  );
}

function Active() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px overflow-clip px-0 py-[15px] relative shrink-0 w-full"
      data-name="Active"
    >
      <Left />
    </div>
  );
}

function Input() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded shrink-0 w-full"
      data-name="Input"
    >
      <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded" />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-3 py-0 relative size-full">
          <Active />
        </div>
      </div>
    </div>
  );
}

function TextFieldOutlined() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow h-[58px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="TextField - Outlined"
    >
      <Input />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <TextFieldOutlined />
    </div>
  );
}

function InviteField() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-row gap-4 grow h-[74px] items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0"
      data-name="Invite Field"
    >
      <Content1 />
    </div>
  );
}

function LocalEmials() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Local / emials"
    >
      <InviteField />
    </div>
  );
}

function StateLayer2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-lg self-stretch shrink-0"
      data-name="state-layer"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-[8px] relative size-full">
          <div className="basis-0 font-['Hexagon_Akkurat:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#858c99] text-[16px] text-left">
            <p className="block mb-0">Optional message</p>
            <p className="block mb-0">&nbsp;</p>
            <p className="block"> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start p-0 relative rounded-lg shrink-0 w-full"
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
      className="box-border content-stretch flex flex-col gap-1 h-[108px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Text field"
    >
      <Container1 />
    </div>
  );
}

function Frame1010106546() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 h-[178px] items-start justify-start p-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] h-5 justify-center leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left w-[261px]">
        <p className="block leading-[20px]">Assign to</p>
      </div>
      <LocalEmials />
      <TextField />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="basis-0 font-['Hexagon_Akkurat:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#646e78] text-[16px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">{`Select issue type ... `}</p>
      </div>
    </div>
  );
}

function KeyboardArrowDown1() {
  return (
    <div className="relative shrink-0 size-6" data-name="keyboard_arrow_down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="keyboard_arrow_down">
          <path
            d={svgPaths.p3e19700}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-[8px] relative rounded-xl shrink-0"
      data-name="state-layer"
    >
      <KeyboardArrowDown1 />
    </div>
  );
}

function IconButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-0 relative rounded-xl shrink-0 size-10"
      data-name="Icon button"
    >
      <StateLayer3 />
    </div>
  );
}

function TrailingContent1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-end p-0 relative shrink-0"
      data-name="Trailing content"
    >
      <IconButton1 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div
      className="basis-0 grow h-10 min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-10 items-center justify-between p-[8px] relative w-full">
          <Content2 />
          <TrailingContent1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-10 items-center justify-start p-0 relative rounded-lg shrink-0 w-full"
      data-name="Container"
    >
      <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-lg" />
      <StateLayer4 />
    </div>
  );
}

function DropdownItem1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Dropdown item"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Type</p>
      </div>
      <Container2 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Dropdown"
    >
      <DropdownItem1 />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="basis-0 font-['Hexagon_Akkurat:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#646e78] text-[16px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[20px] overflow-inherit">{`Select from project files ... `}</p>
      </div>
    </div>
  );
}

function KeyboardArrowDown2() {
  return (
    <div className="relative shrink-0 size-6" data-name="keyboard_arrow_down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="keyboard_arrow_down">
          <path
            d={svgPaths.p3e19700}
            fill="var(--fill-0, #646E78)"
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
      className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-[8px] relative rounded-xl shrink-0"
      data-name="state-layer"
    >
      <KeyboardArrowDown2 />
    </div>
  );
}

function IconButton2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-0 relative rounded-xl shrink-0 size-10"
      data-name="Icon button"
    >
      <StateLayer5 />
    </div>
  );
}

function TrailingContent2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-end p-0 relative shrink-0"
      data-name="Trailing content"
    >
      <IconButton2 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div
      className="basis-0 grow h-10 min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-10 items-center justify-between p-[8px] relative w-full">
          <Content3 />
          <TrailingContent2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-10 items-center justify-start p-0 relative rounded-lg shrink-0 w-full"
      data-name="Container"
    >
      <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-lg" />
      <StateLayer6 />
    </div>
  );
}

function DropdownItem2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Dropdown item"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Related file(s)</p>
      </div>
      <Container3 />
    </div>
  );
}

function Dropdown2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Dropdown"
    >
      <DropdownItem2 />
    </div>
  );
}

function Frame1010106641() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Dropdown2 />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[0px] text-left text-nowrap">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px] text-[16px] whitespace-pre">{`+ Import new `}</p>
      </div>
    </div>
  );
}

function Frame1010106642() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      <Dropdown1 />
      <Frame1010106641 />
    </div>
  );
}

function TopHeadingWrapper() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[16px] relative shrink-0 w-[480px]"
      data-name="Top Heading Wrapper"
    >
      <div className="absolute border-[#f0f0f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Header />
      <Dropdown />
      <Frame1010106546 />
      <Frame1010106642 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-xl shrink-0"
      data-name="state-layer"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#00718c] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Cancel</p>
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
      <StateLayer7 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div
      className="bg-[rgba(180,186,196,0.12)] box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-xl shrink-0"
      data-name="state-layer"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#b4bac4] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Create issue</p>
      </div>
    </div>
  );
}

function CommonButton1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative rounded-xl shrink-0"
      data-name="Common button"
    >
      <StateLayer8 />
    </div>
  );
}

function Frame1010106549() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-4 py-0 relative w-full">
          <CommonButton />
          <CommonButton1 />
        </div>
      </div>
    </div>
  );
}

function Frame1010105829() {
  return (
    <div className="box-border content-stretch flex flex-col h-[666px] items-center justify-between p-0 shrink-0 sticky top-0">
      <TopHeadingWrapper />
      <Frame1010106549 />
    </div>
  );
}

function Scroll() {
  return (
    <div
      className="absolute bg-[#e6e6e6] h-[124px] left-[472px] rounded top-36 w-1"
      data-name="Scroll"
    />
  );
}

export default function OverlayCreateTask7() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-0 py-2 relative size-full"
      data-name="Overlay / Create Task 7"
    >
      <div className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
      <Frame1010105829 />
      <Scroll />
    </div>
  );
}