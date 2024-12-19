import { SocialPost, FilterSetting } from "../../types";
import { delay } from "../utils/delay";

// Mock data with more realistic content
const mockPosts: SocialPost[] = [
  {
    id: "1",
    platform: "facebook",
    content:
      "Exciting news! We just launched our new AI-powered feature that helps developers write better code. Check it out at our website! #TechInnovation #AI #Development",
    author: "TechDaily",
    timestamp: new Date().toISOString(),
    sourcePage: "TechDaily",
    mediaUrl: "https://picsum.photos/400/300",
  },
  {
    id: "2",
    platform: "twitter",
    content:
      "Just discovered this amazing new productivity app that's changing how teams collaborate. Coming to Product Hunt tomorrow! 🚀 #ProductHunt #Innovation",
    author: "ProductHunt",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    sourcePage: "ProductHunt",
  },
  {
    id: "3",
    platform: "instagram",
    content:
      "Behind the scenes at our annual tech conference! Swipe to see more photos from today's amazing presentations. #TechConf2024 #Innovation",
    author: "TechDaily",
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    sourcePage: "TechDaily",
    mediaUrl: "https://picsum.photos/400/400",
  },
];

export const fetchPosts = async (
  filter?: FilterSetting
): Promise<SocialPost[]> => {
  await delay(1000);

  if (!filter) return mockPosts;

  return mockPosts.filter((post) => {
    if (filter.platforms.length && !filter.platforms.includes(post.platform))
      return false;
    if (filter.pages.length && !filter.pages.includes(post.sourcePage))
      return false;
    return true;
  });
};
