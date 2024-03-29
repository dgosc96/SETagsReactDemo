import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import OrderButton from './OrderButton';
import { TagsTableBody } from './TagsTableBody';

export const TagsTable = () => {
  return (
    <>
      <OrderButton />
      <TableContainer>
        <Table size='small' aria-label='tags table'>
          <TableHead>
            <TableRow>
              <TableCell>Tag name</TableCell>
              <TableCell align='right'>Pole count</TableCell>
            </TableRow>
          </TableHead>
          <TagsTableBody />
        </Table>
      </TableContainer>
    </>
  );
};
