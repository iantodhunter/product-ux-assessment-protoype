interface StepDescriptionProps {
  children: React.ReactNode;
}

export function StepDescription({ children }: StepDescriptionProps) {
  return (
    <div className="fixed left-[30px] top-[124px] z-40 w-[240px]">
      <div className="bg-white rounded-lg p-4 border border-[#e9ecef] shadow-sm">
        <div className="font-opensans text-[14px] text-[#474f5f] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}