import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { TagsTableBody } from './containers/table-body/TagsTableBody';
import TagsTableHead from './containers/table-head/TagsTableHead';

const TagsTable = () => {
  return (
    <TableContainer
      sx={{
        maxHeight: '70dvh',
        borderTop: 'inherit',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          width: '0.4em',
        },
      }}
    >
      <Table size='small' stickyHeader aria-label='tags table'>
        <colgroup>
          <col style={{ width: '30%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '40%' }} />
        </colgroup>
        <TagsTableHead />
        <TagsTableBody />
      </Table>
    </TableContainer>
  );
};

export default TagsTable;
