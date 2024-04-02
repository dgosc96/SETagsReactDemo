import type { Meta, StoryObj } from '@storybook/react';

import { PagesizeInputField } from './PagesizeInputField';

const meta: Meta<typeof PagesizeInputField> = {
  component: PagesizeInputField,
  title: 'tags-toolbar/PagesizeInputField',
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
