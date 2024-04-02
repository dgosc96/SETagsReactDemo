import { Toolbar } from '@mui/material';
import { PagesizeInputField } from './components/PagesizeInputField';
import { TagsTablePagination } from './components/TagsTablePagination';

export const TagsTableToolbar = () => {
  return (
    <Toolbar
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: '2rem',
        mb: '1rem',
      }}
    >
      <PagesizeInputField />
      <TagsTablePagination />
    </Toolbar>
  );
};
