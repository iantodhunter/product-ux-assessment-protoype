import React, { useState } from 'react';
import { Play } from 'lucide-react';
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
  return (
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
              <button className={styles.videoButton}>
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
  );
};