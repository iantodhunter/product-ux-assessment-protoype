export interface Product {
  id: string;
  name: string;
  pmName?: string;
  pmEmail?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReadinessSection {
  id: 'data' | 'ux' | 'gtm';
  title: string;
  status: 'not-started' | 'in-progress' | 'complete';
  completedItems?: number;
  totalItems?: number;
}

export interface DataReadinessLevel {
  id: 0 | 1 | 2;
  title: string;
  description: string;
  videoUrl?: string;
}

export interface GTMQuestion {
  id: string;
  title: string;
  type: 'text' | 'select' | 'textarea';
  options?: string[];
  required?: boolean;
}

export interface ReadinessState {
  product: Product | null;
  dataLevel: DataReadinessLevel['id'] | null;
  gtmResponses: Record<string, string>;
  uxResponses: Record<string, string>; // Existing UX responses
}