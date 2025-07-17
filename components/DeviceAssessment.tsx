import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface DeviceAssessmentProps {
  onComplete: (responses: Record<string, any>) => void;
  onBack: () => void;
}

const questions = [
  {
    id: 'deviceType',
    title: 'What type of device are you building for?',
    options: [
      { value: 'iot', label: 'IoT devices (sensors, smart home)' },
      { value: 'mobile', label: 'Mobile devices (phones, tablets)' },
      { value: 'embedded', label: 'Embedded systems' },
      { value: 'mixed', label: 'Mixed reality (AR/VR)' }
    ]
  },
  {
    id: 'connectivity',
    title: 'How will your device connect?',
    options: [
      { value: 'wifi', label: 'Wi-Fi only' },
      { value: 'cellular', label: 'Cellular (4G/5G)' },
      { value: 'bluetooth', label: 'Bluetooth/BLE' },
      { value: 'multiple', label: 'Multiple connectivity options' }
    ]
  },
  {
    id: 'power',
    title: 'What are your power requirements?',
    options: [
      { value: 'battery', label: 'Battery powered (long life)' },
      { value: 'plugged', label: 'Always plugged in' },
      { value: 'solar', label: 'Solar or alternative power' },
      { value: 'variable', label: 'Variable power scenarios' }
    ]
  },
  {
    id: 'environment',
    title: 'What environment will the device operate in?',
    options: [
      { value: 'indoor', label: 'Indoor controlled environment' },
      { value: 'outdoor', label: 'Outdoor weatherproof needed' },
      { value: 'industrial', label: 'Industrial/harsh conditions' },
      { value: 'consumer', label: 'Consumer/home environment' }
    ]
  }
];

export function DeviceAssessment({ onComplete, onBack }: DeviceAssessmentProps) {
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
          Nexus Readiness - Device Assessment
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