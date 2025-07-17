import svgPaths from "./svg-j0cnvohdkw";
import imgModel from "figma:asset/c676abb85b963d07eeadfa3bf02eeb83ab0a10a5.png";
import imgModel1 from "figma:asset/f3a686fe62afecc6187ef838ca466d547e59e761.png";
import imgModel2 from "figma:asset/d4f266f2eaaa2b58c6d41660fff6645df4552e70.png";

function Group() {
  return (
    <div
      className="absolute bottom-[16.851%] left-[7.113%] right-[7.173%] top-[16.777%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 96 31"
      >
        <g id="Group">
          <path
            d={svgPaths.p1f7a7600}
            fill="var(--fill-0, #231F20)"
            id="Vector"
          />
          <path
            d={svgPaths.p2df57600}
            fill="var(--fill-0, #231F20)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p2874dd80}
            fill="var(--fill-0, #231F20)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p5c51d00}
            fill="var(--fill-0, #231F20)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p26a41e00}
            fill="var(--fill-0, #231F20)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p2752be70}
            fill="var(--fill-0, #231F20)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p21e29b00}
            fill="var(--fill-0, #231F20)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p8dbfa00}
            fill="var(--fill-0, #231F20)"
            id="Vector_8"
          />
        </g>
      </svg>
    </div>
  );
}

function HexagonHorizontal1ColourOutlineRgbLogo() {
  return (
    <div
      className="h-[46px] overflow-clip relative shrink-0 w-28"
      data-name="HEXAGON_Horizontal_1 Colour_OUTLINE_RGB_LOGO"
    >
      <Group />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-6" data-name="search">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="search">
          <path
            d={svgPaths.p89aed78}
            fill="var(--fill-0, #545559)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Icon"
    >
      <Search />
    </div>
  );
}

function UnstyledIconButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative rounded-[48px] shrink-0"
      data-name="UnstyledIconButton"
    >
      <Icon />
    </div>
  );
}

function IconButton() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="IconButton"
    >
      <UnstyledIconButton />
    </div>
  );
}

function SearchBarNexusUiCustom() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-0 box-border content-stretch flex flex-row gap-4 items-center justify-center left-0 pl-4 pr-1 py-1 right-[61.246%] rounded top-0"
      data-name="Search bar (Nexus UI Custom)"
    >
      <div className="absolute border border-[#dcdddd] border-solid inset-0 pointer-events-none rounded" />
      <div className="basis-0 font-['Open_Sans:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#545559] text-[14px] text-left">
        <p className="block leading-[24px]">Search</p>
      </div>
      <IconButton />
    </div>
  );
}

function AssetSearchListBar() {
  return (
    <div
      className="h-10 relative shrink-0 w-[1096px]"
      data-name="asset/search-list-bar"
    >
      <SearchBarNexusUiCustom />
    </div>
  );
}

function Frame1010105134() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-6 items-center justify-start left-0.5 p-[8px] top-0 w-[1438px]">
      <HexagonHorizontal1ColourOutlineRgbLogo />
      <AssetSearchListBar />
    </div>
  );
}

function Thumbnail() {
  return (
    <div
      className="absolute contents translate-x-[-50%] translate-y-[-50%]"
      data-name="Thumbnail"
      style={{ top: "calc(50% + 15px)", left: "calc(50% - 4.16667px)" }}
    >
      <div
        className="absolute h-[41.303px] translate-x-[-50%] translate-y-[-50%] w-[81.182px]"
        data-name="Shadow"
        style={{ top: "calc(50% + 58.4394px)", left: "calc(50% - 4.16669px)" }}
      >
        <div className="absolute bottom-[-48.423%] left-[-24.636%] right-[-24.636%] top-[-48.423%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 122 82"
          >
            <g filter="url(#filter0_f_1_17756)" id="Shadow">
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
        data-name="Model"
        style={{
          top: "calc(50% - 2.09091px)",
          left: "calc(50% - 4.16667px)",
          backgroundImage: `url('${imgModel}')`,
        }}
      />
    </div>
  );
}

function Top() {
  return (
    <div
      className="bg-[#f3f3f3] h-[182px] overflow-clip relative shrink-0 w-full"
      data-name="Top"
    >
      <Thumbnail />
    </div>
  );
}

