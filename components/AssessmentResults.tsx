import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, AlertCircle, XCircle, RotateCcw } from 'lucide-react';

type ResponseValue = 'yes' | 'no' | 'planned';

export interface AppData {
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

function calculateReadinessScore(appType: string, responses: Record<string, any>): {
  score: number;
  level: 'high' | 'medium' | 'low';
  recommendations: string[];
} {
  let score = 70; // Base score
  const recommendations: string[] = [];

  // Count UX responses
  const uxResponses = Object.values(responses);
  const yesCount = uxResponses.filter(r => r === 'yes').length;
  const plannedCount = uxResponses.filter(r => r === 'planned').length;
  const noCount = uxResponses.filter(r => r === 'no').length;

  // Score based on UX readiness
  score += yesCount * 5; // +5 for each "yes"
  score += plannedCount * 2; // +2 for each "planned"
  // no points for "no" responses

  // App type specific adjustments
  if (appType === 'web') {
    score += 5; // Web apps generally have more mature tooling
  } else if (appType === 'device') {
    score += 10; // Device integration is more complex, bonus for attempting
  }

  // Determine readiness level
  let level: 'high' | 'medium' | 'low';
  if (score >= 85) level = 'high';
  else if (score >= 70) level = 'medium';
  else level = 'low';

  // Generate recommendations
  if (noCount > yesCount) {
    recommendations.push('Focus on implementing missing UX components before proceeding');
  }
  if (plannedCount > 0) {
    recommendations.push('Complete planned UX elements to improve readiness score');
  }
  if (level === 'high') {
    recommendations.push('Excellent readiness! You\'re well-prepared for Nexus integration');
  } else if (level === 'medium') {
    recommendations.push('Good foundation. Address key gaps to optimize integration success');
  } else {
    recommendations.push('Consider strengthening UX foundation before Nexus integration');
  }

  return { score, level, recommendations };
}

export function AssessmentResults({ appData, onRestart, onBack }: AssessmentResultsProps) {
  const { score, level, recommendations } = calculateReadinessScore(
    appData.appType || '', 
    appData.uxReadinessResponses
  );

  const getScoreColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getScoreIcon = (level: string) => {
    switch (level) {
      case 'high': return <CheckCircle className="w-8 h-8 text-green-600" />;
      case 'medium': return <AlertCircle className="w-8 h-8 text-yellow-600" />;
      case 'low': return <XCircle className="w-8 h-8 text-red-600" />;
      default: return null;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'high': return <Badge className="bg-green-100 text-green-800">High Readiness</Badge>;
      case 'medium': return <Badge className="bg-yellow-100 text-yellow-800">Medium Readiness</Badge>;
      case 'low': return <Badge className="bg-red-100 text-red-800">Low Readiness</Badge>;
      default: return null;
    }
  };

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

      <div className="w-full max-w-4xl space-y-6">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-hexagon text-[32px] text-[#121623] font-medium mb-2">
            Nexus Readiness Assessment Complete
          </h1>
          <p className="font-hexagon text-[18px] text-[#646e78]">
            Review your assessment results and recommendations
          </p>
        </div>
        
        {/* Score Card */}
        <Card className="text-center">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              {getScoreIcon(level)}
            </div>
            <CardTitle className="text-[32px] font-hexagon">
              Your Nexus Readiness Score
            </CardTitle>
            <div className={`text-[48px] font-bold ${getScoreColor(level)}`}>
              {score}/100
            </div>
            <div className="flex justify-center">
              {getLevelBadge(level)}
            </div>
          </CardHeader>
        </Card>

        {/* Assessment Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[24px] font-hexagon">
              Assessment Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="font-hexagon font-medium text-[16px] mb-2">Product Information</div>
                  <div className="text-[14px] text-[#646e78] space-y-1">
                    <div><strong>Product:</strong> {appData.productName}</div>
                    <div><strong>Product Manager:</strong> {appData.productManagerName}</div>
                    <div><strong>App Type:</strong> {getAppTypeLabel()}</div>
                  </div>
                </div>
                
                <div>
                  <div className="font-hexagon font-medium text-[16px] mb-2">Data Readiness</div>
                  <div className="text-[14px] text-[#646e78] space-y-1">
                    <div><strong>Current Level:</strong> Level {appData.currentDataReadinessLevel?.replace('level', '') || 'Unknown'}</div>
                    <div><strong>Goal Level:</strong> Level {appData.goalDataReadinessLevel?.replace('level', '') || 'Unknown'}</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="font-hexagon font-medium text-[16px] mb-2">UX Readiness</div>
                  <div className="text-[14px] text-[#646e78] space-y-1">
                    <div><strong>Total Questions:</strong> {Object.keys(appData.uxReadinessResponses).length}</div>
                    <div><strong>Yes:</strong> {Object.values(appData.uxReadinessResponses).filter(r => r === 'yes').length}</div>
                    <div><strong>Planned:</strong> {Object.values(appData.uxReadinessResponses).filter(r => r === 'planned').length}</div>
                    <div><strong>No:</strong> {Object.values(appData.uxReadinessResponses).filter(r => r === 'no').length}</div>
                  </div>
                </div>
                
                <div>
                  <div className="font-hexagon font-medium text-[16px] mb-2">GTM Readiness</div>
                  <div className="text-[14px] text-[#646e78]">
                    Checklist reviewed
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[24px] font-hexagon">
              Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2196f3] rounded-full mt-2 shrink-0" />
                  <p className="text-[16px] text-[#474f5f] leading-[24px]">
                    {recommendation}
                  </p>
                </div>
              ))}
            </div>
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