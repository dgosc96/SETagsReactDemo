import type { Meta, StoryObj } from '@storybook/react';
import { TagsTable } from './TagsTable';

const meta: Meta<typeof TagsTable> = {
  component: TagsTable,
  title: 'tags-table/TagsTable',
};

export default meta;
type Story = StoryObj<typeof TagsTable>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
