import {
  TableHead,
  TableRow,
  TableCell,
  TableCellProps,
  TableSortLabel,
} from '@mui/material';
import { SE_TagsFetchParams } from '../../../types/SE_api';
import { useTagsFetchParamsContext } from '../../../context/TagsContext';

const TagsTableHead = () => {
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
export default TagsTableHead;

type TagTableHeadCellProps = TableCellProps & {
  label: string;
  sortVal: SE_TagsFetchParams['sort'];
};
const TagTableHeadCell = ({
  label,
  sortVal,
  ...cellProps
}: TagTableHeadCellProps) => {
  const {
    order: orderParam,
    sort: sortParam,
    setOrderParam,
    setSortParam,
  } = useTagsFetchParamsContext();

  const handleClick = () => {
    if (sortVal === sortParam) {
      setOrderParam((prev) => {
        if (prev === 'desc') return 'asc';
        return 'desc';
      });
    }
    setSortParam(sortVal);
  };

  return (
    <TableCell {...cellProps}>
      <TableSortLabel
        active={sortVal === sortParam}
        direction={orderParam}
        onClick={handleClick}
        sx={{
          fontSize: 18,
          '&.Mui-active': { color: 'primary.main' },
        }}
      >
        <b>{label}</b>
      </TableSortLabel>
    </TableCell>
  );
};
