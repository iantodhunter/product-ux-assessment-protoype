import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { DataReadinessLevel } from '../../types/readiness';
import { dataReadinessLevels } from '../../data/readinessData';
import styles from './DataReadiness.module.css';

interface DataReadinessProps {
  selectedLevel: DataReadinessLevel['id'] | null;
  onLevelSelect: (level: DataReadinessLevel['id']) => void;
  onContinue: () => void;
}

export const DataReadiness: React.FC<DataReadinessProps> = ({
  selectedLevel,
  onLevelSelect,
  onContinue
}) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>('');
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleVideoClick = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setCurrentVideoUrl('');
  };

  const handleMouseEnter = (level: DataReadinessLevel, event: React.MouseEvent) => {
    if (level.videoUrl) {
      setHoveredLevel(level.id);
      setTooltipPosition({
        x: event.clientX + 10,
        y: event.clientY - 10
      });
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredLevel !== null) {
      setTooltipPosition({
        x: event.clientX + 10,
        y: event.clientY - 10
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredLevel(null);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Data Readiness Assessment</h1>
          <p className={styles.description}>
            Select the level that best describes your application's current data architecture and management capabilities.
          </p>
        </div>

        <div className={styles.levelsContainer}>
          {dataReadinessLevels.map(level => (
            <div
              key={level.id}
              className={`${styles.levelCard} ${selectedLevel === level.id ? styles.selected : ''}`}
              onClick={() => onLevelSelect(level.id)}
              onMouseEnter={(e) => handleMouseEnter(level, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.levelHeader}>
                <div className={styles.radioButton}>
                  <input
                    type="radio"
                    name="dataLevel"
                    value={level.id}
                    checked={selectedLevel === level.id}
                    onChange={() => onLevelSelect(level.id)}
                    className={styles.radioInput}
                  />
                </div>
                <h3 className={styles.levelTitle}>{level.title}</h3>
              </div>
              
              <div className={styles.levelContent}>
                <p className={styles.levelDescription}>{level.description}</p>
                
                {level.userSee && (
                  <div className={styles.userSeeSection}>
                    <h4 className={styles.sectionTitle}>What users see:</h4>
                    <p className={styles.sectionContent}>{level.userSee}</p>
                  </div>
                )}
                
                {level.examples && (
                  <div className={styles.examplesSection}>
                    <h4 className={styles.sectionTitle}>Examples:</h4>
                    <p className={styles.sectionContent}>{level.examples}</p>
                  </div>
                )}
              </div>
              
              {level.videoUrl && (
                <button 
                  className={styles.videoButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVideoClick(level.videoUrl!);
                  }}
                >
                  <Play size={16} />
                  See an example
                </button>
              )}
              
              {level.videoUrl === null && (
                <div className={styles.comingSoon}>
                  <span>Video Coming Soon</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <button
            onClick={onContinue}
            disabled={selectedLevel === null}
            className={styles.continueButton}
          >
            Save & Continue
          </button>
        </div>
      </div>

      {/* Video Tooltip */}
      {hoveredLevel !== null && (
        <div 
          className={styles.videoTooltip}
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y
          }}
        >
          <div className={styles.tooltipContent}>
            <div className={styles.tooltipHeader}>
              <Play size={16} />
              <span>Video Example</span>
            </div>
            <div className={styles.tooltipVideo}>
              <video
                src={dataReadinessLevels.find(l => l.id === hoveredLevel)?.videoUrl || ''}
                muted
                autoPlay
                loop
                className={styles.tooltipVideoElement}
              />
            </div>
            <div className={styles.tooltipFooter}>
              Click to watch full video
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {videoModalOpen && (
        <div className={styles.videoModal} onClick={closeVideoModal}>
          <div className={styles.videoModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeVideoModal}>
              <X size={24} />
            </button>
            <video
              src={currentVideoUrl}
              controls
              autoPlay
              className={styles.video}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};