function Badge() {
  return (
    <div className="relative shrink-0 size-2" data-name="Badge">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="Badge">
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #0097BA)"
            id="Ellipse 63"
            r="4"
          />
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Badge"
    >
      <Badge />
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Title"
    >
      <Badge1 />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Piston</p>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-1 py-0 relative shrink-0"
      data-name="Description"
    >
      <Title />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.38)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Created Today</p>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full"
      data-name="Bottom"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Description />
        </div>
      </div>
      <div className="absolute border-[#e6e6e6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

function ProjectCard() {
  return (
    <div
      className="basis-0 grow max-w-[420px] min-h-px min-w-60 relative rounded-2xl shrink-0"
      data-name="Project Card"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit min-w-inherit overflow-clip p-0 relative w-full">
        <Top />
        <Bottom />
      </div>
      <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

function Thumbnail1() {
  return (
    <div
      className="absolute contents translate-x-[-50%] translate-y-[-50%]"
      data-name="Thumbnail"
      style={{ top: "calc(50% + 15px)", left: "calc(50% - 4.16665px)" }}
    >
      <div
        className="absolute h-[41.303px] translate-x-[-50%] translate-y-[-50%] w-[81.182px]"
        data-name="Shadow"
        style={{ top: "calc(50% + 58.4394px)", left: "calc(50% - 4.16667px)" }}
      >
        <div className="absolute bottom-[-48.423%] left-[-24.636%] right-[-24.636%] top-[-48.423%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 122 82"
          >
            <g filter="url(#filter0_f_1_17756)" id="Shadow">
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
        data-name="Model"
        style={{
          top: "calc(50% - 2.09091px)",
          left: "calc(50% - 4.16665px)",
          backgroundImage: `url('${imgModel1}')`,
        }}
      />
    </div>
  );
}

function Top1() {
  return (
    <div
      className="bg-[#dedddd] h-[182px] overflow-clip relative shrink-0 w-full"
      data-name="Top"
    >
      <Thumbnail1 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="relative shrink-0 size-2" data-name="Badge">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="Badge">
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #0097BA)"
            id="Ellipse 63"
            r="4"
          />
        </g>
      </svg>
    </div>
  );
}

function Badge3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Badge"
    >
      <Badge2 />
    </div>
  );
}

function Title1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Title"
    >
      <Badge3 />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Gearbox</p>
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-1 py-0 relative shrink-0"
      data-name="Description"
    >
      <Title1 />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.38)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Created Today</p>
      </div>
    </div>
  );
}

function Bottom1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full"
      data-name="Bottom"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Description1 />
        </div>
      </div>
      <div className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

function ProjectCard1() {
  return (
    <div
      className="basis-0 grow max-w-[420px] min-h-px min-w-60 relative rounded-2xl shrink-0"
      data-name="Project Card"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit min-w-inherit overflow-clip p-0 relative w-full">
        <Top1 />
        <Bottom1 />
      </div>
      <div className="absolute border-2 border-[#545559] border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

function Thumbnail2() {
  return (
    <div
      className="absolute contents translate-x-[-50%] translate-y-[-50%]"
      data-name="Thumbnail"
      style={{ top: "calc(50% + 15px)", left: "calc(50% - 4.16665px)" }}
    >
      <div
        className="absolute h-[41.303px] translate-x-[-50%] translate-y-[-50%] w-[81.182px]"
        data-name="Shadow"
        style={{ top: "calc(50% + 58.4394px)", left: "calc(50% - 4.16667px)" }}
      >
        <div className="absolute bottom-[-48.423%] left-[-24.636%] right-[-24.636%] top-[-48.423%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 122 82"
          >
            <g filter="url(#filter0_f_1_17756)" id="Shadow">
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
        data-name="Model"
        style={{
          top: "calc(50% - 2.09091px)",
          left: "calc(50% - 4.16665px)",
          backgroundImage: `url('${imgModel2}')`,
        }}
      />
    </div>
  );
}

function Top2() {
  return (
    <div
      className="bg-[#f3f3f3] h-[182px] overflow-clip relative shrink-0 w-full"
      data-name="Top"
    >
      <Thumbnail2 />
    </div>
  );
}

function Badge4() {
  return (
    <div className="relative shrink-0 size-2" data-name="Badge">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 8"
      >
        <g id="Badge">
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #0097BA)"
            id="Ellipse 63"
            r="4"
          />
        </g>
      </svg>
    </div>
  );
}

function Badge5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Badge"
    >
      <Badge4 />
    </div>
  );
}

