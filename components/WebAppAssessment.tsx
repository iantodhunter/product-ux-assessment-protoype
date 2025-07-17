import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface WebAppAssessmentProps {
  onComplete: (responses: Record<string, any>) => void;
  onBack: () => void;
}

const questions = [
  {
    id: 'hosting',
    title: 'Where will your web app be hosted?',
    options: [
      { value: 'cloud', label: 'Cloud hosting (AWS, Azure, GCP)' },
      { value: 'on-premise', label: 'On-premise servers' },
      { value: 'hybrid', label: 'Hybrid cloud/on-premise' },
      { value: 'unsure', label: 'Not sure yet' }
    ]
  },
  {
    id: 'users',
    title: 'How many concurrent users do you expect?',
    options: [
      { value: 'small', label: 'Less than 100' },
      { value: 'medium', label: '100 - 1,000' },
      { value: 'large', label: '1,000 - 10,000' },
      { value: 'enterprise', label: '10,000+' }
    ]
  },
  {
    id: 'framework',
    title: 'What frontend framework will you use?',
    options: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue.js' },
      { value: 'angular', label: 'Angular' },
      { value: 'other', label: 'Other/Custom' }
    ]
  },
  {
    id: 'database',
    title: 'What type of database will you use?',
    options: [
      { value: 'sql', label: 'SQL Database (PostgreSQL, MySQL)' },
      { value: 'nosql', label: 'NoSQL Database (MongoDB, DynamoDB)' },
      { value: 'both', label: 'Both SQL and NoSQL' },
      { value: 'unsure', label: 'Not determined yet' }
    ]
  }
];

export function WebAppAssessment({ onComplete, onBack }: WebAppAssessmentProps) {
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
          Nexus Readiness - Web App Assessment
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