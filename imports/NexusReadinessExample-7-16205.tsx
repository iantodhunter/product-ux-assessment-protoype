import svgPaths from "./svg-yrakaay9kp";
import imgRectangle3078 from "figma:asset/da3dc1c8ad148fb87b7aed389dddc844ff63ea1b.png";
import imgImagePlaceholder from "figma:asset/7aa526760d6053194b783f97e7e905d697c2f469.png";

function StateLayer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-center px-4 py-2 relative rounded-bl-[12px] rounded-tl-[12px] shrink-0"
      data-name="state-layer"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left w-[61px]">
        <ol className="list-decimal" start="4">
          <li className="mb-0 ms-6">
            <span className="leading-[24px]">UX Readiness</span>
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
          <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#474f5f] text-[0px] text-left text-nowrap">
            <p className="leading-[27px] text-[18px] whitespace-pre">
              <span>{`Looks like you’re building a `}</span>
              <span className="font-['Hexagon_Akkurat:Bold',_sans-serif] not-italic">
                Web App
              </span>
              <span>{`. Let’s review what UX you’ve got in place. `}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1010106762() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-center justify-center p-0 relative shrink-0 w-full">
      <Frame1010106753 />
    </div>
  );
}

function Frame1010106754() {
  return (
    <div className="h-12 relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center p-[8px] relative w-full">
          <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#474f5f] text-[0px] text-left text-nowrap">
            <p className="block font-['Hexagon_Akkurat:Bold',_sans-serif] leading-[27px] text-[18px] whitespace-pre">
              General User Experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1010106763() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-center justify-center p-0 relative shrink-0 w-full">
      <Frame1010106754 />
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center px-0 py-1 relative shrink-0 w-full"
      data-name="Text Container"
    >
      <div className="font-['Open_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-left w-full">
        <p className="block leading-[24px]">Uses Nexus authentication</p>
      </div>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-6" data-name="check">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="check">
          <path
            d={svgPaths.p3112b800}
            fill="var(--fill-0, #121623)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-center px-4 py-2 relative rounded-bl-[12px] rounded-tl-[12px] shrink-0"
      data-name="state-layer"
    >
      <Check1 />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Yes</p>
      </div>
    </div>
  );
}

function SegmentedButtonParts2() {
  return (
    <div
      className="bg-[#e6eaf0] box-border content-stretch flex flex-row h-10 items-center justify-center mr-[-1px] p-0 relative rounded-bl-[12px] rounded-tl-[12px] shrink-0"
      data-name=".Segmented button parts"
    >
      <div className="absolute border border-[#b4bac4] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-tl-[12px]" />
      <StateLayer2 />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-6" data-name="close">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="close">
          <path
            d={svgPaths.p2056d980}
            fill="var(--fill-0, #121623)"
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
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-center px-4 py-2 relative rounded-br-[12px] rounded-tr-[12px] shrink-0"
      data-name="state-layer"
    >
      <Close />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">No</p>
      </div>
    </div>
  );
}

function SegmentedButtonParts3() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-10 items-center justify-center mr-[-1px] p-0 relative rounded-br-[12px] rounded-tr-[12px] shrink-0"
      data-name=".Segmented button parts"
    >
      <div className="absolute border border-[#b4bac4] border-solid inset-0 pointer-events-none rounded-br-[12px] rounded-tr-[12px]" />
      <StateLayer3 />
    </div>
  );
}

function SegmentedButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-px py-0 relative shrink-0"
      data-name="Segmented Button"
    >
      <SegmentedButtonParts2 />
      <SegmentedButtonParts3 />
    </div>
  );
}

function Frame1010106764() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 items-start justify-center p-0 relative shrink-0 w-full">
      <TextContainer />
      <SegmentedButton />
    </div>
  );
}

