import { TableHead, TableRow } from '@mui/material';
import { TagTableHeadCell } from './components/TagTableHeadCell';

export const TagsTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TagTableHeadCell label='Tag name' sortVal='name' />
        <TagTableHeadCell label='Popularity' sortVal='popular' align='center' />
        <TagTableHeadCell
          label='Last activity'
          sortVal='activity'
          align='right'
        />
      </TableRow>
    </TableHead>
  );
};
