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

    // UX status calculation
    const uxStatus = Object.keys(readinessState.uxResponses).length === 0 ? 'not-started' : 
                     Object.keys(readinessState.uxResponses).length >= 10 ? 'complete' : 'in-progress';

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
        totalItems: 50
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

  const getStepStatus = (stepId: string): 'complete' | 'current' | 'available' | 'locked' => {
    
    switch (stepId) {
      case 'overview':
        if (stepId === currentView) return 'current';
        return readinessState.product?.name ? 'complete' : 'available';
      
      case 'data':
        if (stepId === currentView) return 'current';
        if (!readinessState.product) return 'locked';
        return readinessState.dataLevel !== null ? 'complete' : 'available';
      
      case 'ux':
        if (stepId === currentView) return 'current';
        if (!readinessState.product || readinessState.dataLevel === null) return 'locked';
        return Object.keys(readinessState.uxResponses).length >= 10 ? 'complete' : 'available';
      
      case 'gtm':
        if (stepId === currentView) return 'current';
        if (!readinessState.product || readinessState.dataLevel === null || Object.keys(readinessState.uxResponses).length < 10) return 'locked';
        const requiredGTMQuestions = gtmQuestions.filter(q => q.required);
        const completedGTMQuestions = requiredGTMQuestions.filter(q => 
          readinessState.gtmResponses[q.id]?.trim()
        );
        return completedGTMQuestions.length === requiredGTMQuestions.length ? 'complete' : 'available';
      
      case 'review':
        if (stepId === currentView) return 'current';
        const sections = getReadinessSections();
        const allComplete = sections.every(section => section.status === 'complete');
        if (!readinessState.product) return 'locked';
        return allComplete ? 'available' : 'locked';
      
      default:
        return 'locked';
    }
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
    getStepStatus,
    resetReadiness
  };
};