function HexagonLogo() {
  return (
    <div
      className="h-[11.326px] relative shrink-0 w-[40.194px]"
      data-name="Hexagon Logo"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 41 12"
      >
        <g clipPath="url(#clip0_7_18523)" id="Hexagon Logo">
          <g id="name">
            <path
              d={svgPaths.p5fd2500}
              fill="var(--fill-0, black)"
              id="Vector"
            />
            <path
              d={svgPaths.p239e1b80}
              fill="var(--fill-0, black)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p13fe6e00}
              fill="var(--fill-0, black)"
              id="Vector_3"
            />
            <path
              d={svgPaths.p6ec1ee0}
              fill="var(--fill-0, black)"
              id="Vector_4"
            />
            <path
              d={svgPaths.p1b56be80}
              fill="var(--fill-0, black)"
              id="Vector_5"
            />
            <path
              d={svgPaths.p2347d900}
              fill="var(--fill-0, black)"
              id="Vector_6"
            />
            <path
              d={svgPaths.p1e56af0}
              fill="var(--fill-0, black)"
              id="Vector_7"
            />
          </g>
          <path
            clipRule="evenodd"
            d={svgPaths.p39beb00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="symbol"
          />
        </g>
        <defs>
          <clipPath id="clip0_7_18523">
            <rect fill="white" height="11.3261" width="40.1939" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-center justify-end ml-0 mt-[247.997px] p-0 relative w-[130.004px]"
      data-name="Logo"
    >
      <HexagonLogo />
    </div>
  );
}

function Group48096016() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[19.783px] mt-[19.783px] place-items-start relative">
      <div
        className="[grid-area:1_/_1] h-[5.652px] ml-[56.524px] mt-[208.431px] relative w-[16.957px]"
        data-name="81871_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 6"
        >
          <path
            d={svgPaths.p26e18c00}
            fill="var(--fill-0, #B0DFEA)"
            id="81871_vector"
          />
        </svg>
      </div>
      <Logo />
      <div
        className="[grid-area:1_/_1] ml-[53.697px] mt-0 relative size-[22.609px]"
        data-name="icon"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 23 23"
        >
          <path d={svgPaths.p12f8200} fill="var(--fill-0, #B0DFEA)" id="icon" />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] ml-0 mt-[154.733px] relative size-[5.652px]"
        data-name="icon"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6 6"
        >
          <path
            d={svgPaths.pc117300}
            fill="var(--fill-0, #0097BA)"
            id="icon"
            opacity="0.5"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[14.131px] ml-[8.125px] mt-[36.74px] relative w-[114.813px]"
        data-name="81870_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 115 15"
        >
          <path
            d={svgPaths.p95a400}
            fill="var(--fill-0, #B0DFEA)"
            id="81870_vector"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[14.131px] ml-0 mt-[85.492px] relative w-[130.004px]"
        data-name="81870_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 130 15"
        >
          <path
            d={svgPaths.p1f8a2100}
            fill="var(--fill-0, #E6F5F8)"
            id="81870_vector"
            stroke="var(--stroke-0, #0097BA)"
            strokeWidth="0.706544"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[14.131px] ml-0 mt-[166.038px] relative w-[130.004px]"
        data-name="81870_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 130 15"
        >
          <path
            d={svgPaths.p1f5d5100}
            fill="var(--fill-0, #00718C)"
            id="81870_vector"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[14.131px] ml-0 mt-[219.735px] relative w-[130.004px]"
        data-name="81870_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 130 15"
        >
          <path
            d={svgPaths.p1f5d5100}
            fill="var(--fill-0, #0097BA)"
            id="81870_vector"
            opacity="0.5"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[14.131px] ml-0 mt-[125.058px] relative w-[130.004px]"
        data-name="81870_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 130 15"
        >
          <path
            d={svgPaths.p1f8a2100}
            fill="var(--fill-0, #E6F5F8)"
            id="81870_vector"
            stroke="var(--stroke-0, #0097BA)"
            strokeWidth="0.706544"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[0.707px] ml-0 mt-[210.904px] relative w-[55.111px]"
        data-name="81870_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 56 1"
        >
          <path
            d={svgPaths.p19901300}
            fill="var(--fill-0, #B0DFEA)"
            id="81870_vector"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[0.707px] ml-[74.894px] mt-[210.904px] relative w-[55.111px]"
        data-name="81870_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 56 1"
        >
          <path
            d={svgPaths.p19901300}
            fill="var(--fill-0, #B0DFEA)"
            id="81870_vector"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[4.946px] ml-[16.604px] mt-[56.524px] relative w-[96.443px]"
        data-name="81871_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 97 5"
        >
          <path
            d={svgPaths.p232a1600}
            fill="var(--fill-0, #B0DFEA)"
            id="81871_vector"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[5.652px] ml-0 mt-[75.6px] relative w-[46.632px]"
        data-name="81871_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 47 6"
        >
          <path
            d={svgPaths.p138a5a00}
            fill="var(--fill-0, #B0DFEA)"
            id="81871_vector"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[5.652px] ml-0 mt-[115.167px] relative w-[46.632px]"
        data-name="81871_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 47 6"
        >
          <path
            d={svgPaths.p138a5a00}
            fill="var(--fill-0, #B0DFEA)"
            id="81871_vector"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[5.652px] ml-[90.085px] mt-[103.862px] relative w-[39.92px]"
        data-name="81871_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 40 6"
        >
          <path
            d={svgPaths.p16c85e80}
            fill="var(--fill-0, #B0DFEA)"
            id="81871_vector"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[5.652px] ml-[9.892px] mt-[154.733px] relative w-[32.148px]"
        data-name="81871_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 33 6"
        >
          <path
            d={svgPaths.p5326300}
            fill="var(--fill-0, #B0DFEA)"
            id="81871_vector"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[5.652px] ml-[90.085px] mt-[143.429px] relative w-[39.92px]"
        data-name="81871_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 40 6"
        >
          <path
            d={svgPaths.p16c85e80}
            fill="var(--fill-0, #B0DFEA)"
            id="81871_vector"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[5.652px] ml-[26.849px] mt-[185.821px] relative w-[50.165px]"
        data-name="81871_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 51 6"
        >
          <path
            d={svgPaths.p2f1bfe00}
            fill="var(--fill-0, #B0DFEA)"
            id="81871_vector"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[5.652px] ml-[26.849px] mt-[197.126px] relative w-[26.849px]"
        data-name="81871_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 27 6"
        >
          <path
            d={svgPaths.p2b81e600}
            fill="var(--fill-0, #B0DFEA)"
            id="81871_vector"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[5.652px] ml-[78.427px] mt-[185.821px] relative w-[25.082px]"
        data-name="81871_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 26 6"
        >
          <path
            d={svgPaths.p169c11f0}
            fill="var(--fill-0, #0097BA)"
            id="81871_vector"
            opacity="0.5"
          />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[45.219px] mt-[154.733px] relative size-[5.652px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 6 6"
        >
          <circle
            cx="2.82618"
            cy="2.82618"
            fill="var(--fill-0, #0097BA)"
            id="Ellipse 3609"
            opacity="0.5"
            r="2.82618"
          />
        </svg>
      </div>
      <div
        className="[grid-area:1_/_1] h-[5.652px] ml-[54.757px] mt-[197.126px] relative w-[47.339px]"
        data-name="81871_vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48 6"
        >
          <path
            d={svgPaths.p863b340}
            fill="var(--fill-0, #0097BA)"
            id="81871_vector"
            opacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="login"
    >
      <div className="[grid-area:1_/_1] bg-[#ffffff] h-[300.142px] ml-0 mt-0 relative rounded-[5.65236px] w-[169.571px]">
        <div className="absolute border-[#e6eaf0] border-[0.353941px] border-solid inset-0 pointer-events-none rounded-[5.65236px]" />
      </div>
      <Group48096016 />
    </div>
  );
}

