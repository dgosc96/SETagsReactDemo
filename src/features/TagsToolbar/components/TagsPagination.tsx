import { Pagination } from '@mui/material';
import { useTagsFetchParamsContext } from '../../../shared/context/TagsContext';

export const TagsPagination = () => {
  const { page, setPageParam } = useTagsFetchParamsContext();

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPageParam(newPage);
  };

  return (
    <Pagination
      sx={{ gap: 0 }}
      count={26}
      page={page}
      onChange={handleChangePage}
      color='primary'
      variant='outlined'
    />
  );
};
