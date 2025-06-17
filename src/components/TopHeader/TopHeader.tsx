import React from 'react';
import styles from './TopHeader.module.css';

interface TopHeaderProps {
  onLogoClick: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onLogoClick }) => {
  return (
    <header className={styles.header}>
      <button onClick={onLogoClick} className={styles.logoButton}>
        <img 
          src="/Hexagon_logomark_black.svg" 
          alt="Nexus Logo" 
          className={styles.logoIcon}
        />
        <span className={styles.logoText}>Nexus Readiness</span>
      </button>
    </header>
  );
};