function ListItem() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-center justify-center px-4 py-2 relative shrink-0 w-[728px]"
      data-name="ListItem"
    >
      <Frame1010106764 />
      <Login />
    </div>
  );
}

function TextContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center px-0 py-1 relative shrink-0 w-full"
      data-name="Text Container"
    >
      <div className="font-['Open_Sans:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-left w-full">
        <p className="block leading-[24px]">
          Users can access thier Account information using the account dropdown
        </p>
      </div>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-6" data-name="check">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="check">
          <path
            d={svgPaths.p3112b800}
            fill="var(--fill-0, #121623)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StateLayer4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-center px-4 py-2 relative rounded-bl-[12px] rounded-tl-[12px] shrink-0"
      data-name="state-layer"
    >
      <Check2 />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Yes</p>
      </div>
    </div>
  );
}

function SegmentedButtonParts4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center mr-[-1px] p-0 relative rounded-bl-[12px] rounded-tl-[12px] shrink-0"
      data-name=".Segmented button parts"
    >
      <div className="absolute border border-[#b4bac4] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-tl-[12px]" />
      <div className="flex flex-row items-center self-stretch">
        <StateLayer4 />
      </div>
    </div>
  );
}

function Close1() {
  return (
    <div className="relative shrink-0 size-6" data-name="close">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="close">
          <path
            d={svgPaths.p2056d980}
            fill="var(--fill-0, #121623)"
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
      className="box-border content-stretch flex flex-row gap-2 h-full items-center justify-center px-4 py-2 relative rounded-br-[12px] rounded-tr-[12px] shrink-0"
      data-name="state-layer"
    >
      <Close1 />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">No</p>
      </div>
    </div>
  );
}

