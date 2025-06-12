import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './ReadinessNavigation.module.css';

interface ReadinessNavigationProps {
  currentView: string;
  onViewChange: (view: 'overview' | 'data' | 'ux' | 'gtm' | 'review') => void;
  productName?: string;
}

const navigationItems = [
  { id: 'overview', label: 'Product Overview' },
  { id: 'data', label: 'Data Readiness' },
  { id: 'ux', label: 'UX Readiness' },
  { id: 'gtm', label: 'Go-to-Market Readiness' },
  { id: 'review', label: 'Final Review' }
];

export const ReadinessNavigation: React.FC<ReadinessNavigationProps> = ({
  currentView,
  onViewChange,
  productName
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const currentItem = navigationItems.find(item => item.id === currentView);

  return (
    <div className={styles.navigation}>
      <div className={styles.productInfo}>
        {productName && (
          <span className={styles.productName}>{productName}</span>
        )}
      </div>
      
      <div className={styles.dropdown}>
        <button
          className={styles.dropdownTrigger}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>{currentItem?.label || 'Select Section'}</span>
          <ChevronDown 
            size={20} 
            className={`${styles.chevron} ${isDropdownOpen ? styles.open : ''}`} 
          />
        </button>
        
        {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            {navigationItems.map(item => (
              <button
                key={item.id}
                className={`${styles.dropdownItem} ${currentView === item.id ? styles.active : ''}`}
                onClick={() => {
                  onViewChange(item.id as any);
                  setIsDropdownOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};