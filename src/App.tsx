import { Container, Paper, Typography } from '@mui/material';

import { TagsToolbar } from './features/TagsToolbar/TagsToolbar';
import { TagsTable } from './features/TagsTable/TagsTable';

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
        <TagsToolbar />
        <TagsTable />
      </Paper>
    </Container>
  );
};

export default App;
