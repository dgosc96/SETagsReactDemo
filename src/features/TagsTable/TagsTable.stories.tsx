import type { Meta, StoryObj } from '@storybook/react';
import { TagsTable as TagsTableComponent } from './TagsTable';
//import { Container, Paper } from '@mui/material';

const meta: Meta<typeof TagsTableComponent> = {
  component: TagsTableComponent,
  title: 'tags-table/TagsTable',
};

export default meta;
type Story = StoryObj<typeof TagsTableComponent>;

export const TagsTable: Story = {};
