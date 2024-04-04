import type { Meta, StoryObj } from '@storybook/react';
import { TableHead, TableRow } from '@mui/material';

import { TagTableHeadCell as TagTableHeadCellComponent } from './TagTableHeadCell';
import { TagsTable } from '../../../TagsTable';

const meta: Meta<typeof TagTableHeadCellComponent> = {
  component: TagTableHeadCellComponent,
  title: 'tags-table/table-head/TagTableHeadCell',
};

export default meta;
type Story = StoryObj<typeof TagTableHeadCellComponent>;

export const TagTableHeadCell: Story = {
  argTypes: {
    sortVal: {
      control: 'inline-radio',
      options: ['name', 'popular', 'activity'],
    },
  },
  args: {
    label: 'Label',
    sortVal: 'name',
  },
  decorators: [
    (Story) => (
      <TagsTable.Template>
        <TableHead>
          <TableRow>
            <Story />
          </TableRow>
        </TableHead>
      </TagsTable.Template>
    ),
  ],
  render: (args) => (
    <TagTableHeadCellComponent label={args.label} sortVal={args.sortVal} />
  ),
};
