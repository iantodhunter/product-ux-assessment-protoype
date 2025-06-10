export interface AppType {
  id: 'web' | 'desktop' | 'other';
  title: string;
  description: string;
  icon: string;
}

export interface StatusOption {
  id: 'complete' | 'short' | 'long' | 'not-planned' | 'na';
  label: string;
  color: string;
  score: number | null;
}

export interface AssessmentItem {
  id: string;
  title: string;
  details: string[];
}

export interface AssessmentCategory {
  id: string;
  title: string;
  items: {
    universal: AssessmentItem[];
    web?: AssessmentItem[];
    desktop?: AssessmentItem[];
    other?: AssessmentItem[];
  };
}

export interface AssessmentResponse {
  [itemId: string]: string;
}

export interface CategoryScore {
  id: string;
  title: string;
  score: number;
}