function Title2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Title"
    >
      <Badge5 />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">F1</p>
      </div>
    </div>
  );
}

function Description2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-1 py-0 relative shrink-0"
      data-name="Description"
    >
      <Title2 />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(18,18,18,0.38)] text-left text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Created Today</p>
      </div>
    </div>
  );
}

function Bottom2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full"
      data-name="Bottom"
    >
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Description2 />
        </div>
      </div>
      <div className="absolute border-[#e6e6e6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
    </div>
  );
}

function ProjectCard2() {
  return (
    <div
      className="basis-0 grow max-w-[420px] min-h-px min-w-60 relative rounded-2xl shrink-0"
      data-name="Project Card"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit min-w-inherit overflow-clip p-0 relative w-full">
        <Top2 />
        <Bottom2 />
      </div>
      <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

function Frame1010105135() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[22px] items-center justify-start left-[111px] p-0 top-[162px] w-[825px]">
      <ProjectCard />
      <ProjectCard1 />
      <ProjectCard2 />
    </div>
  );
}

function Dismiss() {
  return (
    <div className="relative shrink-0 size-5" data-name="Dismiss">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Dismiss">
          <path
            clipRule="evenodd"
            d={svgPaths.p742d200}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function UnstyledIconButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[2px] relative rounded-[48px] shrink-0"
      data-name="UnstyledIconButton"
    >
      <Dismiss />
    </div>
  );
}

function Header() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] h-full justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121623] text-[18px] text-left text-nowrap w-[236px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[27px] overflow-inherit">
          Gearbox
        </p>
      </div>
      <UnstyledIconButton1 />
    </div>
  );
}

function Details() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Details"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#646e78] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Edited just now</p>
      </div>
    </div>
  );
}

function TopHeadingWrapper() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-[16px] relative shrink-0 w-[480px]"
      data-name="Top Heading Wrapper"
    >
      <div className="absolute border-[#f0f0f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Header />
      <Details />
    </div>
  );
}

function StateLayer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-xl shrink-0"
      data-name="state-layer"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121619] text-[16px] text-center text-nowrap tracking-[-0.32px]">
        <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">{`Open with ... `}</p>
      </div>
    </div>
  );
}

function CommonButton() {
  return (
    <div
      className="bg-[#f2f4f8] box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative rounded-xl shrink-0"
      data-name="Common button"
    >
      <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-xl" />
      <StateLayer />
    </div>
  );
}

function StateLayer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative rounded-[1165.5px] shrink-0 size-8"
      data-name="state-layer"
    >
      <div className="basis-0 flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-center">
        <p className="block leading-[19px]">JF</p>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div
      className="bg-[#20b2aa] box-border content-stretch flex flex-row items-center justify-between max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-[999px] shrink-0 size-8"
      data-name="Avatar"
    >
      <StateLayer1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative rounded-[1165.5px] shrink-0 size-8"
      data-name="state-layer"
    >
      <div className="basis-0 flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-center">
        <p className="block leading-[19px]">FE</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div
      className="bg-[#8a2be2] box-border content-stretch flex flex-row items-center justify-between max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-[999px] shrink-0 size-8"
      data-name="Avatar"
    >
      <StateLayer2 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative rounded-[1165.5px] shrink-0 size-8"
      data-name="state-layer"
    >
      <div className="basis-0 flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-center">
        <p className="block leading-[19px]">AP</p>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div
      className="bg-[#ff6347] box-border content-stretch flex flex-row items-center justify-between max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-[999px] shrink-0 size-8"
      data-name="Avatar"
    >
      <StateLayer3 />
    </div>
  );
}

function Frame1010106534() {
  return (
    <div className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0">
      <Avatar />
      <Avatar1 />
      <Avatar2 />
    </div>
  );
}

