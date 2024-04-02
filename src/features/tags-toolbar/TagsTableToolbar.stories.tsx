import type { Meta, StoryObj } from '@storybook/react';

import { TagsTableToolbar } from './TagsTableToolbar';

const meta: Meta<typeof TagsTableToolbar> = {
  component: TagsTableToolbar,
  title: 'tags-toolbar/TagsTableToolbar',
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
