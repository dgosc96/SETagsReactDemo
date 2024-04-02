import type { Meta, StoryObj } from '@storybook/react';
import TableLoadingSkeleton from './TableLoadingSkeleton';
import { Table } from '@mui/material';

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
