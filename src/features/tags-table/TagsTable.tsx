import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { TagsTableBody } from './containers/table-body/TagsTableBody';
import TagsTableHead from './containers/table-head/TagsTableHead';
import { TagsTableToolbar } from '../tags-toolbar/TagsTableToolbar';
import { Paper } from '@mui/material';

const TagsTable = () => {
  return (
    <Paper
      variant='outlined'
      sx={{
        borderRadius: '10px',
        pt: '1.5rem',
        overflow: 'hidden',
      }}
    >
      <TagsTableToolbar />
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
    </Paper>
  );
};

export default TagsTable;
