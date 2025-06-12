import React from 'react';
import { Monitor, Globe, Factory } from 'lucide-react';
import { AppType } from '../../types/assessment';
import { appTypes } from '../../data/assessmentData';
import styles from './AppTypeSelector.module.css';

const iconMap = {
  web: Globe,
  desktop: Monitor,
  other: Factory,
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
        {appTypes.map(type => (
            <button
              key={type.id}
              onClick={() => onSelectAppType(type.id)}
              className={styles.appTypeCard}
            >
              <IconComponent className={styles.appTypeIcon} size={64} />
              <h3 className={styles.appTypeTitle}>{type.title}</h3>
              <p className={styles.appTypeDescription}>{type.description}</p>
            </button>
        ))}
      </div>
    </div>
  );
};