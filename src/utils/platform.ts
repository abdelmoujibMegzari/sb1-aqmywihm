export const getPlatformIcon = (platform: string): string => {
  switch (platform) {
    case 'facebook': return 'facebook';
    case 'twitter': return 'twitter';
    case 'instagram': return 'instagram';
    default: return 'social-media';
  }
};