function SegmentedButtonParts5() {
  return (
    <div
      className="bg-[#e6eaf0] box-border content-stretch flex flex-row items-center justify-center mr-[-1px] p-0 relative rounded-br-[12px] rounded-tr-[12px] shrink-0"
      data-name=".Segmented button parts"
    >
      <div className="absolute border border-[#b4bac4] border-solid inset-0 pointer-events-none rounded-br-[12px] rounded-tr-[12px]" />
      <div className="flex flex-row items-center self-stretch">
        <StateLayer5 />
      </div>
    </div>
  );
}

function SegmentedButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-px py-0 relative shrink-0"
      data-name="Segmented Button"
    >
      <SegmentedButtonParts4 />
      <SegmentedButtonParts5 />
    </div>
  );
}

function ProductIcon() {
  return (
    <div className="relative shrink-0 size-[28.265px]" data-name="ProductIcon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 29 29"
      >
        <g clipPath="url(#clip0_7_18465)" id="ProductIcon">
          <rect
            fill="var(--fill-0, #6CBEBB)"
            height="28.265"
            id="Outer Bounding Box"
            rx="8.83281"
            width="28.265"
          />
          <path
            d={svgPaths.p1bf4de80}
            fill="url(#paint0_linear_7_18465)"
            id="Union"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_7_18465"
            x1="3.53312"
            x2="24.7314"
            y1="12.9166"
            y2="12.9166"
          >
            <stop stopColor="#0D0D0D" stopOpacity="0.4" />
            <stop offset="0.340686" stopColor="#0D0D0D" stopOpacity="0.6" />
            <stop offset="0.341517" stopColor="#0D0D0D" />
            <stop offset="0.610072" stopColor="#0D0D0D" />
            <stop offset="0.685595" stopColor="#0D0D0D" stopOpacity="0.6" />
            <stop offset="1" stopColor="#0D0D0D" stopOpacity="0.4" />
          </linearGradient>
          <clipPath id="clip0_7_18465">
            <rect fill="white" height="28.265" width="28.265" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame48095952() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[8.479px] items-center justify-start p-0 relative shrink-0">
      <ProductIcon />
      <div className="bg-[#e6eaf0] h-[11.306px] rounded-[55.5106px] shrink-0 w-[56.53px]" />
    </div>
  );
}

function Frame1010105359() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[16.959px] items-center justify-start p-0 relative shrink-0">
      <div className="bg-[#e6eaf0] h-[11.306px] rounded-[55.5106px] shrink-0 w-[56.53px]" />
      <div className="bg-[#e6eaf0] h-[11.306px] rounded-[55.5106px] shrink-0 w-[56.53px]" />
      <div className="bg-[#e6eaf0] h-[11.306px] rounded-[55.5106px] shrink-0 w-[56.53px]" />
      <div className="bg-[#e6eaf0] h-[11.306px] rounded-[55.5106px] shrink-0 w-[56.53px]" />
    </div>
  );
}

function AvatarSpg() {
  return (
    <div
      className="max-h-8 max-w-8 relative shrink-0 size-10"
      data-name="Avatar SPG"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-[125px]"
        style={{ backgroundImage: `url('${imgRectangle3078}')` }}
      >
        <div className="absolute border-2 border-[#33b4f2] border-solid inset-[-2px] pointer-events-none rounded-[127px]" />
      </div>
    </div>
  );
}

function Navitem() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[15.543px] h-full items-center justify-start px-[1.11px] py-0 relative shrink-0 w-[30.485px]"
      data-name="navitem"
    >
      <AvatarSpg />
    </div>
  );
}

