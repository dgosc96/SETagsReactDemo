import type { Meta, StoryObj } from '@storybook/react';

import { TagsPagination } from './TagsPagination';

const meta: Meta<typeof TagsPagination> = {
  component: TagsPagination,
  title: 'tags-toolbar/TagsPagination',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
