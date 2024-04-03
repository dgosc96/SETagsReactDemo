import { TableCellProps, TableCell } from '@mui/material';
import { useTagsFetchParamsContext } from '../../../../../shared/context/TagsContext';
import { SE_tagsFetchParams } from '../../../../../shared/types/SE_api';

type TableBodyCellControlledProps = TableCellProps & {
  isActive?: boolean;
};
const TableBodyCellControlled = ({
  sx: _sx,
  isActive = false,
  ...props
}: TableBodyCellControlledProps) => {
  return (
    <TableCell
      sx={{ color: isActive ? 'text.primary' : 'text.secondary', ..._sx }}
      {...props}
    />
  );
};

type TableBodyCellProps = TableCellProps & {
  type: SE_tagsFetchParams['sort'];
};
export const TableBodyCell = ({ type, ...props }: TableBodyCellProps) => {
  const { sort: activeSortParam } = useTagsFetchParamsContext();

  const isActive = type === activeSortParam ? true : false;

  return <TableBodyCellControlled isActive={isActive} {...props} />;
};

TableBodyCell.Controlled = TableBodyCellControlled;
