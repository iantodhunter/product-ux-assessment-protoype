import React from 'react';
import { AppType } from '../../types/assessment';
import { appTypes } from '../../data/assessmentData';
import styles from './AppTypeSelector.module.css';

const iconMap = {
  web: '🌐',
  desktop: '💻',
  other: '🏭',
};

interface AppTypeSelectorProps {
  onSelectAppType: (appType: AppType['id']) => void;
}

export const AppTypeSelector: React.FC<AppTypeSelectorProps> = ({ onSelectAppType }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.subtitle}>Select the type of application you're assessing to begin</p>
      </div>
      
      <div className={styles.grid}>
        {appTypes.map(type => {
          const icon = iconMap[type.id as keyof typeof iconMap];
          return (
            <button
              key={type.id}
              onClick={() => onSelectAppType(type.id)}
              className={styles.appTypeCard}
            >
              <span className={styles.appTypeIcon}>{icon}</span>
              <h3 className={styles.appTypeTitle}>{type.title}</h3>
              <p className={styles.appTypeDescription}>{type.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};