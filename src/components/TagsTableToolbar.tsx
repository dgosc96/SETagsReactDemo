import { TablePagination, Toolbar } from '@mui/material';
import { useTagsFetchParamsContext } from '../context/TagsContext';
import { useTagsQuery } from '../queries/useTagsQuery';

export const TagsTableToolbar = () => {
  return (
    <Toolbar sx={{ border: 1 }}>
      <TagsTablePagination />
    </Toolbar>
  );
};

const TagsTablePagination = () => {
  const { page, setPageParam, pagesize, setPagesizeParam } =
    useTagsFetchParamsContext();

  const { data } = useTagsQuery();

  const handleChangePage = (
    _event: React.ChangeEvent<unknown> | null,
    newPage: number
  ) => {
    if (data?.has_more) setPageParam(newPage + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPagesizeParam(parseInt(event.target.value, 10));
    setPageParam(1);
  };
  return (
    <TablePagination
      component='div'
      count={data ? data.total : -1}
      page={page - 1}
      rowsPerPageOptions={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
      showFirstButton
      onPageChange={handleChangePage}
      rowsPerPage={pagesize}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
