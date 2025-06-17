import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { AssessmentItem as AssessmentItemType, AssessmentResponse } from '../../types/assessment';
import { statusOptions } from '../../data/assessmentData';
import { StatusButton } from '../StatusButton/StatusButton';
import styles from './AssessmentItem.module.css';

interface AssessmentItemProps {
  item: AssessmentItemType;
  response?: string;
  onResponse: (itemId: string, status: string) => void;
  isVisible?: boolean;
  animationDelay?: number;
}

export const AssessmentItem: React.FC<AssessmentItemProps> = ({ 
  item, 
  response, 
  onResponse, 
  isVisible = true,
  animationDelay = 0 
}) => {
  const [isExpanded, setIsExpanded] = useState(item.details.length <= 3);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, animationDelay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, animationDelay]);

  const isVideo = item.mediaUrl && (item.mediaUrl.includes('.mp4') || item.mediaUrl.includes('video'));

  return (
    <div className={`${styles.itemCard} ${isAnimated ? styles.visible : styles.hidden}`}>
      {/* Status Buttons at Top */}
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

      {/* Large Question Title */}
      <h2 className={styles.itemTitle}>{item.title}</h2>
      
      {/* Rich Media Section */}
      {item.mediaUrl && (
        <div className={styles.mediaContainer}>
          {isVideo ? (
            <div className={styles.videoPlaceholder}>
              <Play size={32} className={styles.playIcon} />
              <video
                src={item.mediaUrl}
                className={styles.mediaElement}
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </div>
          ) : (
            <img
              src={item.mediaUrl}
              alt={`${item.title} example`}
              className={styles.mediaElement}
            />
          )}
        </div>
      )}
      
      {/* Details Section */}
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
  );
};