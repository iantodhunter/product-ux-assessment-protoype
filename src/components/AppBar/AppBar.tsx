import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './AppBar.module.css';

interface AppBarProps {
  onLogoClick: () => void;
}

export const AppBar: React.FC<AppBarProps> = ({ onLogoClick }) => {
  const [logoError, setLogoError] = React.useState(false);
  
  return (
    <div className={styles.appBar}>
      <div className={styles.container}>
        <button onClick={onLogoClick} className={styles.logoButton}>
          {!logoError ? (
            <img 
              src="/Hexagon_logomark_black.svg" 
              alt="Hexagon Logo" 
              className={styles.logoIcon}
              onError={() => setLogoError(true)}
            />
          ) : (
            <svg 
              className={styles.logoIcon}
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
          )}
          <span className={styles.logoText}>Nexus Readiness</span>
        </button>
      </div>
    </div>
  );
};