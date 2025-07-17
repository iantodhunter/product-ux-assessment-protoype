interface StepDescriptionProps {
  children: React.ReactNode;
}

export function StepDescription({ children }: StepDescriptionProps) {
  return (
    <div className="bg-white rounded-lg p-4 border border-[#e9ecef] shadow-sm">
      <div className="font-hexagon text-[18px] text-[#474f5f] leading-[27px]">
        {children}
      </div>
    </div>
  );
}