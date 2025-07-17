import React, { useState } from 'react';
import { NavigationSidebar } from './components/NavigationSidebar';
import { Header } from './components/Header';
import { ProjectsContent } from './components/ProjectsContent';
import { PlaceholderContent } from './components/PlaceholderContent';
import { ProjectPanel } from './components/ProjectPanel';

export default function App() {
  const [activeSection, setActiveSection] = useState('projects');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const renderContent = () => {
    switch (activeSection) {
      case 'projects':
        return (
          <ProjectsContent 
            selectedProject={selectedProject}
            onProjectSelect={setSelectedProject}
            isPanelOpen={!!selectedProject}
          />
        );
      case 'libraries':
        return <PlaceholderContent title="Libraries" />;
      case 'issues':
        return <PlaceholderContent title="Issues" />;
      case 'jobs':
        return <PlaceholderContent title="Jobs" />;
      default:
        return (
          <ProjectsContent 
            selectedProject={selectedProject}
            onProjectSelect={setSelectedProject}
            isPanelOpen={!!selectedProject}
          />
        );
    }
  };

  return (
    <div className="bg-[#ffffff] relative size-full flex">
      <NavigationSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <Header activeSection={activeSection} />
        <main className="flex-1 relative overflow-hidden">
          {renderContent()}
          {selectedProject && (
            <ProjectPanel 
              projectId={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </main>
      </div>
    </div>
  );
}