import { useState } from 'react';
import { FilterSetting } from '../types';
import { saveFilterSetting } from '../services/api/filters';

export const useFilters = () => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterSetting | undefined>();

  const handleFilterSave = async (filter: FilterSetting) => {
    await saveFilterSetting(filter);
    setActiveFilter(filter);
    setFilterModalVisible(false);
  };

  return {
    filterModalVisible,
    setFilterModalVisible,
    activeFilter,
    handleFilterSave,
  };
};