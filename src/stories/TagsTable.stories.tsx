import type { Meta, StoryObj } from '@storybook/react';
import TagsTable from '../features/tags-table/TagsTable';
import { TagsFetchParamsContextProvider } from '../context/TagsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mockTagsFetch } from './mockTagsFetch';
import { SE_tagsFetchParams } from '../shared/types/SE_api';

const mockqueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) =>
        mockTagsFetch(queryKey[1] as SE_tagsFetchParams),
    },
  },
});

const meta: Meta<typeof TagsTable> = {
  component: TagsTable,
  decorators: [
    (Story) => (
      <TagsFetchParamsContextProvider>
        <QueryClientProvider client={mockqueryClient}>
          <Story />
        </QueryClientProvider>
      </TagsFetchParamsContextProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TagsTable>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'TagsTable',
  },
};
