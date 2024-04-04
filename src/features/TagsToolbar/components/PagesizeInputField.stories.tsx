import type { Meta, StoryObj } from '@storybook/react';

import { PagesizeInputField as PagesizeInputFieldComponent } from './PagesizeInputField';

const meta: Meta<typeof PagesizeInputFieldComponent> = {
  component: PagesizeInputFieldComponent,
  title: 'tags-toolbar/PagesizeInputField',
};

export default meta;

type Story = StoryObj<typeof meta>;
export const PagesizeInputField: Story = {};
