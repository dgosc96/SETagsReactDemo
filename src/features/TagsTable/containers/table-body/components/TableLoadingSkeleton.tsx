import { TableBody, TableRow, TableCell, Skeleton } from '@mui/material';
import { useTagsFetchParamsContext } from '../../../../../shared/context/TagsContext';

const TableLoadingSkeleton = () => {
  const { pagesize } = useTagsFetchParamsContext();

  return (
    <TableBody>
      {[...Array(pagesize)].map((_row, index) => (
        <TableRow key={index}>
          <TableCell component='th' scope='row'>
            <Skeleton variant='text' animation='wave' />
          </TableCell>
          <TableCell align='center'>
            <Skeleton variant='text' animation='wave' />
          </TableCell>
          <TableCell align='right'>
            <Skeleton variant='text' animation='wave' />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
export default TableLoadingSkeleton;
