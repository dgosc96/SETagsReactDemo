import { Container } from '@mui/material';
import { TagsList } from './components/TagsList';

const App = () => {
  return (
    <Container sx={{ border: 1 }}>
      <h1>StackOverflow Tags Viewer</h1>
      <TagsList />
    </Container>
  );
};

export default App;
