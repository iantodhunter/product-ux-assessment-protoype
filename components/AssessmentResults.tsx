import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, AlertCircle, XCircle, RotateCcw } from 'lucide-react';
import { AssessmentData } from '../App';

interface AssessmentResultsProps {
  assessmentData: AssessmentData;
  onRestart: () => void;
}

function calculateReadinessScore(appType: string, responses: Record<string, any>): {
  score: number;
  level: 'high' | 'medium' | 'low';
  recommendations: string[];
} {
  let score = 70; // Base score
  const recommendations: string[] = [];

  // Web app specific scoring
  if (appType === 'web') {
    if (responses.hosting === 'cloud') score += 10;
    if (responses.hosting === 'unsure') {
      score -= 5;
      recommendations.push('Consider cloud hosting for better scalability and reliability');
    }
    
    if (responses.users === 'enterprise') score += 15;
    if (responses.users === 'small') score += 5;
    
    if (responses.framework === 'react') score += 10;
    if (responses.framework === 'other') {
      score -= 5;
      recommendations.push('Consider using established frameworks for better ecosystem support');
    }
    
    if (responses.database === 'unsure') {
      score -= 10;
      recommendations.push('Define your data storage strategy early in development');
    }
  }
  
  // Desktop app specific scoring
  if (appType === 'desktop') {
    if (responses.platform === 'cross-platform') score += 15;
    if (responses.framework === 'electron') score += 10;
    if (responses.distribution === 'multiple') score += 10;
    if (responses.performance === 'realtime') {
      score += 5;
      recommendations.push('Consider native technologies for real-time performance requirements');
    }
  }
  
  // Device specific scoring
  if (appType === 'device') {
    if (responses.connectivity === 'multiple') score += 10;
    if (responses.power === 'battery') {
      score += 5;
      recommendations.push('Optimize for power efficiency in battery-powered devices');
    }
    if (responses.environment === 'industrial') {
      score += 15;
      recommendations.push('Ensure robust testing for harsh industrial environments');
    }
  }

  // Determine readiness level
  let level: 'high' | 'medium' | 'low';
  if (score >= 85) level = 'high';
  else if (score >= 70) level = 'medium';
  else level = 'low';

  // Add general recommendations based on score
  if (level === 'low') {
    recommendations.push('Consider additional planning and risk assessment before proceeding');
    recommendations.push('Evaluate if current technology choices align with project requirements');
  } else if (level === 'medium') {
    recommendations.push('Address identified gaps to improve project success probability');
  } else {
    recommendations.push('Your project shows strong readiness indicators');
  }

  return { score, level, recommendations };
}

export function AssessmentResults({ assessmentData, onRestart }: AssessmentResultsProps) {
  const { score, level, recommendations } = calculateReadinessScore(
    assessmentData.appType || '', 
    assessmentData.responses
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

  return (
    <div className="bg-[#f8fafd] size-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-[#b4bac4]">
        <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[18px] text-[#000000]">
          Nexus Readiness - Assessment Results
        </div>
        <Button variant="outline" onClick={onRestart} className="flex items-center gap-2">
          <RotateCcw className="w-4 h-4" />
          Start Over
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl space-y-6">
          
          {/* Score Card */}
          <Card className="text-center">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                {getScoreIcon(level)}
              </div>
              <CardTitle className="text-[32px]">
                Your Nexus Readiness Score
              </CardTitle>
              <div className={`text-[48px] font-bold ${getScoreColor(level)}`}>
                {score}/100
              </div>
              <div className="flex justify-center">
                {getLevelBadge(level)}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[16px] text-[#646e78]">
                Based on your {assessmentData.appType} app assessment
              </p>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[24px]">
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2196f3] rounded-full mt-2 shrink-0" />
                    <p className="text-[16px] text-[#474f5f]">
                      {recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Assessment Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[24px]">
                Assessment Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="font-medium text-[16px] mb-2">App Type</div>
                  <div className="text-[14px] text-[#646e78] capitalize">
                    {assessmentData.appType} application
                  </div>
                </div>
                <div>
                  <div className="font-medium text-[16px] mb-2">Responses</div>
                  <div className="text-[14px] text-[#646e78]">
                    {Object.keys(assessmentData.responses).length} questions answered
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-[#edf0f3] rounded-lg">
                <div className="font-medium text-[16px] mb-2">Next Steps</div>
                <p className="text-[14px] text-[#474f5f]">
                  Review the recommendations above and consider addressing any identified gaps. 
                  Contact our team for detailed guidance on improving your Nexus readiness.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}