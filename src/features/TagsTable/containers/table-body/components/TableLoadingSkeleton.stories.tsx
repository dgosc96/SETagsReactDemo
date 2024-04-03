import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@mui/material';
import TableLoadingSkeleton from './TableLoadingSkeleton';

const meta: Meta<typeof TableLoadingSkeleton> = {
  component: TableLoadingSkeleton,
  title: 'tags-table/body/TableLoadingSkeleton',
};

export default meta;
type Story = StoryObj<typeof TableLoadingSkeleton>;

export const Primary: Story = {
  render: () => (
    <Table size='small'>
      <TableLoadingSkeleton />
    </Table>
  ),
};
