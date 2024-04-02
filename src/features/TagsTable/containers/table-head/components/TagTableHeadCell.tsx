import { TableCellProps, TableCell, TableSortLabel } from '@mui/material';
import { useTagsFetchParamsContext } from '../../../../../shared/context/TagsContext';
import { SE_tagsFetchParams } from '../../../../../shared/types/SE_api';

type TagTableHeadCellProps = TableCellProps & {
  label: string;
  sortVal: SE_tagsFetchParams['sort'];
};
export const TagTableHeadCell = ({
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
    <TableCell
      {...cellProps}
      size='medium'
      sx={{ bgcolor: 'background.paper' }}
    >
      <TableSortLabel
        active={sortVal === sortParam}
        direction={orderParam}
        onClick={handleClick}
        sx={{
          fontSize: 18,
          fontWeight: 700,
          '&.Mui-active': { color: 'primary.main' },
        }}
      >
        {label}
      </TableSortLabel>
    </TableCell>
  );
};
