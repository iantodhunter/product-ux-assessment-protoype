import React from 'react';
import { CheckCircle, Clock, Calendar, X, HelpCircle } from 'lucide-react';
import { StatusOption } from '../../types/assessment';
import styles from './StatusButton.module.css';

const iconMap = {
  complete: CheckCircle,
  short: Clock,
  long: Calendar,
  'not-planned': X,
  na: HelpCircle,
};

interface StatusButtonProps {
  option: StatusOption;
  isSelected: boolean;
  onClick: (status: string) => void;
}

export const StatusButton: React.FC<StatusButtonProps> = ({ option, isSelected, onClick }) => {
  const Icon = iconMap[option.id];
  
  return (
    <button
      onClick={() => onClick(option.id)}
      className={`${styles.statusButton} ${styles[option.color]} ${isSelected ? styles.selected : ''}`}
    >
      <Icon className={styles.icon} />
      {option.label}
    </button>
  );
};