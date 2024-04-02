import type { Meta, StoryObj } from '@storybook/react';

import { TagsToolbar } from './TagsToolbar';

const meta: Meta<typeof TagsToolbar> = {
  component: TagsToolbar,
  title: 'tags-toolbar/TagsToolbar',
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
