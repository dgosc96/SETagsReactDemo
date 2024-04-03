import type { Meta, StoryObj } from '@storybook/react';
import { TagTableHeadCell } from './TagTableHeadCell';
import { Table, TableHead, TableRow } from '@mui/material';

const meta: Meta<typeof TagTableHeadCell> = {
  component: TagTableHeadCell,
  title: 'tags-table/head/TagTableHeadCell',
};

export default meta;
type Story = StoryObj<typeof TagTableHeadCell>;

export const Primary: Story = {
  args: {
    label: 'Label',
    sortVal: 'name',
  },
  render: (args) => (
    <Table>
      <col style={{ width: '30%' }} />
      <col style={{ width: '20%' }} />
      <col style={{ width: '40%' }} />
      <TableHead>
        <TableRow>
          <TagTableHeadCell label={args.label} sortVal={args.sortVal} />
        </TableRow>
      </TableHead>
    </Table>
  ),
};
