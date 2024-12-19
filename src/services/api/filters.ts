import { FilterSetting } from '../../types';
import { delay } from '../utils/delay';

export const saveFilterSetting = async (filter: FilterSetting): Promise<void> => {
  await delay(500);
  console.log('Filter saved:', filter);
};