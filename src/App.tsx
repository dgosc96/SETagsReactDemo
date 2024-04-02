import { Container, Paper, Typography } from '@mui/material';
import TagsTable from './features/tags-table/TagsTable';
import { TagsTableToolbar } from './features/tags-toolbar/TagsTableToolbar';

const App = () => {
  return (
    <Container>
      <Typography variant='h4' sx={{ my: '2rem', textAlign: 'center' }}>
        StackOverflow Tags Viewer
      </Typography>
      <Paper
        variant='outlined'
        sx={{
          borderRadius: '10px',
          pt: '1.5rem',
          overflow: 'hidden',
        }}
      >
        <TagsTableToolbar />
        <TagsTable />
      </Paper>
    </Container>
  );
};

export default App;
