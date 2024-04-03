import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@mui/material';
import { TagsTableHead } from './TagsTableHead';

const meta: Meta<typeof TagsTableHead> = {
  component: TagsTableHead,
  title: 'tags-table/head/TagsTableHead',
};

export default meta;
type Story = StoryObj<typeof TagsTableHead>;

export const Primary: Story = {
  render: () => (
    <Table>
      <TagsTableHead />
    </Table>
  ),
};
