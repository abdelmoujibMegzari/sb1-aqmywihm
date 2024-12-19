import React, { useState, useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { FAB } from 'react-native-paper';
import { PostCard } from '../components/PostCard';
import { FilterModal } from '../components/FilterModal';
import { fetchPosts, saveFilterSetting } from '../services/mockApi';
import { SocialPost, FilterSetting } from '../types';

export const FeedScreen: React.FC = () => {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterSetting | undefined>();

  const loadPosts = async () => {
    const fetchedPosts = await fetchPosts(activeFilter);
    setPosts(fetchedPosts);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadPosts();
    setRefreshing(false);
  };

  const handleFilterSave = async (filter: FilterSetting) => {
    await saveFilterSetting(filter);
    setActiveFilter(filter);
    loadPosts();
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />

      <FAB
        icon="filter"
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
        }}
        onPress={() => setFilterModalVisible(true)}
      />

      <FilterModal
        visible={filterModalVisible}
        onDismiss={() => setFilterModalVisible(false)}
        onSave={handleFilterSave}
        initialFilter={activeFilter}
      />
    </>
  );
};