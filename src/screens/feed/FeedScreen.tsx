import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { FAB } from 'react-native-paper';
import { PostCard } from '../../components/post/PostCard';
import { FilterModal } from '../../components/filter/FilterModal';
import { useFilters } from '../../hooks/useFilters';
import { usePosts } from '../../hooks/usePosts';
import { styles } from './FeedScreen.styles';

export const FeedScreen: React.FC = () => {
  const {
    filterModalVisible,
    setFilterModalVisible,
    activeFilter,
    handleFilterSave,
  } = useFilters();

  const { posts, refreshing, handleRefresh } = usePosts(activeFilter);

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
        style={styles.fab}
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