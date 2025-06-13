import React, { useState } from 'react';
import { Database, Palette, TrendingUp } from 'lucide-react';
import { ReadinessSection } from '../../types/readiness';
import styles from './ProductOverview.module.css';

interface ProductOverviewProps {
  productName: string;
  pmName?: string;
  pmEmail?: string;
  readinessSections: ReadinessSection[];
  onProductUpdate: (updates: { name?: string; pmName?: string; pmEmail?: string }) => void;
  onProductSave: () => void;
  onSectionClick?: (sectionId: 'data' | 'ux' | 'gtm') => void;
}

const sectionIcons = {
  data: Database,
  ux: Palette,
  gtm: TrendingUp
};

const statusLabels = {
  'not-started': 'Not Started',
  'in-progress': 'In Progress',
  'complete': 'Complete'
};

export const ProductOverview: React.FC<ProductOverviewProps> = ({
  productName,
  pmName,
  pmEmail,
  readinessSections,
  onProductUpdate,
  onProductSave,
  onSectionClick
}) => {
  const [isEditing, setIsEditing] = useState(!productName);
  const [formData, setFormData] = useState({
    name: productName || '',
    pmName: pmName || '',
    pmEmail: pmEmail || ''
  });

  const handleSave = () => {
    if (formData.name.trim()) {
      onProductUpdate({
        name: formData.name.trim(),
        pmName: formData.pmName.trim() || undefined,
        pmEmail: formData.pmEmail.trim() || undefined
      });
      setIsEditing(false);
      // Auto-advance to next step after saving
      setTimeout(() => {
        onProductSave();
      }, 500);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: productName || '',
      pmName: pmName || '',
      pmEmail: pmEmail || ''
    });
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.productSection}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.title}>Product Overview</h1>
          {!isEditing && productName && (
            <button
              onClick={() => setIsEditing(true)}
              className={styles.editButton}
            >
              Edit
            </button>
          )}
        </div>

        {isEditing ? (
          <div className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Product Name *
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={styles.input}
                  placeholder="Enter product name"
                  required
                />
              </label>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Product Manager Name
                <input
                  type="text"
                  value={formData.pmName}
                  onChange={(e) => setFormData(prev => ({ ...prev, pmName: e.target.value }))}
                  className={styles.input}
                  placeholder="Enter PM name (optional)"
                />
              </label>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Product Manager Email
                <input
                  type="email"
                  value={formData.pmEmail}
                  onChange={(e) => setFormData(prev => ({ ...prev, pmEmail: e.target.value }))}
                  className={styles.input}
                  placeholder="Enter PM email (optional)"
                />
              </label>
            </div>

            <div className={styles.formActions}>
              <button
                onClick={handleSave}
                disabled={!formData.name.trim()}
                className={styles.saveButton}
              >
                Save
              </button>
              {productName && (
                <button
                  onClick={handleCancel}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.productInfo}>
            <h2 className={styles.productName}>{productName}</h2>
            {pmName && (
              <p className={styles.pmInfo}>
                <strong>PM:</strong> {pmName}
                {pmEmail && ` (${pmEmail})`}
              </p>
            )}
          </div>
        )}
      </div>

      {productName && (
        <div className={styles.readinessSection}>
          <h2 className={styles.sectionTitle}>Readiness Assessment</h2>
          <p className={styles.sectionDescription}>
            Complete each readiness assessment to ensure your product is ready for launch.
          </p>

          <div className={styles.readinessGrid}>
            {readinessSections.map(section => {
              const Icon = sectionIcons[section.id];
              return (
                <button
                  key={section.id}
                  onClick={() => onSectionClick?.(section.id)}
                  className={`${styles.readinessCard} ${styles[section.status]}`}
                >
                  <div className={styles.cardIcon}>
                    <Icon size={32} />
                  </div>
                  <h3 className={styles.cardTitle}>{section.title}</h3>
                  <div className={styles.cardStatus}>
                    <span className={styles.statusLabel}>
                      {statusLabels[section.status]}
                    </span>
                    {section.completedItems !== undefined && section.totalItems !== undefined && (
                      <span className={styles.progress}>
                        {section.completedItems}/{section.totalItems}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};