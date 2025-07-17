import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface DesktopAppAssessmentProps {
  onComplete: (responses: Record<string, any>) => void;
  onBack: () => void;
}

const questions = [
  {
    id: 'platform',
    title: 'Which platforms will your desktop app support?',
    options: [
      { value: 'windows', label: 'Windows only' },
      { value: 'mac', label: 'macOS only' },
      { value: 'linux', label: 'Linux only' },
      { value: 'cross-platform', label: 'Cross-platform (Windows, macOS, Linux)' }
    ]
  },
  {
    id: 'framework',
    title: 'What technology stack will you use?',
    options: [
      { value: 'electron', label: 'Electron (Web technologies)' },
      { value: 'native', label: 'Native (C++, .NET, Swift)' },
      { value: 'flutter', label: 'Flutter Desktop' },
      { value: 'tauri', label: 'Tauri (Rust + Web)' }
    ]
  },
  {
    id: 'distribution',
    title: 'How will you distribute your desktop app?',
    options: [
      { value: 'store', label: 'App stores (Microsoft Store, Mac App Store)' },
      { value: 'direct', label: 'Direct download from website' },
      { value: 'enterprise', label: 'Enterprise deployment tools' },
      { value: 'multiple', label: 'Multiple distribution channels' }
    ]
  },
  {
    id: 'performance',
    title: 'What are your performance requirements?',
    options: [
      { value: 'light', label: 'Light usage (office productivity)' },
      { value: 'medium', label: 'Medium usage (data processing)' },
      { value: 'heavy', label: 'Heavy usage (graphics, gaming)' },
      { value: 'realtime', label: 'Real-time processing required' }
    ]
  }
];

export function DesktopAppAssessment({ onComplete, onBack }: DesktopAppAssessmentProps) {
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleResponse = (questionId: string, value: string) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete(responses);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else {
      onBack();
    }
  };

  const question = questions[currentQuestion];
  const isAnswered = responses[question.id];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-[#f8fafd] size-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-[#b4bac4]">
        <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[18px] text-[#000000]">
          Nexus Readiness - Desktop App Assessment
        </div>
        <div className="text-[14px] text-[#646e78]">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#edf0f3] h-2">
        <div 
          className="bg-[#2196f3] h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-[24px] text-center">
              {question.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup 
              value={responses[question.id] || ''} 
              onValueChange={(value) => handleResponse(question.id, value)}
              className="space-y-4"
            >
              {question.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label 
                    htmlFor={option.value} 
                    className="text-[16px] cursor-pointer flex-1 py-3"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between p-6 border-t border-[#b4bac4]">
        <Button
          variant="outline"
          onClick={handlePrevious}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {currentQuestion === 0 ? 'Back to App Selection' : 'Previous'}
        </Button>
        
        <Button
          onClick={handleNext}
          disabled={!isAnswered}
          className="flex items-center gap-2"
        >
          {currentQuestion === questions.length - 1 ? 'Complete Assessment' : 'Next'}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}