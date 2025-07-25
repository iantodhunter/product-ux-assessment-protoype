import { useState, useEffect } from 'react';
import contentService, { ContentData } from '../services/contentService';

function useContent() {
  const [content, setContent] = useState<ContentData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadContent() {
    try {
      setLoading(true);
      setError(null);
      const data = await contentService.preloadAll();
      setContent(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load content');
      console.error('Content loading error:', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadContent();
  }, []);

  return {
    content,
    loading,
    error,
    reload: () => {
      contentService.clearCache();
      return loadContent();
    }
  };
}

export default useContent;