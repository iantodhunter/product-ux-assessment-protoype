import svgPaths from "./svg-ljptb3jhll";
import imgImagePlaceholder from "figma:asset/3e47576a9d52720ba03b5132f9a322a51dbed37b.png";

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

function NexusBug() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-10" data-name="Nexus Bug">
      <NexusLogo />
    </div>
  );
}

function StateLayer() {
  return (
    <div
      className="relative rounded-lg shrink-0 w-full"
      data-name="state-layer"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative w-full">
          <NexusBug />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px p-0 relative rounded-lg shrink-0 w-full"
      data-name="Container"
    >
      <StateLayer />
    </div>
  );
}

function NexusIconNav() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0 size-14"
      data-name="Nexus icon Nav"
    >
      <Container />
    </div>
  );
}

function Branding() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-0 relative shrink-0"
      data-name="Branding"
    >
      <NexusIconNav />
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

function StateLayer1() {
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
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer1 />
    </div>
  );
}

function NavItem() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-14 items-center justify-center p-0 relative shrink-0"
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

function StateLayer2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <HomeStorage />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="basis-0 bg-[#e6eaf0] box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer2 />
    </div>
  );
}

function NavItem1() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-14 items-center justify-center p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container2 />
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

function StateLayer3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <MenuBook />
    </div>
  );
}

function Container3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer3 />
    </div>
  );
}

function NavItem2() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-14 items-center justify-center p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container3 />
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

function StateLayer4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <AssignmentTurnedIn />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer4 />
    </div>
  );
}

function NavItem3() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-14 items-center justify-center p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container4 />
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

function StateLayer5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <RequestQuote />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer5 />
    </div>
  );
}

function NavItem4() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-14 items-center justify-center p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container5 />
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

function StateLayer6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <Add />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer6 />
    </div>
  );
}

function NavItem5() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-14 items-center justify-center p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container6 />
    </div>
  );
}

function MenuItems() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Menu items"
    >
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
      <NavItem5 />
    </div>
  );
}

function TopContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-center justify-start p-0 relative shrink-0"
      data-name="Top content"
    >
      <MenuItems />
    </div>
  );
}

function TopContent1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-center justify-start p-0 relative shrink-0"
      data-name="Top content"
    >
      <Branding />
      <TopContent />
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

function StateLayer7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <Notifications />
      <Badge />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer7 />
    </div>
  );
}

function NavItem6() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-9 items-center justify-start p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container7 />
    </div>
  );
}

function StateLayer8() {
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
      <StateLayer8 />
    </div>
  );
}

function StateLayer9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center px-4 py-2 relative rounded-lg shrink-0"
      data-name="state-layer"
    >
      <Avatar />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative rounded-lg shrink-0"
      data-name="Container"
    >
      <StateLayer9 />
    </div>
  );
}

function NavItem7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0"
      data-name=".Nav item"
    >
      <Container8 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative rounded-[999px] shrink-0 size-8"
      data-name="state-layer"
    >
      <div className="basis-0 flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-center">
        <p className="block leading-[19px]">JS</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div
      className="bg-[#858c99] box-border content-stretch flex flex-row items-center justify-between max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-[999px] shrink-0 size-8"
      data-name="Avatar"
    >
      <StateLayer10 />
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
      <NavItem7 />
      <Avatar1 />
    </div>
  );
}

function Divider() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Divider">
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
          id="Divider"
        />
      </svg>
    </div>
  );
}

function NavigationRail() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow items-center justify-between max-w-20 min-h-px min-w-[72px] px-3 py-6 relative shrink-0 w-20"
      data-name="Navigation Rail"
    >
      <TopContent1 />
      <BottomContent />
      <Divider />
    </div>
  );
}

export default function ProjectsMainRail() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative size-full"
      data-name="Projects Main Rail"
    >
      <NavigationRail />
    </div>
  );
}