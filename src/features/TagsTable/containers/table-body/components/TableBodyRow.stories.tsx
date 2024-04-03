import type { Meta, StoryObj } from '@storybook/react';
import { TableBodyRow } from './TableBodyRow';
import { Table, TableBody } from '@mui/material';

const meta: Meta<typeof TableBodyRow> = {
  component: TableBodyRow,
  title: 'tags-table/body/TableBodyRow',
};

export default meta;
type Story = StoryObj<typeof TableBodyRow>;

export const Primary: Story = {
  args: {
    tagData: { name: 'tagName', count: 1234, last_activity_date: Date.now() },
  },
  render: (args) => (
    <Table size='small'>
      <TableBody>
        <TableBodyRow {...args} />
      </TableBody>
    </Table>
  ),
};
