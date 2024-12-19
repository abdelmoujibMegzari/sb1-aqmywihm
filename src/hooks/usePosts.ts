import { useState, useEffect } from 'react';
import { SocialPost, FilterSetting } from '../types';
import { fetchPosts } from '../services/api/posts';

export const usePosts = (activeFilter?: FilterSetting) => {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadPosts = async () => {
    const fetchedPosts = await fetchPosts(activeFilter);
    setPosts(fetchedPosts);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadPosts();
    setRefreshing(false);
  };

  useEffect(() => {
    loadPosts();
  }, [activeFilter]);

  return {
    posts,
    refreshing,
    handleRefresh,
    loadPosts,
  };
};