function Buttons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-2 py-1 relative rounded-md shrink-0"
      data-name="Buttons"
    >
      <div className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-md" />
      <div className="font-['Roboto:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#495057] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Share</p>
      </div>
    </div>
  );
}

function Frame1010106428() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Frame1010106534 />
      <Buttons />
    </div>
  );
}

function Frame1010106530() {
  return (
    <div className="h-10 relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-10 items-center justify-start px-4 py-1 relative w-full">
          <CommonButton />
          <Frame1010106428 />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="absolute bottom-[-1px] h-px left-0 right-0"
      data-name="Divider"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 480 1"
      >
        <path
          clipRule="evenodd"
          d="M480 1H0V0H480V1Z"
          fill="var(--fill-0, #E6EAF0)"
          fillRule="evenodd"
          id="Divider"
        />
      </svg>
    </div>
  );
}

function StateLayer4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-center justify-start px-4 py-2 relative shrink-0"
      data-name="state-layer"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#646e78] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Overview</p>
      </div>
    </div>
  );
}

function TabItems() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative rounded shrink-0"
      data-name=".tab items"
    >
      <StateLayer4 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-center justify-start px-4 py-2 relative shrink-0"
      data-name="state-layer"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#646e78] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Comments</p>
      </div>
    </div>
  );
}

function TabItems1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px p-0 relative rounded shrink-0"
      data-name=".tab items"
    >
      <StateLayer5 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-center justify-start px-4 py-2 relative shrink-0"
      data-name="state-layer"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#00718c] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Issues</p>
      </div>
      <div
        className="absolute bottom-0 h-0 left-px right-px"
        data-name="Active indicator"
      >
        <div
          className="absolute bottom-[-1px] left-[-1.282%] right-[-1.282%] top-[-1px]"
          style={
            {
              "--stroke-0":
                "rgba(0, 113.00000086426735, 140.00000685453415, 1)",
            } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 80 2"
          >
            <path
              d="M1 1H79"
              id="Active indicator"
              stroke="var(--stroke-0, #00718C)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TabItems2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-full items-center justify-start min-h-px min-w-px p-0 relative rounded shrink-0"
      data-name=".tab items"
    >
      <StateLayer6 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-center justify-start px-4 py-2 relative shrink-0"
      data-name="state-layer"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#646e78] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Details</p>
      </div>
    </div>
  );
}

function TabItems3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow h-full items-center justify-start min-h-px min-w-px p-0 relative rounded shrink-0"
      data-name=".tab items"
    >
      <StateLayer7 />
    </div>
  );
}

function Tabs() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Tabs"
    >
      <Divider />
      <TabItems />
      <TabItems1 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TabItems2 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TabItems3 />
      </div>
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-6" data-name="add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="add">
          <path
            d={svgPaths.p183fcc00}
            fill="var(--fill-0, #00718C)"
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
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-xl shrink-0"
      data-name="state-layer"
    >
      <Add1 />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#00718c] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Add Issue</p>
      </div>
    </div>
  );
}

function CommonButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative rounded-xl shrink-0"
      data-name="Common button"
    >
      <StateLayer8 />
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="h-8 relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start px-4 py-2 relative w-full">
          <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-center text-nowrap">
            <p className="block leading-[20px] whitespace-pre">
              All Project Issues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div
      className="bg-[#e6eaf0] box-border content-stretch flex flex-col h-8 items-start justify-start max-h-8 min-h-8 p-0 relative rounded-[999px] shrink-0"
      data-name="Chip"
    >
      <div className="absolute border border-[#00718c] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer9 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="h-8 relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start px-4 py-2 relative w-full">
          <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-center text-nowrap">
            <p className="block leading-[20px] whitespace-pre">My Issues</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-8 items-start justify-start max-h-8 min-h-8 p-0 relative rounded-[999px] shrink-0"
      data-name="Chip"
    >
      <div className="absolute border border-[#b4bac4] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer10 />
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="h-8 relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start px-4 py-2 relative w-full">
          <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-center text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Created</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip2() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-8 items-start justify-start max-h-8 min-h-8 p-0 relative rounded-[999px] shrink-0"
      data-name="Chip"
    >
      <div className="absolute border border-[#b4bac4] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer11 />
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="h-8 relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start px-4 py-2 relative w-full">
          <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-center text-nowrap">
            <p className="block leading-[20px] whitespace-pre">
              [custom_type] Tasks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip3() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-8 items-start justify-start max-h-8 min-h-8 p-0 relative rounded-[999px] shrink-0"
      data-name="Chip"
    >
      <div className="absolute border border-[#b4bac4] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <StateLayer12 />
    </div>
  );
}

