import { TableRow } from '@mui/material';

import formatUnixTime from '../../../../../shared/utils/formatUnixTime';
import { SE_tag } from '../../../../../shared/types/SE_api';
import { TableBodyCell } from './TableBodyCell';

type TableBodyRowProps = { tagData: SE_tag };
export const TableBodyRow = ({ tagData }: TableBodyRowProps) => {
  return (
    <TableRow>
      <TableBodyCell type='name' component='th' scope='row'>
        {tagData.name}
      </TableBodyCell>
      <TableBodyCell type='popular' align='center'>
        {tagData.count.toLocaleString()} questions
      </TableBodyCell>
      <TableBodyCell type='activity' align='right'>
        {formatUnixTime(tagData.last_activity_date)}
      </TableBodyCell>
    </TableRow>
  );
};
