import type { Meta, StoryObj } from '@storybook/react';
import TagsTable from '../features/tags-table/TagsTable';

const meta: Meta<typeof TagsTable> = {
  component: TagsTable,
};

export default meta;
type Story = StoryObj<typeof TagsTable>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'TagsTable',
  },
};
