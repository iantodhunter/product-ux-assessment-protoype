interface SectionStepperProps {
  appType: string | null;
  currentSection: string;
  completedSections: string[];
}

interface Section {
  id: string;
  title: string;
  subSections?: string[];
}

export function SectionStepper({ appType, currentSection, completedSections }: SectionStepperProps) {
  const getAppTypeLabel = () => {
    switch (appType) {
      case 'web':
        return 'Web App';
      case 'desktop':
        return 'Desktop App';
      case 'device':
        return 'Device';
      default:
        return 'App';
    }
  };

  const getAppSpecificSections = () => {
    switch (appType) {
      case 'web':
        return ['Web App Specific'];
      case 'desktop':
        return ['Desktop App Specific'];
      case 'device':
        return ['Device Specific'];
      default:
        return [];
    }
  };

  const sections: Section[] = [
    { id: 'general', title: 'General UX' },
    { id: 'ui', title: 'UI', subSections: getAppSpecificSections() },
    { id: 'content', title: 'Content' },
    { id: 'analytics', title: 'Analytics' }
  ];

  return (
    <div className="bg-white rounded-lg p-4 border border-[#e9ecef] shadow-sm">
      <h4 className="font-hexagon text-[18px] text-[#474f5f] font-medium mb-3">
        UX Assessment Sections
      </h4>
      <div className="space-y-2">
        {sections.map((section) => (
          <div key={section.id} className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className={`
                w-2 h-2 rounded-full transition-colors
                ${completedSections.includes(section.id) 
                  ? 'bg-[#4caf50]' 
                  : currentSection === section.id 
                    ? 'bg-[#2196f3]' 
                    : 'bg-[#e0e0e0]'
                }
              `} />
              <span className={`
                font-hexagon text-[18px] transition-colors
                ${completedSections.includes(section.id) 
                  ? 'text-[#4caf50]' 
                  : currentSection === section.id 
                    ? 'text-[#2196f3]' 
                    : 'text-[#646e78]'
                }
              `}>
                {section.title}
              </span>
            </div>
            {section.subSections && section.subSections.map((subSection) => (
              <div key={subSection} className="flex items-center gap-2 ml-4 mt-1">
                <div className="w-1 h-1 rounded-full bg-[#bbb]" />
                <span className="font-hexagon text-[16px] text-[#888]">
                  {subSection}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}