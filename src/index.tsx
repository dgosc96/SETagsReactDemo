import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './shared/mui/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TagsFetchParamsContextProvider } from './context/TagsContext';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { fetchSETags } from './shared/api/fetchSETags';
import { SE_tagsFetchParams } from './shared/types/SE_api';

const tagsQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) => fetchSETags(queryKey[1] as SE_tagsFetchParams),
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TagsFetchParamsContextProvider>
        <QueryClientProvider client={tagsQueryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </TagsFetchParamsContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
