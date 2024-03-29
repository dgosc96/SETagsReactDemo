import { Container } from '@mui/material';
import TagsTable from './components/TagsTable/TagsTable';

const App = () => {
  return (
    <Container>
      <h1>StackOverflow Tags Viewer</h1>
      <TagsTable />
    </Container>
  );
};

export default App;
