import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';

interface GTMReadinessStepProps {
  onComplete: () => void;
  onBack: () => void;
  onStepSelect?: (step: number) => void;
  completedSteps?: number[];
}

export function GTMReadinessStep({ onComplete, onBack }: GTMReadinessStepProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-16">
      
      {/* Back Button */}
      <div className="self-start mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 text-[#00718c] hover:text-[#005a6b] transition-colors font-hexagon text-[16px]"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center max-w-2xl w-full">
        <Card className="w-full">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-[32px] font-hexagon text-[#121623] mb-4">
              Go-to-Market Readiness
            </CardTitle>
            <div className="font-hexagon text-[20px] text-[#474f5f] leading-[30px]">
              Did you complete the GTM checklist?
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-8">
              <p className="font-hexagon text-[16px] text-[#646e78] leading-[24px] mb-6">
                Before proceeding with your Nexus readiness assessment, please ensure you've completed 
                our comprehensive Go-to-Market checklist to validate your product's market readiness.
              </p>
              
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2196f3] text-white px-6 py-3 rounded-xl font-hexagon text-[16px] font-medium hover:bg-[#1976d2] transition-colors shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                View GTM Checklist
              </a>
            </div>

            <div className="bg-[#f8f9fa] rounded-lg p-4 border border-[#e9ecef]">
              <p className="font-hexagon text-[14px] text-[#6c757d] leading-[21px]">
                <strong>Note:</strong> The GTM checklist covers market analysis, competitive positioning, 
                pricing strategy, and launch planning. Completing it ensures your product is ready 
                for successful market entry.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Continue Button */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={onComplete}
            className="bg-[#00718c] text-white px-12 py-4 rounded-xl font-hexagon text-[18px] font-medium hover:bg-[#005a6b] transition-all duration-200 hover:scale-105 shadow-lg flex items-center gap-2"
          >
            Continue to Review
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}