function Frame1010106542() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Chip />
      <Chip1 />
      <Chip2 />
      <Chip3 />
    </div>
  );
}

function Header1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Header"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.3]">Upload file</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start pl-3 pr-1.5 py-0 relative w-full">
          <Header1 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-1.5 py-0.5 relative rounded shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#005198] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">View issue</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pl-1 pr-3 py-0 relative w-full">
          <Content />
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function Frame1010106459() {
  return (
    <div className="h-4 relative shrink-0 w-full">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 432 16"
      >
        <g id="Frame 1010106459">
          <line
            id="Line 8"
            stroke="var(--stroke-0, #E9EAEB)"
            x2="432"
            y1="7.5"
            y2="7.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1010105225() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] box-border content-stretch flex flex-row gap-1 items-center justify-center px-1.5 py-1 relative rounded shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Ready</p>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0 w-[100px]"
      data-name="Header"
    >
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Status</p>
      </div>
      <Frame1010105225 />
    </div>
  );
}

function Frame1010105226() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] box-border content-stretch flex flex-row gap-1 items-center justify-center px-1.5 py-1 relative rounded shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Angela Martin</p>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0 w-[100px]"
      data-name="Header"
    >
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Assignee</p>
      </div>
      <Frame1010105226 />
    </div>
  );
}

function Frame1010106545() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[19px] items-center justify-start p-0 relative shrink-0">
      <Header2 />
      <Header3 />
    </div>
  );
}

function Frame1010105227() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] box-border content-stretch flex flex-row gap-1 items-center justify-center px-1.5 py-1 relative rounded shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Ian</p>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0 w-[100px]"
      data-name="Header"
    >
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Creator</p>
      </div>
      <Frame1010105227 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="list Item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-0 relative w-full">
          <Frame1010106545 />
          <Header4 />
        </div>
      </div>
    </div>
  );
}

function Task() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-0 py-2.5 relative rounded-lg shrink-0 w-full"
      data-name="Task"
    >
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <ListItem />
      <Frame1010106459 />
      <ListItem1 />
    </div>
  );
}

function Frame1010106461() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2 py-0 relative w-full">
          <Task />
        </div>
      </div>
    </div>
  );
}

function Header5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Header"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.3]">Upload file</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start pl-3 pr-1.5 py-0 relative w-full">
          <Header5 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-1.5 py-0.5 relative rounded shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#005198] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">View issue</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pl-1 pr-3 py-0 relative w-full">
          <Content1 />
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Frame1010106460() {
  return (
    <div className="h-4 relative shrink-0 w-full">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 432 16"
      >
        <g id="Frame 1010106459">
          <line
            id="Line 8"
            stroke="var(--stroke-0, #E9EAEB)"
            x2="432"
            y1="7.5"
            y2="7.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1010105228() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] box-border content-stretch flex flex-row gap-1 items-center justify-center px-1.5 py-1 relative rounded shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Ready</p>
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0 w-[100px]"
      data-name="Header"
    >
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Status</p>
      </div>
      <Frame1010105228 />
    </div>
  );
}

function Frame1010105229() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] box-border content-stretch flex flex-row gap-1 items-center justify-center px-1.5 py-1 relative rounded shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">John Francis</p>
      </div>
    </div>
  );
}

function Header7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0 w-[100px]"
      data-name="Header"
    >
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Assignee</p>
      </div>
      <Frame1010105229 />
    </div>
  );
}

function Frame1010106546() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[19px] items-center justify-start p-0 relative shrink-0">
      <Header6 />
      <Header7 />
    </div>
  );
}

function Frame1010105230() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] box-border content-stretch flex flex-row gap-1 items-center justify-center px-1.5 py-1 relative rounded shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Tanya Torry</p>
      </div>
    </div>
  );
}

