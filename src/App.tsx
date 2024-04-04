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
        elevation={1}
        sx={{
          borderRadius: '10px',
          border: '1px solid',
          borderColor: 'divider',
          p: '0.5rem',
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
