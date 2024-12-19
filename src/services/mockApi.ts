import { SocialPost, FilterSetting } from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const mockPosts: SocialPost[] = [
  {
    id: '1',
    platform: 'facebook',
    content: 'Latest tech news update!',
    author: 'TechDaily',
    timestamp: '2024-01-20T10:00:00Z',
    sourcePage: 'TechDaily',
    mediaUrl: 'https://example.com/image1.jpg'
  },
  {
    id: '2',
    platform: 'twitter',
    content: 'New product launch coming soon!',
    author: 'ProductHunt',
    timestamp: '2024-01-20T09:30:00Z',
    sourcePage: 'ProductHunt'
  },
  // Add more mock posts here
];

export const fetchPosts = async (filter?: FilterSetting): Promise<SocialPost[]> => {
  await delay(1000); // Simulate network delay
  
  if (!filter) return mockPosts;
  
  return mockPosts.filter(post => {
    if (filter.platforms.length && !filter.platforms.includes(post.platform)) return false;
    if (filter.pages.length && !filter.pages.includes(post.sourcePage)) return false;
    return true;
  });
};

export const saveFilterSetting = async (filter: FilterSetting): Promise<void> => {
  await delay(500);
  console.log('Filter saved:', filter);
};