function Frame1010105358() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[11.306px] items-center justify-start p-0 relative shrink-0">
      <div className="relative shrink-0 size-[16.959px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <ellipse
            cx="8.4795"
            cy="8.47949"
            fill="var(--fill-0, #D1D3D7)"
            id="Ellipse 3568"
            rx="8.4795"
            ry="8.47949"
          />
        </svg>
      </div>
      <div className="relative shrink-0 size-[16.959px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <ellipse
            cx="8.4795"
            cy="8.47949"
            fill="var(--fill-0, #D1D3D7)"
            id="Ellipse 3568"
            rx="8.4795"
            ry="8.47949"
          />
        </svg>
      </div>
      <div className="relative shrink-0 size-[16.959px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 17"
        >
          <ellipse
            cx="8.4795"
            cy="8.47949"
            fill="var(--fill-0, #D1D3D7)"
            id="Ellipse 3568"
            rx="8.4795"
            ry="8.47949"
          />
        </svg>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Navitem />
      </div>
    </div>
  );
}

function NavSection() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-between px-[33.918px] py-[11.306px] relative shrink-0 w-[680.479px]"
      data-name="Nav Section"
    >
      <div className="absolute border-[0px_0px_0.706625px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Frame48095952 />
      <Frame1010105359 />
      <Frame1010105358 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[13.322px] items-center justify-start p-0 relative shrink-0">
      <div className="bg-[#e6eaf0] h-[16.959px] rounded-[5.653px] shrink-0 w-[70.662px]" />
      <div className="bg-[#e6eaf0] h-[16.959px] rounded-[5.653px] shrink-0 w-[70.662px]" />
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Title"
    >
      <div className="bg-[#e6eaf0] h-[11.306px] rounded-[55.5106px] shrink-0 w-[98.927px]" />
      <Frame10 />
    </div>
  );
}

function Items() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[15.543px] h-[302.435px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="items"
    >
      <div
        className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
        data-name="Union"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 613 91"
        >
          <path
            d={svgPaths.p1f471580}
            fill="var(--fill-0, #E6EAF0)"
            id="Union"
          />
        </svg>
      </div>
      <div
        className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
        data-name="Union"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 613 91"
          >
            <path
              d={svgPaths.pbd6a300}
              fill="var(--fill-0, #E6EAF0)"
              id="Union"
            />
          </svg>
        </div>
      </div>
      <div
        className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
        data-name="Union"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 613 91"
        >
          <path
            d={svgPaths.p1e723d00}
            fill="var(--fill-0, #E6EAF0)"
            id="Union"
          />
        </svg>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Content"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[26.645px] items-start justify-start px-[33.918px] py-[25.439px] relative size-full">
          <Title />
          <Items />
        </div>
      </div>
    </div>
  );
}

function Collapsed() {
  return (
    <div
      className="bg-[#f8fafd] box-border content-stretch flex flex-col h-[448px] items-start justify-start overflow-clip p-0 relative rounded-[16.959px] shadow-[0px_1.2032px_15.04px_0px_rgba(0,0,0,0.15)] shrink-0 w-[680.479px]"
      data-name="collapsed"
    >
      <NavSection />
      <Content />
    </div>
  );
}

function Divider() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Divider">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 328 1"
      >
        <path
          clipRule="evenodd"
          d="M328 1H0V0H328V1Z"
          fill="var(--fill-0, #E6EAF0)"
          fillRule="evenodd"
          id="Divider"
        />
      </svg>
    </div>
  );
}

function StateLayer7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative rounded-[999px] shrink-0 size-8"
      data-name="state-layer"
    >
      <div className="relative shrink-0 size-8" data-name="Image placeholder">
        <img
          className="block max-w-none size-full"
          height="32"
          loading="lazy"
          src={imgImagePlaceholder}
          width="32"
        />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-[999px] shrink-0 size-8"
      data-name="Avatar"
    >
      <StateLayer7 />
    </div>
  );
}

function Text() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left"
      data-name="Text"
    >
      <div className="flex flex-col h-5 justify-center max-h-5 overflow-ellipsis overflow-hidden relative shrink-0 text-[#121623] text-[16px] text-nowrap w-full">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[24px] overflow-inherit">
          Mark Smith [Switch Profile]
        </p>
      </div>
      <div className="-webkit-box css-32iw85 flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#646e78] text-[14px] w-full">
        <p className="block leading-[20px]">mark.smith@hexagon.com</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="container"
    >
      <Avatar />
      <Text />
    </div>
  );
}

