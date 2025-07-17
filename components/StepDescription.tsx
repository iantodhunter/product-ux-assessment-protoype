interface StepDescriptionProps {
  children: React.ReactNode;
}

export function StepDescription({ children }: StepDescriptionProps) {
  return (
    <div className="bg-white rounded-lg p-4 border border-[#e9ecef] shadow-sm">
      <div className="font-opensans text-[14px] text-[#474f5f] leading-relaxed">
        {children}
      </div>
    </div>
  );
}