import React, { useState } from 'react';
import svgPaths from "../imports/svg-j0cnvohdkw";
import { CreateIssueForm } from './CreateIssueForm';
import { File, Folder, FileSpreadsheet, FileText, Upload, Plus } from 'lucide-react';

interface ProjectPanelProps {
  projectId: string;
  onClose: () => void;
}

function Dismiss() {
  return (
    <div className="relative shrink-0 size-5">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            clipRule="evenodd"
            d={svgPaths.p742d200}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d={svgPaths.p183fcc00}
            fill="var(--fill-0, #00718C)"
          />
        </g>
      </svg>
    </div>
  );
}

function TaskIcon() {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g>
          <path
            d={svgPaths.p33a2c480}
            fill="var(--fill-0, black)"
          />
        </g>
      </svg>
    </div>
  );
}

interface TabProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function Tab({ active, onClick, children }: TabProps) {
  return (
    <div
      className={`box-border content-stretch flex flex-col items-center justify-end p-0 relative shrink-0 cursor-pointer min-w-0`}
      onClick={onClick}
    >
      <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center px-4 py-2 relative shrink-0">
        <div className={`font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap ${active ? 'text-[#00718c]' : 'text-[#646e78]'}`}>
          <p className="block leading-[24px] whitespace-pre">{children}</p>
        </div>
        {active && (
          <div className="absolute bottom-0 h-0 left-1 right-1">
            <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                role="presentation"
                viewBox="0 0 80 2"
              >
                <path
                  d="M1 1H79"
                  stroke="#00718C"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function IssueTask({ title, status, assignee, creator }: {
  title: string;
  status: string;
  assignee: string;
  creator: string;
}) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ready': return 'bg-[rgba(0,0,0,0.1)]';
      case 'pending': return 'bg-[#ffc505]';
      default: return 'bg-[rgba(0,0,0,0.1)]';
    }
  };

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-0 py-2.5 relative rounded-lg shrink-0 w-full">
      <div className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
      {/* Task Header */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-between pl-1 pr-3 py-0 relative w-full">
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start pl-0 pr-1.5 py-0 relative w-full">
                  {title.includes('Add input deck') && (
                    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[4px] relative rounded shrink-0">
                      <TaskIcon />
                    </div>
                  )}
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                    <div className="flex flex-col font-['Roboto:Medium',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[14px] text-left" style={{ width: "min-content" }}>
                      <p className="block leading-[1.3]">{title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.04)] box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-1.5 py-0.5 relative rounded shrink-0">
              <div className="flex flex-col font-['Roboto:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#005198] text-[14px] text-left text-nowrap">
                <p className="block leading-[1.4] whitespace-pre">View issue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="h-4 relative shrink-0 w-full">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 432 16">
          <g><line stroke="#E9EAEB" x2="432" y1="7.5" y2="7.5" /></g>
        </svg>
      </div>

      {/* Task Details */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-0 relative w-full">
            <div className="box-border content-stretch flex flex-row gap-[19px] items-center justify-start p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0 w-[100px]">
                <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
                  <p className="block leading-[1.4] whitespace-pre">Status</p>
                </div>
                <div className={`${getStatusColor(status)} box-border content-stretch flex flex-row gap-1 items-center justify-center px-1.5 py-1 relative rounded shrink-0`}>
                  <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
                    <p className="block leading-[1.4] whitespace-pre">{status}</p>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0 w-[100px]">
                <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
                  <p className="block leading-[1.4] whitespace-pre">Assignee</p>
                </div>
                <div className="bg-[rgba(0,0,0,0.1)] box-border content-stretch flex flex-row gap-1 items-center justify-center px-1.5 py-1 relative rounded shrink-0">
                  <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
                    <p className="block leading-[1.4] whitespace-pre">{assignee}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0 w-[100px]">
              <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
                <p className="block leading-[1.4] whitespace-pre">Creator</p>
              </div>
              <div className="bg-[rgba(0,0,0,0.1)] box-border content-stretch flex flex-row gap-1 items-center justify-center px-1.5 py-1 relative rounded shrink-0">
                <div className="flex flex-col font-['Roboto:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
                  <p className="block leading-[1.4] whitespace-pre">{creator}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterChip({ label, active }: { label: string; active: boolean }) {
  return (
    <div className={`${active ? 'bg-[#e6eaf0] border-[#00718c]' : 'border-[#b4bac4]'} box-border content-stretch flex flex-col h-8 items-start justify-start max-h-8 min-h-8 p-0 relative rounded-[999px] shrink-0`}>
      <div className="absolute border border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="h-8 relative shrink-0 w-full">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start px-4 py-2 relative w-full">
            <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121623] text-[16px] text-center text-nowrap">
              <p className="block leading-[20px] whitespace-pre">{label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectPanel({ projectId, onClose }: ProjectPanelProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isCreatingIssue, setIsCreatingIssue] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [issues, setIssues] = useState([
    {
      id: '1',
      title: 'Upload file',
      status: 'Ready',
      assignee: 'Angela Martin',
      creator: 'Ian'
    },
    {
      id: '2',
      title: 'Upload file',
      status: 'Ready',
      assignee: 'John Francis',
      creator: 'Tanya Torry'
    },
    {
      id: '3',
      title: 'Add input deck',
      status: 'Pending',
      assignee: 'John Francis',
      creator: 'AI Bot'
    }
  ]);

  const [files, setFiles] = useState([
    { id: '1', name: 'CAD Models', type: 'folder', modified: '2 hours ago', size: '' },
    { id: '2', name: 'piston_model_v2.step', type: 'file', modified: '2 hours ago', size: '2.4 MB' },
    { id: '3', name: 'material_properties.xlsx', type: 'excel', modified: 'yesterday', size: '156 KB' },
    { id: '4', name: 'simulation_report.pdf', type: 'pdf', modified: '3 days ago', size: '1.8 MB' },
    { id: '5', name: 'input_deck.inp', type: 'file', modified: '1 week ago', size: '45 KB' },
    { id: '6', name: 'Documentation', type: 'folder', modified: '2 weeks ago', size: '' }
  ]);

  const getProjectName = (id: string) => {
    const names: Record<string, string> = {
      'piston': 'Piston',
      'gearbox': 'Gearbox',
      'f1': 'F1'
    };
    return names[id] || 'Project';
  };

  const projectName = getProjectName(projectId);

  const handleCreateIssue = (issueData: any) => {
    const newIssue = {
      id: Date.now().toString(),
      title: issueData.type || 'New Issue',
      status: 'Ready',
      assignee: issueData.assignTo.split('@')[0] || 'Unassigned',
      creator: 'Current User'
    };
    setIssues([...issues, newIssue]);
    setIsCreatingIssue(false);
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'folder':
        return <Folder className="w-5 h-5 text-[#0066cc]" />;
      case 'excel':
        return <FileSpreadsheet className="w-5 h-5 text-[#28a745]" />;
      case 'pdf':
        return <FileText className="w-5 h-5 text-[#dc3545]" />;
      default:
        return <File className="w-5 h-5 text-[#6c757d]" />;
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Handle file upload logic here
    console.log('Files dropped:', e.dataTransfer.files);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-[468px]">
            {/* Upload Area */}
            <div 
              className={`w-full border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                isDragOver 
                  ? 'border-[#00718c] bg-[#f0f8ff]' 
                  : 'border-[#e6eaf0] bg-[#f8f9fa] hover:border-[#00718c] hover:bg-[#f0f8ff]'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="w-8 h-8 text-[#646e78] mx-auto mb-2" />
              <p className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[#121623] text-[14px] mb-1">
                Drop files here to upload
              </p>
              <p className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[#646e78] text-[12px]">
                or <button className="text-[#00718c] hover:underline">browse</button>
              </p>
            </div>

            {/* Files List */}
            <div className="w-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[#121623] text-[16px]">Files</h3>
                <button className="flex items-center gap-2 text-[#00718c] hover:text-[#005a6b] transition-colors">
                  <Plus className="w-4 h-4" />
                  <span className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[14px]">New folder</span>
                </button>
              </div>
              
              <div className="space-y-1">
                {files.map((file) => (
                  <div 
                    key={file.id} 
                    className="flex items-center gap-3 p-2 rounded hover:bg-[#f8f9fa] cursor-pointer transition-colors group"
                  >
                    {getFileIcon(file.type)}
                    <div className="flex-1 min-w-0">
                      <p className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[#121623] text-[14px] truncate">
                        {file.name}
                      </p>
                      <p className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[#646e78] text-[12px]">
                        Modified {file.modified}{file.size && ` • ${file.size}`}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-[#646e78] hover:text-[#121623] p-1">
                        <File className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'comments':
        return (
          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative shrink-0 w-[468px]">
            <div className="flex flex-col items-center justify-center h-32 w-full text-center">
              <h3 className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[#646e78] text-[18px] mb-2">Comments</h3>
              <p className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[#999999] text-[14px]">Project comments would appear here</p>
            </div>
          </div>
        );
      case 'issues':
        return (
          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative shrink-0 w-[468px]">
            {/* Add Issue Button */}
            <div 
              className="box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative rounded-xl shrink-0 cursor-pointer hover:bg-gray-50"
              onClick={() => setIsCreatingIssue(true)}
            >
              <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-xl shrink-0">
                <Add />
                <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#00718c] text-[16px] text-center text-nowrap">
                  <p className="block leading-[24px] whitespace-pre">Add Issue</p>
                </div>
              </div>
            </div>

            {/* Filter Chips */}
            <div className="[flex-flow:wrap] box-border content-start flex gap-1 items-start justify-start p-0 relative shrink-0 w-full">
              <FilterChip label="All Project Issues" active={true} />
              <FilterChip label="My Issues" active={false} />
              <FilterChip label="Created" active={false} />
              <FilterChip label="[custom_type] Tasks" active={false} />
            </div>

            {/* Issues List */}
            {/* Issues List */}
            <div className="space-y-4">
              {issues.map((issue) => (
                <div key={issue.id} className="relative shrink-0 w-full">
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-2 py-0 relative w-full">
                      <IssueTask 
                        title={issue.title}
                        status={issue.status}
                        assignee={issue.assignee}
                        creator={issue.creator}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'details':
        return (
          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative shrink-0 w-[468px]">
            <div className="flex flex-col items-center justify-center h-32 w-full text-center">
              <h3 className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[#646e78] text-[18px] mb-2">Details</h3>
              <p className="font-['Hexagon_Akkurat:Regular',_sans-serif] text-[#999999] text-[14px]">Creator, sharing, and component details would appear here</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Show create issue form if in creation mode
  if (isCreatingIssue) {
    return (
      <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 h-[770px] items-start justify-start right-0 px-0 py-2 top-[142px] w-[500px] z-10 animate-in slide-in-from-right duration-300">
        <div className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
        <CreateIssueForm
          projectName={projectName}
          onBack={() => setIsCreatingIssue(false)}
          onSubmit={handleCreateIssue}
        />
        <div className="absolute bg-[#e6e6e6] h-[124px] right-2 rounded top-36 w-1"></div>
      </div>
    );
  }

  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 h-[770px] items-start justify-start right-0 px-0 py-2 top-[142px] w-[500px] z-10 animate-in slide-in-from-right duration-300">
      <div className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
      
      <div className="box-border content-stretch flex flex-col gap-4 h-[746px] items-center justify-start p-0 shrink-0 sticky top-0">
        {/* Header */}
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-[16px] relative shrink-0 w-[500px]">
          <div className="absolute border-[#f0f0f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
            <div className="flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] h-full justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121623] text-[18px] text-left text-nowrap w-[236px]">
              <p className="block leading-[27px] overflow-inherit">{projectName}</p>
            </div>
            <div 
              className="box-border content-stretch flex flex-row items-center justify-center p-[2px] relative rounded-[48px] shrink-0 cursor-pointer hover:bg-gray-100"
              onClick={onClose}
            >
              <Dismiss />
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
            <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#646e78] text-[16px] text-left text-nowrap">
              <p className="block leading-[24px] whitespace-pre">Edited just now</p>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="h-10 relative shrink-0 w-full">
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2.5 h-10 items-center justify-start px-4 py-1 relative w-full">
              <div className="bg-[#f2f4f8] box-border content-stretch flex flex-row h-10 items-center justify-center p-0 relative rounded-xl shrink-0">
                <div className="absolute border border-[#e6eaf0] border-solid inset-0 pointer-events-none rounded-xl" />
                <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center px-4 py-2 relative rounded-xl shrink-0">
                  <div className="font-['Hexagon_Akkurat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#121619] text-[16px] text-center text-nowrap tracking-[-0.32px]">
                    <p className="block leading-[24px] whitespace-pre">Open with ... </p>
                  </div>
                </div>
              </div>
              
              {/* Avatar Group */}
              <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
                <div className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative shrink-0">
                  <div className="bg-[#20b2aa] box-border content-stretch flex flex-row items-center justify-between max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-[999px] shrink-0 size-8">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative rounded-[999px] shrink-0 size-8">
                      <div className="basis-0 flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-center">
                        <p className="block leading-[19px]">JF</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#8a2be2] box-border content-stretch flex flex-row items-center justify-between max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-[999px] shrink-0 size-8">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative rounded-[999px] shrink-0 size-8">
                      <div className="basis-0 flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-center">
                        <p className="block leading-[19px]">FE</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ff6347] box-border content-stretch flex flex-row items-center justify-between max-h-8 max-w-8 min-h-8 min-w-8 p-0 relative rounded-[999px] shrink-0 size-8">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative rounded-[999px] shrink-0 size-8">
                      <div className="basis-0 flex flex-col font-['Hexagon_Akkurat:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#f5f7fa] text-[14px] text-center">
                        <p className="block leading-[19px]">AP</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-2 py-1 relative rounded-md shrink-0">
                  <div className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-md" />
                  <div className="font-['Roboto:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#495057] text-[14px] text-left text-nowrap">
                    <p className="block leading-[1.5] whitespace-pre">Share</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="box-border content-stretch flex flex-row items-end justify-start p-0 relative shrink-0 w-full">
          <div className="absolute bottom-[-1px] h-px left-0 right-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 500 1">
              <path clipRule="evenodd" d="M500 1H0V0H500V1Z" fill="#E6EAF0" fillRule="evenodd" />
            </svg>
          </div>
          <Tab active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>
            Overview
          </Tab>
          <Tab active={activeTab === 'comments'} onClick={() => setActiveTab('comments')}>
            Comments
          </Tab>
          <Tab active={activeTab === 'issues'} onClick={() => setActiveTab('issues')}>
            Issues
          </Tab>
          <Tab active={activeTab === 'details'} onClick={() => setActiveTab('details')}>
            Details
          </Tab>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto w-full px-4">
          {renderTabContent()}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bg-[#e6e6e6] h-[124px] right-2 rounded top-36 w-1"></div>
    </div>
  );
}