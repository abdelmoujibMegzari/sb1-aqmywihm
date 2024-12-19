import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Modal, Portal, Button, TextInput, Chip } from 'react-native-paper';
import { FilterSetting } from '../../types';
import { styles } from './FilterModal.styles';
import { PLATFORMS, PAGES } from '../../constants/filters';

interface FilterModalProps {
  visible: boolean;
  onDismiss: () => void;
  onSave: (filter: FilterSetting) => void;
  initialFilter?: FilterSetting;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  onDismiss,
  onSave,
  initialFilter,
}) => {
  const [filterName, setFilterName] = useState(initialFilter?.name || '');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(
    initialFilter?.platforms || []
  );
  const [selectedPages, setSelectedPages] = useState<string[]>(
    initialFilter?.pages || []
  );

  const handleSave = () => {
    const filter: FilterSetting = {
      id: initialFilter?.id || Date.now().toString(),
      name: filterName,
      platforms: selectedPlatforms,
      pages: selectedPages,
    };
    onSave(filter);
    onDismiss();
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modal}
      >
        <ScrollView>
          <TextInput
            label="Filter Name"
            value={filterName}
            onChangeText={setFilterName}
            style={styles.input}
          />

          <View style={styles.section}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {PLATFORMS.map((platform) => (
                <Chip
                  key={platform}
                  selected={selectedPlatforms.includes(platform)}
                  onPress={() => {
                    setSelectedPlatforms(
                      selectedPlatforms.includes(platform)
                        ? selectedPlatforms.filter((p) => p !== platform)
                        : [...selectedPlatforms, platform]
                    );
                  }}
                  style={styles.chip}
                >
                  {platform}
                </Chip>
              ))}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {PAGES.map((page) => (
                <Chip
                  key={page}
                  selected={selectedPages.includes(page)}
                  onPress={() => {
                    setSelectedPages(
                      selectedPages.includes(page)
                        ? selectedPages.filter((p) => p !== page)
                        : [...selectedPages, page]
                    );
                  }}
                  style={styles.chip}
                >
                  {page}
                </Chip>
              ))}
            </ScrollView>
          </View>

          <View style={styles.buttons}>
            <Button onPress={onDismiss}>Cancel</Button>
            <Button mode="contained" onPress={handleSave}>
              Save Filter
            </Button>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  );
};