import { SocialPost, FilterSetting } from '../../types';

export interface PostsAPI {
  fetchPosts: (filter?: FilterSetting) => Promise<SocialPost[]>;
}

export interface FiltersAPI {
  saveFilterSetting: (filter: FilterSetting) => Promise<void>;
}