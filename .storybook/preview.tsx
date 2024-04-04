import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Preview, StoryFn } from '@storybook/react';

import { Container, CssBaseline, Paper } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { TagsFetchParamsContextProvider } from '../src/shared/context/TagsContext';

import { mockTagsFetch } from './mocks/mockTagsFetch';

import theme from '../src/shared/mui/theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const mockqueryClient = new QueryClient();

const withMuiThemeProvider = withThemeFromJSXProvider({
  themes: {
    default: theme,
  },
  defaultTheme: 'default',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
});

const withMockTagsDataProvider = (Story: StoryFn) => (
  <TagsFetchParamsContextProvider fetchFn={mockTagsFetch}>
    <QueryClientProvider client={mockqueryClient}>
      <Story />
    </QueryClientProvider>
  </TagsFetchParamsContextProvider>
);

const containerDecorator = (Story: StoryFn) => (
  <Container>
    <Paper
      elevation={0.5}
      sx={{
        borderRadius: '10px',
        border: '1px solid',
        borderColor: 'divider',
        p: '0.5rem',
        overflow: 'hidden',
      }}
    >
      <Story />
    </Paper>
  </Container>
);

const preview: Preview = {
  decorators: [
    containerDecorator,
    withMuiThemeProvider,
    withMockTagsDataProvider,
  ],
};

export default preview;
