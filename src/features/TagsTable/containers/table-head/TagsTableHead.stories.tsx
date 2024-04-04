import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { TagsTableHead as TagsTableHeadComponent } from './TagsTableHead';
import { TagsTable } from '../../TagsTable';

const meta: Meta<typeof TagsTableHeadComponent> = {
  component: TagsTableHeadComponent,
  title: 'tags-table/table-head/TagsTableHead',
};

export default meta;
type Story = StoryObj<typeof TagsTableHeadComponent>;

export const TagsTableHead: Story = {
  decorators: [
    (Story: StoryFn) => (
      <TagsTable.Template>
        <Story />
      </TagsTable.Template>
    ),
  ],
};
