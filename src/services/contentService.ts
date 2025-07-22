export interface DataReadinessLevel {
  id: string;
  level: string;
  subtitle: string;
  description: string;
  examples: string[];
  videoId: string;
  videoThumbnail?: string;
  videoUrl?: string;
}

export interface UXQuestion {
  id: string;
  text: string;
  subheading?: string;
  mockupImage?: string;
  appTypeSpecific?: 'web' | 'desktop' | 'device';
}

export interface UXCategory {
  title: string;
  id: string;
  questions: UXQuestion[];
}

interface AppType {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface ContentData {
  dataReadinessLevels?: DataReadinessLevel[];
  uxCategories?: UXCategory[];
  appTypes?: AppType[];
}

class ContentService {
  private cache: Map<string, any> = new Map();
  private baseUrl: string;

  constructor() {
    // Use local files in development, GitHub raw files in production
    this.baseUrl = import.meta.env.PROD 
      ? 'https://raw.githubusercontent.com/iantodhunter/product-ux-assessment-protoype/main/public/content'
      : '/content';
  }

  private async fetchWithCache<T>(endpoint: string): Promise<T> {
    if (this.cache.has(endpoint)) {
      return this.cache.get(endpoint);
    }

    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
      }
      
      const data = await response.json();
      this.cache.set(endpoint, data);
      return data;
    } catch (error) {
      console.error(`Error fetching content from ${endpoint}:`, error);
      throw error;
    }
  }

  async getDataReadinessLevels(): Promise<DataReadinessLevel[]> {
    const data = await this.fetchWithCache<{ levels: DataReadinessLevel[] }>('data-readiness-levels.json');
    return data.levels;
  }

  async getUXQuestions(): Promise<UXCategory[]> {
    const data = await this.fetchWithCache<{ categories: UXCategory[] }>('ux-questions.json');
    return data.categories;
  }

  async getAppTypes(): Promise<AppType[]> {
    const data = await this.fetchWithCache<{ appTypes: AppType[] }>('app-types.json');
    return data.appTypes;
  }

  // Method to preload all content
  async preloadAll(): Promise<ContentData> {
    try {
      const [dataReadinessLevels, uxCategories, appTypes] = await Promise.all([
        this.getDataReadinessLevels(),
        this.getUXQuestions(),
        this.getAppTypes()
      ]);

      return {
        dataReadinessLevels,
        uxCategories,
        appTypes
      };
    } catch (error) {
      console.error('Error preloading content:', error);
      return {};
    }
  }

  // Clear cache method for development
  clearCache(): void {
    this.cache.clear();
  }
}

const contentService = new ContentService();
export default contentService;