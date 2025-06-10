import React, { useState } from 'react';
import { AssessmentItem as AssessmentItemType, AssessmentResponse } from '../../types/assessment';
import { statusOptions } from '../../data/assessmentData';
import { StatusButton } from '../StatusButton/StatusButton';
import styles from './AssessmentItem.module.css';

interface AssessmentItemProps {
  item: AssessmentItemType;
  response?: string;
  onResponse: (itemId: string, status: string) => void;
}

export const AssessmentItem: React.FC<AssessmentItemProps> = ({ item, response, onResponse }) => {
  const [isExpanded, setIsExpanded] = useState(item.details.length <= 3);

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemHeader}>
        <h4 className={styles.itemTitle}>{item.title}</h4>
        {item.details.length > 0 && (
          <div className={styles.itemDetails}>
            {isExpanded ? (
              <ul className={styles.detailsList}>
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            ) : (
              <div>
                <ul className={styles.detailsList}>
                  {item.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                {item.details.length > 3 && (
                  <button
                    onClick={() => setIsExpanded(true)}
                    className={styles.expandButton}
                  >
                    Show more ({item.details.length - 3} more items)
                  </button>
                )}
              </div>
            )}
            {isExpanded && item.details.length > 3 && (
              <button
                onClick={() => setIsExpanded(false)}
                className={styles.expandButton}
              >
                Show less
              </button>
            )}
          </div>
        )}
      </div>
      
      <div className={styles.statusButtons}>
        {statusOptions.map(option => (
          <StatusButton
            key={option.id}
            option={option}
            isSelected={response === option.id}
            onClick={(status) => onResponse(item.id, status)}
          />
        ))}
      </div>
    </div>
  );
};