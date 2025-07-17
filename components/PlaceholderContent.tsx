import React from 'react';

interface PlaceholderContentProps {
  title: string;
}

export function PlaceholderContent({ title }: PlaceholderContentProps) {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="text-center">
        <h2 className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[#999999] text-[32px] mb-2">
          {title}
        </h2>
        <p className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[#999999] text-[18px]">
          Coming Soon
        </p>
      </div>
    </div>
  );
}