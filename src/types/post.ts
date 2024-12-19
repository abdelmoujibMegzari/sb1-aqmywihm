export interface SocialPost {
  id: string;
  platform: 'facebook' | 'twitter' | 'instagram';
  content: string;
  author: string;
  timestamp: string;
  sourcePage: string;
  mediaUrl?: string;
}