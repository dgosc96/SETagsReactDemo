import { useTagsQuery } from '../../../queries/useTagsQuery';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Skeleton from '@mui/material/Skeleton';
import { useTagsFetchParamsContext } from '../../../context/TagsContext';
import formatUnixTime from '../../../utils/formatUnixTime';

export const TagsTableBody = () => {
  const tagsQuery = useTagsQuery();

  if (tagsQuery.isPending) {
    return <TagsTableBodySkeleton />;
  }
  if (tagsQuery.isError) {
    return (
      <span>
        Error: {tagsQuery.error.name}: {tagsQuery.error.message}
      </span>
    );
  }
  return (
    <TableBody>
      {tagsQuery.data.map((tag) => (
        <TableRow key={tag.name} sx={{ py: '20px' }}>
          <TableCell component='th' scope='row'>
            {tag.name}
          </TableCell>
          <TableCell align='right'>
            {tag.count.toLocaleString()} questions
          </TableCell>
          <TableCell align='right'>
            {formatUnixTime(tag.last_activity_date)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

const TagsTableBodySkeleton = () => {
  const { pagesize } = useTagsFetchParamsContext();

  return (
    <TableBody>
      {[...Array(pagesize)].map((_row, index) => (
        <TableRow key={index}>
          <TableCell component='th' scope='row'>
            <Skeleton variant='text' animation='wave'></Skeleton>
          </TableCell>
          <TableCell align='center'>
            <Skeleton variant='text' animation='wave'></Skeleton>
          </TableCell>
          <TableCell align='right'>
            <Skeleton variant='text' animation='wave'></Skeleton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
/* <Skeleton variant='rectangular' key={index} width={'100%'}> /* </Skeleton> */
