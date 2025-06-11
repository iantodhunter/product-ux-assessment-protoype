import React from 'react';
import { AppType } from '../../types/assessment';
import { appTypes } from '../../data/assessmentData';
import styles from './AppTypeSelector.module.css';

interface AppTypeSelectorProps {
  onSelectAppType: (appType: AppType['id']) => void;
}

export const AppTypeSelector: React.FC<AppTypeSelectorProps> = ({ onSelectAppType }) => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 mb-8">Select the type of application you're assessing to begin</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {appTypes.map(type => (
          <button
            key={type.id}
            onClick={() => onSelectAppType(type.id)}
            className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-blue-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <span className="text-4xl mb-4 block">{type.icon}</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
            <p className="text-gray-600">{type.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};