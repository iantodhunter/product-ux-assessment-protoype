import React from 'react';
import { AppType } from '../../types/assessment';
import { appTypes } from '../../data/assessmentData';
import styles from './AppTypeSelector.module.css';

interface AppTypeSelectorProps {
  onSelectAppType: (appType: AppType['id']) => void;
}

export const AppTypeSelector: React.FC<AppTypeSelectorProps> = ({ onSelectAppType }) => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <p className="text-xl text-gray-600 mb-12">Select the type of application you're assessing to begin</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {appTypes.map(type => (
          <button
            key={type.id}
            onClick={() => onSelectAppType(type.id)}
            className="bg-white border-2 border-gray-200 rounded-2xl p-12 text-center hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
          >
            <span className="text-6xl mb-6 block">{type.icon}</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
            <p className="text-lg text-gray-600">{type.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};