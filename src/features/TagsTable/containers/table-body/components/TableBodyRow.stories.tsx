import type { Meta, StoryObj } from '@storybook/react';
import { TableBody } from '@mui/material';

import { TableBodyRow as TableBodyRowComponent } from './TableBodyRow';
import { TagsTable } from '../../../TagsTable';

const meta: Meta<typeof TableBodyRowComponent> = {
  component: TableBodyRowComponent,
  title: 'tags-table/table-body/TableBodyRow',
};

export default meta;
type Story = StoryObj<typeof TableBodyRowComponent>;

export const TableBodyRow: Story = {
  args: {
    tagData: { name: 'tagName', count: 1234, last_activity_date: Date.now() },
  },
  decorators: [
    (Story) => (
      <TagsTable.Template>
        <TableBody>
          <Story />
        </TableBody>
      </TagsTable.Template>
    ),
  ],
  render: (args) => <TableBodyRowComponent {...args} />,
};