function Header8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0 w-[100px]"
      data-name="Header"
    >
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Creator</p>
      </div>
      <Frame1010105230 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="list Item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-0 relative w-full">
          <Frame1010106546 />
          <Header8 />
        </div>
      </div>
    </div>
  );
}

function Task1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-0 py-2.5 relative rounded-lg shrink-0 w-full"
      data-name="Task"
    >
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <ListItem2 />
      <Frame1010106460 />
      <ListItem3 />
    </div>
  );
}

function Frame1010106544() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2 py-0 relative w-full">
          <Task1 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Frame">
          <path
            d={svgPaths.p33a2c480}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative rounded shrink-0"
      data-name="Tag"
    >
      <Frame />
    </div>
  );
}

function Header9() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0"
      data-name="Header"
    >
      <div
        className="flex flex-col font-['Roboto:Medium',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[14px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.3]">Add input deck</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start pl-0 pr-1.5 py-0 relative w-full">
          <Tag />
          <Header9 />
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-1.5 py-0.5 relative rounded shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#005198] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">View issue</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between pl-1 pr-3 py-0 relative w-full">
          <Content2 />
          <Frame47 />
        </div>
      </div>
    </div>
  );
}

function Frame1010106462() {
  return (
    <div className="h-4 relative shrink-0 w-full">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 432 16"
      >
        <g id="Frame 1010106459">
          <line
            id="Line 8"
            stroke="var(--stroke-0, #E9EAEB)"
            x2="432"
            y1="7.5"
            y2="7.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1010105231() {
  return (
    <div className="bg-[#ffc505] box-border content-stretch flex flex-row gap-1 items-center justify-center px-1.5 py-1 relative rounded shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Pending</p>
      </div>
    </div>
  );
}

function Header10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0 w-[100px]"
      data-name="Header"
    >
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Status</p>
      </div>
      <Frame1010105231 />
    </div>
  );
}

function Frame1010105232() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] box-border content-stretch flex flex-row gap-1 items-center justify-center px-1.5 py-1 relative rounded shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">John Francis</p>
      </div>
    </div>
  );
}

function Header11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0 w-[100px]"
      data-name="Header"
    >
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Assignee</p>
      </div>
      <Frame1010105232 />
    </div>
  );
}

function Frame1010106547() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[19px] items-center justify-start p-0 relative shrink-0">
      <Header10 />
      <Header11 />
    </div>
  );
}

function Frame1010105233() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] box-border content-stretch flex flex-row gap-1 items-center justify-center px-1.5 py-1 relative rounded shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">AI Bot</p>
      </div>
    </div>
  );
}

function Header12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0 w-[100px]"
      data-name="Header"
    >
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[1.4] whitespace-pre">Creator</p>
      </div>
      <Frame1010105233 />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="relative shrink-0 w-full" data-name="list Item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-0 relative w-full">
          <Frame1010106547 />
          <Header12 />
        </div>
      </div>
    </div>
  );
}

function Task2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-0 py-2.5 relative rounded-lg shrink-0 w-full"
      data-name="Task"
    >
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
      <ListItem4 />
      <Frame1010106462 />
      <ListItem5 />
    </div>
  );
}

function Frame1010106543() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2 py-0 relative w-full">
          <Task2 />
        </div>
      </div>
    </div>
  );
}

function Frame1010106548() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative shrink-0 w-[448px]">
      <CommonButton1 />
      <Frame1010106542 />
      <Frame1010106461 />
      <Frame1010106544 />
      <Frame1010106543 />
    </div>
  );
}

function Frame1010105829() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 h-[746px] items-center justify-start p-0 shrink-0 sticky top-0">
      <TopHeadingWrapper />
      <Frame1010106530 />
      <Tabs />
      <Frame1010106548 />
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

function Overlay17() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 h-[770px] items-start justify-start left-[960px] px-0 py-2 top-[142px]"
      data-name="Overlay / 17"
    >
      <div className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
      <Frame1010105829 />
      <Scroll />
    </div>
  );
}

