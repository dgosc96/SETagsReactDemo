import type { Meta, StoryObj } from '@storybook/react';

import { TagsPagination as TagsPaginationComponent } from './TagsPagination';

const meta: Meta<typeof TagsPaginationComponent> = {
  component: TagsPaginationComponent,
  title: 'tags-toolbar/TagsPagination',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TagsPagination: Story = {};
