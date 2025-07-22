import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, AlertCircle, XCircle, RotateCcw } from 'lucide-react';
import useContent from '../src/hooks/useContent';

type ResponseValue = 'yes' | 'no' | 'planned';

interface AppData {
  appType: string | null;
  productName: string;
  productManagerName: string;
  currentDataReadinessLevel: string | null;
  goalDataReadinessLevel: string | null;
  uxReadinessResponses: Record<string, ResponseValue>;
}

interface AssessmentResultsProps {
  appData: AppData;
  onRestart: () => void;
  onBack: () => void;
}

function UXMatrix({ responses, appType }: { responses: Record<string, ResponseValue>; appType: string | null }) {
  const { content } = useContent();
  
  if (!content.uxCategories) return null;

  const getSquareColor = (response: ResponseValue | undefined) => {
    switch (response) {
      case 'yes': return 'bg-[#81c784]';
      case 'no': return 'bg-[#ef5350]';
      case 'planned': return 'bg-[#64b5f6]';
      default: return 'bg-[#e0e0e0]';
    }
  };

  const getFilteredQuestions = (category: any) => {
    const filteredQuestions = category.questions.filter((question: any) => 
      !question.appTypeSpecific || question.appTypeSpecific === appType
    );
    
    // Sort so universal questions come first
    return filteredQuestions.sort((a: any, b: any) => {
      if (!a.appTypeSpecific && b.appTypeSpecific) return -1;
      if (a.appTypeSpecific && !b.appTypeSpecific) return 1;
      return 0;
    });
  };

  const calculateCategoryPercentage = (category: any) => {
    const filteredQuestions = getFilteredQuestions(category);
    const yesResponses = filteredQuestions.filter((question: any) => responses[question.id] === 'yes').length;
    if (filteredQuestions.length === 0) return 0;
    return Math.round((yesResponses / filteredQuestions.length) * 100);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#81c784] rounded"></div>
          <span className="text-sm font-hexagon">Yes</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#ef5350] rounded"></div>
          <span className="text-sm font-hexagon">No</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#64b5f6] rounded"></div>
          <span className="text-sm font-hexagon">Planned</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#e0e0e0] rounded"></div>
          <span className="text-sm font-hexagon">Not Answered</span>
        </div>
      </div>
      
      {content.uxCategories.map((category) => {
        const filteredQuestions = getFilteredQuestions(category);
        const percentage = calculateCategoryPercentage(category);
        
        return (
          <div key={category.id} className="flex items-center gap-6">
            <div className="w-8 text-center">
              <span className="font-hexagon text-[14px] text-[#666] font-medium">{percentage}%</span>
            </div>
            <div className="w-28 text-right">
              <span className="font-hexagon text-[16px] text-[#474f5f]">{category.title}</span>
            </div>
            <div className="flex gap-2">
              {filteredQuestions.map((question: any) => (
                <div
                  key={question.id}
                  className={`w-12 h-12 rounded ${getSquareColor(responses[question.id])}`}
                  title={question.text}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DataReadinessSection({ currentLevel, goalLevel }: { currentLevel: string | null; goalLevel: string | null }) {
  const { content } = useContent();
  
  const getCurrentLevelData = () => {
    return content.dataReadinessLevels?.find(level => level.id === currentLevel);
  };

  const getGoalLevelData = () => {
    return content.dataReadinessLevels?.find(level => level.id === goalLevel);
  };

  const currentLevelData = getCurrentLevelData();
  const goalLevelData = getGoalLevelData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <h4 className="font-hexagon text-[18px] font-medium text-[#121623]">Current Level</h4>
        <div className="bg-[#e8f5e8] border-2 border-[#4caf50] rounded-xl p-6">
          <div className="font-hexagon text-[24px] font-medium text-[#2e7d32] mb-2">
            {currentLevelData?.level || 'Unknown'}
          </div>
          <div className="font-hexagon text-[16px] text-[#2e7d32]">
            {currentLevelData?.subtitle || 'No data available'}
          </div>
          <p className="font-hexagon text-[14px] text-[#646e78] mt-2">
            {currentLevelData?.description || 'No description available'}
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="font-hexagon text-[18px] font-medium text-[#121623]">Goal Level</h4>
        <div className="bg-[#e3f2fd] border-2 border-[#2196f3] rounded-xl p-6">
          <div className="font-hexagon text-[24px] font-medium text-[#1976d2] mb-2">
            {goalLevelData?.level || 'Unknown'}
          </div>
          <div className="font-hexagon text-[16px] text-[#1976d2]">
            {goalLevelData?.subtitle || 'No data available'}
          </div>
          <p className="font-hexagon text-[14px] text-[#646e78] mt-2">
            {goalLevelData?.description || 'No description available'}
          </p>
        </div>
      </div>
    </div>
  );
}

function GTMSection() {
  return (
    <div className="bg-[#e8f5e8] border-2 border-[#4caf50] rounded-xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <CheckCircle className="w-6 h-6 text-[#4caf50]" />
        <h4 className="font-hexagon text-[18px] font-medium text-[#2e7d32]">
          GTM Checklist Status
        </h4>
      </div>
      <div className="font-hexagon text-[16px] text-[#2e7d32] mb-2">
        ✓ GTM Checklist Completed
      </div>
      <p className="font-hexagon text-[14px] text-[#646e78]">
        Go-to-Market checklist has been reviewed and completed, indicating readiness for market entry.
      </p>
    </div>
  );
}

export function AssessmentResults({ appData, onRestart, onBack }: AssessmentResultsProps) {
  const getAppTypeLabel = () => {
    switch (appData.appType) {
      case 'web': return 'Web App';
      case 'desktop': return 'Desktop App'; 
      case 'device': return 'Device or Mixed';
      default: return 'Application';
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-full overflow-auto py-16 px-8">
      
      {/* Back Button */}
      <div className="self-start mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 text-[#00718c] hover:text-[#005a6b] transition-colors font-hexagon text-[16px]"
        >
          <span className="material-symbols-outlined text-[20px]">
            arrow_back
          </span>
          Back
        </button>
      </div>

      <div className="w-full max-w-6xl space-y-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-hexagon text-[32px] text-[#121623] font-medium mb-2">
            Nexus Readiness Assessment Complete
          </h1>
          <div className="font-hexagon text-[18px] text-[#646e78] space-y-1">
            <div><strong>Product:</strong> {appData.productName}</div>
            <div><strong>Product Manager:</strong> {appData.productManagerName}</div>
            <div><strong>App Type:</strong> {getAppTypeLabel()}</div>
          </div>
        </div>
        
        {/* Data Readiness Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[24px] font-hexagon">
              Data Readiness Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DataReadinessSection 
              currentLevel={appData.currentDataReadinessLevel}
              goalLevel={appData.goalDataReadinessLevel}
            />
          </CardContent>
        </Card>

        {/* UX Readiness Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[24px] font-hexagon">
              UX Readiness Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <UXMatrix 
              responses={appData.uxReadinessResponses}
              appType={appData.appType}
            />
          </CardContent>
        </Card>

        {/* GTM Readiness Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[24px] font-hexagon">
              Go-to-Market Readiness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <GTMSection />
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[24px] font-hexagon">
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-[#f8f9fa] rounded-lg p-6">
              <div className="font-hexagon font-medium text-[18px] mb-3">Ready to proceed?</div>
              <p className="text-[16px] text-[#474f5f] leading-[24px] mb-4">
                Based on your assessment results, we recommend connecting with our integration team 
                to discuss your Nexus readiness and plan your next steps.
              </p>
              <div className="flex gap-4">
                <Button 
                  className="bg-[#2196f3] text-white hover:bg-[#1976d2]"
                  onClick={() => window.open('mailto:nexus-support@example.com', '_blank')}
                >
                  Contact Integration Team
                </Button>
                <Button variant="outline" onClick={onRestart} className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Start New Assessment
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}