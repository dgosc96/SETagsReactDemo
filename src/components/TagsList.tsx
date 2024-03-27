import { useTagsQuery } from '../queries/useTagsQuery';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

export const TagsList = () => {
  const { isPending, isError, data, error } = useTagsQuery();
  if (isPending) {
    return <CircularProgress />;
  }
  if (isError) {
    return (
      <span>
        Error: {error.name}: {error.message}
      </span>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table size='small' aria-label='tags table'>
        <TableHead>
          <TableRow>
            <TableCell>Tag name</TableCell>
            <TableCell align='right'>Pole count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((tag) => (
            <TableRow
              key={tag.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {tag.name}
              </TableCell>
              <TableCell align='right'>{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
