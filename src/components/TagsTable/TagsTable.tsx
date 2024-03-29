import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { TagsTableBody } from './components/TagsTableBody';
import TagsTableHead from './components/TagsTableHead';

const TagsTable = () => {
  return (
    <TableContainer>
      <Table size='small' aria-label='tags table'>
        <colgroup>
          <col style={{ width: '40%' }} />
          <col style={{ width: '30%' }} />
          <col style={{ width: '30%' }} />
        </colgroup>
        <TagsTableHead />
        <TagsTableBody />
      </Table>
    </TableContainer>
  );
};

export default TagsTable;
