import React from 'react';
import { GTMQuestion } from '../../types/readiness';
import { gtmQuestions } from '../../data/readinessData';
import styles from './GTMReadiness.module.css';

interface GTMReadinessProps {
  responses: Record<string, string>;
  onResponseChange: (questionId: string, response: string) => void;
  onSave: () => void;
}

export const GTMReadiness: React.FC<GTMReadinessProps> = ({
  responses,
  onResponseChange,
  onSave
}) => {
  const requiredQuestions = gtmQuestions.filter(q => q.required);
  const allRequiredAnswered = requiredQuestions.every(q => responses[q.id]?.trim());

  const renderQuestion = (question: GTMQuestion) => {
    const value = responses[question.id] || '';

    return (
      <div key={question.id} className={styles.questionGroup}>
        <label className={styles.questionLabel}>
          {question.title}
          {question.required && <span className={styles.required}>*</span>}
        </label>

        {question.type === 'text' && (
          <input
            type="text"
            value={value}
            onChange={(e) => onResponseChange(question.id, e.target.value)}
            className={styles.textInput}
            placeholder="Enter your response"
          />
        )}

        {question.type === 'textarea' && (
          <textarea
            value={value}
            onChange={(e) => onResponseChange(question.id, e.target.value)}
            className={styles.textareaInput}
            placeholder="Enter your response"
            rows={4}
          />
        )}

        {question.type === 'select' && question.options && (
          <select
            value={value}
            onChange={(e) => onResponseChange(question.id, e.target.value)}
            className={styles.selectInput}
          >
            <option value="">Select an option</option>
            {question.options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Go-to-Market Readiness</h1>
        <p className={styles.description}>
          Help us understand your go-to-market strategy and readiness for launch.
        </p>
      </div>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.questionsContainer}>
          {gtmQuestions.map(renderQuestion)}
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={onSave}
            disabled={!allRequiredAnswered}
            className={styles.saveButton}
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};