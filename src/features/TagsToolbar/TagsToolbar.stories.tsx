import type { Meta, StoryObj } from '@storybook/react';

import { TagsToolbar as TagsToolbarComponent } from './TagsToolbar';

const meta: Meta<typeof TagsToolbarComponent> = {
  component: TagsToolbarComponent,
  title: 'tags-toolbar/TagsToolbar',
};

export default meta;

type Story = StoryObj<typeof meta>;
export const TagsToolbar: Story = {};
