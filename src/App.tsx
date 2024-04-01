import { Container, Typography } from '@mui/material';
import TagsTable from './components/TagsTable/TagsTable';

const App = () => {
  return (
    <Container>
      <Typography
        variant='h3'
        sx={{ my: '2rem', textAlign: 'center', color: 'primary.main' }}
      >
        StackOverflow Tags Viewer
      </Typography>
      <TagsTable />
    </Container>
  );
};

export default App;
