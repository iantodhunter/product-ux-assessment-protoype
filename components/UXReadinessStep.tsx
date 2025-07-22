import { useState, useEffect, useRef } from 'react';
import { UXCategory, UXQuestion } from '../src/services/contentService';
import { CheckIcon, CloseIcon, ScheduleIcon } from './icons/AppTypeIcons';

interface UXReadinessStepProps {
  questionCategories: UXCategory[];
  onComplete: (responses: Record<string, ResponseValue>) => void;
  initialResponses: Record<string, ResponseValue>;
  onStepSelect?: (step: number) => void;
  completedSteps?: number[];
}

type ResponseValue = 'yes' | 'no' | 'planned';

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
        return <CheckIcon />;
      case 'no':
        return <CloseIcon />;
      case 'planned':
        return <ScheduleIcon />;
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
        return '';
      case 'planned':
        return 'rounded-r-xl';
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

function MockupImage() {
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
  mockupImage,
  response, 
  onChange 
}: { 
  question: UXQuestion; 
  mockupImage?: string;
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
        {mockupImage ? (
          <div className="bg-white rounded-2xl p-8 flex items-center justify-center min-h-[240px] w-full max-w-[380px] border border-[#e0e0e0]">
            <img 
              src={mockupImage} 
              alt="Question mockup" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        ) : (
          <MockupImage />
        )}
      </div>
    </div>
  );
}

export function UXReadinessStep({ 
  questionCategories,
  onComplete, 
  initialResponses,
}: UXReadinessStepProps) {
  const [responses, setResponses] = useState<Record<string, ResponseValue>>(initialResponses);

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
    <div className="w-full h-full overflow-auto">
      <div className="flex flex-col items-center justify-start w-full min-h-full py-16">
        {/* Question Categories */}
        {questionCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-48 w-full flex flex-col items-center">
            {/* Questions with increased spacing for zoom effect */}
            <div className="flex flex-col gap-64 w-full items-center px-8">
              {category.questions.map((question) => (
                <QuestionItem
                  key={question.id}
                  question={question}
                  mockupImage={question.mockupImage}
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