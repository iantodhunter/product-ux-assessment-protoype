import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { ReadinessSection, Product } from '../../types/readiness';
import styles from './FinalReview.module.css';

interface FinalReviewProps {
  product: Product;
  readinessSections: ReadinessSection[];
  onStartNew: () => void;
}

const statusIcons = {
  'complete': CheckCircle,
  'in-progress': Clock,
  'not-started': AlertCircle
};

const statusColors = {
  'complete': 'success',
  'in-progress': 'warning',
  'not-started': 'error'
};

export const FinalReview: React.FC<FinalReviewProps> = ({
  product,
  readinessSections,
  onStartNew
}) => {
  const allComplete = readinessSections.every(section => section.status === 'complete');
  const hasInProgress = readinessSections.some(section => section.status === 'in-progress');

  const getOverallStatus = () => {
    if (allComplete) return "You're all set!";
    if (hasInProgress) return "Planning in progress";
    return "Assessment started";
  };

  const getOverallMessage = () => {
    if (allComplete) {
      return "Congratulations! Your product has completed all readiness assessments and is ready for the next phase.";
    }
    if (hasInProgress) {
      return "Good progress! Continue working on the remaining assessments to complete your readiness review.";
    }
    return "Get started by completing the remaining readiness assessments.";
  };

  return (
    <div className={styles.container}>
      <div className={styles.certificate}>
        <div className={styles.certificateHeader}>
          <h1 className={styles.certificateTitle}>Nexus Readiness Review</h1>
          <div className={styles.productName}>{product.name}</div>
        </div>

        <div className={styles.statusSection}>
          <div className={`${styles.overallStatus} ${styles[allComplete ? 'complete' : hasInProgress ? 'inProgress' : 'notStarted']}`}>
            {getOverallStatus()}
          </div>
          <p className={styles.statusMessage}>
            {getOverallMessage()}
          </p>
        </div>

        <div className={styles.sectionsGrid}>
          {readinessSections.map(section => {
            const StatusIcon = statusIcons[section.status];
            const colorClass = statusColors[section.status];
            
            return (
              <div key={section.id} className={`${styles.sectionCard} ${styles[colorClass]}`}>
                <div className={styles.sectionIcon}>
                  <StatusIcon size={24} />
                </div>
                <div className={styles.sectionInfo}>
                  <h3 className={styles.sectionTitle}>{section.title}</h3>
                  <div className={styles.sectionStatus}>
                    {section.status === 'complete' && 'Complete'}
                    {section.status === 'in-progress' && (
                      section.completedItems !== undefined && section.totalItems !== undefined
                        ? `${section.completedItems}/${section.totalItems} items`
                        : 'In Progress'
                    )}
                    {section.status === 'not-started' && 'Not Started'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.certificateFooter}>
          <div className={styles.timestamp}>
            Reviewed on {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          {product.pmName && (
            <div className={styles.pmSignature}>
              Product Manager: {product.pmName}
            </div>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <button
          onClick={onStartNew}
          className={styles.newAssessmentButton}
        >
          Start New Assessment
        </button>
      </div>
    </div>
  );
};