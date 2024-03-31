import { Container } from '@mui/material';
import TagsTable from './components/TagsTable/TagsTable';
import { TagsTableToolbar } from './components/TagsTableToolbar';

const App = () => {
  return (
    <Container>
      <h1>StackOverflow Tags Viewer</h1>
      <TagsTableToolbar />
      <TagsTable />
    </Container>
  );
};

export default App;
