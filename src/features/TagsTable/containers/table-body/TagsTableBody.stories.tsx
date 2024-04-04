import type { Meta, StoryObj } from '@storybook/react';

import { TagsTableBody as TagsTableBodyComponent } from './TagsTableBody';
import { TagsTable } from '../../TagsTable';

const meta: Meta<typeof TagsTableBodyComponent> = {
  component: TagsTableBodyComponent,
  title: 'tags-table/table-body/TagsTableBody',
};

export default meta;
type Story = StoryObj<typeof TagsTableBodyComponent>;

export const TagsTableBody: Story = {
  decorators: [
    (Story) => (
      <TagsTable.Template>
        <Story />
      </TagsTable.Template>
    ),
  ],
};
