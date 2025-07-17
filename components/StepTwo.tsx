import { useState } from 'react';
import { StepNavigationDropdown } from './StepNavigationDropdown';
import { StepDescription } from './StepDescription';

interface StepTwoProps {
  onComplete: (productName: string, productManagerName: string) => void;
  onBack: () => void;
  initialProductName: string;
  initialProductManagerName: string;
  onStepSelect?: (step: number) => void;
  completedSteps?: number[];
}



export function StepTwo({ 
  onComplete, 
  onBack, 
  initialProductName, 
  initialProductManagerName, 
  onStepSelect, 
  completedSteps = [] 
}: StepTwoProps) {
  const [productName, setProductName] = useState(initialProductName);
  const [productManagerName, setProductManagerName] = useState(initialProductManagerName);

  const handleBack = () => {
    onBack();
  };

  const handleNext = () => {
    onComplete(productName, productManagerName);
  };

  const canProceed = productName.trim() !== '' && productManagerName.trim() !== '';

  return (
    <div
      className="bg-[#f8fafd] relative size-full"
      data-name="Nexus Readiness Example"
    >
      {/* Header */}
      <div className="absolute font-hexagon leading-[0] left-[30px] not-italic text-[#000000] text-[18px] text-left text-nowrap top-6">
        <p className="block leading-[27px] whitespace-pre">Nexus Readiness</p>
      </div>
      
      {/* Step Navigation */}
      <div className="absolute left-[30px] top-[70px]">
        <StepNavigationDropdown 
          currentStep={2}
          onStepSelect={onStepSelect}
          completedSteps={completedSteps}
        />
      </div>
      
      {/* Step Description */}
      <StepDescription>
        Please provide some basic information about your product.
      </StepDescription>
      
      {/* Centered Main Content */}
      <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto">
        {/* Product Name */}
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 mb-8 w-full">
          <div className="font-hexagon leading-[0] not-italic text-[#474f5f] text-[18px] text-center">
            <p className="block leading-[27px] whitespace-pre">Product Name</p>
          </div>
          <div className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 w-full max-w-[253px]">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start mb-[-1px] p-0 relative shrink-0 w-full">
              <div className="bg-[#ffffff] box-border content-stretch flex flex-row h-10 items-center justify-start p-0 relative rounded-lg shrink-0 w-full">
                <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-lg" />
                <div className="basis-0 grow h-10 min-h-px min-w-px relative rounded-lg shrink-0">
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex flex-row h-10 items-center justify-between p-[8px] relative w-full">
                      <div className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                        <input
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                          placeholder="Add product name ..."
                          className="basis-0 font-hexagon grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#646e78] text-[16px] text-left text-nowrap bg-transparent border-none outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Manager Name */}
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 mb-16 w-full">
          <div className="font-hexagon leading-[0] not-italic text-[#474f5f] text-[18px] text-center">
            <p className="block leading-[27px] whitespace-pre">
              Product Manager's Name
            </p>
          </div>
          <div className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 w-full max-w-[253px]">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start mb-[-1px] p-0 relative shrink-0 w-full">
              <div className="bg-[#ffffff] box-border content-stretch flex flex-row h-10 items-center justify-start p-0 relative rounded-lg shrink-0 w-full">
                <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-lg" />
                <div className="basis-0 grow h-10 min-h-px min-w-px relative rounded-lg shrink-0">
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex flex-row h-10 items-center justify-between p-[8px] relative w-full">
                      <div className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                        <input
                          value={productManagerName}
                          onChange={(e) => setProductManagerName(e.target.value)}
                          placeholder="Add PM'S name ...."
                          className="basis-0 font-hexagon grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#646e78] text-[16px] text-left text-nowrap bg-transparent border-none outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="box-border content-stretch flex flex-row items-center justify-between gap-8 p-0 w-full max-w-sm">
          <button
            onClick={handleBack}
            className="box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative rounded-xl shrink-0"
          >
            <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-xl shrink-0">
              <div className="font-hexagon leading-[0] not-italic relative shrink-0 text-[#00718c] text-[16px] text-center text-nowrap">
                <p className="block leading-[24px] whitespace-pre">Back</p>
              </div>
            </div>
          </button>
          
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative rounded-xl shrink-0 ${
              canProceed ? 'bg-[#00718c]' : 'bg-[#ccc]'
            }`}
          >
            <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-xl shrink-0">
              <div className="font-hexagon leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap">
                <p className="block leading-[24px] whitespace-pre">Next</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      

    </div>
  );
}