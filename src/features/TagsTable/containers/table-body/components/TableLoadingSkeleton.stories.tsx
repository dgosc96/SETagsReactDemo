import type { Meta, StoryObj } from '@storybook/react';

import { TableLoadingSkeleton as TableLoadingSkeletonComponent } from './TableLoadingSkeleton';
import { TagsTable } from '../../../TagsTable';

const meta: Meta<typeof TableLoadingSkeletonComponent> = {
  component: TableLoadingSkeletonComponent,
  title: 'tags-table/table-body/TableLoadingSkeleton',
};

export default meta;
type Story = StoryObj<typeof TableLoadingSkeletonComponent>;

export const TableLoadingSkeleton: Story = {
  decorators: [
    (Story) => (
      <TagsTable.Template>
        <Story />
      </TagsTable.Template>
    ),
  ],
  render: () => <TableLoadingSkeletonComponent />,
};
