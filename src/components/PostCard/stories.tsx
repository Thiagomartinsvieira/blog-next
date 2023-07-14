import { StoryFn, Meta } from '@storybook/react';
import { PostCard, PostCardProps } from '.';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    slug: 'default-slug',
    title: 'default title',
    cover: '/images/typescript.jpeg',
  },
} as Meta;

export const TypeScriptCover: StoryFn<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);

export const JavaScriptCover: StoryFn<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);

JavaScriptCover.args = {
  cover: '/images/javascript.png',
};