function LeadingContent() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Leading content"
    >
      <Container />
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-5" data-name="edit">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="edit">
          <path
            d={svgPaths.p1971b9c0}
            fill="var(--fill-0, #121623)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StateLayer8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-8 max-w-8 min-h-8 min-w-8 px-2 py-1 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <Edit />
    </div>
  );
}

function IconButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-lg shrink-0 size-8"
      data-name="Icon button"
    >
      <StateLayer8 />
    </div>
  );
}

function TrailingContent() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative shrink-0"
      data-name="Trailing content"
    >
      <IconButton />
    </div>
  );
}

function StateLayer9() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="state-layer"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative w-full">
          <LeadingContent />
          <TrailingContent />
        </div>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-14 items-center justify-between max-h-14 min-h-14 p-0 relative shrink-0 w-full"
      data-name="List Item"
    >
      <Divider />
      <StateLayer9 />
    </div>
  );
}

function IdCard() {
  return (
    <div className="relative shrink-0 size-6" data-name="id_card">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="id_card">
          <path
            d={svgPaths.pabf500}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconPlaceholder() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative shrink-0 size-8"
      data-name="Icon placeholder"
    >
      <IdCard />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <IconPlaceholder />
      <div className="flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Your Profile [Settings]
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Content1 />
    </div>
  );
}

function TrailingContent1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-end p-0 shrink-0"
      data-name="Trailing content"
    />
  );
}

function StateLayer11() {
  return (
    <div
      className="max-h-14 min-h-14 relative shrink-0 w-full"
      data-name="state-layer"
    >
      <div className="flex flex-row items-center max-h-inherit min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between max-h-inherit min-h-inherit px-4 py-2 relative w-full">
          <Frame1 />
          <TrailingContent1 />
        </div>
      </div>
    </div>
  );
}

function MenuItem() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-14 items-start justify-center max-h-14 min-h-14 p-0 relative shrink-0 w-full"
      data-name=".Menu item"
    >
      <StateLayer11 />
    </div>
  );
}

function Account() {
  return (
    <div className="relative shrink-0 size-6" data-name="Account">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Account">
          <path
            d={svgPaths.p2b11000}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconPlaceholder1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative shrink-0 size-8"
      data-name="Icon placeholder"
    >
      <Account />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <IconPlaceholder1 />
      <div className="flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Your Account [Settings]
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Content2 />
    </div>
  );
}

function TrailingContent2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-end p-0 shrink-0"
      data-name="Trailing content"
    />
  );
}

function Divider1() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Divider">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 328 1"
      >
        <path
          clipRule="evenodd"
          d="M328 1H0V0H328V1Z"
          fill="var(--fill-0, #E6EAF0)"
          fillRule="evenodd"
          id="Divider"
        />
      </svg>
    </div>
  );
}

function StateLayer13() {
  return (
    <div
      className="max-h-14 min-h-14 relative shrink-0 w-full"
      data-name="state-layer"
    >
      <div className="flex flex-row items-center max-h-inherit min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between max-h-inherit min-h-inherit px-4 py-2 relative w-full">
          <Frame2 />
          <TrailingContent2 />
          <Divider1 />
        </div>
      </div>
    </div>
  );
}

function MenuItem1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-14 items-start justify-center max-h-14 min-h-14 p-0 relative shrink-0 w-full"
      data-name=".Menu item"
    >
      <StateLayer13 />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-6" data-name="info">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="info">
          <path
            d={svgPaths.p9b8c000}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconPlaceholder2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative shrink-0 size-8"
      data-name="Icon placeholder"
    >
      <Info />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <IconPlaceholder2 />
      <div className="flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">About</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Content3 />
    </div>
  );
}

function TrailingContent3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-end p-0 shrink-0"
      data-name="Trailing content"
    />
  );
}

function StateLayer15() {
  return (
    <div
      className="max-h-14 min-h-14 relative shrink-0 w-full"
      data-name="state-layer"
    >
      <div className="flex flex-row items-center max-h-inherit min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between max-h-inherit min-h-inherit px-4 py-2 relative w-full">
          <Frame3 />
          <TrailingContent3 />
        </div>
      </div>
    </div>
  );
}

