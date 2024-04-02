import { TableRow, TableCell } from '@mui/material';
import formatUnixTime from '../../../../../shared/utils/formatUnixTime';
import { SE_tag } from '../../../../../shared/types/SE_api';

type TagsTableRowProps = { tagData: SE_tag };
export const TagsTableRow = ({ tagData }: TagsTableRowProps) => {
  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        {tagData.name}
      </TableCell>
      <TableCell align='center'>
        {tagData.count.toLocaleString()} questions
      </TableCell>
      <TableCell align='right'>
        {formatUnixTime(tagData.last_activity_date)}
      </TableCell>
    </TableRow>
  );
};
