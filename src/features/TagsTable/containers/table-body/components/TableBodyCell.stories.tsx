import type { Meta, StoryObj } from '@storybook/react';
import { TableBodyCell } from './TableBodyCell';
import { Table, TableBody, TableRow } from '@mui/material';

const meta = {
  component: TableBodyCell.Controlled,
  title: 'tags-table/body/TableBodyCell',
} satisfies Meta<typeof TableBodyCell.Controlled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    isActive: false,
  },
  render: (args) => (
    <Table size='small'>
      <TableBody>
        <TableRow>
          <TableBodyCell.Controlled isActive={args.isActive}>
            Test
          </TableBodyCell.Controlled>
        </TableRow>
      </TableBody>
    </Table>
  ),
} satisfies Story;
