import type { Meta, StoryObj } from '@storybook/react';

import { TagsTablePagination } from './TagsTablePagination';

const meta: Meta<typeof TagsTablePagination> = {
  component: TagsTablePagination,
  title: 'tags-toolbar/TagsTablePagination',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
