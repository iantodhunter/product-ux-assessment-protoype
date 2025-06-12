import { useState } from 'react';
import { Product, ReadinessState, ReadinessSection, DataReadinessLevel } from '../types/readiness';
import { gtmQuestions } from '../data/readinessData';

export const useReadiness = () => {
  const [readinessState, setReadinessState] = useState<ReadinessState>({
    product: null,
    dataLevel: null,
    gtmResponses: {},
    uxResponses: {}
  });

  const [currentView, setCurrentView] = useState<'overview' | 'data' | 'ux' | 'gtm' | 'review'>('overview');

  const createProduct = (name: string, pmName?: string, pmEmail?: string) => {
    const product: Product = {
      id: Date.now().toString(),
      name,
      pmName,
      pmEmail,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    setReadinessState(prev => ({
      ...prev,
      product
    }));
  };

  const updateProduct = (updates: Partial<Product>) => {
    if (!readinessState.product) return;
    
    setReadinessState(prev => ({
      ...prev,
      product: {
        ...prev.product!,
        ...updates,
        updatedAt: new Date()
      }
    }));
  };

  const setDataLevel = (level: DataReadinessLevel['id']) => {
    setReadinessState(prev => ({
      ...prev,
      dataLevel: level
    }));
  };

  const updateGTMResponse = (questionId: string, response: string) => {
    setReadinessState(prev => ({
      ...prev,
      gtmResponses: {
        ...prev.gtmResponses,
        [questionId]: response
      }
    }));
  };

  const updateUXResponse = (itemId: string, response: string) => {
    setReadinessState(prev => ({
      ...prev,
      uxResponses: {
        ...prev.uxResponses,
        [itemId]: response
      }
    }));
  };

  const getReadinessSections = (): ReadinessSection[] => {
    const dataStatus = readinessState.dataLevel !== null ? 'complete' : 'not-started';
    
    const requiredGTMQuestions = gtmQuestions.filter(q => q.required);
    const completedGTMQuestions = requiredGTMQuestions.filter(q => 
      readinessState.gtmResponses[q.id]?.trim()
    );
    const gtmStatus = completedGTMQuestions.length === 0 ? 'not-started' : 
                     completedGTMQuestions.length === requiredGTMQuestions.length ? 'complete' : 'in-progress';

    // UX status calculation would need to be integrated with existing UX assessment logic
    const uxStatus = Object.keys(readinessState.uxResponses).length === 0 ? 'not-started' : 'in-progress';

    return [
      {
        id: 'data',
        title: 'Data Readiness',
        status: dataStatus
      },
      {
        id: 'ux',
        title: 'UX Readiness',
        status: uxStatus,
        completedItems: Object.keys(readinessState.uxResponses).length,
        totalItems: 50 // This would need to be calculated from actual UX items
      },
      {
        id: 'gtm',
        title: 'Go-to-Market Readiness',
        status: gtmStatus,
        completedItems: completedGTMQuestions.length,
        totalItems: requiredGTMQuestions.length
      }
    ];
  };

  const resetReadiness = () => {
    setReadinessState({
      product: null,
      dataLevel: null,
      gtmResponses: {},
      uxResponses: {}
    });
    setCurrentView('overview');
  };

  return {
    readinessState,
    currentView,
    setCurrentView,
    createProduct,
    updateProduct,
    setDataLevel,
    updateGTMResponse,
    updateUXResponse,
    getReadinessSections,
    resetReadiness
  };
};