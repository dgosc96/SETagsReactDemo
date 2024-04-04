import { Toolbar } from '@mui/material';
import { PagesizeInputField } from './components/PagesizeInputField';
import { TagsPagination } from './components/TagsPagination';

export const TagsToolbar = () => {
  return (
    <Toolbar
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        mt: '1rem',
        justifyContent: 'space-around',
        gap: '2rem',
        mb: '1rem',
      }}
    >
      <PagesizeInputField />
      <TagsPagination />
    </Toolbar>
  );
};
