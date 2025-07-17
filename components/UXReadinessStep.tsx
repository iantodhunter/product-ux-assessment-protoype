import { useState, useEffect, useRef } from 'react';
import { StepNavigationDropdown } from './StepNavigationDropdown';
import { StepDescription } from './StepDescription';
import { SectionStepper } from './SectionStepper';
import { Check, X, Calendar } from 'lucide-react';

interface UXReadinessStepProps {
  onComplete: (responses: Record<string, ResponseValue>) => void;
  onBack: () => void;
  appType: string | null;
  initialResponses: Record<string, ResponseValue>;
  onStepSelect?: (step: number) => void;
  completedSteps?: number[];
}

type ResponseValue = 'yes' | 'no' | 'planned';

interface Question {
  id: string;
  text: string;
  mockupType: 'login' | 'navigation' | 'account' | 'settings' | 'help';
}

interface QuestionCategory {
  title: string;
  questions: Question[];
}

function ThreeOptionButton({ 
  option, 
  isSelected, 
  onClick 
}: { 
  option: 'yes' | 'no' | 'planned'; 
  isSelected: boolean; 
  onClick: () => void; 
}) {
  const getIcon = () => {
    switch (option) {
      case 'yes':
        return <Check className="w-4 h-4" />;
      case 'no':
        return <X className="w-4 h-4" />;
      case 'planned':
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getLabel = () => {
    switch (option) {
      case 'yes':
        return 'Yes';
      case 'no':
        return 'No';
      case 'planned':
        return 'Planned';
    }
  };

  const getStyles = () => {
    if (isSelected) {
      switch (option) {
        case 'yes':
          return 'bg-[#e8f5e8] border-[#4caf50] text-[#2e7d32] z-10';
        case 'no':
          return 'bg-[#ffebee] border-[#f44336] text-[#c62828] z-10';
        case 'planned':
          return 'bg-[#e3f2fd] border-[#2196f3] text-[#1976d2] z-10';
      }
    }
    return 'bg-white border-[#e0e0e0] text-[#646e78] hover:bg-[#f5f5f5]';
  };

  const getBorderRadius = () => {
    switch (option) {
      case 'yes':
        return 'rounded-l-xl';
      case 'no':
        return 'rounded-r-xl';
      case 'planned':
        return '';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2 px-4 py-3 
        border-2 transition-all duration-200 min-w-[100px] relative
        ${getStyles()} ${getBorderRadius()}
        ${option === 'planned' ? '-ml-[2px] -mr-[2px]' : ''}
        ${option === 'no' ? '-ml-[2px]' : ''}
      `}
    >
      {getIcon()}
      <span className="font-hexagon text-[14px] font-medium">
        {getLabel()}
      </span>
    </button>
  );
}

function ThreeOptionSegmentedButton({ 
  value, 
  onChange 
}: { 
  value: ResponseValue | null; 
  onChange: (value: ResponseValue) => void; 
}) {
  return (
    <div className="flex items-center">
      <ThreeOptionButton 
        option="yes" 
        isSelected={value === 'yes'} 
        onClick={() => onChange('yes')} 
      />
      <ThreeOptionButton 
        option="no" 
        isSelected={value === 'no'} 
        onClick={() => onChange('no')} 
      />
      <ThreeOptionButton 
        option="planned" 
        isSelected={value === 'planned'} 
        onClick={() => onChange('planned')} 
      />
    </div>
  );
}

function MockupImage({ type }: { type: string }) {
  // Create wireframe shapes similar to the provided design
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center min-h-[240px] w-full max-w-[380px] border border-[#e0e0e0]">
      {/* Top circle */}
      <div className="w-12 h-12 bg-[#81c784] rounded-full mb-4"></div>
      
      {/* Long bar */}
      <div className="w-32 h-4 bg-[#81c784] rounded-full mb-4"></div>
      
      {/* Two medium bars */}
      <div className="w-24 h-3 bg-[#e0f2f1] rounded-full mb-2"></div>
      <div className="w-28 h-3 bg-[#e0f2f1] rounded-full mb-4"></div>
      
      {/* Input fields */}
      <div className="w-36 h-6 bg-[#e0f2f1] border border-[#81c784] rounded mb-2"></div>
      <div className="w-36 h-6 bg-[#e0f2f1] border border-[#81c784] rounded mb-4"></div>
      
      {/* Button */}
      <div className="w-32 h-8 bg-[#00695c] rounded"></div>
      
      {/* Footer elements */}
      <div className="flex gap-2 mt-4">
        <div className="w-16 h-2 bg-[#81c784] rounded-full"></div>
        <div className="w-8 h-2 bg-[#e0f2f1] rounded-full"></div>
      </div>
      
      {/* Bottom bar */}
      <div className="w-24 h-3 bg-[#81c784] rounded-full mt-4"></div>
      
      {/* Small Hexagon logo placeholder */}
      <div className="mt-4 text-[10px] text-[#666] font-hexagon">HEXAGON</div>
    </div>
  );
}

function QuestionItem({ 
  question, 
  response, 
  onChange 
}: { 
  question: Question; 
  response: ResponseValue | null; 
  onChange: (value: ResponseValue) => void; 
}) {
  const [scale, setScale] = useState(1);
  const questionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const { intersectionRatio, boundingClientRect } = entry;
        const viewportHeight = window.innerHeight;
        const elementTop = boundingClientRect.top;
        const elementBottom = boundingClientRect.bottom;
        
        // Check if element is in the center third of the viewport
        const centerStart = viewportHeight * 0.33;
        const centerEnd = viewportHeight * 0.67;
        
        const isInCenter = elementTop < centerEnd && elementBottom > centerStart;
        
        if (isInCenter && intersectionRatio > 0.5) {
          setScale(1.4); // Zoom in when in center
        } else {
          setScale(1); // Return to normal size
        }
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
        rootMargin: '0px'
      }
    );

    if (questionRef.current) {
      observer.observe(questionRef.current);
    }

    return () => {
      if (questionRef.current) {
        observer.unobserve(questionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={questionRef}
      className="w-full max-w-[780px] bg-[#f8f9fa] rounded-3xl p-8 border border-[#e9ecef] transition-all duration-500 ease-out shadow-md"
      style={{
        transform: `scale(${scale})`,
        boxShadow: scale > 1 ? '0 25px 50px rgba(0, 0, 0, 0.15)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Question Title */}
        <div className="text-center">
          <h3 className="font-hexagon text-[20px] text-[#212529] font-medium">
            {question.text}
          </h3>
        </div>
        
        {/* Three Option Buttons */}
        <ThreeOptionSegmentedButton value={response} onChange={onChange} />
        
        {/* Mockup Image */}
        <MockupImage type={question.mockupType} />
      </div>
    </div>
  );
}

export function UXReadinessStep({ 
  onComplete, 
  onBack, 
  appType, 
  initialResponses, 
  onStepSelect, 
  completedSteps = [] 
}: UXReadinessStepProps) {
  const [responses, setResponses] = useState<Record<string, ResponseValue>>(initialResponses);
  const [currentSection, setCurrentSection] = useState('general');
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const getAppTypeName = () => {
    switch (appType) {
      case 'web':
        return 'Web App';
      case 'desktop':
        return 'Desktop App';
      case 'device':
        return 'Device or Mixed';
      default:
        return 'Application';
    }
  };

  const questionCategories: QuestionCategory[] = [
    {
      title: 'General User Experiences',
      questions: [
        {
          id: 'nexus_auth',
          text: 'Uses Nexus authentication',
          mockupType: 'login'
        },
        {
          id: 'account_dropdown',
          text: 'Users can access their Account information using the account dropdown',
          mockupType: 'account'
        },
        {
          id: 'navigation_consistent',
          text: 'Has consistent navigation patterns throughout the application',
          mockupType: 'navigation'
        },
        {
          id: 'settings_accessible',
          text: 'Application settings are easily accessible to users',
          mockupType: 'settings'
        },
        {
          id: 'help_support',
          text: 'Help and support resources are readily available',
          mockupType: 'help'
        }
      ]
    }
  ];

  const handleResponseChange = (questionId: string, value: ResponseValue) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const allQuestionsAnswered = questionCategories.every(category =>
    category.questions.every(question => responses[question.id] !== undefined)
  );

  const handleComplete = () => {
    if (allQuestionsAnswered) {
      onComplete(responses);
    }
  };

  return (
    <div
      className="bg-[#f8fafd] relative size-full overflow-auto"
      data-name="Nexus Readiness Example"
    >
      {/* Fixed Header */}
      <div className="fixed font-hexagon leading-[0] left-[30px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-6 z-50 bg-[#f8fafd] px-4 py-2 rounded-lg">
        <p className="block leading-[27px] whitespace-pre">Nexus Readiness</p>
      </div>
      
      {/* Fixed Step Navigation */}
      <div className="fixed left-[30px] top-[70px] z-50">
        <StepNavigationDropdown 
          currentStep={4}
          onStepSelect={onStepSelect}
          completedSteps={completedSteps}
        />
      </div>
      
      {/* Step Description */}
      <StepDescription>
        <span>{`Looks like you're building a `}</span>
        <span className="font-medium">{getAppTypeName()}</span>
        <span>{`. Let's review what UX you've got in place.`}</span>
      </StepDescription>
      
      {/* Section Stepper */}
      <SectionStepper 
        appType={appType}
        currentSection={currentSection}
        completedSections={completedSections}
      />
      
      {/* Main Content */}
      <div className="pt-[130px] pb-16 pl-[380px]">
        {/* Question Categories */}
        {questionCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-48">
            {/* Questions with increased spacing for zoom effect */}
            <div className="flex flex-col gap-64 w-full items-center px-8">
              {category.questions.map((question) => (
                <QuestionItem
                  key={question.id}
                  question={question}
                  response={responses[question.id] ?? null}
                  onChange={(value) => handleResponseChange(question.id, value)}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Complete Button */}
        {allQuestionsAnswered && (
          <div className="flex justify-center mt-32 mb-16">
            <button
              onClick={handleComplete}
              className="bg-[#00718c] text-white px-8 py-3 rounded-xl font-hexagon text-[16px] font-medium hover:bg-[#005a6b] transition-colors"
            >
              Complete UX Assessment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}