function Home4() {
  return (
    <div className="relative shrink-0 size-6" data-name="home">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="home">
          <path
            d={svgPaths.p369740f0}
            fill="var(--fill-0, #121623)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ComponentBreadcrumbCustom() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="component/breadcrumb-custom"
    >
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#005072] text-[14px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Projects</p>
      </div>
    </div>
  );
}

function BreadcrumbExample() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Breadcrumb-Example"
    >
      <Home4 />
      <div className="flex flex-col font-['Open_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative self-stretch shrink-0 text-[#d1d3d4] text-[14px] text-left w-1">
        <p className="block leading-[24px]">/</p>
      </div>
      <ComponentBreadcrumbCustom />
    </div>
  );
}

function Add2() {
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
            d={svgPaths.p21cef280}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded shrink-0"
      data-name="Button"
    >
      <Add2 />
      <div className="font-['Open_Sans:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121212] text-[16px] text-center text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Create New Project
        </p>
      </div>
    </div>
  );
}

function Frame1010106532() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <BreadcrumbExample />
      <Button />
    </div>
  );
}

function FormatListBulleted() {
  return (
    <div
      className="absolute left-2 size-6 top-2"
      data-name="format_list_bulleted"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="format_list_bulleted">
          <path
            d={svgPaths.p34667a00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ToggleElement() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-0 left-[49.367%] right-0 rounded-br-[4px] rounded-tr-[4px] top-0"
      data-name="Toggle Element"
    >
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <FormatListBulleted />
    </div>
  );
}

function GridView() {
  return (
    <div className="absolute left-2 size-6 top-2" data-name="grid_view">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="grid_view">
          <path
            d={svgPaths.p35baa200}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ToggleElement1() {
  return (
    <div
      className="absolute bg-[#000000] bottom-0 left-0 right-[49.367%] rounded-bl-[4px] rounded-tl-[4px] top-0"
      data-name="Toggle Element"
    >
      <GridView />
    </div>
  );
}

function ComponentToggelView() {
  return (
    <div
      className="h-10 relative shrink-0 w-[79px]"
      data-name="component/toggel view"
    >
      <ToggleElement />
      <ToggleElement1 />
    </div>
  );
}

function Sort() {
  return (
    <div className="relative shrink-0 size-6" data-name="sort">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="sort">
          <path
            d={svgPaths.p201d1b40}
            fill="var(--fill-0, black)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Icon"
    >
      <Sort />
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pl-0 pr-2 py-0 relative shrink-0"
      data-name="Container"
    >
      <Icon7 />
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px px-0 py-1 relative shrink-0"
      data-name="Text Container"
    >
      <div className="basis-0 font-['Open_Sans:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#545559] text-[14px] text-left">
        <p className="block leading-[24px]">Sort</p>
      </div>
    </div>
  );
}

function ExpandMore() {
  return (
    <div className="relative shrink-0 size-6" data-name="expand_more">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="expand_more">
          <path
            d={svgPaths.p18b66300}
            fill="var(--fill-0, #545559)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Icon"
    >
      <ExpandMore />
    </div>
  );
}

function ListItem6() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-start px-4 py-1 relative rounded shrink-0 w-[120px]"
      data-name="ListItem"
    >
      <div className="absolute border border-[#dcdddd] border-solid inset-0 pointer-events-none rounded" />
      <Container />
      <TextContainer />
      <Icon8 />
    </div>
  );
}

function RightGroup() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0"
      data-name="right group"
    >
      <ComponentToggelView />
      <ListItem6 />
    </div>
  );
}

function Frame1010106531() {
  return (
    <div className="absolute box-border content-stretch flex flex-row items-center justify-between left-[122px] p-0 top-[85px] w-[1296px]">
      <Frame1010106532 />
      <RightGroup />
    </div>
  );
}

function LeftPanelOpen() {
  return (
    <div className="relative shrink-0 size-6" data-name="left_panel_open">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <g id="left_panel_open">
          <path
            d={svgPaths.pbbe6700}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StateLayer13() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-[8px] relative rounded-xl shrink-0"
      data-name="state-layer"
    >
      <LeftPanelOpen />
    </div>
  );
}

function IconButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-0 relative rounded-xl shrink-0 size-10"
      data-name="Icon button"
    >
      <StateLayer13 />
    </div>
  );
}

