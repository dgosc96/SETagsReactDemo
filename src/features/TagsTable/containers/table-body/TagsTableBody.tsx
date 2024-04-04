import TableBody from '@mui/material/TableBody';
import { TableLoadingSkeleton } from './components/TableLoadingSkeleton';

import { useTagsQuery } from '../../../../shared/queries/useTagsQuery';
import { TableBodyError } from './components/TableBodyError';
import { TableBodyRow } from './components/TableBodyRow';

export const TagsTableBody = () => {
  const { data, status, error } = useTagsQuery();

  if (status === 'pending') {
    return <TableLoadingSkeleton />;
  }
  if (status === 'error') {
    return (
      <TableBodyError errorName={error.name} errorMessage={error.message} />
    );
  }
  return (
    <TableBody>
      {data.items.map((tag) => (
        <TableBodyRow tagData={tag} key={tag.name} />
      ))}
    </TableBody>
  );
};
