import type { Meta, StoryObj } from '@storybook/react';
import { TableError } from './TableError';
import { Table } from '@mui/material';

const meta: Meta<typeof TableError> = {
  component: TableError,
  title: 'tags-table/body/TableError',
};

export default meta;
type Story = StoryObj<typeof TableError>;

export const Primary: Story = {
  args: {
    errorName: 'Error-name',
    errorMessage: 'Error-message',
  },
  render: (args) => (
    <Table size='small'>
      <TableError {...args} />
    </Table>
  ),
};
