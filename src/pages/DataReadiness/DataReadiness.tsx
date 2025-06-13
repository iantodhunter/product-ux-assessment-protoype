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

  const handleVideoClick = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setCurrentVideoUrl('');
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
            
            <p className={styles.levelDescription}>{level.description}</p>
            
            {level.videoUrl && (
              <button 
                className={styles.videoButton}
                onClick={(e) => {
                  e.stopPropagation();
                  handleVideoClick(level.videoUrl!);
                }}
              >
                <Play size={16} />
                Watch Overview Video
              </button>
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