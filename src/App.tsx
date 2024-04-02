import { Container, Typography } from '@mui/material';
import TagsTable from './features/tags-table/TagsTable';

const App = () => {
  return (
    <Container>
      <Typography variant='h4' sx={{ my: '2rem', textAlign: 'center' }}>
        StackOverflow Tags Viewer
      </Typography>
      <TagsTable />
    </Container>
  );
};

export default App;
