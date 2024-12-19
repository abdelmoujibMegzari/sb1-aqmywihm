import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import { SocialPost } from '../types';

interface PostCardProps {
  post: SocialPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook': return 'facebook';
      case 'twitter': return 'twitter';
      case 'instagram': return 'instagram';
      default: return 'social-media';
    }
  };

  return (
    <Card style={styles.card}>
      <Card.Title
        title={post.author}
        subtitle={post.sourcePage}
        left={(props) => (
          <IconButton
            {...props}
            icon={getPlatformIcon(post.platform)}
            size={24}
          />
        )}
      />
      <Card.Content>
        <Text>{post.content}</Text>
        {post.mediaUrl && (
          <Image
            source={{ uri: post.mediaUrl }}
            style={styles.media}
          />
        )}
        <Text style={styles.timestamp}>
          {new Date(post.timestamp).toLocaleString()}
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  media: {
    height: 200,
    marginVertical: 8,
    borderRadius: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  },
});