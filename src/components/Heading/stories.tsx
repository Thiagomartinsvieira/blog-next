import { Story, Meta } from '@storybook/react/';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Uma coisa qualquer',
  },
} as Meta;

export const Template: Story<HeadingProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <Heading {...args} />
  </div>
);