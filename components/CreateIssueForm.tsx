import React, { useState, useEffect, useRef } from 'react';
import svgPaths from "../imports/svg-ixj44q5cs0";

interface CreateIssueFormProps {
  projectName: string;
  onBack: () => void;
  onSubmit: (issueData: any) => void;
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-5">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p39fd6f00}
          fill="var(--fill-0, black)"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 24 24"
      >
        <path
          d={svgPaths.p3e19700}
          fill="var(--fill-0, #646E78)"
        />
      </svg>
    </div>
  );
}

function Header({ onBack }: { onBack: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full">
      <button
        className="box-border content-stretch cursor-pointer flex flex-row items-center justify-center overflow-visible p-[2px] relative rounded-[48px] shrink-0 hover:bg-gray-100"
        onClick={onBack}
      >
        <ArrowLeft />
      </button>
      <div className="flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] h-full justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121623] text-[18px] text-left text-nowrap w-[236px]">
        <p className="block leading-[27px] overflow-inherit">
          Create Issue
        </p>
      </div>
    </div>
  );
}

function Dropdown({ label, value, placeholder, options, onChange }: {
  label: string;
  value: string;
  placeholder: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">{label}</p>
      </div>
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          className="bg-[#ffffff] box-border content-stretch flex flex-row h-10 items-center justify-start p-0 relative rounded-lg shrink-0 w-full hover:bg-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-lg" />
          <div className="basis-0 grow h-10 min-h-px min-w-px relative rounded-lg shrink-0">
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex flex-row h-10 items-center justify-between p-[8px] relative w-full">
                <div className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                  <div className="basis-0 font-['Hexagon_Akkurat:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#646e78] text-[16px] text-left text-nowrap">
                    <p className="block leading-[20px] overflow-inherit">
                      {value || placeholder}
                    </p>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-row gap-1 items-center justify-end p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-0 relative rounded-xl shrink-0 size-10">
                    <div className="box-border content-stretch flex flex-row items-center justify-center max-h-10 max-w-10 min-h-10 min-w-10 p-[8px] relative rounded-xl shrink-0">
                      <KeyboardArrowDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-[#e6eaf0] rounded-lg shadow-lg">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                <span className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[#121623] text-[16px]">
                  {option}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TextInput({ label, value, placeholder, onChange, multiline = false }: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}) {
  const inputHeight = multiline ? 'h-[108px]' : 'h-[58px]';
  
  return (
    <div className={`box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full ${inputHeight}`}>
      <div className="basis-0 grow min-h-px min-w-px relative rounded shrink-0 w-full">
        <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded" />
        <div className="flex flex-col justify-center relative size-full">
          <div className="box-border content-stretch flex flex-col items-start justify-center px-3 py-0 relative size-full">
            <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px overflow-clip px-0 py-[15px] relative shrink-0 w-full">
              <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                <div className="basis-0 flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#646e78] text-[16px] text-left">
                  {multiline ? (
                    <textarea
                      className="block leading-[24px] bg-transparent border-none outline-none resize-none w-full h-full"
                      placeholder={placeholder}
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                    />
                  ) : (
                    <input
                      className="block leading-[24px] bg-transparent border-none outline-none w-full"
                      placeholder={placeholder}
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CreateIssueForm({ projectName, onBack, onSubmit }: CreateIssueFormProps) {
  const [formData, setFormData] = useState({
    project: projectName,
    assignTo: '',
    message: '',
    type: '',
    relatedFiles: []
  });

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit(formData);
      // Reset form
      setFormData({
        project: projectName,
        assignTo: '',
        message: '',
        type: '',
        relatedFiles: []
      });
    }
  };

  const isFormValid = formData.assignTo.trim() !== '' && formData.type !== '';

  return (
    <div className="box-border content-stretch flex flex-col h-[746px] items-center justify-between p-0 shrink-0 sticky top-0">
      {/* Header and Form Content */}
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[16px] relative shrink-0 w-[500px]">
        <div className="absolute border-[#f0f0f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        
        <Header onBack={onBack} />
        
        {/* Project Dropdown */}
        <Dropdown
          label="Project"
          value={formData.project}
          placeholder="Select project"
          options={[projectName]}
          onChange={(value) => setFormData({...formData, project: value})}
        />

        {/* Assign To Section */}
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] h-5 justify-center leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-left w-[261px]">
            <p className="block leading-[20px]">Assign to</p>
          </div>
          
          {/* Email Input */}
          <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-row gap-4 grow h-[74px] items-center justify-start min-h-px min-w-px px-0 py-2 relative shrink-0">
            <div className="basis-0 box-border content-stretch flex flex-row gap-4 grow h-full items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
              <TextInput
                label=""
                value={formData.assignTo}
                placeholder="Enter email addresses"
                onChange={(value) => setFormData({...formData, assignTo: value})}
              />
            </div>
          </div>
          
          {/* Optional Message */}
          <div className="bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start p-0 relative rounded-lg shrink-0 w-full">
            <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-lg" />
            <div className="basis-0 grow min-h-px min-w-px relative rounded-lg self-stretch shrink-0">
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-row items-start justify-start p-[8px] relative size-full">
                  <div className="basis-0 font-['Hexagon_Akkurat:Regular',_sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#858c99] text-[16px] text-left">
                    <textarea
                      className="block mb-0 bg-transparent border-none outline-none resize-none w-full h-[84px]"
                      placeholder="Optional message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Type and Related Files */}
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
          {/* Type Dropdown */}
          <Dropdown
            label="Type"
            value={formData.type}
            placeholder="Select issue type ..."
            options={['Bug', 'Feature Request', 'Task', 'Question']}
            onChange={(value) => setFormData({...formData, type: value})}
          />

          {/* Related Files */}
          <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
            <Dropdown
              label="Related file(s)"
              value=""
              placeholder="Select from project files ..."
              options={['piston_model_v2.step', 'material_properties.xlsx', 'simulation_report.pdf']}
              onChange={() => {}}
            />
            <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[0px] text-left text-nowrap">
              <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[20px] text-[16px] whitespace-pre cursor-pointer hover:text-[#00718c]">+ Import new</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-between px-4 py-0 relative w-full">
            <div className="box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative rounded-xl shrink-0">
              <button
                className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-xl shrink-0 hover:bg-gray-50"
                onClick={onBack}
              >
                <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#00718c] text-[16px] text-center text-nowrap">
                  <p className="block leading-[24px] whitespace-pre">Cancel</p>
                </div>
              </button>
            </div>
            <div className="bg-[#ffffff] box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative rounded-xl shrink-0">
              <button
                className={`box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-xl shrink-0 ${
                  isFormValid 
                    ? 'bg-[#00718c] hover:bg-[#005a6b] cursor-pointer' 
                    : 'bg-[rgba(180,186,196,0.12)] cursor-not-allowed'
                }`}
                onClick={handleSubmit}
                disabled={!isFormValid}
              >
                <div className={`font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap ${
                  isFormValid ? 'text-[#ffffff]' : 'text-[#b4bac4]'
                }`}>
                  <p className="block leading-[24px] whitespace-pre">Create issue</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}