function Branding() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Branding"
    >
      <IconButton1 />
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

function StateLayer14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <ArrowTopLeft />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer14 />
    </div>
  );
}

function NavItem() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container1 />
    </div>
  );
}

function HomeStorage() {
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
            fill="var(--fill-0, #121623)"
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
      className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <HomeStorage />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="bg-[#e6eaf0] box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer15 />
    </div>
  );
}

function NavItem1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container2 />
    </div>
  );
}

function Task3() {
  return (
    <div className="relative shrink-0 size-6" data-name="task">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="task">
          <path
            d={svgPaths.p21d7fd80}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Badge6() {
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

function StateLayer16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <Task3 />
      <Badge6 />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer16 />
    </div>
  );
}

function NavItem2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container3 />
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

function StateLayer17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <RequestQuote />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer17 />
    </div>
  );
}

function NavItem3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container4 />
    </div>
  );
}

function SlowMotionVideo() {
  return (
    <div className="relative shrink-0 size-6" data-name="slow_motion_video">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="slow_motion_video">
          <path
            d={svgPaths.p228d8e80}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StateLayer18() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <SlowMotionVideo />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer18 />
    </div>
  );
}

function NavItem4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container5 />
    </div>
  );
}

function MenuItems() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Menu items"
    >
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
    </div>
  );
}

function TopContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="Top content"
    >
      <Branding />
      <MenuItems />
    </div>
  );
}

function Person2() {
  return (
    <div className="relative shrink-0 size-6" data-name="person_2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="person_2">
          <path
            d={svgPaths.p21d8c600}
            fill="var(--fill-0, #646E78)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="absolute left-0 size-2 top-0" data-name="state-layer">
      <div
        className="absolute inset-[-12.5%]"
        style={
          {
            "--fill-0":
              "rgba(180.00000447034836, 186.0000041127205, 196.00000351667404, 1)",
          } as React.CSSProperties
        }
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 10 10"
        >
          <g id="state-layer">
            <rect
              fill="#B4BAC4"
              fillOpacity="0.12"
              height="8"
              transform="translate(1 1)"
              width="8"
            />
            <circle
              cx="5"
              cy="5"
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

function Badge7() {
  return (
    <div
      className="bg-[#b4bac4] relative rounded-[999px] shrink-0 size-2"
      data-name="Badge"
    >
      <StateLayer20 />
    </div>
  );
}

function StateLayer21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <Person2 />
      <Badge7 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer21 />
    </div>
  );
}

function NavItem6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container7 />
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#646e78] text-[12px] text-center text-nowrap w-14">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[18px] overflow-inherit">
          Personal
        </p>
      </div>
    </div>
  );
}

function StateLayer22() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative rounded-[999px] shrink-0 size-8"
      data-name="state-layer"
    >
      <div className="basis-0 flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-center">
        <p className="block leading-[19px]">FE</p>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div
      className="bg-[#121619] box-border content-stretch flex flex-row items-center justify-between max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-[999px] shrink-0 size-8"
      data-name="Avatar"
    >
      <StateLayer22 />
    </div>
  );
}

function BottomContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="Bottom content"
    >
      <NavItem6 />
      <Avatar3 />
    </div>
  );
}

function Divider1() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Divider">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 1 850"
      >
        <path
          clipRule="evenodd"
          d="M1 850H0V0H1V850Z"
          fill="var(--fill-0, #E6EAF0)"
          fillRule="evenodd"
          id="Divider"
        />
      </svg>
    </div>
  );
}

function NavigationRail() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col h-[850px] items-center justify-between max-w-20 min-w-[72px] px-3 py-6 relative shrink-0 w-20"
      data-name="Navigation Rail"
    >
      <TopContent />
      <BottomContent />
      <Divider1 />
    </div>
  );
}

function NavigationRail1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0.5 p-0 top-[62px]"
      data-name="Navigation Rail"
    >
      <NavigationRail />
    </div>
  );
}

export default function Desktop17() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Desktop - 17">
      <Frame1010105134 />
      <Frame1010105135 />
      <Overlay17 />
      <Frame1010106531 />
      <NavigationRail1 />
    </div>
  );
}