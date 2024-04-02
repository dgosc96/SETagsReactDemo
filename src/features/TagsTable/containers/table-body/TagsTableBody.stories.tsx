import type { Meta, StoryObj } from '@storybook/react';
import { TagsTableBody } from './TagsTableBody';
import { Table, TableBody } from '@mui/material';

const meta: Meta<typeof TagsTableBody> = {
  component: TagsTableBody,
  title: 'tags-table/body/TagsTableBody',
};

export default meta;
type Story = StoryObj<typeof TagsTableBody>;

export const Primary: Story = {
  render: () => (
    <Table>
      <TableBody>
        <TagsTableBody />
      </TableBody>
    </Table>
  ),
};
