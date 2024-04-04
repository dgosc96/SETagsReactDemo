import type { Meta, StoryObj } from '@storybook/react';

import { TableBodyError as TableBodyErrorComponent } from './TableBodyError';
import { TagsTable } from '../../../TagsTable';

const meta: Meta<typeof TableBodyErrorComponent> = {
  component: TableBodyErrorComponent,
  title: 'tags-table/table-body/TableBodyError',
};

export default meta;
type Story = StoryObj<typeof TableBodyErrorComponent>;

export const TableBodyError: Story = {
  args: {
    errorName: 'Error-name',
    errorMessage: 'Error-message',
  },
  decorators: [
    (Story) => (
      <TagsTable.Template>
        <Story />
      </TagsTable.Template>
    ),
  ],
  render: (args) => <TableBodyErrorComponent {...args} />,
};
