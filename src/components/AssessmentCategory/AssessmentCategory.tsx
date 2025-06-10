import React from 'react';
import { AssessmentItem } from '../AssessmentItem/AssessmentItem';
import { AssessmentResponse } from '../../types/assessment';
import styles from './AssessmentCategory.module.css';

interface AssessmentCategoryProps {
  title: string;
  items: Array<{
    id: string;
    title: string;
    details: string[];
  }>;
  responses: AssessmentResponse;
  categoryScore: number;
  onResponse: (itemId: string, status: string) => void;
}

export const AssessmentCategory: React.FC<AssessmentCategoryProps> = ({
  title,
  items,
  responses,
  categoryScore,
  onResponse,
}) => {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryHeader}>
        <h2 className={styles.categoryTitle}>{title}</h2>
        <div className={styles.progressInfo}>
          <span className={styles.progressLabel}>Category Progress:</span>
          <span className={styles.progressScore}>{categoryScore}%</span>
        </div>
      </div>

      <div className={styles.itemsList}>
        {items.map(item => (
          <AssessmentItem
            key={item.id}
            item={item}
            response={responses[item.id]}
            onResponse={onResponse}
          />
        ))}
      </div>
    </div>
  );
};