import React from 'react';
import { categories, appTypes } from '../../data/assessmentData';
import { AppType, CategoryScore } from '../../types/assessment';
import styles from './ResultsView.module.css';

interface ResultsViewProps {
  selectedAppType: AppType['id'];
  overallScore: number;
  categoryScores: CategoryScore[];
  onResetAssessment: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  selectedAppType,
  overallScore,
  categoryScores,
  onResetAssessment,
}) => {
  const selectedApp = appTypes.find(t => t.id === selectedAppType);

  return (
    <div className={styles.container}>
      <div className={styles.resultsCard}>
        <div className={styles.resultsHeader}>
          <h2 className={styles.resultsTitle}>Assessment Results</h2>
          <button
            onClick={onResetAssessment}
            className={styles.newAssessmentButton}
          >
            Start New Assessment
          </button>
        </div>
        
        <div className={styles.summaryGrid}>
          <div className={styles.summaryItem}>
            <div className={styles.overallScore}>{overallScore}%</div>
            <div className={styles.summaryLabel}>Overall Readiness</div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.appType}>
              {selectedApp?.title}
            </div>
            <div className={styles.summaryLabel}>Application Type</div>
          </div>
        </div>

        <div className={styles.breakdownSection}>
          <h3 className={styles.breakdownTitle}>Category Breakdown</h3>
          <div className={styles.categoryScores}>
            {categoryScores.map(category => (
              <div key={category.id} className={styles.categoryScore}>
                <span className={styles.categoryName}>{category.title}</span>
                <div className={styles.scoreSection}>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${category.score}%` }}
                    />
                  </div>
                  <span className={styles.scoreValue}>{category.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};