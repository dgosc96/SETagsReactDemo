import type { Meta, StoryObj } from '@storybook/react';
import { TableBodyCell } from './TableBodyCell';
import { TableBody, TableRow } from '@mui/material';
import { TagsTable } from '../../../TagsTable';

type TableBodyCellPropsAndCustomArgs = React.ComponentProps<
  typeof TableBodyCell.Controlled
> & {
  label?: string;
};

const meta: Meta<TableBodyCellPropsAndCustomArgs> = {
  component: TableBodyCell.Controlled,
  title: 'tags-table/table-body/TableBodyCell',
  args: { label: 'Text', isActive: false },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <TagsTable.Template>
        <TableBody>
          <TableRow>
            <Story />
          </TableRow>
        </TableBody>
      </TagsTable.Template>
    ),
  ],
  render: ({ label, ...args }) => (
    <TableBodyCell.Controlled isActive={args.isActive}>
      {label}
    </TableBodyCell.Controlled>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Active: Story = {
  args: { isActive: true },
};
