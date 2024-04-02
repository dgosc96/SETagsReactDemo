import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Preview } from '@storybook/react';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { SE_tagsFetchParams } from '../src/shared/types/SE_api';
import { TagsFetchParamsContextProvider } from '../src/context/TagsContext';

import { mockTagsFetch } from '../src/stories/mockTagsFetch';

import theme from '../src/shared/mui/theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const mockqueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) =>
        mockTagsFetch(queryKey[1] as SE_tagsFetchParams),
    },
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      themes: {
        dark: theme,
      },
      defaultTheme: 'dark',
    }),
    (Story) => (
      <TagsFetchParamsContextProvider>
        <QueryClientProvider client={mockqueryClient}>
          <Story />
        </QueryClientProvider>
      </TagsFetchParamsContextProvider>
    ),
  ],
};

export default preview;
