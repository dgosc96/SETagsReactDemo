import type { Meta, StoryObj } from '@storybook/react';
import TagsTableHead from './TagsTableHead';
import { Table } from '@mui/material';

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
