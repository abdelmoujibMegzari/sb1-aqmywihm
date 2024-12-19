import React from 'react';
import { Image } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import { SocialPost } from '../../types';
import { getPlatformIcon } from '../../utils/platform';
import { styles } from './PostCard.styles';

interface PostCardProps {
  post: SocialPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
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