function MenuItem2() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-14 items-start justify-center max-h-14 min-h-14 p-0 relative shrink-0 w-full"
      data-name=".Menu item"
    >
      <StateLayer15 />
    </div>
  );
}

function Help() {
  return (
    <div className="relative shrink-0 size-6" data-name="help">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="help">
          <path
            d={svgPaths.p2318f00}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconPlaceholder3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative shrink-0 size-8"
      data-name="Icon placeholder"
    >
      <Help />
    </div>
  );
}

function Content4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <IconPlaceholder3 />
      <div className="flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Help</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Content4 />
    </div>
  );
}

function TrailingContent4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-end p-0 shrink-0"
      data-name="Trailing content"
    />
  );
}

function Divider2() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Divider">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 328 1"
      >
        <path
          clipRule="evenodd"
          d="M328 1H0V0H328V1Z"
          fill="var(--fill-0, #E6EAF0)"
          fillRule="evenodd"
          id="Divider"
        />
      </svg>
    </div>
  );
}

function StateLayer17() {
  return (
    <div
      className="max-h-14 min-h-14 relative shrink-0 w-full"
      data-name="state-layer"
    >
      <div className="flex flex-row items-center max-h-inherit min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between max-h-inherit min-h-inherit px-4 py-2 relative w-full">
          <Frame4 />
          <TrailingContent4 />
          <Divider2 />
        </div>
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-14 items-start justify-center max-h-14 min-h-14 p-0 relative shrink-0 w-full"
      data-name=".Menu item"
    >
      <StateLayer17 />
    </div>
  );
}

function Logout() {
  return (
    <div className="relative shrink-0 size-6" data-name="logout">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="logout">
          <path
            d={svgPaths.p24bf9900}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconPlaceholder4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative shrink-0 size-8"
      data-name="Icon placeholder"
    >
      <Logout />
    </div>
  );
}

function Content5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-4 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Content"
    >
      <IconPlaceholder4 />
      <div className="flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Log out</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Content5 />
    </div>
  );
}

function TrailingContent5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-end p-0 shrink-0"
      data-name="Trailing content"
    />
  );
}

function StateLayer19() {
  return (
    <div
      className="max-h-14 min-h-14 relative shrink-0 w-full"
      data-name="state-layer"
    >
      <div className="flex flex-row items-center max-h-inherit min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between max-h-inherit min-h-inherit px-4 py-2 relative w-full">
          <Frame5 />
          <TrailingContent5 />
        </div>
      </div>
    </div>
  );
}

function MenuItem4() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-14 items-start justify-center max-h-14 min-h-14 p-0 relative shrink-0 w-full"
      data-name=".Menu item"
    >
      <StateLayer19 />
    </div>
  );
}

function MenuItems() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Menu items"
    >
      <ListItem1 />
      <MenuItem />
      <MenuItem1 />
      <MenuItem2 />
      <MenuItem3 />
      <MenuItem4 />
    </div>
  );
}

function Menu() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-0 py-2 relative rounded-3xl shrink-0 w-[328px]"
      data-name="Menu"
    >
      <div className="absolute border-2 border-[#33b4f2] border-solid inset-0 pointer-events-none rounded-3xl" />
      <MenuItems />
    </div>
  );
}

function ListItem2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-start justify-center px-4 py-2 relative shrink-0 w-[728px]"
      data-name="ListItem"
    >
      <TextContainer1 />
      <SegmentedButton1 />
      <Collapsed />
      <div className="flex h-[117px] items-center justify-center relative shrink-0 w-[315px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-[315px] relative w-[117px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 117 315"
            >
              <path
                d={svgPaths.pb061600}
                fill="var(--fill-0, #01ADFF)"
                fillOpacity="0.1"
                id="Rectangle 3468866"
                stroke="var(--stroke-0, #33B4F2)"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}

function Frame1010106765() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-8 items-center justify-start left-0 p-0 top-[130px] w-[1440px]">
      <Frame1010106762 />
      <Frame1010106763 />
      <ListItem />
      <ListItem2 />
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
      <Frame1010106765 />
    </div>
  );
}