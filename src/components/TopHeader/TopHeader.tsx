import React from 'react';
import { Hexagon } from 'lucide-react';
import styles from './TopHeader.module.css';

interface TopHeaderProps {
  onLogoClick: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onLogoClick }) => {
  return (
    <header className={styles.header}>
      <button onClick={onLogoClick} className={styles.logoButton}>
        <Hexagon size={32} className={styles.logoIcon} />
        <span className={styles.logoText}>Nexus Readiness</span>
      </button>
    </header>
  );
};